function palindrome(mot){
let reverseMot='';

for(let i = mot.length-1 ; i>=0; i--){
reverseMot+=mot[i];
}
if(reverseMot == mot){
    return true
}else{
   return false
}

}
console.log(palindrome("level"))
