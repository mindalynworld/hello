<script lang="ts">
	import '../app.css';
    import { resolve } from '$app/paths';
	import ButtonGroup from '$lib/Components/ButtonGroup.svelte';
	import { afterNavigate, goto } from "$app/navigation";
	import Logo from '$lib/Components/Logo.svelte';
	import { handleNavigate } from '$lib/Helpers/helpers';

	let { children } = $props();

	const pages: string[] = ['about', 'projects', 'resume-explorer']

	let selectedOption = $state(pages[0]);

	// $effect(() => handleNavigate(selectedOption))

	afterNavigate((navigation) => {
		selectedOption = navigation.to?.route.id ? navigation.to?.route.id.slice(1) : "about";
	})

</script>
<main>
	<div class="header"> 
		<div class="title">
			<Logo></Logo>
			<div>
				<p class="tagline">social impact at the intersection of data, art, & education</p>
				<p class="contact">
					mindylynnng@gmail.com //&nbsp;<a href="https://www.linkedin.com/in/mindylynnng/">LinkedIn</a>
				</p>
			</div>
		</div>
		<!-- <nav>
			<ButtonGroup bind:selectedOption={selectedOption} options={pages} onClick={handleNavigate}></ButtonGroup>
		</nav> -->
	</div>

	{@render children()}
</main>

<style>
	.header {
		background-color: var(--secondary-color);
		color: var(--primary-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		padding: 1rem;

		/* @media (max-width: 480px) {
			height: 15rem;
			flex-direction: column;
		} */
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;

		.contact, .tagline {
			justify-content: center;
        	display: flex;
			margin: 1rem;
			text-align: center;
			
			a {
				color: var(--primary-color);
			}
		}

		.tagline {
			font-weight: 500;
		}

		.contact {
			font-weight: 400;
			font-size: 14px;
		}
	}
</style>