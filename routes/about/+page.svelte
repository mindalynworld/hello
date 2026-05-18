<script lang="ts">
	import Timeline from "$lib/Components/Timeline.svelte";
</script>

<div class="page">
    <h1>about</h1>
    <p>this is the about page.</p>

    <h2>Experience Timeline</h2>
    <Timeline></Timeline>
</div>

<style>
    .page {
        padding: var(--page-padding);
    }
</style>