<script lang="ts">
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

    let arts_color = "#AB91F2";
    let tech_color = "#F5B031";
    let edu_color = "#81CE3C";

    var colors = [arts_color, tech_color, edu_color];
    
    let used: Set<number>;

    onMount(() => {
        init();
    });

    function init(): void {
        /* start logo animations */
        recolor();
        setInterval(recolor, 6000);
    }

    /* LOGO PULSING TRANSITIONS */
    let recolor = function() {
        d3.selectAll(".logo-circle")
            .transition()
            .delay((d: any, i: number) => i*500)
            .duration(1000)
            .attr("fill", (d: any, i: number) => colors[i])
            .on("end", function() {
                used = new Set<number>();

                d3.selectAll("#technology")
                .transition()
                .duration(1000)
                .attr("fill", () => colors[generateRandomIndex(2, used)])

                d3.selectAll("#education")
                .transition()
                .delay(500)
                .duration(1000)
                .attr("fill", () => colors[generateRandomIndex(2, used)])

                d3.selectAll("#arts")
                .transition()
                .delay(1000)
                .duration(1000)
                .attr("fill", () => colors[generateRandomIndex(2, used)])
            });
    }

    function generateRandomIndex(maxIndex: number, used_set: Set<number>) {
        var index = Math.round(Math.random() * maxIndex)
        if (used_set.has(index)) {
            if (used_set.size == maxIndex+1) {
                return 0; // no more indices
            }
            index = generateRandomIndex(maxIndex, used_set);
        }
        used_set.add(index)
        return index;
    }
</script>

<div class="logo">
    <svg width="300" height="170">
        <g>
            <circle class="logo-circle" id="arts"
            cx="150" cy="80" r="40"
            fill={colors[0]}
            />
            <circle class="logo-circle" id="technology"
            cx="120" cy="120" r="40"
            fill={colors[1]}
            />
            <circle class="logo-circle" id="education"
            cx="180" cy="120" r="40"
            fill={colors[2]}
            />
            <text class="name" x="50" y="120">Mindy Ng</text>
        </g>
    </svg>
</div>

<style>
    .logo-circle {
        opacity: 0.75;
        stroke: white;
        stroke-width: 2px;
        stroke-opacity: 0.5;
    }

    .name {
        font-size: 3rem;
        font-weight: 600;
        fill: white;
    }
</style>