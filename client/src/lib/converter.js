function map(x, in_min, in_max, out_min, out_max){

    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  
}
  
function MagnetoToHeading(x, y){
  
    let heading = parseInt(Math.atan2(parseFloat(x), parseFloat(y)) * 180 / Math.PI)
  
    if(heading < 0){
  
      heading = heading.toString()
  
      heading = heading.replace("-", "")
  
      heading = parseFloat(heading)
  
      heading = map(heading, 0, 180, 360, 180)
  
    }
  
    return heading
  
}

function getRoll(x, z){

    let roll = parseInt(Math.atan2(parseFloat(x), parseFloat(z)) * 180 / Math.PI)
  
    if(roll < 0){
  
      roll = roll.toString()
  
      roll = roll.replace("-", "")
  
      roll = parseFloat(roll)

      roll = map(roll, 0, 180, 360, 180)
  
    }
  
    return roll

}

function getPitch(x, y, z){

    x = parseFloat(x)
    y = parseFloat(y)
    z = parseFloat(z)

    let pitch = Math.atan2(-x, Math.sqrt(y * y + z * z)) * (180 / Math.PI)

    // if(pitch < 0){
  
    //     pitch = pitch.toString()
    
    //     pitch = pitch.replace("-", "")
    
    //     pitch = parseFloat(pitch)
  
    //     pitch = map(pitch, 0, 180, 360, 180)
    
    //   }
    
      return pitch

}

module.exports = {

    map,

    MagnetoToHeading,

    getRoll,

    getPitch

}