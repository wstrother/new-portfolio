<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { fade } from "svelte/transition";
    import TwitchBot from "$lib/copy/projects/twitch-bot.svelte";
    import OtherProjects from '$lib/copy/projects/other-projects.svelte';

    let tabSet = 0;

</script>

<div class="splash-container" in:fade>
    <div class="splash-quote mb-5"><h1>project portfolio</h1></div>
</div>

<div class="page-main">
    <TabGroup
		regionList='variant-glass-tertiary rounded'
		regionPanel='bg-tertiary-900 rounded p-1 min-h-[50vh] m-0'
		spacing='space'
	>
		<Tab bind:group={tabSet} name="tab1" value={0}>
			TwitchBot
		</Tab>
	
		<Tab bind:group={tabSet} name="tab2" value={1}>
			Odds and Ends
		</Tab>
		
		<Tab bind:group={tabSet} name="tab3" value={2}>
			Visual Art
		</Tab>
			
		<svelte:fragment slot="panel">
			{#key tabSet}
				<div in:fade>
					{#if tabSet === 0}
						<TwitchBot />
					{:else if tabSet === 1}
                        <OtherProjects />
					{:else if tabSet === 2}
                        other stuff
					{/if}
				</div>
			{/key}
		</svelte:fragment>
	</TabGroup>
</div>
