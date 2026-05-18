<script lang="ts">
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

    let vis: HTMLElement;

    onMount(() => {
        init();
    });

    function init(): void {

    }

</script>

<main>
    <div id="vis" bind:this={vis}></div>
</main>

<style></style>