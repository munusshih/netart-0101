async function getJson() {
    const response = await fetch('paper.json');
    const data = await response.json();
    return data;
}

getJson().then(data => compare(data));

let wW, wH
let isSize
let min
const elem = document.getElementById('title');

function compare(data) {
    wW = Math.floor(window.innerWidth / 2.8333)
    wH = Math.floor(window.innerHeight / 2.8333)
    isSize = false
    min = [1000, 0, 0, ""]

    elem.innerHTML = `The current size is ${wW} x ${wH} mm, which is not any standard papersize.`;

    data.ISO.map(x => changeText(x));
    data.ANSI.map(x => changeText(x));
    data.NorthAmerican.map(x => changeText(x));

    if (!isSize) {
        elem.innerHTML += `<br><br>The closest papersize is: ${min[3]}, ${min[1]} x ${min[2]} mm`;
    }
}

function changeText(x) {

    xW = Math.floor(x.mm[0])
    xH = Math.floor(x.mm[1])
    if (xH > xW) {
        xW = Math.floor(x.mm[1])
        xH = Math.floor(x.mm[0])
    }

    difOne = Math.abs(wW - xW) + Math.abs(wH - xH)
    difTwo = Math.abs(wW - xH) + Math.abs(wH - xW)

    if (min[0] > difOne) {
        min = [difOne, xW, xH, x.name + " (landscape)"]
    } else if (min[0] > difTwo) {
        min = [difTwo, xH, xW, x.name + " (portrait)"]
    }

    if (wW === xW && wH === xH) {
        elem.innerHTML = x.name + " (landscape)";
        elem.innerHTML += "<br>" + wW + " x " + wH + " mm";
        isSize = true

    } else if (wH === xW && wW === xH) {
        elem.innerHTML = x.name + " (portrait)";
        elem.innerHTML += "<br>" + wW + " x " + wH + " mm";
        isSize = true
    }
}

const targetDiv = document.getElementById("sample");
const btn = document.getElementById("toggle");
btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        btn.innerHTML = '+'
        elem.classList.remove("open");
        elem.classList.add("close");
    } else {
        targetDiv.style.display = "block";
        btn.innerHTML = 'x'
        elem.classList.remove("close");
        elem.classList.add("open");
    }
};

window.onresize = function () {
    getJson().then(data => compare(data));
}



// data.ISO.map(x => {
//     maxW = x.points[0] > maxW ? x.points[0] : maxW;
//     maxH = x.points[1] > maxH ? x.points[1] : maxH;
// });
// data.ANSI.map(x => {
//     maxW = x.points[0] > maxW ? x.points[0] : maxW;
//     maxH = x.points[1] > maxH ? x.points[1] : maxH;
// });
// data.NorthAmerican.map(x => {
//     maxW = x.points[0] > maxW ? x.points[0] : maxW;
//     maxH = x.points[1] > maxH ? x.points[1] : maxH;
// });

// console.log(maxW/2)
// console.log(maxH/2)
// 2004 1685