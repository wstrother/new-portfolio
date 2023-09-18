<script>
    import SvelteMarkdown from 'svelte-markdown'
    import ReadmeFile from "./readme-file.svelte"
    import ghLogo from '$lib/images/github.png'
    import wwwLogo from '$lib/images/www.png'
    import { fade } from 'svelte/transition'
    import { PUBLIC_GH_RAW_URL, PUBLIC_GH_BASE_URL } from '$env/static/public'
	import { getModalStore } from '@skeletonlabs/skeleton'
	import ImageModal from './image-modal.svelte';
    const modalStore = getModalStore()

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

    const showImage = (src) => {
        modalStore.trigger({
            type: 'component',
            component: {
                ref: ImageModal,
                props: {src},
                alt: `${project.repoName} screen shot`
            }
        })
    }
</script>

<div class="project-main overflow-hidden">
    {#if project.imgs.length > 0}
        <div class="img-section">
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <div class='img-container'>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img src={project.imgs[0]} alt={`${project.title} screenshot`} 
                    class="cursor-pointer" on:click={() => showImage(project.imgs[0])}
                />
            </div>

            {#if project.imgs.length > 1}
                <div class="grid grid-cols-3 gap-4 items-center p-2">
                    {#each project.imgs as src}
                        <div class="img-preview img-container">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <img {src} alt="project screenshot"
                                class="cursor-pointer" 
                                on:click={() => showImage(src)}
                            />
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    {/if}

    <div class="icons">
        <span class="flex flex-row gap-2">
            <a  href={project.repoURL}
            target='_blank' 
            class='btn btn-icon p-0 m-0'
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
        </span>

        <button class="btn btn-sm bg-white text-secondary-900 font-extrabold">Open Readme</button>
    </div>

    <div bind:this={innerMD} style:display="none">
        <slot />
    </div>
    <div in:fade>
        <SvelteMarkdown source={innerMD?.innerText} />
    </div>


    <!-- {#if project.readmeURL}
        <ReadmeFile url={project.readmeURL} />
    {/if} -->
</div>

<style lang="postcss">
    .img-container>img {@apply object-cover h-[100%]}
    .img-section {
        @apply float-left w-[40%]
    }
    .img-container {
        @apply  rounded border border-black
                m-4 overflow-hidden
                max-h-[250px] h-fit
    }
    .img-preview {
        @apply  h-[75px] rounded border border-black opacity-50
    }
    .icons{@apply flex justify-between items-center gap-4 m-4 md:mr-10}
</style>