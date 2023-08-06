<script>
    import ProjectHeader from '$lib/components/project-header.svelte';
    import ReadmeFile from '../readme-file.svelte';
    import twitchbot from '$lib/images/twitchbot.png';

    export let readme;

</script>


<ProjectHeader
    img={twitchbot}
    repo='https://https://github.com/wstrother/streaming-app'
    name='AHP Streaming App'
>
    
    <p>Currently my favorite pet project, this code repository defines a simple Python script which will launch a helpful bot to connect to your Twitch chat.</p>
    
    <p>
        The real fun comes from the way this project defines and implements a specific JSON spec for creating a set of commands. These commands can be as simple
        as pasting a link to your Youtube in the chat, but they get way, way, way more sophisticated.
    </p>
    
    <p>
        Commands can implement conditional branching. They can read or write to arbitrary state variables. They can send requests to
        and receive data from external web APIs. And they can be chained together such that the output of one command informs the input of another.
    </p>
    
    <p>
        When I stream on Twitch, I also use my bot to control a local node application that controls graphical layout components on my stream,
        and the next big step in this project is going to be expanding on this idea with an actual web platform and graphical UI, so be on the look out
        for more big updates related to this project.
    </p>

</ProjectHeader>

<ReadmeFile {readme} />