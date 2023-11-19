// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
  url = "io.html";
  $.getJSON(url, function (result) {
    document.getElementById(ObjectID).value = result[tag];
  });
}

// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
  IOField("quang", "MUC_NUOC");
}, 1000);

//Ket thuc khai bao bien toan cuc
function load_xong() {
  vedothi();
}

//====================================================================================================
//			VE DO THI
//====================================================================================================
function vedothi() {
  var line = new TimeSeries();
  setInterval(function () {
    let mucNuoc = $('#quang').val() ? parseFloat($('#quang').val()) : 0;
    line.append(new Date().getTime(), mucNuoc); //Math.random()*100				   
  }, 1000);

  var smoothie = new SmoothieChart(
    {
      grid:
      {
        strokeStyle: 'rgba(119, 119, 119, 1)',
        fillStyle: 'rgba(0, 0, 0,1)', lineWidth: 1,
        millisPerLine: 1000, verticalSections: 6
      },
      maxValue: 50,
      minValue: 0,
      millisPerPixel: 20,
      maxValueScale: 0.86,
      scaleSmoothing: 0.266,
      timestampFormatter: SmoothieChart.timeFormatter
    });
  smoothie.addTimeSeries(line, { strokeStyle: 'rgb(0, 255, 0)', lineWidth: 3 });

  smoothie.streamTo(document.getElementById("mycanvas1"), 1000);
}