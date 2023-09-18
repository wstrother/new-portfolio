<script>
    import SvelteMarkdown from 'svelte-markdown'
    import ReadmeFile from "./readme-file.svelte"
    // import ghLogo from '$lib/images/github.png'

    export let project = {
        title: '',
        img: null,
        url: '',
        repoURL: '', 
        readmeURL: ''
    }

    let innerMD
</script>

<!-- <div class="flex justify-between items-center">    
    <div class="mr-4">
        <a  href={project.repoURL} 
            target='_blank' 
            class='btn btn-icon'
        >
            <img src={ghLogo} alt='Visit on GitHub'/>
        </a>
        
        {#if project.url}
            <a href={project.url} target='_blank' class='btn btn-sm bg-primary-400 p-2'>Visit Website</a>
        {/if}
    </div>
</div> -->


<div class="project-main overflow-hidden">
    
    {#if project.img}
        <div class='project-image-container rounded float-left border border-black w-[40%] m-4'>
            <img src={project.img} alt={`${project.title} screenshot`} />
        </div>
    {/if}
    
    <div bind:this={innerMD} style:display="none">
        <slot />
    </div>

    <SvelteMarkdown source={innerMD?.innerText} />

    {#if project.readmeURL}
        <ReadmeFile url={project.readmeURL} />
    {/if}
</div>
