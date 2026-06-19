let boxes = document.querySelectorAll(".box");
let resetButton =document.querySelector("#reset-btn");

let turn0 = "X";

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],  
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true; // Disable all boxes
        enableBoxes(); // Enable all boxes after disabling them
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false; // Enable all boxes
        box.innerText = ""; // Clear the text in all boxes
    });
};

const resetGame = () => {
    
        turn0 = true; 
        enableBoxes(); // Enable all boxes

    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        //player O
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        } 
         else {
            //player X
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true; // Disable the box after it's clicked
        checkWinner();
    });

});


const checkWinner = () => {
    for(let pattern of winningPatterns) {

        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
            if(posVal1 === posVal2 && posVal2 === posVal3) {
                alert(`Player ${posVal1} wins!`);
                disableBoxes();   // game stop
                return;
            }
        }
    }

    // Draw check
    let isDraw = true;

    for(let box of boxes) {
        if(box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if(isDraw) {
        alert("Game Draw!");
        disableBoxes();
    }
}


resetButton.addEventListener("click", resetGame);








