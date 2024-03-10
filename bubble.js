let array = [50, 7, 25, 27, 3, 1, 12, 9, 20, 24, 13, 11, 91, 60, 89, 96];
console.log("BEFORE FOR", array);

let comparaison = true;
while (comparaison) {
    comparaison = false;
    for (let index = 0; index < array.length; index++) {
            let numberOfArray = array[index];
            let nextNumber = array[index+1];
            if (numberOfArray > nextNumber){
                    array[index] = nextNumber;
                    array[index+1] = numberOfArray;
                    comparaison = true;
            } 
    }
    console.log("AFTER FOR", array);
}
 



