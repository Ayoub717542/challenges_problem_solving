const prompt =require("prompt-sync")();

function numberWays(){
    let n = prompt("donner number de steps : ")
    let a = 1;
    let b = 2;
    let s;
    if (n == 1 )return 1;
    if (n == 2)return 2;    
    for (let i = 3; i <= n ; i++){
        s = a+b;
        a=b;
        b=s;
    }
    
    return b;
}
console.log(numberWays())