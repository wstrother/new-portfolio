<script>
    export let img = null;
    export let url = '';
    export let name = '';
    export let repo = '';
</script>


<div class="flex justify-between items-center">
    <h1 class='h3 ml-4'>{name}</h1>
    
    <div class="mr-4">
        <a href={repo} target='_blank' class='btn btn-sm bg-primary-400 p-2 mr-2'>Visit on Github</a>
        
        {#if url}
            <a href={url} target='_blank' class='btn btn-sm bg-primary-400 p-2'>Visit Website</a>
        {/if}
    </div>
</div>


<div class="project-main overflow-hidden">
    
    {#if img}
        <div class='project-image-container rounded float-left border border-black w-[40%] m-4'>
            <a href={url} target='_blank'>
                <img src={img} alt={`${name} screenshot`} />
            </a>
        </div>
    {/if}
    
    <slot></slot>
</div>
