<script>
    import SvelteMarkdown from 'svelte-markdown';

    export let readme
</script>

<div id="readme">
    <a href="#readme" class="readme-header">
        README.md
    </a>
</div>

<div class="readme-container">
    <SvelteMarkdown source={readme} />
</div>
<div>
    <a href="#page-main" class="back-to-top">
        Back to top
    </a>
</div>

<style lang='postcss'>

#readme, .back-to-top {
    @apply bg-primary-600 p-2 mb-2 mx-4 rounded
}

.readme-header {
    @apply font-mono h4
}

.readme-container {
    @apply bg-tertiary-400 rounded
    text-lg text-black
    overflow-y-scroll h-[80vh] w-[80%]
    mb-8 p-4 mx-auto
}
</style>