let fs = require('fs');
let datos = fs.readFileSync(__dirname + '/texto.txt', 'utf-8');
console.log(datos);


function noParesDeContarImparesHasta(numero){
    let cuenta = 0;
    for (i=0; i<=numero; i++){
        if (i%2==1){
            cuenta = cuenta + 1;
        }
    }
    return cuenta;
}

console.log(noParesDeContarImparesHasta(5));

function agregarHttp(url) {
    return 'http://' + url;
}

function procesar(array1,funcion){
    let completada = [];
    for (let i=0; i < array1.length; i++){
        completada.push(funcion(array1[i]));
    }
    return completada;
}

array2 = ['www.h2.com', 'www.chxy.com'];
console.log(procesar(array2, agregarHttp));

// Métodos de array 2

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados = estudiantes.filter(function(elemento){
    return elemento.aprobado == true;
});
let desaprobados = estudiantes.filter(function(elemento){
    return elemento.aprobado == false;
});

let prueba = estudiantes.map(function(n){
    return n.nombre;
})
console.log(desaprobados);

let miFecha = new Date();
console.log(miFecha);
console.log(miFecha.toUTCString());
