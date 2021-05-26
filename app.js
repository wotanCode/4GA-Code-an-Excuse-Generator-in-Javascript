//Variables
let quien = ["El perro ","La puerca ","Mis vecinos ","Mi jefe ","Un Fantasma "];
let accion = ["se comio ", "escondio ", "rompio ", "asusto ", "quemo "];
let que = ["los cables ","la pc ","mi tarea ","las llaves ","mi dinero "];
let cuando = ["hace un momento","ayer","el otro dia","mientras dormia","cuando no viste."];

//funcion para crear un numero aleatorio
function numeroaleatorio(num) {
    var aleatorio = Math.floor(Math.random() * num.length);
    return num[aleatorio];
}
//Funcion para llamar a ese numero aleatorio (en la consola)
function azarconsola() {
    console.log(numeroaleatorio(quien));
    console.log(numeroaleatorio(accion));
    console.log(numeroaleatorio(que));
    console.log(numeroaleatorio(cuando));
}
//funcion para mostrar el cambio
function mostrarmensaje() {
    document.getElementById("excuse").innerHTML =
    numeroaleatorio(quien) +
    numeroaleatorio(accion) +
    numeroaleatorio(que) +
    numeroaleatorio(cuando);
}
azarconsola();