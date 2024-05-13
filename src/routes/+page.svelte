<script>
	import face from '$lib/images/face.png';
	import { fade } from 'svelte/transition';
</script>

<div class='landing-container'>
	<div class='face-container'>
		<img src={face} alt="Wyatt's Face" in:fade>
	</div>
	
	<div class='nav-container'>

		<a href='/portfolio'>View My Portfolio</a>
		
		<a href='https://wstrother.github.io/devblog/' >Dev Blog</a>
		
		<a href='/about' >Learn About Me</a>
	</div>
</div>