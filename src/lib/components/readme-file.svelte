<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

    export let url

    let readmePromise, loaded = false
    const getReadme = async () => {
        const res = await fetch(url).then(res=>res.text())
        loaded = true
        return res
    }
    onMount(() => {
        readmePromise = getReadme()
    })
</script>

<Accordion>

    <AccordionItem regionControl="bg-primary-500" hover="bg-primary-500" disabled={!loaded}>

        <svelte:fragment slot="summary">
            <div class="readme-header h4">
                README.md
                {#await readmePromise}
                    <span out:fade={{delay: 1000, duration: 500}}>loading from Github...</span>
                {:then readme} 
                    &nbsp;
                {/await}
            </div>
        </svelte:fragment>
        
        <svelte:fragment slot="content">
            {#await readmePromise}
                &nbsp;
            {:then readme}     
                <div class="readme-container">
                    <SvelteMarkdown source={readme} />
                </div>
                <div>
                    <a href="#page-main" class="back-to-top">
                        Back to top
                    </a>
                </div>
            {/await}
        </svelte:fragment>
    </AccordionItem>

</Accordion>
    
<style lang='postcss'>

.back-to-top {
    @apply bg-primary-600 p-2 mb-2 mx-4 rounded
}

.readme-header {
    @apply font-mono 
}

.readme-container {
    @apply bg-tertiary-400 rounded
    text-lg text-black
    overflow-y-scroll h-[80vh] w-[80%]
    mb-8 p-4 mx-auto
}
</style>