function startProject() {
    localStorage.setItem("startProject", 1);
}

function stopProject() {
    localStorage.clear();
}

function onAuto() {
    localStorage.setItem("onAuto", 1);
    localStorage.setItem("onHandmade", 0);
}

function onHandmade() {
    localStorage.setItem("onAuto", 0);
    localStorage.setItem("onHandmade", 1);
}

function onAutoCuaxa1() {
    localStorage.setItem("onAutoCuaxa1", 1);
    localStorage.setItem("onAutoCuaxa2", 0);
}

function onAutoCuaxa2() {
    localStorage.setItem("onAutoCuaxa1", 0);
    localStorage.setItem("onAutoCuaxa2", 1);
}

localStorage.setItem("startProject", 0);
localStorage.setItem("onAuto", 0);
localStorage.setItem("onAutoCuaxa1", 0);
localStorage.setItem("onAutoCuaxa2", 0);
localStorage.setItem("onHandmade", 0);
localStorage.setItem("onHandmadeBom1", 0);
localStorage.setItem("onHandmadeBom2", 0);