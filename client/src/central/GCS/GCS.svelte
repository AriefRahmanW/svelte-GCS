<svelte:head>
    <title>GCS</title>
</svelte:head>

<script>
    import { onMount } from 'svelte'

    import Compass from '../../components/Compass.svelte'
    import Orientation from '../../components/Orientation.svelte'
    import Maps from '../../components/Maps.svelte'
    import Altitude from '../../components/Altitude.svelte'
    import Indicator from '../../components/Indicator.svelte'
    import Speed from '../../components/Speed.svelte'

    onMount(() => {
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