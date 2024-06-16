let displayVariable = "";
const equals = document.getElementById("equalsButton");

function addDataToDisplay(event){
    displayVariable += event.target.innerText;
    console.log(displayVariable);

    document.getElementById("display").innerHTML = displayVariable;
}

const buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.addEventListener("click",addDataToDisplay);
});

equals.onclick = function(){
    try{
        document.getElementById("display").innerHTML = eval(displayVariable);
    }
    catch(e){
        displayVariable = "e";
    }

    displayVariable = "" ;
}

