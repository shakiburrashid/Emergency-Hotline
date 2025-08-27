
// ! Love function
const loveIcon =  document.querySelectorAll('.love-count');
let b = 3;
for(const i of loveIcon){
    i.addEventListener('click',()=>{
    document.getElementById("love-number").innerText = ++b;
   })
}