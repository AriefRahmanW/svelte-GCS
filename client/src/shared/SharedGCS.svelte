<script>
    export let params = {}

    import { onMount } from 'svelte'
    import { push } from 'svelte-spa-router'
    
    import { FIRESTORE } from '../lib/firebase'
    import Compass from '../components/Compass.svelte'
    import Orientation from '../components/Orientation.svelte'
    import Maps from '../components/Maps.svelte'
    import Altitude from '../components/Altitude.svelte'
    import Indicator from '../components/Indicator.svelte'
    import Speed from '../components/Speed.svelte'

    onMount(async () => {

        const user_id = params.user_id

        const link_id = params.link_id

        await
            FIRESTORE.collection("shared_link").doc(user_id).get()
            .then((doc) => {

                // if()
                if(doc.data().link_id){

                    if(link_id === doc.data().link_id){

                    }else{
                        push("/")
                    }

                }
            })
            .catch(() => {
                push("/")
            })
            
    })

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