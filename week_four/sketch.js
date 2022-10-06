const imgs = document.getElementsByTagName('img')
const myTimeout = setInterval(randomPos, 2000)

function randomPos() {

    let zNums = [...Array(imgs.length).keys()]
    let i = 0

    for (let img of imgs) {
        let randomIndex = Math.floor(Math.random() * zNums.length);
        img.style.zIndex = zNums.splice(randomIndex, 1)[0]

        img.style.left = -10 + Math.random() * 70 + "vw";
        img.style.top = randomIndex * 30 + "vh";

        i++
    }
}
