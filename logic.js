/*
if (window.location.pathname != "failure.html") {
    currentLocation = window.location.pathname;
}
*/


direct = (pageName) => {
    window.location.assign(pageName);
    sessionStorage.setItem("currentLocation", window.location.pathname)
}

fail = () => {
    window.location.assign("failure.html");
}

failUpdate = () => {
    let data = sessionStorage.getItem("fails");

    if (data == null) {
        sessionStorage.setItem("fails", 0);
    }

    let failCount = parseInt(sessionStorage.getItem("fails"));
    failCount += 1;

    if (failCount == NaN) {
        alert("Something went wrong");
    }

    document.getElementById("fails").innerText = "Fail counter: " + failCount;

    sessionStorage.setItem("fails", failCount);
}

displayFails = () => {
    let failCount = parseInt(sessionStorage.getItem("fails"));

    if (failCount == NaN) {
        alert("Something went wrong")
    }

    document.getElementById("finalFails").innerText = "Fail counter: " + failCount;
}

displayRank = () => {
    const image = document.getElementById("rank");
    const failCount = sessionStorage.getItem("fails");

    if (failCount == 0) {
        image.src = "../images/goodRank.gif";
    }

    else if (failCount <= 5 && failCount != null) {
        image.src = "../images/notBadRank.gif";
    }

    else if (failCount > 5) {
        image.src = "../images/badRank.gif";
    }

    else  {
        image.src = "../images/errorRank.png";
    }

}


/* local files do not support cookies unless localhost is used
failUpdate = () => {
    if (document.cookie == "") {
        document.cookie = "fails=0";
    }

    let failCount = parseInt(document.cookie.substring(6));
    failCount += 1;

    if (failCount == NaN) {
        alert("Your browser does not support local cookies")
    }

    document.getElementById("fails").innerText = "Fail counter: " + failCount;

    document.cookie = "fails=" + failCount;

}

displayFails = () => {
    let failCount = parseInt(document.cookie.substring(6));

    if (failCount == NaN) {
        alert("Your browser does not support local cookies")
    }

    document.getElementById("finalFails").innerText = "Fail counter: " + failCount;
}
*/


qn1 = () => {
    let ans = document.getElementById('qn1Ans').value;

    if (ans === "Hello, my name is Jeff") {
        direct("question2.html");
    }

    else {
        direct("failure.html");
    }
}

qn2 = () => {
    if (window.innerWidth < 700) {
        direct("question3.html");
    }
}

generatePass = () => {
    let password = ""
    for (let i = 0; i < 5; i++) {
        password += Math.floor(Math.random() * 10);
    }

    const img = document.getElementById("qn3Image");
    img.title = password;
}

qn3 = () => {
    const img = document.getElementById("qn3Image");
    let password = img.title;

    let ans = document.getElementById('qn3Ans').value;

    if (ans === password) {
        direct("question4.html");
    }

    else {
        direct("failure.html");;
    }
}

qn5Display = () => {
    document.getElementById("map").style.display = "block";
    document.getElementById("startButton").style.display = "none";
}


retry = () => {
    let retryQn = sessionStorage.getItem("currentLocation")
    direct(retryQn);
}

qn5Bot = (botID, speed) => {
    let time = null;
    let flag = null;
    const bot = document.getElementById(botID);

    const cssObj = window.getComputedStyle(bot);
    let pos = parseInt(cssObj.getPropertyValue("top"));

    clearInterval(time);
    time = setInterval(frame, 4);

    function frame() {
        if (pos <= 60) {
            flag = true;
        }

        if (pos >= 470) {
            flag = false;
        }

        if (flag) {
            pos += speed;
        }

        else {
            pos -= speed;
        }

        bot.style.top = pos + "px"; 
    }

}

