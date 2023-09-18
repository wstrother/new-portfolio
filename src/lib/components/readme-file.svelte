<script>
    import SvelteMarkdown from 'svelte-markdown'
    // import { Accordion, AccordionItem } from '@skeletonlabs/skeleton'
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

<div class="modal-container">
    
    {#if fetching}
        <div class="font-mono h4 w-1/2 mx-auto">
            {#await readmePromise}
                <span out:fade={{delay: 1000, duration: 500}}>loading README.md from Github...</span>
            {:then _}
                &nbsp;
            {/await}
        </div>
    {/if}
    
    {#await readmePromise}
        &nbsp;
    {:then readme}
        <div class="readme-container">
            <SvelteMarkdown source={readme} />
        </div>
    {/await}
</div>

    
<style lang='postcss'>

.readme-container {
    @apply  bg-tertiary-400 rounded p-4
            text-lg text-black
            overflow-y-scroll 
            sm:h-[80vh]
            h-[95vh]
}
</style>