$(document).ready(function() {

  function getDataPoints()
  {
    dataPoints = [];
    function dataToPrint(label, y) {
      this.label = label;
      this.y = y;
    }

    
    for(i = 0; i < $(".label").length; i++)
    {

    
      
      var dataOption = new dataToPrint($(`#a${i}`).text(),parseInt($(`#${i}`).text()));
      dataPoints.push(dataOption);
    };

      console.log(dataPoints);
      
  return dataPoints;  
  }



  var options = {
    title: {
      text: $("#question").text(),            
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: getDataPoints()
    }
    ]
  };

  $("#chartContainer").CanvasJSChart(options);

});