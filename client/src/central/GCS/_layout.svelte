<script>
    import io from 'socket.io-client'
    import { push } from 'svelte-spa-router'

    import Serial from './Serial.svelte'
    import GCS from './GCS.svelte'
    import WayPoint from './WayPoint.svelte'
    import Calibration from './Calibration.svelte'
    import Info from '../../components/Info.svelte'
    import { AUTH } from '../../lib/firebase'

    export let page = "SET"

    let errorMessage

    const socket = io("http://localhost:3000")

    socket.on("error", data => {
        errorMessage = data
    })

    socket.on("closed", data => {
        errorMessage = data
    })

    socket.on("payload", data => {
        errorMessage = null
    })

    function logout(){

        AUTH
            .signOut()
            .then(() => {
                push("/central/sign-in")
            })
            .catch(err => {
                console.log(err)
            })

    }

</script>

<div class="container">

    <div class="sidebar">
        
        <div class="btn-container">
            <div>
                <button on:click={() => page = "SET"}>
                    Serial
                </button>
            </div>
            
            <div>
                <button on:click={() => page = "GCS"}>
                    GCS
                </button>
            </div>

            <div>
                <button on:click={() => page = "WP"}>
                    WayPoint
                </button>
            </div>

            <div>
                <button on:click={() => page = "Cal"}>
                    Calibration
                </button>
            </div>

            <div>
                <button on:click={logout}>
                    Logout
                </button>
            </div>

        </div>

    </div>

    <div class="main">

        {#if errorMessage}

            <Info info={errorMessage}/>

        {/if}


        {#if page === "SET"}

            <Serial/>

        {:else if page == "GCS"}

            <GCS/>

        {:else if page == "WP"}

            <WayPoint/>

        {:else if page == "Cal"}

            <Calibration/>

        {/if}


    </div>

</div>

<style>

    .sidebar {
        /* width: 50px; */
        /* min-height: 100vh;
        padding: 10px; */
        padding: 10px 0;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        position: fixed;
        background-color: white;
        justify-content: space-evenly;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .btn-container{
        text-align: center;
    }

    .btn-container div{
        margin: 0 16px;
        font-size: 25px;
        color: #555;
        cursor: pointer;
        display: inline-block;
    }

    .btn-container div button {
        width: 100%;
        padding: 5px 10px;
        border-radius: 3px;
        margin: 0;
        border: 0;
        font-family: Roboto;
        font-size: 14pt;
        font-weight: bold;
        background-color: transparent;
        color: #7e7e7e;
    }

    .btn-container div button:hover{
        cursor: pointer;
        color: #32B999;
        border-bottom: 1px solid #32B999;
        transition: .5s ease;
    }

    .btn-container div button:active{
        color: #32B999;
        border-bottom: 1px solid #32B999;
    }


</style>