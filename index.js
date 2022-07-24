let finishBtn = document.getElementById("finish");

finishBtn.addEventListener("click", checkTest)


function checkTest(){
    let points = 0;

    let a1 = document.getElementById('a1').value;
    if (a1 === "75") {
        points++;
    }

    let a2 = document.getElementById('a2').value;
    if (a2 === "200") {
        points++;
    }

    let a3 = document.getElementById('a3').value;
    if (a3 === "-15") {
        points++;
    }

    let a4 = document.getElementById('a4').value;
    if (a4 === "433") {
        points++;
    }

    let a5 = document.getElementById('a5').value;
    if (a5 === "24") {
        points++;
    }

    let a6 = document.getElementById('a6').value;
    if (a6 === "72") {
        points++;
    }

    let a7 = document.getElementById('a7').value;
    if (a7 === "500") {
        points++;
    }

    let a8 = document.getElementById('a8').value;
    if (a8 === "-13") {
        points++;
    }


    alert(`Ваш балл  ${points}`);
    
}
