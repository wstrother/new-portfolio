<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import github from '$lib/images/github.png';

</script>

<AppBar 
	border='border-b border-solid border-primary-800'
	shadow='shadow'
	background='bg-primary-700 opacity-80'
	padding='py-2 px-8'
>

	<svelte:fragment slot="lead">
		&nbsp;
	</svelte:fragment>
	<span class="mr-3 h3 font-thin tracking-wider">Wyatt Strother</span>

	<span class="tracking-wide">Web Design / Full Stack Web Dev</span>


	<svelte:fragment slot="trail">
		<a href='https://github.com/wstrother' target='_blank'>
			<img src={github} alt='Github Logo'/>
		</a>
	</svelte:fragment>
</AppBar>

<slot />
