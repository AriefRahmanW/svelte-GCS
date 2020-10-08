<script>
    import Icon from 'svelte-awesome';
    import { signal, batteryEmpty, thermometerEmpty, circle } from 'svelte-awesome/icons';
    
</script>

<div class="card">

    <!-- <div class="title">
        <span>Indicator</span>
    </div> -->

    <div class="main">
        <div class="icon">
            <Icon data={signal} scale={2} style="color: #595959"/>
            <div class="label">
                Signal
            </div>
        </div>
        <div class="icon">
            <Icon data={batteryEmpty} scale={2} style="color: #595959;"/>
            <div class="label">
                battery
            </div>
        </div>
        <div class="icon">
            <Icon data={thermometerEmpty} scale={2} style="color: #595959;"/>
            <div class="label">
                temp
            </div>
        </div>
        <div class="icon">
            <div class="label">
                SIGNAL <br> LOST
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
        <div class="icon">
            <div class="label">
                OVER <br> HEAT
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
        <div class="icon">
            <div class="label">
                OUT OF <br> RANGE
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
        <div class="icon">
            <div class="label">
                SERIAL <br> CONNECT
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
        <div class="icon">
            <div class="label">
                GPS <br> LOCKED
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
        <div class="icon">
            <div class="label">
                AUTO <br> PILOT
            </div>
            <Icon data={circle} scale={1.5} style="color: #595959"/>
        </div>
    </div>


</div>


<style>

    .card{
        width: 900px;
        background-color: white;
        margin-top: 20px;
        text-align: center;
        border-radius: 10px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

    /* .title span{

        font-family: Asap;
        font-weight: bold;
        font-size: 16px;
        color: #595959;

    }

    .title{
        padding: 10px 0;
        border-bottom: 2px solid #595959;
    } */

    .main{
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main .label{
        font-family: Asap;
        color: #32B999;
        font-size: 11px;
    }


</style>

