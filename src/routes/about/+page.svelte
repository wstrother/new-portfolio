<script>
	import { Tab, TabAnchor } from '@skeletonlabs/skeleton'
	import TabWrapper from '$lib/components/tab-wrapper.svelte'
	import SvelteMarkdown from 'svelte-markdown'

	import AboutMe from '$lib/md/about-me.md?raw'
	import AboutSite from '$lib/md/about-site.md?raw'
	import Contact from '$lib/md/contact-info.md?raw'

	import { fade } from 'svelte/transition'

	let tabSet = 0

	let tabs = [
		["About Wyatt", AboutMe],
		["About This Site", AboutSite],
		["Contact Info", Contact]
	]

	const getMD = () => {

	}
</script>

<div class="quote-container @container" in:fade>
    <div class="quote">i already am eating from the trashcan all the time...
        <div class="quote-source">-Slavoj Zizek</div>
    </div>
</div>

<div class='page-main'>
	<TabWrapper listBG="variant-glass-primary" panelBG="bg-primary-900">
		{#each tabs as [name, _], index}
			<Tab bind:group={tabSet} {name} value={index}>
				<span>{name}</span>
			</Tab>
		{/each}
		<TabAnchor href="https://wstrother.github.io/devblog/">
			<span>Dev Blog</span>
		</TabAnchor>

			
		<svelte:fragment slot="panel">
			{#key tabSet}
				<div in:fade>
					<SvelteMarkdown source={tabs[tabSet][1]} />
				</div>
			{/key}
		</svelte:fragment>
	</TabWrapper>
</div>

