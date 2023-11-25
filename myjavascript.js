let START;
let STOP; 
let CM1_12;
let CM1_34;
let CM3_12;
let CM3_34;

let startPrj = localStorage.getItem("startProject") ? localStorage.getItem("startProject") : 0;
let onAutoPrj = localStorage.getItem("onAuto") ? localStorage.getItem("onAuto") : 0;
let onAutoBom1Prj = localStorage.getItem("onAutoBom1") ? localStorage.getItem("onAutoBom1") : 0;
let onAutoBom2Prj = localStorage.getItem("onAutoBom2") ? localStorage.getItem("onAutoBom2") : 0;
let onHandmadePrj = localStorage.getItem("onHandmade") ? localStorage.getItem("onHandmade") : 0;
let onHandmadeBom1Prj = localStorage.getItem("onHandmadeBom1") ? localStorage.getItem("onHandmadeBom1") : 0;
let onHandmadeBom2Prj = localStorage.getItem("onHandmadeBom2") ? localStorage.getItem("onHandmadeBom2") : 0;

$(document).ready(function() {
    // // doi mau nut start khi bat chuong trinh 
    if (startPrj == 1) {
        $("#btn_start").css("background-color", "green");
    }

     // doi mau nut stop khi tat chuong trinh 
    if (startPrj == 0) {
        $("#btn_stop").css("background-color", "red");
    }

    // doi mau nut auto 
    if (startPrj == 1 && onAutoPrj == 1) {
        $("#btn_auto").css("background-color", "green");
    }

    // doi mau nut auto bom 1
    if (startPrj == 1 && onAutoPrj == 1 && onAutoBom1Prj == 1) {
        $("#btn_auto_bom1").css("background-color", "green");
    }

    // doi mau nut auto bom 2
    if (startPrj == 1 && onAutoPrj == 1 && onAutoBom2Prj == 1) {
        $("#btn_auto_bom2").css("background-color", "green");
    }

    // doi mau nut che do tay 
    if (startPrj == 1 && onHandmadePrj == 1) {
        $("#btn_tay").css("background-color", "green");
    }

    //doi mau che che do bat tay bom 1
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeBom1Prj == 1) {
        $("#btn_tay_bat_bom1").css("background-color", "green");
    }
    
    //doi mau che che do tat tay bom 1
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeBom1Prj == 0) {
        $("#btn_tay_tat_bom1").css("background-color", "green");
    }

    //doi mau che che do bat tay bom 2
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeBom2Prj == 1) {
        $("#btn_tay_bat_bom2").css("background-color", "green");
    }

    //doi mau che che do tat tay bom 2
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeBom2Prj == 0) {
        $("#btn_tay_tat_bom2").css("background-color", "green");
    }
});

// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "get_data.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}

// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    IOField("quang", "MUC_NUOC"); 
}, 1000);

function startProject() {
    // localStorage.clear();
    // localStorage.setItem("startProject", 1);

    ulr = 'post_data.html';
    sdata = encodeURI('"START"')+'=1';
    sdata += '&' + encodeURI('"STOP"')+'=0';
    sdata += '&' + encodeURI('"CM1_12"')+'=0';
    sdata += '&' + encodeURI('"CM_34"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM_34"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function stopProject() {
    //localStorage.clear();
    ulr = 'post_data.html';
    sdata = encodeURI('"STOP"')+'=1';
    sdata += '&' + encodeURI('"START"')+'=0';
    sdata += '&' + encodeURI('"CM1_12"')+'=0';
    sdata += '&' + encodeURI('"CM_34"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=0';
    $.post(ulr, sdata, function(result2){});
}




function onAuto() {
    ulr = 'post_data.html';
    sdata = encodeURI('"CM1_34"')+'=1';
    sdata += '&' + encodeURI('"CM1_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=0';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function onAutoBom1() {
    ulr = 'post_data.html';
    sdata = encodeURI('"CM3_34"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=1';
    sdata += '&' + encodeURI('"M"')+'=1';
    $.post(ulr, sdata, function(result2){});
}

function onAutoBom2() {
    ulr = 'post_data.html';
    sdata = encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=1';
    sdata += '&' + encodeURI('"M"')+'=1';
    $.post(ulr, sdata, function(result2){});
}

function onHandmade() {
    ulr = 'post_data.html';
    sdata = encodeURI('"CM1_12"')+'=1';
    sdata += '&' + encodeURI('"CM1_34"')+'=0';
    sdata += '&' + encodeURI('"1NC"')+'=1';
    sdata += '&' + encodeURI('"2NC"')+'=1';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function onHandmadeBom1() {
    ulr = 'post_data.html';
    sdata = encodeURI('"1ND"')+'=1';
    sdata += '&' + encodeURI('"1NC"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function offHandmadeBom1() {
    ulr = 'post_data.html';
    sdata = encodeURI('"1NC"')+'=1';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function onHandmadeBom2() {
    ulr = 'post_data.html';
    sdata = encodeURI('"2ND"')+'=1';
    sdata += '&' + encodeURI('"2NC"')+'=0';
    $.post(ulr, sdata, function(result2){});
}

function offHandmadeBom2() {
    ulr = 'post_data.html';
    sdata = encodeURI('"2NC"')+'=1';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    $.post(ulr, sdata, function(result2){});
}