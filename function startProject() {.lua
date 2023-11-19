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

function onAutoBom1() {
    localStorage.setItem("onAutoBom1", 1);
    localStorage.setItem("onAutoBom2", 0);
}

function onAutoBom2() {
    localStorage.setItem("onAutoBom1", 0);
    localStorage.setItem("onAutoBom2", 1);
}

localStorage.setItem("startProject", 0);
localStorage.setItem("onAuto", 0);
localStorage.setItem("onAutoBom1", 0);
localStorage.setItem("onAutoBom2", 0);
localStorage.setItem("onHandmade", 0);
localStorage.setItem("onHandmadeBom1", 0);
localStorage.setItem("onHandmadeBom2", 0);