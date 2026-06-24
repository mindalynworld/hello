<script lang="ts">
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { determineColorsByWeight } from '$lib/Helpers/helpers';

    let vis: HTMLElement;
    let timelineSvg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    let defs: d3.Selection<SVGDefsElement, unknown, null, undefined>;

    /* GLOBAL ATTRIBUTES */
    const padding = 70; //TODO: rename x padding
    const rect_padding = 15;
    const month_length = 10; // width one unit
    const item_height = 15; // height one unit
    const corner_radius = 5;
    const num_items = 21; // determines height
    // should count months between start date and today's date + 1
    const num_months = 124 + 1; // up to dec 2025. this needs to be updated as time progresses
    const w = (num_months * month_length) + padding*2; // + 200 is to allow for title overflow
    const h = (num_items * (item_height * 2 + rect_padding)) + padding*2;

    /* COLOR DEFINITIONS (TODO: maybe this can exist in styles and just add attr class?) */
    const primary_color = "#454545";
    const arts_color = "rgb(195, 175, 252)"; 
    const edu_color = "rgb(205, 232, 181)";
    const tech_color = "rgb(252, 191, 78)"; // 255, 200, 100
    // const arts_color_faded = "rgba(195, 175, 252, 0.75)"; // TODO: can we just make this opacity instead of a separate color
    // const edu_color_faded = "rgba(205, 232, 181, 0.75)";
    // const tech_color_faded = "rgba(252, 191, 78, 0.75)";
    // const colors_faded = [edu_color_faded, arts_color_faded, tech_color_faded];

    // const gradient_normal = `linear-gradient(to right bottom, ${arts_color},  ${edu_color}, ${tech_color})`;
    // const gradient_faded = `linear-gradient(to right bottom, ${arts_color_faded}, ${edu_color_faded}, ${tech_color_faded})`;
    
    onMount(() => {
        init();
    });

    function init(): void {
        setup();
    }

    function setup() {
        timelineSvg = d3.select(vis).append("svg") // adds timeline after legend (use 'insert' and ":first-child" to put before)
            .attr("class", "timeline-svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${w} ${h}`);

        defs = timelineSvg.append("defs");

        loadData();
        createGradients();
    }

    function loadData() {
        d3.csv("data/personalExperienceData.csv").then( function(data) {
            let clean = data.filter((item) => (+item.include == 1));
            clean.sort((a,b) => +a.start_mo - +b.start_mo) // sort by start date

            buildTimeline(clean);
            handleMouseEvents(clean);
            addAxes();
        });
    }

    function buildTimeline(data: d3.DSVRowString<string>[]) {
        let itemGroup = timelineSvg.selectAll('g')
            .data(data)
                .enter()
                .append('g')
                .attr("class", "item-group")
                .attr('id', (d,i) => "item-group-"+i);
        
        let startY = padding, startY2 = padding, endY = padding, startY3 = padding;
        
        itemGroup.append("rect")
            .attr("class", "experience-rect")
                .attr('id', (d,i) => "item_"+i)
                .attr("y", d => {       
                    let temp = startY;
                    startY = updateCurrY(d, startY);
                    return temp;
                }) 
                .attr("x", (d) => +d.start_mo * month_length + padding)
                .attr("height", (d) => +d.time_level * item_height)
                .attr("width", (d) => +d.num_months * month_length)
                .attr('stroke', primary_color)
                .attr('stroke-width', 1.5)
                .attr('rx', corner_radius)
                .attr('ry', corner_radius)
                .attr("fill", d => determineColorsByWeight(d, true));

        // deciding which side to put the title on. TODO: There's gotta be a better way. should base it on item number rather than where the last one is. but i guess time level matters
        itemGroup.append("line")
            .attr('x1', d => isFirstHalf(d) ? getX(d, 1, true) : getX(d, 1, false))
            .attr('y1', d => {
                let temp = startY2; startY2 = updateCurrY(d, startY2);
                return getCenterY(d, temp, 0);
            })
            .attr('x2', d => isFirstHalf(d) ? getX(d, 40, true) : getX(d, 40, false))
            .attr('y2', d => {
                let temp = endY; endY = updateCurrY(d, endY);
                return getCenterY(d, temp, 0);
            })
            .attr('stroke', primary_color)
            .attr('stroke-width', 1.5);
    
        /* titles on the timeline */
        itemGroup.append('text')
            .attr("class", "item-title")
            .attr('x', d => isFirstHalf(d) ? getX(d, 45, true) : getX(d, 45, false))
            .attr('y', d => {
                let temp = startY3; startY3 = updateCurrY(d, startY3);
                return getCenterY(d, temp, 6);
            })
            .attr('text-anchor', d => isFirstHalf(d) ? "start" : "end")
            // .attr('font-size', "1.4rem")
            .attr('fill', primary_color)
            .attr('opacity', 0.7)
            .text((d) => d.title);
    }

    let currTimelineSelection: SVGGElement | null;
    let keepSelection = false;

    function handleMouseEvents(data: d3.DSVRowString<string>[]) {
        timelineSvg.selectAll<SVGGElement, d3.DSVRowString<string>>(".item-group")
            .on("mouseover", function(event, data) { // can't use arrow functions when using "this"
                fadeAll();
                highlightTimelineItem(this);
            })
            .on("click", function(event, data) {
                fadeAll();
                currTimelineSelection = this;
                highlightTimelineItem(currTimelineSelection);
                showItemDescription(data);

                keepSelection = true;
                event.stopPropagation();
            })
            .on("mouseout", function(event, data) {
                if (keepSelection && currTimelineSelection) {
                    fadeAll();
                    highlightTimelineItem(currTimelineSelection);
                } else {
                    clearTimelineSelection();
                }           
            });

        timelineSvg.on('click', function() {
            clearTimelineSelection();
        });
    }

    function addAxes() {
        const x = d3.scaleTime(
            [new Date(2015, 9, 1), new Date(2025, 12, 31)], // domain. this needs to be updated to current new Date(yyyy, mm, dd)
            [padding, w - padding]); // range

        var xAxisTop = d3.axisTop(x)
            // .ticks(d3.timeMonth.every(6)) // if want to break down further
            .tickSizeOuter(0)
            .tickSizeInner(10);
        
        var xAxisBottom = d3.axisBottom(x)
            //.ticks(d3.timeMonth.every(6))
            .tickSizeOuter(0)
            .tickSizeInner(10);
        
        timelineSvg.append("g") // new group element which will contain all of our axis elements
            .call(xAxisBottom)
            .attr("transform", `translate(0,${rect_padding})`)
            .attr("font-size", "20px")
            .attr("color", primary_color)

        timelineSvg.append("g") // new group element which will contain all of our axis elements
            .call(xAxisTop)
            .attr("transform", `translate(0,${h-rect_padding*2})`) // put it at bottom of the canvas
            .attr("font-size", "20px")
            .attr("color", primary_color)
    }
    
    // HELPER FUNCTIONS (could put in another file)

    function fadeAll() { /* fade all rects and text */
        d3.selectAll('.item-group').attr("opacity", 0.5)
            .select("text").attr("font-weight", "normal");
    }
    /* highlight item group and rect stroke */
    function highlightTimelineItem(item_group: SVGGElement) {
        let group_id = d3.select(item_group).attr("id");
        let item = d3.selectAll("#" + group_id).attr("opacity", 1);
        item.selectAll("text").attr("font-weight", 700);
    }

    function clearTimelineSelection() {
        d3.selectAll('.item-group').attr("opacity", 1)
            .select("text").attr("font-weight", "normal")

        hideItemDescrition();

        keepSelection = false
        currTimelineSelection = null;
    }

    function showItemDescription(d: d3.DSVRowString<string>) {
        d3.select(".item-description")
            .classed("active", true)
            .attr("style", function() {
                if ((+d.edu_weight == 1) || (+d.arts_weight == 1) || (+d.tech_weight == 1)) {
                    return "background-color:"+determineColorsByWeight(d, false)
                } else {
                    return "background-image:"+determineColorsByWeight(d, false)
                }
            })
            .select(".item-description-text")
            .html(`
                <p style="font-weight: 600; font-size: 1.2rem; margin: 0;">${d.title}</p>
                <p style="font-weight: 500; margin-top: 0;">
                    ${d.location} <br>
                    ${d.start_date} - ${d.end_date}
                </p>
                <p>${d.description}</p>
            `);
    }

    function hideItemDescrition() {
        d3.select(".item-description")
            .classed("active", false)
    }

    function isFirstHalf(d: d3.DSVRowString<string>){
        return +d.start_mo < num_months / 2;
    }

    function updateCurrY(d: d3.DSVRowString<string>, currY: number) {
        return currY + (item_height*+d.time_level) + rect_padding;
    }

    function getCenterY(d: d3.DSVRowString<string>, offset: number, currY: number) {
        return currY + (+d.time_level * item_height)/2 + offset;
    }

    function getX(d: d3.DSVRowString<string>, offset: number, sideA: boolean){
        if (sideA) { // if less than half, put on right
            return (+d.start_mo * month_length + padding) + (+d.num_months * month_length) + offset;
        } else {
            return +d.start_mo * month_length + padding - offset;
        }
    }



    function createGradient(id: string, color1: string, perc1: string, color2: string, perc2: string, color3?:string, perc3?:string) {
            var gradient = defs.append("linearGradient")
                .attr("id", id)
                .attr("y1", "0%")
                .attr("y2", "100%")
                .attr("x1", "0%")
                .attr("x2", "0%")
            
            gradient.append("stop")
                .attr('class', 'start')
                .attr("offset", perc1)
                .attr("stop-color", color1)
                .attr("stop-opacity", 1);
                
            gradient.append("stop")
                .attr('class', 'middle')
                .attr("offset", perc2)
                .attr("stop-color", color2)
                .attr("stop-opacity", 1);   

            if (color3 && perc3) {
                gradient.append("stop")
                .attr('class', 'end')
                .attr("offset", perc3)
                .attr("stop-color", color3)
                .attr("stop-opacity", 1);
            }
    }
        
    function createGradients() {
        /* creating gradients for each combination of categories, used for rects and tool tips */
        createGradient("eduArtsGradient", edu_color, "0%", arts_color, "100%");
        createGradient("eduTechGradient", tech_color, "0%", edu_color, "100%");
        createGradient("techArtsGradient", arts_color, "0%", tech_color, "100%");
        createGradient("allGradient", arts_color, "0%", tech_color, "50%", edu_color, "100%");
    }

</script>

<div class="vis-wrapper">

    <div class="timeline-layer">
            <div class="legend" id="timeline">
                <div class="legend-item" id="category">
                    <p class="legend-title">Category</p>
                    <svg class="svg-category" width="250" height="70" preserveAspectRatio="xMinYMin meet" viewBox="0 0 175 70">
                        <!-- eventually make title svg so it can size dynamically -->
                        <circle class="legend-symbol" cx="18" cy="8" r="7" fill="rgba(252, 191, 78, 0.75)"></circle>
                            <text class="legend-text" x="30" y="13">Technology & Data</text>
                        <circle class="legend-symbol" cx="18" cy="28" r="7" fill="rgba(205, 232, 181, 0.75)"></circle>
                            <text class="legend-text" x="30" y="33">Education & Community Building</text>
                        <circle class="legend-symbol" cx="18" cy="48" r="7" fill="rgba(195, 175, 252, 0.75)"></circle>
                            <text class="legend-text" x="30" y="53">Arts & Storytelling</text>
                    </svg>
                </div>

                <div class="legend-item" id="time-commitment">
                    <p class="legend-title">Time Commitment</p>
                    <svg class="svg-time-commitment" width="320" height="70" preserveAspectRatio="xMinYMin meet" viewBox="0 0 300 70">
                        <!-- eventually make title svg so it can size dynamically -->
                        <rect class="legend-symbol time" y="4" x="25" rx="5" ry="5" width="40" height="24"></rect>
                            <text class="legend-text" x="25" y="47">Full-time</text>
                            <text class="legend-text sub" x="25" y="63">(30-40+ hr/wk)</text>
                        <rect class="legend-symbol time" y="12" x="125" rx="5" ry="5" width="40" height="16"></rect>
                            <text class="legend-text" x="125" y="47">Part-time</text>
                            <text class="legend-text sub" x="125" y="63">(10-20 hr/wk)</text>
                        <rect class="legend-symbol time" y="20" x="225" rx="5" ry="5" width="40" height="8"></rect>
                            <text class="legend-text" x="225" y="47">Intermittent</text>   
                            <text class="legend-text sub" x="225" y="63">(&lt;10 hr/wk)</text>
                    </svg>
                </div>
            </div>
        
        <div class="timeline-container">
            <div class="annotation-layer">
                <div class="item-description">
                    <div class="header"> 
                        <button class="close-btn" type="button" aria-label="Close"
                            on:click={clearTimelineSelection}
                        ><i class="icon fa-solid fa-x"></i></button> 
                    </div>
                    <div class="item-description-text"></div>
                </div>
            </div>

            <div class="timeline" bind:this={vis}>
            
            </div>
        </div>
        
    </div>

</div>


<style>
    :root {
        --main-border-color: black;
    }

    .vis-wrapper {
        border: solid 1px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 900px;
        
    }

    :global(.item-group) {
        cursor: pointer;
    }

    :global(.item-title) {
        font-size: 1.4rem;

        /* /* @media (600px <= width <= 800px) {
            font-size: 1.6rem;
        } */

        @media (width <= 800px) {
            font-size: 1.6rem;
        }
    }

    .timeline-container {
        position: relative;
    }

    .timeline {
        overflow: scroll;
    }

    :global(.timeline-svg) {
        min-width: 650px;
    }

    .annotation-layer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

   .item-description {
        background-color: cornsilk;  /*  fallback color */
        width: 50%;
        min-width: 300px;
        opacity: 0.8;
        padding: 2% 3%;
        border: solid 1.5px;
        border-radius: 8px;
        display: none;

        &:global(.active) {
            pointer-events: auto;
            display: block;
        }

        .header {
            display: flex;
            justify-content: flex-end;

            .close-btn {
                background-color: transparent;
                border: solid 1.5px;
                border-radius: 8px;
                font-size: medium;
                cursor: pointer;
            }
            .close-btn:hover {
                background-color: black;
                .icon {
                    color: cornsilk;
                }
            }

            .icon {
                color: black;
            }
        }
    }

   .legend {
        display: flex;
        max-width: -webkit-fill-available;
        justify-content: flex-start;
        /* width: 90%; */
        margin: 0 1.5rem 1.5rem;
        color: var(--main-text-color);
        flex-wrap: wrap;

        .legend-title {
            margin: 1rem 0;
            font-weight: 500;
            font-size: 1.1rem;
        }

        .legend-symbol {
            stroke: var(--main-border-color);
            stroke-width: 0.1rem;
        }

        .legend-symbol.time {
            fill: none;
        }

        .legend-text {
            fill: var(--main-text-color);;
            font-size: 1rem;
        }

        .legend-text.sub {
            font-size: 0.9rem;
        }

        /* .legend-text.description {
            font-size: 1.2rem;
            margin: 0 1.8rem 1.2rem 1.8rem;
        }

        #description.legend-item {
            width: 60%;
        } */

        .svg-time-commitment, .svg-category {
            max-width: 100%;
        }
    }


</style>