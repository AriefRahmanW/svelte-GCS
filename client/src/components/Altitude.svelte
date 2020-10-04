<script>


</script>

<div class="card">

    <div class="title">
        <span>Altitude</span>
    </div>

    <div class="img">
        <img src="assets/altitude/bg-alti.png" alt="" id="bg-alti">
        <img src="assets/altitude/bar-alti.png" alt="" id="bar-alti">
        <img src="assets/altitude/num-alti.png" alt="" id="num-alti">
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
    .img img{
        width: 78px;
    }

    .img img:first-child, .img img:nth-child(2){
        position: absolute;
    }

    #num-alti{
        transform: translateY(0px);
    }

    #bar-alti{
        transform: translateY(20px);
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


</style>

