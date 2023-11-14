var START;
var STOP; 
var CM1_12;
var CM1_34;
var CM3_12;
var CM3_34;

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
