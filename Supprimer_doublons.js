const prompt =require("prompt-sync")();
let tab =[];
let unique_tab=[]
for (let i= 0;i <=4;i++){
    tab[i]=prompt("donner les nombers : ")
    if (!tab[i].includes(tab)){
        unique_tab.push(tab[i]);
    }
}
console.log(unique_tab)