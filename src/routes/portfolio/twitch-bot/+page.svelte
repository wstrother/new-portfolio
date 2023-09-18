<script>
    import Project from '$lib/components/project.svelte'
    import img from '$lib/images/twitchbot.png'

    const project = {
        title: 'Twitch Bot', 
        imgs: [img],
        readmeFile: `master/readme.md`,
        repoName: 'ahp_twitch_bot',
        siteURL: 'https://wstrother.github.io/ahp_twitch_bot_site/'
    }
</script>


<Project {project}>
This code repository defines a simple Python script which will launch 
a helpful bot to connect to your Twitch chat.

The real fun comes from the way this project defines and implements a specific JSON spec for creating a set of commands. These commands can be as simple
as pasting a link to your Youtube in the chat, but they get way, way, way more sophisticated.

Commands can implement conditional branching. They can read or write to arbitrary state variables. They can send requests to
and receive data from external web APIs. And they can be chained together such that the output of one command informs the input of another.

When I stream on Twitch, I also use my bot to control a local node application that controls graphical layout components on my stream,
and the next big step in this project is going to be expanding on this idea with an actual web platform and graphical UI, so be on the look out
for more big updates related to this project.
</Project>
