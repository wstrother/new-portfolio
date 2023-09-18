<script>
	import { Tab } from '@skeletonlabs/skeleton'
	import TabWrapper from '$lib/components/tab-wrapper.svelte'
	import SvelteMarkdown from 'svelte-markdown'
	import AboutMe from '$lib/md/about-me.md?raw'
	import AboutSite from '$lib/md/about-site.md?raw'
	import Contact from '$lib/md/contact-info.md?raw'

	import { fade } from 'svelte/transition';

	let tabSet = 0;
</script>

<div class="quote-container @container" in:fade>
    <div class="quote">i already am eating from the trashcan all the time...
        <div class="quote-source">-Slavoj Zizek</div>
    </div>
</div>

<div class='page-main'>
	<TabWrapper listBG="variant-glass-primary" panelBG="bg-primary-900">
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
			{#key tabSet}
				<div in:fade>
					{#if tabSet === 0}
						<SvelteMarkdown source={AboutMe} />
					{:else if tabSet === 1}
						<SvelteMarkdown source={AboutSite} />
					{:else if tabSet === 2}
						<SvelteMarkdown source={Contact} />
					{/if}
				</div>
			{/key}
		</svelte:fragment>
	</TabWrapper>
</div>

