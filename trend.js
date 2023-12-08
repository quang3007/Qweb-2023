let thoigian;
let startPrj = localStorage.getItem("startProject") ? localStorage.getItem("startProject") : 0;
let onAutoPrj = localStorage.getItem("onAuto") ? localStorage.getItem("onAuto") : 0;
let onAutoCuaxa1Prj = localStorage.getItem("onAutoCuaxa1") ? localStorage.getItem("onAutoCuaxa1") : 0;
let onAutoCuaxa2Prj = localStorage.getItem("onAutoCuaxa2") ? localStorage.getItem("onAutoCuaxa2") : 0;
let onHandmadePrj = localStorage.getItem("onHandmade") ? localStorage.getItem("onHandmade") : 0;
let onHandmadeCuaxa1Prj = localStorage.getItem("onHandmadeCuaxa1") ? localStorage.getItem("onHandmadeCuaxa1") : 0;
let onHandmadeCuaxa2Prj = localStorage.getItem("onHandmadeCuaxa2") ? localStorage.getItem("onHandmadeCuaxa2") : 0;
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
  url = "get_data.html";
  $.getJSON(url, function (result) {
    document.getElementById(ObjectID).value = result[tag];
  });
}

// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
  IOField("quang2222222", "MUC_NUOC");
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
            if (onAutoPrj == 1 && onAutoCuaxa1Prj == 1){
              statusCuaxa1 = "ON";
            } else {
              statusCuaxa1 = "OFF";
            }
            if (onAutoPrj == 1 && onAutoCuaxa2Prj == 1){
              statusCuaxa2 ="ON";
            } else {
              statusCuaxa2 ="OFF";
            }
            arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Chế độ:" + statusmode +  ", Trạng thái cửa xả 1:" + statusCuaxa1 + ",Trạng thái cửa xả 2:" + statusCuaxa2 + " " + "Mực nước: " + mucNuoc;
        } else {
          let statusmode ="TAY";
            if (onHandmadePrj == 1 && onHandmadeCuaxa1Prj == 1){
              statusCuaxa1 = "ON";
            } else {
              statusCuaxa1 = "OFF"
            }
            if (onHandmadePrj == 1 && onHandmadeCuaxa2Prj == 1){
              statusCuaxa2 ="ON";
            } else {
              statusCuaxa2 ="OFF";
            }
            arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Chế độ:" + statusmode +  ", Trạng thái cửa xả 1:" + statusCuaxa1 + ",Trạng thái cửa xả 2:" + statusCuaxa2 + " " + "Mực nước: " + mucNuoc;
         }
      // if ((onAutoPrj == 1 && onAutoCuaxa1Prj == 1) || (onHandmadePrj == 1 && onHandmadeCuaxa1Prj == 1)) {
      //   statusCuaxa1 = "ON";
      // } else {
      //   statusCuaxa1 = "OFF";
      // }
      // if ((onAutoPrj == 1 && onAutoCuaxa2Prj == 1) || (onHandmadePrj == 1 && onHandmadeCuaxa2Prj == 1)){
      //   statusCuaxa2 ="ON";
      // } else {
      //   statusCuaxa2 = "OFF";
      // }
      // arr_display_1 = 'Thời gian: ' + thoigian + ", Trạng thái:" + status + ", Trạng thái cửa xả 1:" + statusCuaxa1 + ",Trạng thái cửa xả 2:" + statusCuaxa2 + " " + "Mực nước: " + mucNuoc;
    } else {
      let status = "OFF";
      arr_display_1 = 'Thời gian: ' + null + thoigian + ", Trạng thái:" + status ;
    }

    
    var textnode_1 = document.createTextNode(arr_display_1);
    var lb_1 = document.createElement("br");
    text_1.appendChild(textnode_1);
    text_1.appendChild(lb_1);
  }, 1000);
}

// TẠO FILE EXCEL
function saveExcelFile() {
  var textToWrite = $('#report1').html();
  var lines = textToWrite.split('<br>');

  // Chuyển đổi mỗi dòng thành một mảng các cột
  var data = lines.map(function(line) {
    return [line];
  });

  // Tạo worksheet từ dữ liệu
  var worksheet = XLSX.utils.aoa_to_sheet(data);
  
  // Tạo workbook mới và thêm worksheet
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

  // Lưu workbook dưới dạng tệp Excel
  XLSX.writeFile(workbook, 'REPORT-SCADA_' + thoigian + '.xlsx');
}


// TAO FILE TXT
// function saveTextAsFile() {
//   var textToWrite = $('#report1').html();
//   var textToWrite = textToWrite.replaceAll('<br>', '\n');
//   var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
//   var fileNameToSaveAs = 'REPORT-SCADA_' + thoigian;
//   var downloadLink = document.createElement("a");
//   downloadLink.download = fileNameToSaveAs;
//   downloadLink.innerHTML = "Download File";
//   if (window.webkitURL !== null) {
//     // Chrome allows the link to be clicked
//     // without actually adding it to the DOM.
//     downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//   } else {
//     // Firefox requires the link to be added to the DOM
//     // before it can be clicked.
//     downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);
//   }
//   downloadLink.click();
// }
// function destroyClickedElement(event) {
//   document.body.removeChild(event.target);
// }

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
    let mucNuoc = $('#quang2222222').val() ? parseFloat($('#quang2222222').val()) : 0;
    line.append(new Date().getTime(), mucNuoc); //Math.random()*100				   
  }, 1000);

  var smoothie = new SmoothieChart(
    {
      grid:
      {
        strokeStyle: 'gray',
        fillStyle: 'black', lineWidth: 1,
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