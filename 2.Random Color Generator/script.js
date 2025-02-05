// const getColor = () => {
//     // Hex Code
//     const randomNumber = Math.floor(Math.random() * 16777215);
//     const randomCode = "#" + randomNumber.toString(16);
//     document.body.style.backgroundColor = randomCode;
//     document.getElementById("color-code").innerText = randomCode;

//     navigator.clipboard.writeText(randomCode)
// }

// //event call
// document.getElementById("btn").addEventListener(
//     "click",
//     getColor
// )


// // init call
// getColor();



const getColor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" +randomNumber.toString(16);
    console.log(randomNumber, randomCode);
   document.body.style.backgroundColor = randomCode; 
   document.getElementById("color-code").innerText = randomCode;
   navigator.clipboard.writeText(randomCode);


}
document.getElementById("btn").addEventListener("click",
     getColor)

getColor();