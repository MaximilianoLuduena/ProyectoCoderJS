let saludo = "Bienvenido";
console.log(saludo)

let nombrecliente = prompt("Ingrese Nombre");
let apellidocliente = prompt("Ingrese apellido");

if (nombrecliente === "") 
{console.log("Necesitas nombre de cliente");}
else if (apellidocliente === "")
{console.log("Necesitas apellido de cliente");}
else {
console.log(nombrecliente + " " + apellidocliente)}

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