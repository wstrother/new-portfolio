<script>
    import ProjectHeader from '$lib/components/project-header.svelte';

</script>

<ProjectHeader
    repo='https://github.com/wstrother/ahp_stream_layout'
    name='AHP Stream Layout'
/>

<p>The super simple node server that I run to generate graphical layouts while streaming on Twitch.</p>

<p>Also implements some API endpoints so that my Twitch bot can update the layout contents in response to commands sent through chat.</p>

<hr class="my-4">

<ProjectHeader
    repo='https://github.com/wstrother/algo-sorting-midi'
    name='Sorting Algo MIDI'
/>

<p>
    A super bare-bones but fun Python script that can log the operations of a given sorting algorithm as it works on random data
    and generate a MIDI file as output according to certain parameters.
</p>

<hr class="my-4">

<ProjectHeader
    repo='https://github.com/wstrother/ahp-midi-controller'
    name='AHP MIDI controller'
/>

<p>
    A graphical Python application that allows you to interface a USB game pad controller with a virtual MIDI device such that 
    you can use any USB connected gaming device to control MIDI signals in your Digital Audio Workstation.
</p>