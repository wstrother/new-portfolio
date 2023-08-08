<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { fade } from "svelte/transition";
    import TwitchBot from "$lib/components/projects/twitch-bot.svelte";
    import OtherProjects from '$lib/components/projects/other-projects.svelte';
	import VisualArt from '../../lib/components/visual-art.svelte';
	import StreamingApp from '../../lib/components/projects/streaming-app.svelte';

    let tabSet = 0;

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
		<Tab bind:group={tabSet} name="tab0" value={0}>
			Streaming App
		</Tab>

		<Tab bind:group={tabSet} name="tab1" value={1}>
			Twitch Bot
		</Tab>
	
		<Tab bind:group={tabSet} name="tab2" value={2}>
			Odds and Ends
		</Tab>
		
		<Tab bind:group={tabSet} name="tab3" value={3}>
			Visual Art
		</Tab>
			
		<svelte:fragment slot="panel">
			{#key tabSet}
				<div in:fade>
					{#if tabSet === 0}
						<StreamingApp />
					{:else if tabSet === 1}
						<TwitchBot />
					{:else if tabSet === 2}
						<OtherProjects />
					{:else if tabSet === 3}
						<VisualArt />
					{/if}
				</div>
			{/key}
		</svelte:fragment>
	</TabGroup>
</div>
