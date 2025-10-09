<script lang="ts">
	import '../app.css';
    import { resolve } from '$app/paths';
	import ButtonGroup from '$lib/Components/ButtonGroup.svelte';

	let { children } = $props();

	let selectedOption = $state('about');
</script>

<div class="header"> 
	<div class="title">
		<img class="logo" src="{resolve(`/logo/logo-basic.png`)}" alt="three circles logo">
		<div>
			<!-- <p class="name">Mindy Ng</p> -->
			<p class="tagline">social impact through data storytelling, movement, & education</p>
			<p class="contact">
				mindylynnng@gmail.com // <a href="https://www.linkedin.com/in/mindylynnng/">LinkedIn</a>
			</p>
		</div>
	</div>
	<nav>
		<!-- <Button text="about" route={resolve(`/about`)}></Button>
		<Button text="projects" route={resolve(`/projects`)}></Button> -->
		<ButtonGroup options={[{label: "about", route: resolve(`/about`)}, {label: "projects", route: resolve(`/projects`)}]}></ButtonGroup>
	</nav>
</div>

{@render children()}

<style>
	.header {
		background-color: var(--secondary-color);
		color: var(--primary-color);
		height: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		padding: 0 1rem;

		/* @media (max-width: 480px) {
			height: 15rem;
			flex-direction: column;
		} */
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* height: 80%; */
	
		.logo {
			height: 8rem;
			width: 8rem;
			padding-right: 1rem;
		}

		/* .name {
			font-size: 30px;
			margin: 0;
		} */

		.contact, .tagline {
			justify-content: center;
        	display: flex;
			margin: 1rem;
			font-weight: 600;
			
			a {
				color: var(--primary-color);
			}
		}
	}
</style>