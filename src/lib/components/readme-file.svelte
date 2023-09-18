<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
    import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

    export let url
    let readmeContents

    let readmePromise, fetching 
    let loaded = true

    const getReadme = async () => {
        loaded = false
        fetching = true

        const res = await fetch(url).then(res=>res.text())
        loaded = true

        sessionStorage.setItem(url, res)
        return res
    }

    onMount(() => {
        readmeContents = sessionStorage.getItem(url)

        if (!readmeContents) readmePromise = getReadme()
        else readmePromise = Promise.resolve(readmeContents)
    })
</script>

<Accordion>

    <AccordionItem regionControl="bg-primary-500" hover="bg-primary-500" disabled={!loaded}>

        <svelte:fragment slot="summary">
            <div class="readme-header h4">
                README.md
                {#if fetching}
                    {#await readmePromise}
                        <span out:fade={{delay: 1000, duration: 500}}>loading from Github...</span>
                    {:then _}
                        &nbsp;
                    {/await}
                {/if}
            </div>
        </svelte:fragment>
        
        <svelte:fragment slot="content">
            {#await readmePromise}
                &nbsp;
            {:then readme}     
                <div class="readme-container">
                    <SvelteMarkdown source={readme} />
                </div>
                <div class="flex justify-end">
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