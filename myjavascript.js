let START;
let STOP; 
let CM1_12;
let CM1_34;
let CM3_12;
let CM3_34;

function handleColorBtn() {
    let startPrj = localStorage.getItem("startProject") ? localStorage.getItem("startProject") : 0;
    let onAutoPrj = localStorage.getItem("onAuto") ? localStorage.getItem("onAuto") : 0;
    let onAutoCuaxa1Prj = localStorage.getItem("onAutoCuaxa1") ? localStorage.getItem("onAutoCuaxa1") : 0;
    let onAutoCuaxa2Prj = localStorage.getItem("onAutoCuaxa2") ? localStorage.getItem("onAutoCuaxa2") : 0;
    let onHandmadePrj = localStorage.getItem("onHandmade") ? localStorage.getItem("onHandmade") : 0;
    let onHandmadeCuaxa1Prj = localStorage.getItem("onHandmadeCuaxa1") ? localStorage.getItem("onHandmadeCuaxa1") : 0;
    let onHandmadeCuaxa2Prj = localStorage.getItem("onHandmadeCuaxa2") ? localStorage.getItem("onHandmadeCuaxa2") : 0;
    // doi mau nut start khi bat chuong trinh 
    if (startPrj == 1) {
        $("#btn_start").css("background-color", "green");
    } else {
        $("#btn_start").css("background-color", "#aad7aa");
    }

    // doi mau nut stop khi tat chuong trinh 
    if (startPrj == 0) {
        $("#btn_stop").css("background-color", "red");
    } else {
        $("#btn_stop").css("background-color", "#aa8585");
    }

    // doi mau nut auto 
    if (startPrj == 1 && onAutoPrj == 1) {
        $("#btn_auto").css("background-color", "green");
    } else{
        $("#btn_auto").css("background-color", "#55443f");
    }

    // doi mau nut auto Cuaxa 1
    if (startPrj == 1 && onAutoPrj == 1 && onAutoCuaxa1Prj == 1) {
        $("#btn_auto_Cuaxa1").css("background-color", "green");
    } else{
        $("#btn_auto_Cuaxa1").css("background-color", "#55443f");
    }

    // doi mau nut auto Cuaxa 2
    if (startPrj == 1 && onAutoPrj == 1 && onAutoCuaxa2Prj == 1) {
        $("#btn_auto_Cuaxa2").css("background-color", "green");
    } else{
        $("#btn_auto_Cuaxa2").css("background-color", "#55443f");
    }

    // doi mau nut che do tay 
    if (startPrj == 1 && onHandmadePrj == 1) {
        $("#btn_tay").css("background-color", "green");
    } else {
        $("#btn_tay").css("background-color", "#55443f");
    }

    //doi mau che che do bat tay Cuaxa 1
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeCuaxa1Prj == 1) {
        $("#btn_tay_bat_Cuaxa1").css("background-color", "green");
    } else {
        $("#btn_tay_bat_Cuaxa1").css("background-color", "#55443f");
    }

    //doi mau che che do tat tay Cuaxa 1
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeCuaxa1Prj == 0) {
        $("#btn_tay_tat_Cuaxa1").css("background-color", "green");
    } else{
        $("#btn_tay_tat_Cuaxa1").css("background-color", "#55443f");
    }

    //doi mau che che do bat tay Cuaxa 2
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeCuaxa2Prj == 1) {
        $("#btn_tay_bat_Cuaxa2").css("background-color", "green");
    } else {
        $("#btn_tay_bat_Cuaxa2").css("background-color", "#55443f");
    }

    //doi mau che che do tat tay Cuaxa 2
    if (startPrj == 1 && onHandmadePrj == 1 && onHandmadeCuaxa2Prj == 0) {
        $("#btn_tay_tat_Cuaxa2").css("background-color", "green");
    } else {
        $("#btn_tay_tat_Cuaxa2").css("background-color", "#55443f");
    }
}

$(document).ready(function() {
    handleColorBtn();
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

// xu ly den tin hieu
setInterval(function () {

    url = "get_data.html";
    $.getJSON(url, function (result) {
        let K1 = result['K1'];
        let K2 = result['K2'];
        let D1 = result['D1'];
        // console.log('K1: ' + K1);
        // console.log('K2: ' + K2);
        // console.log('D1: ' + D1);

        if (K1 == 1) {
            $(".signal_lights_k1" ).css("background-color", "green");
        } else {
            $(".signal_lights_k1" ).css("background-color", "rgb(85, 68, 63)");
        }

        if (K2 == 1) {
            $(".signal_lights_k2" ).css("background-color", "green");
        } else {
            $(".signal_lights_k2" ).css("background-color", "rgb(85, 68, 63)");
        }

        if (D1 == 1) {
            $(".signal_lights_for_water" ).css("background-color", "red");
        } else {
            $(".signal_lights_for_water" ).css("background-color", "rgb(85, 68, 63)");
        }
    });
}, 1000);

function startProject() {
    localStorage.clear();
    localStorage.setItem("startProject", 1);

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
    
    handleColorBtn();
}

function stopProject() {
    localStorage.clear();

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

    handleColorBtn();
}




function onAuto() {
    localStorage.setItem("onAuto", 1);
    localStorage.setItem("onHandmade", 0);
    localStorage.setItem("onAutoCuaxa1", 0);
    localStorage.setItem("onAutoCuaxa2", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"CM1_34"')+'=1';
    sdata += '&' + encodeURI('"CM1_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=0';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    $.post(ulr, sdata, function(result2){});

    handleColorBtn();
}

function onAutoCuaxa1() {
    localStorage.setItem("onAutoCuaxa1", 1);
    localStorage.setItem("onAutoCuaxa2", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"CM3_34"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=1';
    sdata += '&' + encodeURI('"M"')+'=1';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function onAutoCuaxa2() {
    localStorage.setItem("onAutoCuaxa2", 1);
    localStorage.setItem("onAutoCuaxa1", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=1';
    sdata += '&' + encodeURI('"M"')+'=1';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function onHandmade() {
    localStorage.setItem("onHandmade", 1);
    localStorage.setItem("onAuto", 0);
    localStorage.setItem("onHandmadeCuaxa1", 0);
    localStorage.setItem("onHandmadeCuaxa2", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"CM1_12"')+'=1';
    sdata += '&' + encodeURI('"CM1_34"')+'=0';
    sdata += '&' + encodeURI('"1NC"')+'=1';
    sdata += '&' + encodeURI('"2NC"')+'=1';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    sdata += '&' + encodeURI('"M"')+'=0';
    sdata += '&' + encodeURI('"CM3_12"')+'=0';
    sdata += '&' + encodeURI('"CM3_34"')+'=0';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function onHandmadeCuaxa1() {
    localStorage.setItem("onHandmadeCuaxa1", 1);
    ulr = 'post_data.html';
    sdata = encodeURI('"1ND"')+'=1';
    sdata += '&' + encodeURI('"1NC"')+'=0';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function offHandmadeCuaxa1() {
    localStorage.setItem("onHandmadeCuaxa1", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"1NC"')+'=1';
    sdata += '&' + encodeURI('"1ND"')+'=0';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function onHandmadeCuaxa2() {
    localStorage.setItem("onHandmadeCuaxa2", 1);
    ulr = 'post_data.html';
    sdata = encodeURI('"2ND"')+'=1';
    sdata += '&' + encodeURI('"2NC"')+'=0';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}

function offHandmadeCuaxa2() {
    localStorage.setItem("onHandmadeCuaxa2", 0);
    ulr = 'post_data.html';
    sdata = encodeURI('"2NC"')+'=1';
    sdata += '&' + encodeURI('"2ND"')+'=0';
    $.post(ulr, sdata, function(result2){});
    handleColorBtn();
}