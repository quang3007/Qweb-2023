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
    url = "io.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}

// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    IOField("quang", "MUC_NUOC"); 
}, 1000);

function startProject() {
    localStorage.clear();
    localStorage.setItem("startProject", 1);
}

function stopProject() {
    localStorage.clear();
}

function onAuto() {
    localStorage.setItem("onAuto", 1);
    localStorage.setItem("onAutoBom1", 0);
    localStorage.setItem("onAutoBom2", 0);
    localStorage.setItem("onHandmade", 0);
}

function onAutoBom1() {
    localStorage.setItem("onAutoBom1", 1);
    localStorage.setItem("onAutoBom2", 0);
}

function onAutoBom2() {
    localStorage.setItem("onAutoBom1", 0);
    localStorage.setItem("onAutoBom2", 1);
}

function onHandmade() {
    localStorage.setItem("onAuto", 0);
    localStorage.setItem("onHandmade", 1);
    localStorage.setItem("onHandmadeBom1", 0);
    localStorage.setItem("onHandmadeBom2", 0);
}

function onHandmadeBom1() {
    localStorage.setItem("onHandmadeBom1", 1);
}

function offHandmadeBom1() {
    localStorage.setItem("onHandmadeBom1", 0);
}

function onHandmadeBom2() {
    localStorage.setItem("onHandmadeBom2", 1);
}

function offHandmadeBom2() {
    localStorage.setItem("onHandmadeBom2", 0);
}