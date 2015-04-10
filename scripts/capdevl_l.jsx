// Run from setup-and-run.jsx

app.open (new File(thisPsdFolder + '/capdevl_l.psd'));

// Watch the magic happen
var countryData = {};
countryData['private-banking'] = {};
countryData['retail-banking'] = {};
if(typeof dataMinExpMaxPBSE != 'undefined')countryData['private-banking']['SE'] = dataMinExpMaxPBSE;
if(typeof dataMinExpMaxRBSE != 'undefined')countryData['retail-banking']['SE'] = dataMinExpMaxRBSE;
if(typeof dataMinExpMaxRBFI != 'undefined')countryData['retail-banking']['FI'] = dataMinExpMaxRBFI;
if (typeof dataMinExpMaxRBDK != 'undefined')countryData['retail-banking']['DK'] = dataMinExpMaxRBDK;
if (typeof dataMinExpMaxRBNO != 'undefined')countryData['retail-banking']['NO'] = dataMinExpMaxRBNO;

// Graph dimensions
var graphDimensionX = 400;
var graphDimensionY = 290;
var graphPaddingTop = 25;
var graphPaddingBottom = 25;

// Do the graphs
for (var bankType in countryData) {
  for (var country in countryData[bankType]) {
    for (var dataType in countryData[bankType][country]) {

      var doTheGraphs = true;
      var saveDataTypeAs = dataType;
      var saveBankTypePrefix = 'PB';
      if (bankType == 'retail-banking') {
        saveBankTypePrefix = 'RB';
        // retail-banking should only save 'eo' for norway, and it should be saved as 'rf_plus'
        if (dataType == 'eo') {
          if (country == 'NO') {
            saveDataTypeAs = 'rf_plus';
          } else doTheGraphs = false;
        }
        // retail-banking don't want fio graph
        if (dataType == 'fio') doTheGraphs = false;
      }

      if (doTheGraphs) {

        var maxReturn = countryData[bankType][country][dataType].maxReturn,
            expReturn = countryData[bankType][country][dataType].expReturn,
            minReturn = countryData[bankType][country][dataType].minReturn;

        // Determine boundaries
        var highestValueInPercent = maxReturn[19];
        var lowestValueInPercent = minReturn[2];

        // Graph dimensions
        var xAxisPos = [];
        var xAxisYears = 19;
        for (var i = 0; i <= xAxisYears; i++) {
          xAxisPos.push(20 + (graphDimensionX / (xAxisYears)) * i);
        }
        var highestYPixels = 20 + graphPaddingTop;
        var lowestYPixels = 20 + graphDimensionY - graphPaddingBottom;

        // Draw the curves
        selectLayer("gradient");

        var drawLineArr = [];
        for (var i = 0; i < 20; i++) {
          drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(minReturn[i])];
        }
        drawLine('minReturnCurve', drawLineArr);

        for (var i = 0; i < 20; i++) {
          drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(expReturn[i])];
        }
        drawLine('expReturnCurve', drawLineArr);

        for (var i = 0; i < 20; i++) {
          drawLineArr[i] = [xAxisPos[i], calculateYAxisPixels(maxReturn[i])];
        }
        drawLine('maxReturnCurve', drawLineArr);

        // Do the minReturn dots and text
        positionLayerCenter("minReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        positionLayerCenter("minReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(minReturn[19]));
        positionLayerCenter("minReturn3YearsText", xAxisPos[2], calculateYAxisPixels(minReturn[2]));
        positionLayerCenter("minReturn6YearsText", xAxisPos[5], calculateYAxisPixels(minReturn[5]));
        positionLayerCenter("minReturn10YearsText", xAxisPos[9], calculateYAxisPixels(minReturn[9]));
        positionLayerCenter("minReturn20YearsText", xAxisPos[19], calculateYAxisPixels(minReturn[19]));
        getLayer("minReturn3YearsText").translate(-19, 12);
        getLayer("minReturn6YearsText").translate(-19, 12);
        getLayer("minReturn10YearsText").translate(-19, 12);
        getLayer("minReturn20YearsText").translate(-19, 12);

        // Do the expReturn dots and text
        positionLayerCenter("expReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        positionLayerCenter("expReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(expReturn[19]));
        positionLayerCenter("expReturn3YearsText", xAxisPos[2], calculateYAxisPixels(expReturn[2]));
        positionLayerCenter("expReturn6YearsText", xAxisPos[5], calculateYAxisPixels(expReturn[5]));
        positionLayerCenter("expReturn10YearsText", xAxisPos[9], calculateYAxisPixels(expReturn[9]));
        positionLayerCenter("expReturn20YearsText", xAxisPos[19], calculateYAxisPixels(expReturn[19]));
        getLayer("expReturn3YearsText").translate(-19, -8);
        getLayer("expReturn6YearsText").translate(-19, -8);
        getLayer("expReturn10YearsText").translate(-19, -8);
        getLayer("expReturn20YearsText").translate(-19, -8);

// Do the maxReturn dots and text
        positionLayerCenter("maxReturn3YearsDot", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsDot", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsDot", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        positionLayerCenter("maxReturn20YearsDot", xAxisPos[19], calculateYAxisPixels(maxReturn[19]));
        positionLayerCenter("maxReturn3YearsText", xAxisPos[2], calculateYAxisPixels(maxReturn[2]));
        positionLayerCenter("maxReturn6YearsText", xAxisPos[5], calculateYAxisPixels(maxReturn[5]));
        positionLayerCenter("maxReturn10YearsText", xAxisPos[9], calculateYAxisPixels(maxReturn[9]));
        positionLayerCenter("maxReturn20YearsText", xAxisPos[19], calculateYAxisPixels(maxReturn[19]));
        getLayer("maxReturn3YearsText").translate(-19, -8);
        getLayer("maxReturn6YearsText").translate(-19, -8);
        getLayer("maxReturn10YearsText").translate(-19, -8);
        getLayer("maxReturn20YearsText").translate(-19, -8);

// Do the y-axis
        positionLayerCenter("yAxis0PercentText", xAxisPos[0] + 15, calculateYAxisPixels(0) + 10);
        app.activeDocument.artLayers.getByName("yAxis0PercentText").visible = false;
        if (highestValueInPercent < 90) {
          getLayer("yAxis100PercentText").textItem.contents = "50%";
          positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(50));
          positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(50));
        } else if (highestValueInPercent > 1000) {
          getLayer("yAxis100PercentText").textItem.contents = "1000%";
          positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(1000));
          positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(1000));
        } else if (highestValueInPercent > 500) {
          getLayer("yAxis100PercentText").textItem.contents = "500%";
          positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(500));
          positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(500));
        } else if (highestValueInPercent > 250) {
          getLayer("yAxis100PercentText").textItem.contents = "250%";
          positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(250));
          positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(250));
        } else {
          getLayer("yAxis100PercentText").textItem.contents = "100%";
          positionLayerCenter("yAxis100PercentLine", xAxisPos[0], calculateYAxisPixels(100));
          positionLayerCenter("yAxis100PercentText", xAxisPos[0] + 20, calculateYAxisPixels(100));
        }

// Do the x-axis
        positionLayerCenter("xAxisLine", graphDimensionX / 2 + 25, calculateYAxisPixels(0));
        positionLayerCenter("xAxis3YearLine", xAxisPos[2], graphDimensionY / 2 + 25);
        positionLayerCenter("xAxis6YearLine", xAxisPos[5], graphDimensionY / 2 + 25);
        positionLayerCenter("xAxis10YearLine", xAxisPos[9], graphDimensionY / 2 + 25);
        positionLayerCenter("xAxis20YearLine", xAxisPos[19], graphDimensionY / 2 + 25);

// Make gradient
        if(bankType == 'private-banking') {
          setForegroundColor(175, 175, 175); // light gray
          //setForegroundColor(125, 125, 125); // Same colour gray as used in PB pdf
          //setForegroundColor(140, 140, 140); // a bit lighter than used in PB pdf
        } else {
          setForegroundColor(80, 160, 215);
        }
        app.activeDocument.artLayers.getByName("emptyGradient").visible = false;
        deleteLayer("gradient");
        selectLayer("emptyGradient");
        duplicateLayer("emptyGradient", "gradient");
        app.activeDocument.artLayers.getByName("gradient").visible = true;
        selectLayer("gradient");
        gradientLoop(expReturn, maxReturn);
        gradientLoop(expReturn, minReturn);
        selectNone();

        var locales = {
          'DK': ['da', 'en'],
          'SE': ['sv', 'en'],
          'NO': ['no', 'en'],
          'FI': ['fi', 'sv', 'en']
        };

        var translationYear = {
          'da': 'år',
          'sv': 'år',
          'no': 'år',
          'en': 'year',
          'fi': 'vuosi'
        };

        for (i = 0; i < locales[country].length; i++) {

          getLayer("minReturn3YearsText").textItem.contents = roundNumber(minReturn[2], locales[country][i]) + "%";
          getLayer("minReturn6YearsText").textItem.contents = roundNumber(minReturn[5], locales[country][i]) + "%";
          getLayer("minReturn10YearsText").textItem.contents = roundNumber(minReturn[9], locales[country][i]) + "%";
          getLayer("minReturn20YearsText").textItem.contents = roundNumber(minReturn[19], locales[country][i]) + "%";
          getLayer("expReturn3YearsText").textItem.contents = roundNumber(expReturn[2], locales[country][i]) + "%";
          getLayer("expReturn6YearsText").textItem.contents = roundNumber(expReturn[5], locales[country][i]) + "%";
          getLayer("expReturn10YearsText").textItem.contents = roundNumber(expReturn[9], locales[country][i]) + "%";
          getLayer("expReturn20YearsText").textItem.contents = roundNumber(expReturn[19], locales[country][i]) + "%";
          getLayer("maxReturn3YearsText").textItem.contents = roundNumber(maxReturn[2], locales[country][i]) + "%";
          getLayer("maxReturn6YearsText").textItem.contents = roundNumber(maxReturn[5], locales[country][i]) + "%";
          getLayer("maxReturn10YearsText").textItem.contents = roundNumber(maxReturn[9], locales[country][i]) + "%";
          getLayer("maxReturn20YearsText").textItem.contents = roundNumber(maxReturn[19], locales[country][i]) + "%";

          var translatedYear = translationYear[locales[country][i]];

          getLayer("xAxis3YearText").textItem.contents = "3 " + translatedYear;
          getLayer("xAxis6YearText").textItem.contents = "6 " + translatedYear;
          getLayer("xAxis10YearText").textItem.contents = "10 " + translatedYear;
          getLayer("xAxis20YearText").textItem.contents = "20 " + translatedYear;
          positionLayerCenter("xAxis3YearText", xAxisPos[2] - 2, 23);
          positionLayerCenter("xAxis6YearText", xAxisPos[5] - 2, 23);
          positionLayerCenter("xAxis10YearText", xAxisPos[9] - 2, 23);
          positionLayerCenter("xAxis20YearText", xAxisPos[19] - 2, 23);

          var folderName = destinationFolder + '/' + country + '/' + bankType;
          var fileName = saveBankTypePrefix + '_capdevl_l_' + saveDataTypeAs + '_' + locales[country][i] + country;
          saveAsPng(folderName, fileName);

        }
      }
    }
  }
}

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

function calculateYAxisPixels(valueInPercent) {
    return highestYPixels + (highestValueInPercent - valueInPercent) / (highestValueInPercent - lowestValueInPercent) * (lowestYPixels - highestYPixels);
}