<script>
    import Maps from '../../components/Maps.svelte'
    import Button, { Label } from '@smui/button'
    import { onMount } from 'svelte'
    import { createMarker, getLocations, clearAllMarkers  } from '../../lib/leaflet'
    import { wp } from '../../stores'

    let counter = 0

    function createMark(){

        createMarker([-7.78301, 110.3573347], counter++)

    }

    function save(){

        $wp = getLocations()

    }

    function clear(){
        clearAllMarkers()
    }
</script>

<div class="content">

    <div class="left-content">
        <Maps width={900} height={500} type={"WP"}/>
        
        <div class="setting">
            <Button
                variant="unelevated" 
                color="secondary"
                on:click={createMark}>
                <Label>Add Point</Label>
            </Button>

            <Button
                variant="unelevated" 
                color="secondary"
                on:click={save}>
                <Label>Save</Label>
            </Button>

            <Button
                variant="unelevated" 
                color="secondary"
                on:click={clear}>
                <Label>Clear</Label>
            </Button>
        </div>
    </div>
    
</div>

<style>

    .content{
        background-color: #EFEFEF;
        margin-left: 76px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

    .setting{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: white;
        border-radius: 10px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

</style>