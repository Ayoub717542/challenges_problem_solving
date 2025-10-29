function comter_les_voyelles(chain){
    let cont= 0;
    for (let i = 0; i < chain.length; i++) {
        if (chain[i]=='a' || chain[i]=='e' || chain[i]=='i' || chain[i]=='o' || chain[i]=='u'){
            cont ++
        }
        
    }
    console.log(cont)
}
comter_les_voyelles("bonjour")