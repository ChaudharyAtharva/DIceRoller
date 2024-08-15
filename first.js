function rolldice(){

const btn=document.getElementById("btn");
const num=document.getElementById("num");
const result=document.getElementById("result");
const images=document.getElementById("images");
let temp=Number(num.value);

let values=[];
let image=[];


for(let i=0;i<temp;i++){
    let value=Math.floor(Math.random()*6) + 1;
    values.push(value);
    image.push(`<img src="dice_images/${value}.png">`);
}
result.textContent=`dices: ${values.join(',')}`;
images.innerHTML= image.join('');
}