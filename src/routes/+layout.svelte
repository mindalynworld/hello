<script lang="ts">
    import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<nav>
	<a href="{resolve(`/about`)}">about</a>
	<a href='{resolve(`/projects`)}'>projects</a>
</nav>

{@render children()}