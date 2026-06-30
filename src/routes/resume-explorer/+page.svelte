<script lang="ts">
	import Timeline from "$lib/Components/Timeline.svelte";
</script>

<div class="page">
    <div class="timeline-intro">
        <h3 class="title">Interactive Resume Explorer</h3>
        <p class="section-1">
            When I look at my past work, I notice that every experience is connected to one or more of these key themes:
            <span class="intro-themes" style="border-color: rgb(245, 176, 49); background-color: rgb(245, 176, 49, 0.7);">Data & Technology</span>, 
            <span class="intro-themes" style="border-color: rgb(183, 224, 146); background-color: rgb(183, 224, 146, 0.7); ">Education & Community Organizing</span>, and 
            <span class="intro-themes" style="border-color: rgb(171, 145, 242); background-color: rgb(171, 145, 242, 0.7);">Arts & Storytelling</span>. 
        </p>
        <p>
            I was curious about how my involvement in each of these themes has looked like over time. 
            <span class="emphasize-text">Have I maintained a balance or some taken precedence at different periods of my life?</span> 
            I decided to visualize it with data.
        </p>
        <p>

            Below, you’ll find a visualization of my career journey across time (2016-2025):
        </p>

    </div>

    <Timeline></Timeline>
</div>

<style>

.title {
    margin-bottom: 0.5rem;
}

.intro-themes {
    border-radius: 1rem; 
    margin: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    padding: 0.1rem 0.5rem;
    white-space: nowrap;
}   

.emphasize-text {
    font-weight: 600;
}

.timeline-intro {
    margin-top: 1.5rem;

    .section-1 {
        line-height: 2;
    }
}

</style>