<script>
    import ProjectHeader from '$lib/components/project-header.svelte';
    import ReadmeFile from '../readme-file.svelte';
    import preview from '$lib/images/streamingapp.png';

    export let readme;

</script>


<ProjectHeader
    img={preview}
    repo='https://https://github.com/wstrother/streaming-app'
    name='AHP Streaming App'
>
    
    <p>This streaming application is a full stack web app that will provide some really cool functionality for streaming with dynamic layouts with real time state management.</p>

    <p>While the project isn't currently deployed, progress is steady and I'm posting dev vlogs as I get closer to actually deploying an alpha version that I will be testing along with some volunteers.</p>

    <p>This project is built in SvelteKit/Typescript with a Postgres/Supabase backend, and also utilizes the Tailwind based Skeleton library for UI and customization.</p>

</ProjectHeader>

<ReadmeFile {readme} />