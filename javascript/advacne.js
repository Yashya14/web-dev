// call stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

let h1 = document.querySelector('h1');

function changeColor(color,delay,nextColor){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("aqua",1000);
        });
    });
})
// callback nesting -> callback hell 