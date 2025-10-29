function Frequence_des_caracteres(char){
    let freq={};
    for (letter of char){
        if(freq[letter]){
            freq[letter]+=1
        }else{
            freq[letter]=1
        }
    }
    return freq;
}
console.log(Frequence_des_caracteres('hello'))
