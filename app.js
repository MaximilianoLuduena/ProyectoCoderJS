let saludo = "Bienvenido";
console.log(saludo)

let nombreCliente = prompt("Ingrese Nombre");
let apellidoCliente = prompt("Ingrese apellido");

if (nombreCliente === "") 
{console.log("Necesitas nombre de cliente");}
else if (apellidoCliente === "")
{console.log("Necesitas apellido de cliente");}
else {
console.log(nombreCliente + " " + apellidoCliente)}

let producto = prompt(`Elija una opcion:
1:Mancuernas
2:Barras
3:Discos`);

switch (producto) 
{
    case "1":
        console.log("Mancuernas");
        break;
        case "2":
            console.log("Barras");
            break;
            case "3":
                console.log("Discos")
                break;
                default:
                    console.log("Not Found");
                    break;
}

const carrito = [
    {nombre: "Mancuernas", precio: 2500 },
    {nombre: "Barras", precio: 4000 },
    {nombre: "discos", precio: 3000 },
];

let resultado = carrito.reduce((accum, producto) => {return accum + producto.precio;}, 0);

console.log(resultado);