<script>
	import { page } from '$app/stores';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from "svelte/transition";

    let tabSet

	let tabs=[
		['Streaming App', 'streaming-app'],
		['Twitch Bot', 'twitch-bot'],
		['Visual Art', 'visual-art'],
	]

	onMount(() => {
		tabSet = $page.url.pathname.replace(/.*\/([^/]+)$/, "$1")
		if (tabSet === 'portfolio') tabSet = tabs[0][1]
	})


</script>

<div class="splash-container" in:fade>
    <div class="splash-quote mb-5"><h1>project portfolio</h1></div>
</div>

<div class="page-main" id="page-main">
    <TabGroup
		regionList='variant-glass-tertiary rounded items-end gap-4 h-[3.5rem] overflow-y-hidden'
		active="text-tertiary-500" 
		
		hover="hover:text-tertiary-500 hover:variant-glass-tertiary"

		regionPanel='bg-tertiary-900 rounded p-1 min-h-[50vh] m-0'
		spacing='space'
	>
		{#each tabs as [name, slug]}
			<TabAnchor
				href={`/portfolio/${slug}`}
				selected={tabSet === slug}
				on:click={() => tabSet=slug}
			>
				<span class:h3={tabSet === slug} class="h-[100%] transition-all duration-[300ms] ease-in-out">{name}</span>
			</TabAnchor>
		{/each}
	</TabGroup>

	<slot />
</div>
