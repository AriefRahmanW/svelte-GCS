<script>
    export let params = {}

    import { onMount } from 'svelte'
    import { push } from 'svelte-spa-router'
    import io from 'socket.io-client'
    
    import { FIRESTORE } from '../lib/firebase'
    import { MAIN_URL } from '../lib/url'
    import Compass from '../components/Compass.svelte'
    import Orientation from '../components/Orientation.svelte'
    import Maps from '../components/Maps.svelte'
    import Altitude from '../components/Altitude.svelte'
    import Indicator from '../components/Indicator.svelte'
    import Speed from '../components/Speed.svelte'

    let socket, user_id, link_id

    onMount(async () => {

        user_id = params.user_id

        link_id = params.link_id

        await
            FIRESTORE.collection("shared_link").doc(user_id).get()
            .then((doc) => {

                // if()
                if(doc.data().link_id){

                    if(link_id === doc.data().link_id){

                        socketActivation()

                    }else{
                        push("/")
                    }

                }
            })
            .catch(() => {
                push("/")
            })
            
    })

    function socketActivation(){

        socket = io(MAIN_URL)

        socket.on("payload/" + user_id, (data) => {

        })
    }

</script>

<div class="content">

    <div class="left-content">
        <Compass />
        <Speed/>
    </div>

    <div class="mid-content">
        <Maps width={900} height={500} type={"GCS"}/>
        <Indicator/>
    </div>

    <div class="right-content">
        <Orientation />
        <Altitude />
    </div>
    
</div>

<style>

    .content{
        background-color: #EFEFEF;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

</style>