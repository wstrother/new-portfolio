<script>
	import { page } from '$app/stores';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fade } from "svelte/transition";

    let tabSet

	let tabs=[
		['Streaming App', 'streaming-app'],
		['Twitch Bot', 'twitch-bot'],
		['Odds and Ends', 'other-projects'],
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
		regionList='variant-glass-tertiary rounded'
		regionPanel='bg-tertiary-900 rounded p-1 min-h-[50vh] m-0'
		spacing='space'
	>
		{#each tabs as [name, slug]}
			<TabAnchor
				href={`/portfolio/${slug}`}
				selected={tabSet === slug}
				on:click={() => tabSet=slug}
			>
				{name}
			</TabAnchor>
		{/each}
	</TabGroup>

	<slot />
</div>
