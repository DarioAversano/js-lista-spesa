//Lista della spesa.
let list = ["uova", "pane", "acqua", "latte",];

//Ciclo For
for (let i=0; i < list.length; i++){
    console.log((i+1) + " " + list[i])
}

//Ciclo While
let cont = 0

while (cont < list.length){
    console.log((cont+1) + " " + list[cont]);
    cont++;
}