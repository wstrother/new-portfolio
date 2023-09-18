<script>
    import Project from '$lib/components/project.svelte'

    import img1 from '$lib/images/streaming-app-1.png'
    import img2 from '$lib/images/streaming-app-2.png'
    import img3 from '$lib/images/streaming-app-3.gif'


    const project = {
        title: 'Streaming App',
        repoName: 'streaming-app',
        readmeFile: `master/README.md`,
        imgs: [img1, img2, img3]
    }
</script>


<Project {project}>
This streaming application is a full stack web app that will provide 
some really cool functionality for streaming with dynamic 
layouts with real time state management.

While the project isn't currently deployed, progress is steady and I'll
be posting dev vlogs as I get closer to actually deploying 
an alpha version that I will be testing along with some volunteers.

This project is built in SvelteKit/Typescript with a Postgres/Supabase backend, 
and also utilizes the Tailwind CSS library for UI and customization.
</Project>
