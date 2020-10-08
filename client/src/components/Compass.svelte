<script>

    import { onMount } from 'svelte'
    // import { MagnetoToHeading } from '../lib/converter'

    // export let socket

    let heading = 0

    onMount(() => {

        document.getElementById("jarum").style.transform = 'rotate(0deg)'
        
    })
    
    // socket.on("payload", data => {
        
    //     let payload = JSON.parse(data)
        
    //     heading = MagnetoToHeading(payload.mag_X, payload.mag_Y)

    //     document.getElementById("bg").style.transform = `rotate(${heading}deg)`

    // })


</script>

<div class="card">

    <div class="title">
        <span>Compass</span>
    </div>

    <div class="img">
        <img src="assets/compass/compass.png" alt="" style="width: 150px" id="bg">
        <img src="assets/compass/jarum.png" alt=""  style="width: 150px" id="jarum">
    </div>

    <div class="data">
        <span>Heading</span>
        <br>
        <span>{heading}</span><sup>o</sup>
    </div>

</div>


<style>

    .card{
        width: 200px;
        background-color: white;
        text-align: center;
        border-radius: 10px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

    .img {
        position: relative;
        padding: 10px 0;
    }

    .img img:first-child{
        position: absolute;
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

    .data{
        padding-bottom: 10px;
    }

    .data span {
        font-family: Asap;
        font-size: 12px;
        color: #595959;
    }

    .data span:first-child{
        color: #32B999;
    }

</style>

