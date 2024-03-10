const a = 5;
const b = 3;
let cpt =0;
let stope = false;

const trouverSortie = (a,b) => {
    let sortie = false;
    if(!(!(a!=2) && !(-a/-b != -2))){
        sortie = (!(a != 2) || !(-a/-b != -2));
    }
    console.log(sortie);
    return sortie
}

trouverSortie(a,b);

while (trouverSortie(a,b) && !stope) {
    cpt++;
    console.log("ok cpt", cpt);
    if (cpt >= 10) {
        stope = true;
    }
    
}

console.log("STOPE", stope);