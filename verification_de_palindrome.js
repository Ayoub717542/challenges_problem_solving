function checkSame(mot){
let reverseMot;
reverseMot = mot.split("").reverse().join("");
if(mot == reverseMot){
    return true
}else{
   return false
}

}
console.log(checkSame("bonjour"))