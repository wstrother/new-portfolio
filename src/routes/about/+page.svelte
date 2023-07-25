<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import AboutMe from '$lib/copy/about-me.svelte';
	import AboutSite from '$lib/copy/about-site.svelte';
	import Contact from '$lib/copy/contact.svelte';

	let tabSet = 0;
</script>

<div class="splash-container">
	<div class="splash-quote">
		<h1>
			i already am eating from the trashcan all the time...
		</h1>
		
		<div>-Slavoj Zizek</div>
	</div>
</div>

<div class='page-main'>
	<TabGroup>
		<Tab bind:group={tabSet} name="tab1" value={0}>
			About Wyatt
		</Tab>
	
		<Tab bind:group={tabSet} name="tab2" value={1}>
			About This Site
		</Tab>
		
		<Tab bind:group={tabSet} name="tab3" value={2}>
			Contact Info
		</Tab>
			
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<AboutMe />
			{:else if tabSet === 1}
				<AboutSite />
			{:else if tabSet === 2}
				<Contact />
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>


