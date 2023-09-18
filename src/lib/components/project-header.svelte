<script>
    import SvelteMarkdown from 'svelte-markdown'
    import ReadmeFile from "./readme-file.svelte"
    import ghLogo from '$lib/images/github.png'
    import wwwLogo from '$lib/images/www.png'
    import { PUBLIC_GH_RAW_URL, PUBLIC_GH_BASE_URL } from '$env/static/public'

    export let project = {
        title: '',
        img: null,
        siteURL: '',
        repoName: '', 
        readmeFile: ''
    }
    project.repoURL = `${PUBLIC_GH_BASE_URL}/${project.repoName}`
    project.readmeURL = `${PUBLIC_GH_RAW_URL}/${project.repoName}/${project.readmeFile}`

    let innerMD
</script>

<div class="project-main overflow-hidden">    
    {#if project.img}
        <div class='project-image-container rounded float-left border border-black w-[40%] m-4'>
            <img src={project.img} alt={`${project.title} screenshot`} />
        </div>
    {/if}
    
    <div bind:this={innerMD} style:display="none">
        <slot />
    </div>

    <div class="flex justify-start items-center m-4">    
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
    </div>

    <SvelteMarkdown source={innerMD?.innerText} />

    {#if project.readmeURL}
        <ReadmeFile url={project.readmeURL} />
    {/if}
</div>
