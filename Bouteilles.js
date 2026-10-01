    
    let fullbottles = 9;
    let emptybottles = 0;
    let storeempty =0;
    totaldrink_botteles=0;
    totaldrink_botteles+=fullbottles
    emptybottles += fullbottles;
    fullbottles = 0;
    while(emptybottles >= 3){
    storeempty = Math.floor(emptybottles / 3) ;
        fullbottles+=storeempty;  
        emptybottles -= 3 * storeempty;
        totaldrink_botteles +=storeempty
    } 
console.log(totaldrink_botteles)