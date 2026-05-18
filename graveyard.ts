
        let coords: Record<string, number> = {
            "startY": padding,
            "startY2": padding,
            "endY": padding,
            "startY3": padding
        }

            .attr("y", d => {
                var temp = startY;
                startY = startY + (+d.time_level * item_height) + rect_padding;
                return temp + (+d.time_level * item_height) / 2;
            })
            .attr('y1', d => getY(d, coords, "startY2"))

    function getY(d: d3.DSVRowString<string>, coords: Record<string, number>, currY: string) {
        var temp = coords[currY];
        coords[currY] = coords[currY] + (+d.time_level * item_height) + rect_padding;
        return temp + (+d.time_level * item_height) / 2;
    }


