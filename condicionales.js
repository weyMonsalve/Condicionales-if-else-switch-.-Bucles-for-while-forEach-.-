// condicionales if-else
let edad = 18;
let mayorEdadMensaje = 'El sujeto es mayor de edad';
let menorEdadMensaje = 'El sujeto es menor de edad';
let result = '';

if (edad > 17) {
    result = mayorEdadMensaje;
} else {
    result = menorEdadMensaje;
}


let numero = 2;
let mostrar1 = "este es el numero uno";
let mostar2 = "este no es el numero uno";
let pantalla = '';

if (numero == 1) {
    pantalla = mostrar1
} else {
    pantalla = mostar2
}

let años = 45;
let etapa = '';

if (años < 12) {
    etapa = "Todavia eres muy pequeño"
} else if (años < 19) {
    etapa = "Eres un adolescente"
} else if (años < 35) {
    etapa = "Aun sigues siendo joven"
} else if (años == 40) {
    etapa = "Ya estas en el cuarto piso"
} else {
    etapa = "Aun no has nacido"
}

// end condicionales if-else

// condicionales switch

let estado = 5;
let estadoResult = '';
switch (estado) {
    case 1:
        estadoResult = "El usuario tiene estado: Activo";
        break;
    case 2:
        estadoResult = "El usuario tiene estado: Inactivo";
        break;
    case 3:
        estadoResult = "El usuario tiene estado: Cerrado";
        break;
    case 4:
        estadoResult = "El usuario tiene estado: Retirado";
        break;
    case 5:
        estadoResult = "El usuario tiene estado: Inactivo Falta Pago";
        break;
    case 6:
        estadoResult = "El usuario tiene estado: Inactivo por Almacen";
        break;
    case 0:
        estadoResult = "El usuario tiene estado: Otro";
        break;
    default:
        estadoResult
}

let menu = 2
let menuResul = '';

switch (menu) {
    case 1:
        menuResul = "Agua";
        break;
    case 2:
        menuResul = "Jugo";
        break;
    case 3:
        menuResul = "Soda";
        break;
    case 4:
        menuResul = "cafe";
        break;
    default:
        menuResul

}

let color = 3;
let nombreColor = '';

switch (color) {
    case 1:
        nombreColor = "El color seleccioado es el: Amarillo";
        break;
    case 2:
        nombreColor = "El color seleccioado es el: Azul";
        break;
    case 3:
        nombreColor = "El color seleccioado es el: Rojo";
        break;
    case 4:
        nombreColor = "El color seleccioado es el: Gris";
        break;
    case 5:
        nombreColor = "El color seleccioado es el: Verde";
        break;
    case 6:
        nombreColor = "El color seleccioado es el: Cafe";
        break;
    case 7:
        nombreColor = "El color seleccioado es el: Rosado";
        break;
    case 8:
        nombreColor = "El color seleccioado es el: Morado";
        break;
    default:
        nombreColor;

}

let dia = 3;
let diasDeLaSemana = '';

switch (dia) {
    case 1:
        diasDeLaSemana = "El dia de la semana que elegiste es: Lunes";
        break
    case 2:
        diasDeLaSemana = "El dia de la semana que elegiste es: Martes";
        break
    case 3:
        diasDeLaSemana = "El dia de la semana que elegiste es: Miercoles";
        break
    case 4:
        diasDeLaSemana = "El dia de la semana que elegiste es: Jueves";
        break
    case 5:
        diasDeLaSemana = "El dia de la semana que elegiste es: Viernes";
        break
    case 6:
        diasDeLaSemana = "El dia de la semana que elegiste es: Sabado";
        break
    case 7:
        diasDeLaSemana = "El dia de la semana que elegiste es: Domingo";
        break
    case 0:
        diasDeLaSemana = "El dia de la semana que elegiste: NO ES VALIDO";
        break
    default:
        diasDeLaSemana;

}

let pelicula = 1;
let eleccionP = '';

switch (pelicula) {
    case 1:
        eleccionP = " la Pelicula en cartelera es: TITANIC";
        break;
    case 2:
        eleccionP = " la Pelicula en cartelera es: EL PADRINO";
        break;
    case 3:
        eleccionP = " la Pelicula en cartelera es: MATRIX";
        break;
    case 4:
        eleccionP = " la Pelicula en cartelera es: SUPERMAN";
        break;
    case 5:
        eleccionP = " la Pelicula en cartelera es: X-MEN";
        break;
    default:
        eleccionP
}


let opcion = 2;
let continente = '';

switch (opcion) {
    case 1:
        continente = "El continente de América tiene aproximadamente 35 países.";
    case 2:
        continente = "El continente de Europa tiene aproximadamente 44 países.";
    case 3:
        continente = "El continente de Asia tiene aproximadamente 49 países.";
    case 4:
        continente = "El continente de África tiene aproximadamente 54 países.";
    case 5:
        continente = "El continente de Oceanía tiene aproximadamente 14 países.";
    default:
        continente
}

// end condicionales switch


module.exports = {
    opcion,
    continente
}