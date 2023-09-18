<script>
    import ProjectHeader from '$lib/components/project-header.svelte'
    import img from '$lib/images/streamingapp.png'

    const project = {
        title: 'Streaming App', img,
        repoName: 'streaming-app',
        readmeFile: `master/README.md`,
    }
</script>


<ProjectHeader {project}>
This streaming application is a full stack web app that will provide 
some really cool functionality for streaming with dynamic 
layouts with real time state management.

While the project isn't currently deployed, progress is steady and I'll
be posting dev vlogs as I get closer to actually deploying 
an alpha version that I will be testing along with some volunteers.

This project is built in SvelteKit/Typescript with a Postgres/Supabase backend, 
and also utilizes the Tailwind CSS library for UI and customization.
</ProjectHeader>
