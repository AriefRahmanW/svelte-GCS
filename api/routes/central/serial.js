const router = require('express').Router()

const SerialPort = require('serialport');

const Readline = require('@serialport/parser-readline');

const { emit } = require('../../../lib/socket')

let serial, parser

router.get("/", (req, res) => {

    SerialPort

        .list()

        .then( (value) => {

            return res.status(200).json( { value } )

        })

        .catch( (reason) => {

            return res.status(500).json( { status: false, message: reason } )

        })


})

router.post("/", (req, res) => {

    const { COM, baudRate } = req.body

    serial = new SerialPort(COM, { baudRate, autoOpen: false }, (error) => {

        return res.status(400).json( { status: false, message: error } )

    })

    parser = serial.pipe( new Readline( { delimiter: "\n" } ) )

    open()

    close()

    parser.on('data', data => {
    
        console.log(data)

        emit("payload" ,data)
  
    });

    return res.status(200).json( { status: true, message: "port available" } )

})

function open(){

    serial.open((error) => {

        setTimeout(open, 10000)

    })

    console.log("serial disconnected")

    emit("error", "serial disconnected")

}

function close(){

    serial.addListener("close", () => {

        console.log("closed")

        emit("closed", "serial closed")

        open()

    })

}


//   /*
//     1. latitude
//     2. longtitude
//     3. satelite
//     4. accel_X
//     5. accel_Y
//     6. accel_Z
//     7. gyro_X
//     8. gyro_Y
//     9. gyro_Z
//     10. mag_X
//     11. mag_Y
//     12. mag_Z
//     13. temp
//     14. pressure
//     15. altimeter
//   */

module.exports = router