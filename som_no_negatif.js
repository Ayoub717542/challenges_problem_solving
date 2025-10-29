const prompt =require("prompt-sync")();
let tab =[];
let s = 0;
for (let i= 0;i<4;i++){
    tab[i]=+prompt("donner un nomber  : ")
    if(tab[i]<0){
       break
    }else{
         s=s+tab[i];
    }
}
console.log(s)