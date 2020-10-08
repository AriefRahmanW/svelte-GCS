<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
</svelte:head>

<script>

    import Select, {Option} from '@smui/select';
    import Button, { Label } from '@smui/button'
    import Snackbar from '@smui/snackbar'

    import axios from 'axios'
    import { push } from 'svelte-spa-router'
    import { onMount } from 'svelte'

    let snackbar

    let comValue,

        baudRateValue,

        errorMessage

    let serialList = [];

    const baudRateList = [4800, 9600, 115200]

    onMount(async() => {

        const { data } = await axios.get("/api/central/serial")

        serialList = data.value


    })

    async function connectSerial() {

        if(!comValue || !baudRateValue){

            return

        }

        await axios.post("/api/central/serial", {

            COM: comValue,

            baudRate: parseInt(baudRateValue)

        })
        .then(() => {

            push("/central/GCS")

        })

        .catch(() => {

            snackbar.open()

        })
    }

</script>

<div class="custom-container">

    <div class="container">

        <p>Setting</p>

        <div>

            <Select bind:value={comValue} label="com" style="width: 200px">
                <Option value=""></Option>
                {#each serialList as serial}
                  <Option value={serial.path} selected={comValue === serial.path}>{serial.path}</Option>
                {/each}
            </Select>

            <Select bind:value={baudRateValue} label="baudRate" style="width: 200px">
                <Option value=""></Option>
                {#each baudRateList as baudRate}
                  <Option value={baudRate} selected={comValue === baudRate}>{baudRate}</Option>
                {/each}
            </Select>


            
        </div>

        <br>
        
        <Button
            variant="unelevated" 
            class="button-shaped-round"
            size="large"
            style="width: 100%"
            on:click={connectSerial}
            disabled={!comValue || !baudRateValue}>
            <Label>Connect</Label>
        </Button>

    </div>

</div>

<Snackbar bind:this={snackbar}>
    <Label>{errorMessage}</Label>
</Snackbar>


<style> 

    .custom-container{ 
        max-width: 500px;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .custom-container .container {
        background-color: white;
        padding: 20px 30px;
        text-align: center;
        border-radius: 20px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

    .custom-container .container p {
        text-align: center;
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        color: rgb(68, 68, 68);
        letter-spacing: 3px;
    }


</style>
