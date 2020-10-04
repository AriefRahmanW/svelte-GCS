<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
</svelte:head>

<script>

    import Textfield from '@smui/textfield'
    import HelperText from '@smui/textfield/helper-text/index'
    import Button, { Label } from '@smui/button'
    import Snackbar from '@smui/snackbar'
    import { push } from 'svelte-spa-router'

    import { AUTH } from '../lib/firebase'
    import { user } from '../stores'

    let email = "",
        
        password = "",

        errorMessage

    let snackbar

    function signin(){

        AUTH
            .signInWithEmailAndPassword(email, password)
            .then(cred => {
                $user = cred.user.uid
                console.log($user)
                push("/central/GCS")
            })
            .catch(err => {
                errorMessage = err.code
                snackbar.open()
            })

    }

</script>

<div class="login-container">

    <div class="container">

        <p>Welcome !</p>

        <br>

        <div>

            <Textfield 
                class="shaped-outlined" 
                variant="outlined" 
                bind:value={email} label="Username" 
                input$aria-controls="helper-text-shaped-outlined-a" 
                input$aria-describedby="helper-text-shaped-outlined-a" />
            
            <HelperText 
                id="helper-text-shaped-outlined-a"
                >Helper Text
            </HelperText>
    
            <br>
    
            <Textfield 
                class="shaped-outlined" 
                variant="outlined" 
                type="password"
                bind:value={password} label="Password"
                input$aria-controls="helper-text-shaped-outlined-a" 
                input$aria-describedby="helper-text-shaped-outlined-b" />
            
            <HelperText 
                id="helper-text-shaped-outlined-b"
                >Helper Text
            </HelperText>

            
        </div>

        <br>
        
        <Button
            variant="unelevated" 
            class="button-shaped-round"
            size="large"
            style="width: 100%"
            on:click={signin}>
            <Label>Sign In</Label>
        </Button>

    </div>

</div>

<Snackbar bind:this={snackbar}>
    <Label>{errorMessage}</Label>
</Snackbar>


<style> 

    .login-container{ 
        max-width: 500px;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .login-container .container {
        background-color: white;
        padding: 20px 30px;
        text-align: center;
        border-radius: 20px;
        -webkit-box-shadow: 0 8px 6px -6px gray;
	    -moz-box-shadow: 0 8px 6px -6px gray;
	    box-shadow: 0 8px 6px -6px gray;
    }

    .login-container .container p {
        text-align: center;
        font-family: Roboto;
        font-weight: bold;
        font-size: 20px;
        color: rgb(68, 68, 68);
        letter-spacing: 3px;
    }


</style>
