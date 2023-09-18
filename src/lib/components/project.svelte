<script>
    import SvelteMarkdown from 'svelte-markdown'
    import ReadmeFile from "./readme-file.svelte"
    import ghLogo from '$lib/images/github.png'
    import wwwLogo from '$lib/images/www.png'
    import { fade } from 'svelte/transition'
    import { PUBLIC_GH_RAW_URL, PUBLIC_GH_BASE_URL } from '$env/static/public'

    export let project = {
        title: '',
        imgs: [],
        siteURL: '',
        repoName: '', 
        readmeFile: ''
    }
    project.repoURL = `${PUBLIC_GH_BASE_URL}/${project.repoName}`
    project.readmeURL = `${PUBLIC_GH_RAW_URL}/${project.repoName}/${project.readmeFile}`

    let innerMD
</script>

<div class="project-main overflow-hidden">
    <!-- {#if project.imgs}
        {#each project.imgs as src}
            <div class='project-image-container rounded float-left border border-black w-[40%] m-4'>
                <img {src} alt={`${project.title} screenshot`} />
            </div>
        {/each}
    {/if} -->
    <div class="images">
        images
    </div>
    

    <!-- <div class="flex justify-start items-center m-4">    
        <a  href={project.repoURL}
            target='_blank' 
            class='btn btn-icon'
        >
            <img src={ghLogo} alt='visit on GitHub'/>
        </a>
        
        {#if project.siteURL}
            <a  href={project.siteURL} 
                target='_blank' 
                class='btn btn-icon'
            >
                <img src={wwwLogo} alt='Visit project website'/>
            </a>
        {/if}
    </div> -->
    <div class="icons">
        <span class="flex flex-row gap-2">
            <img src={ghLogo} alt='visit on GitHub'/>
            <img src={wwwLogo} alt='Visit project website'/>
        </span>

        <button class="btn btn-sm variant-filled-primary">Open Readme</button>
    </div>

    <!-- <div bind:this={innerMD} style:display="none">
        <slot />
    </div>
    <div in:fade>
        <SvelteMarkdown source={innerMD?.innerText} />
    </div> -->

    <!-- <div class="summary"> -->
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum necessitatibus accusantium quibusdam, asperiores corporis tempore iste reprehenderit facilis quis pariatur suscipit possimus nemo, quos repellendus fugiat praesentium nesciunt sed!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum necessitatibus accusantium quibusdam, asperiores corporis tempore iste reprehenderit facilis quis pariatur suscipit possimus nemo, quos repellendus fugiat praesentium nesciunt sed!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum necessitatibus accusantium quibusdam, asperiores corporis tempore iste reprehenderit facilis quis pariatur suscipit possimus nemo, quos repellendus fugiat praesentium nesciunt sed!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum necessitatibus accusantium quibusdam, asperiores corporis tempore iste reprehenderit facilis quis pariatur suscipit possimus nemo, quos repellendus fugiat praesentium nesciunt sed!</p>
    <!-- </div> -->

    <!-- {#if project.readmeURL}
        <ReadmeFile url={project.readmeURL} />
    {/if} -->
</div>

<style lang="postcss">
    .images{@apply rounded float-left border border-black w-[40%] h-[250px] m-4}
    .icons{@apply flex justify-between items-center gap-4 m-4 md:mr-10}
</style>