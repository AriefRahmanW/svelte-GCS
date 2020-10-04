<script>
    import { scale } from 'svelte/transition'

    export let info = ""
</script>

<div class="container">
    <div class="content" transition:scale>
        <div class="info">

            <div class="title">
                Error
            </div>
            <span>{info}</span>

        </div>
    </div>
</div>

<style>
    .container{
        position: fixed;
        z-index: 99999;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .content{
        width: 300px;
        height: 200px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 15px 5px rgb(175, 175, 175);

    }

    .info span{
        font-family: Roboto;
        font-size: 18pt;
        font-weight: bold;
        color: tomato;
    }
    .title{
        font-family: Roboto;
        font-size: 14pt;
        font-weight: bold;
        color: rgb(68, 68, 68);
    }
    
</style>