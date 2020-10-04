<svelte:head>
    <title>GCS</title>
</svelte:head>

<script>
    import io from 'socket.io-client'
    import { onMount } from 'svelte'

    import Compass from '../../components/Compass.svelte'
    import Orientation from '../../components/Orientation.svelte'
    import Maps from '../../components/Maps.svelte'
    import Altitude from '../../components/Altitude.svelte'
    import Indicator from '../../components/Indicator.svelte'
    import Speed from '../../components/Speed.svelte'

    import { fade } from 'svelte/transition'

    const socket = io("http://localhost:3000")

    onMount(() => {
    })


</script>

<div class="content" transition:fade>

    <div class="left-content">
        <Compass />
        <Speed/>
    </div>

    <div class="mid-content">
        <Maps width={900} height={500} type={"GCS"}/>
        <Indicator/>
    </div>

    <div class="right-content">
        <Orientation {socket} />
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