<script>
    import { Circle2 } from 'svelte-loading-spinners'
</script>

<div class="loading-container">
    <Circle2 size="60" color="#FF3E00" unit="px"></Circle2>
</div>


<style>
    .loading-container{ 
        max-width: 500px;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
</style>