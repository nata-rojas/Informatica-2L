let total = 0;
let sumando = 1;
while (sumando <= 100);
{
    console.log(`Total: ${total}. Sumando ${sumando}`);
    total = total + sumando;
    sumando = sumando + 1;
}
console.log(`La suma es ${total}`);


//do while 
//para pedir input del usuario
let numero;
do {
    numero = prompt("Ingrese un número");
} while (isNaN(numero) || numero < 0);
console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);
