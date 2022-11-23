console.log("hi im alive!")

const partyZone = document.querySelector("#cursor-party-zone");

window.addEventListener("mousemove", function (event) {
    // event -> represent what is happening

    const mouseX = event.clientX
    const mouseY = event.clientY

    partyZone.innerHTML = ""

    const background = document.createElement("div");
    background.classList.add('bg');
    const cursorRect = document.createElement("div");

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColorC = Math.floor(Math.random()*16777215).toString(16);

    cursorRect.classList.add("cursor-rect")
    cursorRect.style.top = `${mouseY}px`;
    cursorRect.style.left = `${mouseX}px`;
    cursorRect.style.background = "#" + randomColor;

    background.style.background = "#19494D";


    partyZone.appendChild(background);
    partyZone.appendChild(cursorRect);


  /*  if (partyZone.childNodes.length > 2) {
        document.querySelector('.bg').remove();
        document.querySelector('.cursor-rect').remove();
    } */

    console.log(partyZone.childNodes);
})