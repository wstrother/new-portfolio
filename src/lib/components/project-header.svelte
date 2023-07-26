<script>
    export let img;
    export let url;
    export let name;
    export let repo;
</script>

<h1 class='h3 ml-4'>{name}</h1>

<a href={repo} target='_blank' class='btn btn-sm bg-primary-400 p-2 ml-2'>Visit on Github</a>

{#if url}
    <a href={url} target='_blank' class='btn btn-sm bg-primary-400 p-2'>Visit Website</a>
{/if}

{#if img}
    <div class='project-image-container float-left rounded overflow-hidden border border-black w-[50%] m-4'>
        <a href={url} target='_blank'>
            <img src={img} alt={`${name} screenshot`} />
        </a>
    </div>
{/if}