<script>
	
	import Loading from './public/Loading.svelte'
	import SignIn from './central/SignIn.svelte'
	import SignUp from './central/SignUp.svelte'
	import GCS from './central/GCS/_layout.svelte'
	import SharedGCS from './shared/SharedGCS.svelte'
	import { AUTH } from './lib/firebase'
	
	import Router, { push, wrap } from 'svelte-spa-router'
	import { onMount } from 'svelte'
	import { user } from './stores'
	
	let loading = false

	onMount(async() => {

		AUTH.onAuthStateChanged(data => {
			if(data){
				$user = data.uid
			}
			else{
				$user = ""
			}
		})

	})

	const routes = {

		"/central/sign-in": wrap(SignIn, checkAuthentication),
		"/central/sign-up": SignUp,
		"/central/GCS": wrap(GCS, checkAuthentication),

		"/shared/:user_id/:link_id": SharedGCS

	}

	function checkAuthentication(){
		if($user){
			return push("/central/GCS")
		}
		else{
			return push("/central/sign-in")
		}
	}

	// function conditionsFailed(event){
	// 	const { reason } = event.detail.userData

	// 	console.log(event.detail.userData)

	// 	switch(reason){
	// 		case "unauthenticated":
	// 			return push('/central/sign-in')
	// 		case "authenticated":
	// 			return push('/central/GCS')
	// 	}
	// }

</script>

{#if loading}

	<Loading/>

{:else}

	<Router { routes }/>

{/if}


