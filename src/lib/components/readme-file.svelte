<script>
    import SvelteMarkdown from 'svelte-markdown';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

    export let readme
</script>

<Accordion>

    <AccordionItem regionControl="bg-primary-500" hover="bg-primary-500">

        <svelte:fragment slot="summary">
            <div class="readme-header h4">
                    README.md
            </div>
        </svelte:fragment>
        
        <svelte:fragment slot="content">

            <div class="readme-container">
                <SvelteMarkdown source={readme} />
            </div>
            <div>
                <a href="#page-main" class="back-to-top">
                    Back to top
                </a>
            </div>
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