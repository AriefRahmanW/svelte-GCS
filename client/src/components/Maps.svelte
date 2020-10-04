<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>
</svelte:head>

<script>
    
    import { createMap, showAllMarker, createMarker} from '../lib/leaflet'
    import { onMount } from 'svelte'
    import { wp } from '../stores'
    
    export let width, height, type

    onMount(() => {

        if(type === "WP"){

            showAllMarker()
            
            // for(let i = 0; i < $wp.length; i++){
            //     createMarker($wp[i], i)
            // }
        }
        else if(type == "GCS"){
            showAllMarker()
        }


        // if(data != undefined){
        //     for(let i = 0; i < data.length; i++){
        //         createMarker(data[i], i.toString())
        //     }

        // }

        // createMarker([-7.78301, 110.3573347], "<b>Hello world!</b><br />I am a popup.")
        // createMarker([-7.75301, 110.3573347], "<b>Hello world!</b><br />I am a popup.")
        // createMarker([51.508, -0.11], "<button>SABOTASE</button>")
        
    })
    
</script>

<div class="card">
    
    <div class="title">
        <span>Maps</span>
    </div>
    
    <div class="map" use:createMap style="height: {height}px; width: {width}px"></div>

</div>


<style>

    .card{
        background-color: white;
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

</style>