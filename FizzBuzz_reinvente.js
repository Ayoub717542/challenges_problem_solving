const prompt =require("prompt-sync")();

let n = prompt("donner un stoped number : ")

for (let i = 1 ; i <=n ;i++){
    if (i%3==0 && i%5 == 0){
        console.log("teachland")
    }else if(i%3==0){
        console.log("teach")
    }else if (i%5==0){
        console.log("land")
    }else{
        console.log(i)
    }
}