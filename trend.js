let thoigian;
let startPrj = localStorage.getItem("startProject") ? localStorage.getItem("startProject") : 0;
let onAutoPrj = localStorage.getItem("onAuto") ? localStorage.getItem("onAuto") : 0;
let onAutoBom1Prj = localStorage.getItem("onAutoBom1") ? localStorage.getItem("onAutoBom1") : 0;
let onAutoBom2Prj = localStorage.getItem("onAutoBom2") ? localStorage.getItem("onAutoBom2") : 0;
let onHandmadePrj = localStorage.getItem("onHandmade") ? localStorage.getItem("onHandmade") : 0;
let onHandmadeBom1Prj = localStorage.getItem("onHandmadeBom1") ? localStorage.getItem("onHandmadeBom1") : 0;
let onHandmadeBom2Prj = localStorage.getItem("onHandmadeBom2") ? localStorage.getItem("onHandmadeBom2") : 0;
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
  IOField("hai", "START");
}, 1000);

//Ket thuc khai bao bien toan cuc
function load_xong() {
  vedothi();
  gettime();
  report_display();
}

function report_display() {
  var text_1 = document.getElementById("report1");
  setInterval(function () {
    let mucNuoc = $('#quang').val() ? parseFloat($('#quang').val()) : 0;
    if (startPrj == 1) {
      let status = "ON";
        if ((onAutoPrj == 1 ) && (onHandmadePrj == 0 )){
          let statusmode ="TỰ ĐỘNG";
            if (onAutoPrj == 1 && onAutoBom1Prj == 1){
              statusBom1 = "ON";
            } else {
              statusBom1 = "OFF";
            }
            if (onAutoPrj == 1 && onAutoBom2Prj == 1){
              statusBom2 ="ON";
            } else {
              statusBom2 ="OFF";
            }
            arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Chế độ:" + statusmode +  ", Trạng thái cửa xả 1:" + statusBom1 + ",Trạng thái cửa xả 2:" + statusBom2 + " " + "Mực nước: " + mucNuoc;
        } else {
          let statusmode ="TAY";
            if (onHandmadePrj == 1 && onHandmadeBom1Prj == 1){
              statusBom1 = "ON";
            } else {
              statusBom1 = "OFF"
            }
            if (onHandmadePrj == 1 && onHandmadeBom2Prj == 1){
              statusBom2 ="ON";
            } else {
              statusBom2 ="OFF";
            }
            arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Chế độ:" + statusmode +  ", Trạng thái cửa xả 1:" + statusBom1 + ",Trạng thái cửa xả 2:" + statusBom2 + " " + "Mực nước: " + mucNuoc;
         }
      // if ((onAutoPrj == 1 && onAutoBom1Prj == 1) || (onHandmadePrj == 1 && onHandmadeBom1Prj == 1)) {
      //   statusBom1 = "ON";
      // } else {
      //   statusBom1 = "OFF";
      // }
      // if ((onAutoPrj == 1 && onAutoBom2Prj == 1) || (onHandmadePrj == 1 && onHandmadeBom2Prj == 1)){
      //   statusBom2 ="ON";
      // } else {
      //   statusBom2 = "OFF";
      // }
      // arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Trạng thái cửa xả 1:" + statusBom1 + ",Trạng thái cửa xả 2:" + statusBom2 + " " + "Mực nước: " + mucNuoc;
    } else {
      let status = "OFF";
      arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status ;
    }
    var textnode_1 = document.createTextNode(arr_display_1);
    var lb_1 = document.createElement("br");
    text_1.appendChild(textnode_1);
    text_1.appendChild(lb_1);
  }, 1000);
}

function saveTextAsFile() {
  var textToWrite = $('#report1').html();
  var textToWrite = textToWrite.replaceAll('<br>', '\n');
  var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
  var fileNameToSaveAs = 'REPORT-SCADA_' + thoigian;
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL !== null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}
function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

//Lay thoi gian thuc
function gettime() {
  setInterval(function () {
    d = new Date();
    n = d.toLocaleString();
    thoigian = n;
  }, 1000);
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
        millisPerLine: 1000, verticalSections: 10
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