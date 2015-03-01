function gradientLoop(startReturn, endReturn) {
    for (var step = 0; step < 20; step++) {
        var x1 = x4 = Math.round(xAxisPos[step]),
            x2 = x3 = Math.round(xAxisPos[step + 1]),
            y1 = Math.floor(calculateYAxisPixels(startReturn[step])),
            y2 = Math.floor(calculateYAxisPixels(startReturn[step + 1])),
            y3 = Math.floor(calculateYAxisPixels(endReturn[step + 1])),
            y4 = Math.floor(calculateYAxisPixels(endReturn[step])),
            splitDivs = [];

        for (var i = 0; i <= (x2 - x1); i++) {
            var x = x1 + i;
            var bottomY = Math.floor(y1 - (Math.abs(y2 - y1) / Math.abs(x2 - x1)) * i);
            var topY = Math.floor(y4 - (Math.abs(y3 - y4) / Math.abs(x2 - x1)) * i);
            var point = {x1: x, x2: x, y1: bottomY, y2: topY};

            splitDivs.push(point);
        }

        for (var i = 0; i < splitDivs.length - 1; i++) {
            var x1 = splitDivs[i].x1,
                x2 = splitDivs[i + 1].x1,
                x3 = splitDivs[i + 1].x2,
                x4 = splitDivs[i].x2,
                y1 = splitDivs[i].y1,
                y2 = splitDivs[i + 1].y1,
                y3 = splitDivs[i + 1].y2,
                y4 = splitDivs[i].y2;
            makeSelection(x1, x2, x3, x4, y1, y2, y3, y4);
            gradientSelection(x1, x2, x3, x4, y1, y2, y3, y4);
        }
    }
}