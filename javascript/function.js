function sum(a,b){
    let result = a+b;
    console.log(result);
}

sum(2,4);

function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

average(2,5,2);

function table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}

table(2);