<script>
	import '../app.postcss'
	import '../readme.postcss'

	import { AppBar } from '@skeletonlabs/skeleton'
	import { Modal } from '@skeletonlabs/skeleton'
	import { initializeStores } from '@skeletonlabs/skeleton'
	initializeStores()

	import github from '$lib/images/github.png'
	import back from '$lib/images/back.png'
	import { page } from '$app/stores'
	import { slide } from 'svelte/transition'

	let backButton = false
	$: {
		backButton = $page.url.pathname !== '/'
	}

</script>

<AppBar 
	border='border-b border-solid border-primary-800'
	shadow='shadow'
	background='variant-glass-primary'
	padding='py-2 pl-8 pr-8'
	slotLead="w-4 h-4 mx-0 aspect-square hover:scale-[115%] transition"
	slotTrail="hover:scale-[115%] transition"
>

	<svelte:fragment slot="lead">
		{#if backButton}
			<a href='/' transition:slide><img src={back} alt='go back'></a>
		{:else}
			&nbsp;
		{/if}
	</svelte:fragment>
	<span class="ml-5 mr-3 lg:h3 md:h5 font-thin tracking-wider">Wyatt Strother</span>

	<span class="tracking-wide text-xs md:h5">Web Design / Full Stack Web Dev</span>


	<svelte:fragment slot="trail">
		<a href='https://github.com/wstrother' target='_blank'>
			<img src={github} alt='Github Logo'/>
		</a>
	</svelte:fragment>
</AppBar>

<slot />

<Modal />
