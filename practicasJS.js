function cantidadCaracter (stringo , caracter){
    let cantidad = 0;
    for(let i = 0; i < stringo.length; i++){
        if(stringo[i] == caracter){
            cantidad++
        }
    }
    alert(`${caracter} se repite ${cantidad} veces`);
}
function cantidadCaracterBis (stringo){
    let resultado = [];
    let letrasUsadas = [];
    let cantidad = 0;
    let i;
    let j;
    let validacion = true;
    for(i = 0; i < stringo.length; i++){
        for(j = 0; j < stringo.length; j++){
            if(j<i){
                continue;
            }
            if(stringo[i] == stringo[j]){
                cantidad++
            }
        }
        if(cantidad <= 1){
            cantidad = 0;
            continue;
        }else if(resultado.length == 0){
            elemento = {
                caracter: stringo[i],
                repite: cantidad
            }
            resultado.push(elemento)
            cantidad = 0;
            continue;
        }
        for(let k = 0; k < resultado.length; k++){
            if(stringo[i] === resultado[k].caracter){
                validacion = false;
                break;
            }
        }
        if(validacion == true){
            elemento = {
                caracter: stringo[i],
                repite: cantidad
            }
            resultado.push(elemento);
            validacion = true;
        }
        cantidad = 0;
    }
    for(let l = 0; l < resultado.length; l++){
        alert(`El caracter: ${resultado[l].caracter}, se repite: ${resultado[l].repite}`);
    }
    if(resultado.length == 0){
        alert("No se encontro ningun caracter repetido")
    }
}
function invertirArraigo (stringo){
    let strin = "";
    let contador;
    let reemplazo;
    let back = stringo.length - 1;
    for(contador = 0; contador < (stringo.length); contador++){
        strin = strin + stringo[back];
        back = back - 1;   
    }
    alert(strin);
}
function swap (a, b){

    a = parseInt(a)
    b = parseInt(b)

    a = a + b;
    b = a - b;
    a = a - b;

    alert(`El valor de A ahora es ${a} y el de B es ${b} `)
}
function sumaRecursiva(num){
    let contador = 0;
    for(let i = 0; i < num.length; i++){
        contador = contador + parseInt(num[i]);
    }
    contador = contador + "";
    if(contador.length != 1){
        contador = sumaRecursiva(contador)
    }
    return contador;
}
function mergear(stringoA, nA, stringoB, nB){
    alert(` stringoA: ${stringoA}
            nA: ${nA}
            stringoB: ${stringoB}
            nB: ${nB}`)
    let i;
    let stringoFinal = "";
    if(nA == nB){
        for(i=0; i < nA; i++){
            stringoFinal = stringoFinal + stringoA[i] + stringoB[i];
        }
        return stringoFinal;
    }else if(nA < nB){
        for(i = 0; i < nA; i++){
            stringoFinal = stringoFinal + stringoA[i] + stringoB[i];
        }
        for(i; i < nB; i++){
            stringoFinal = stringoFinal + stringoB[i];
        }
        return stringoFinal;
    }else{
        for(i = 0; i < nB; i++){
            stringoFinal = stringoFinal + stringoA[i] + stringoB[i];
        }
        for(i; i < nA; i++){
            stringoFinal = stringoFinal + stringoA[i];
        }
        return stringoFinal;
    }
}
let opcion;
while(opcion != 9) {

    opcion = prompt(`Practica para Applaudo Studios:
    1.Cantidad de veces que se repite un caracter
    1bis.Cuantas veces un string repite sus caracteres)
    2.Invertir un array
    3.Swap sin una tercer variable
    4.Sumatoria de numero recursiva
    5.Mergear dos arrays
    9.Salir`);

    switch(opcion){
        case "1":
            cantidadCaracter(prompt("Ingrese una texto"), prompt("Ingrese el caracter que desea saber cuantas veces se repite"));
            break;
        case '1bis':
            cantidadCaracterBis(prompt("Ingrese un texto"))
            break;
        case '2':
            invertirArraigo(prompt("Ingrese un array a invertir"))
            break;
        case "3":
            swap(prompt("Ingrese A") , prompt("Ingrese B"));
            break;
        case "4":
            alert(sumaRecursiva(prompt("Ingrese su numero")))
            break;
        case "5":
            let a = prompt("Ingrese el primer array");
            let b = prompt("Ingrese el segundo array");
            alert("El array mergeado es: "+mergear(a, a.length, b, b.length));
            break;
        case "9":
            alert("Adios")
            break;
        default:
            alert("Ingrese un valor valido");
    }
}