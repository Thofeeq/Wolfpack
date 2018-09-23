$(document).ready(function() {

  function getDataPoints(){
    dataPoints = [];
    function dataToPrint(label, y) {
      this.label = label;
      this.y = y;
    }
    
    for(i = 0; i < $(".label").length; i++){ 
      var dataOption = new dataToPrint($(`#a${i}`).text(),parseInt($(`#${i}`).text()));
      dataPoints.push(dataOption);
    };
  return dataPoints;  
  }

  var options = {
    title: {
      text: $("#question").text(),
    },
    data: [
    {
      type: "pie",
			startAngle: 45,
			showInLegend: "true",
			legendText: "{label}",
			indexLabel: "{label} ({y})",
      // Change type to "doughnut", "line", "splineArea", etc.

      dataPoints: getDataPoints()
    }
    ]
  };

  $("#chartContainer").CanvasJSChart(options);

});
