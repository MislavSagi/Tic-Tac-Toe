const cube = document.querySelectorAll('.cube');
let lastPlayer = ''; 
let scoreX = 0;
let scoreC = 0;
let draws = 0;
let winner = document.querySelector('.winner')
let winnerText = document.querySelector('.winnerText')
let winnerBack = document.querySelector('.winnerBoard')

let startBoard = document.querySelector('.startBoard');


function choiceP() {
   isTwoPlayerMode = true;
   startBoard.style.opacity = 0;
   startBoard.style.zIndex = -1;
   
}


function checkAllCubes() {
   const cubeContents = [];

   
   for (let i = 1; i <= 9; i++) {
       const cube = document.querySelector(`.cube[data-index="${i}"]`).textContent.trim();
       cubeContents.push(cube);
   }
   
   console.log(cubeContents);


   const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], 
      [2, 4, 6]
  ];

  for (const condition of winningCombinations) {
   const [a, b, c] = condition;
   if (cubeContents[a] && cubeContents[a] === cubeContents[b] && cubeContents[a] === cubeContents[c]) {
       if (cubeContents[a] === 'X') {
           scoreX++;
           winnerText.style.color = "#48C4BD";
           winnerText.textContent = "X Takes the Round";
           winner.style.opacity = "1";
           winner.style.zIndex = '2';
           winnerBack.style.zIndex = "1"
           winnerBack.style.opacity = "0.4";
           
       } else {
           scoreC++;
           winnerText.style.color = "#EEAF41";
           winnerText.textContent = "O Takes the Round";
           winner.style.opacity = "1";
           winner.style.zIndex = '2';
           winnerBack.style.zIndex = "1"
           winnerBack.style.opacity = "0.4";
           

       }
       document.querySelector('.pointsX').textContent = scoreX;
       document.querySelector('.pointsC').textContent = scoreC;
      
       return;
   }
}



if (cubeContents.every(cube => cube !== "")) {
   draws += 1;
   winnerText.style.color = "#ACBEC8";
   winnerText.textContent = "Its a Draw";
   winner.style.opacity = "1";
   winner.style.zIndex = '2';
   winnerBack.style.zIndex = "1"
   winnerBack.style.opacity = "0.4"; 
   document.querySelector('.pointsD').textContent = draws;
}
}


  const resetGame = () => {
   cube.forEach(cube => {
       cube.textContent = "";
       winner.style.opacity = "0";
       winner.style.zIndex = '-1';
       winnerBack.style.zIndex = "-1"
       winnerBack.style.opacity = "0";
   });
   lastPlayer = ''; 
};




cube.forEach(cube => {
   cube.addEventListener('click', () => {
      if(cube.textContent === "") { 
         if (lastPlayer === 'X') {
            cube.textContent = 'O';
            cube.style.color = "#dfb119";
            lastPlayer = 'O'; 
         } else {
            cube.textContent = 'X';
            cube.style.color = "#08c049";
            lastPlayer = 'X'; 
         }}
         const cubes = document.querySelectorAll('.cube'); 

    checkAllCubes()  





   })})


   const reset = document.querySelector('.btnReset'); 

   reset.addEventListener("click", () => {
       cube.forEach(cube => {
           cube.textContent = "";
           scoreC = 0;
           scoreX = 0;
           draws = 0;
           lastPlayer = 'O';
           document.querySelector('.pointsX').textContent = scoreX;
       document.querySelector('.pointsC').textContent = scoreC;
       document.querySelector('.pointsD').textContent = draws;
       });
     
       
   });









function quit() {
   startBoard.style.opacity = 1;
   startBoard.style.zIndex = 1;
   winner.style.opacity = "0";
           winner.style.zIndex = '0';
           winnerBack.style.zIndex = "0"
           winnerBack.style.opacity = "0";
           scoreC = 0;
           scoreX = 0;
           draws = 0;
           document.querySelector('.pointsX').textContent = scoreX;
       document.querySelector('.pointsC').textContent = scoreC;
       document.querySelector('.pointsD').textContent = draws;
           resetGame();
}



