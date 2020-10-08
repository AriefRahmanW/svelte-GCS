<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Asap&display=swap" rel="stylesheet">
</svelte:head>

<script>

    // import { getRoll, map, getPitch } from '../lib/converter'

    // export let socket
    
    // socket.on("payload", data => {
        
    //     let payload = JSON.parse(data)

    //     const roll = getRoll(payload.accel_X, payload.accel_Z)

    //     const pitch = getPitch(payload.accel_X, payload.accel_Y, payload.accel_Z)

    //     console.log(pitch)

    //     if(roll >= 90 && roll <= 270){
            
    //         const rollToPX = map(roll, 270, 90, 75, -75)
    
    //         // console.log(rollToPX)
    
    //         document.getElementById("circle").style.transform = `translateY(${rollToPX}px)`
    //     }
    //     else{

    //         document.getElementById("circle").style.transform = `translateY(0px)`
    //     }


    // })


</script>

<div class="card">

    <div class="title">
        <span>Orientation</span>
    </div>

    <div class="img">
        <img src="assets/orientation/target.png" alt="" style="width: 150px" id="target">
        <img src="assets/orientation/circle.png" alt=""  style="width: 150px" id="circle">
    </div>


</div>


<style>

    .card{
        width: 200px;
        background-color: white;
        margin-bottom: 20px;
        text-align: center;
        border-radius: 10px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

    .title span{

        font-family: Asap;
        font-weight: bold;
        font-size: 16px;
        color: #595959;

    }

    .title{
        padding: 10px 0;
        border-bottom: 2px solid #595959;
    }

    .img {
        position: relative;
        padding: 10px 0;
    }

    .img img:first-child{
        position: absolute;
    }

    #circle{
        transform: translate(0px,0px)
    }

</style>

