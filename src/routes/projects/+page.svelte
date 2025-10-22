<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";

</script>

<h1>projects</h1>

{#each projects as project}
    <ProjectCard project={project}></ProjectCard>
{/each}