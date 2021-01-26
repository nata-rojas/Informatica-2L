let suma = 0;
let i = 3;

while (i <= 10000) 
{
    suma = suma + i;
    i = i + 3
}


let suma2 = 0;
let a = 5;

while (a <= 10000) 
{
    suma2 = suma2 + i;
    a = a + 5
}


let suma3 = 0;
let b = 5;
let multiplicación = b*3;

do {suma3 = suma3 + multiplicación
        b = b + 5
}
while(multiplicación < 10000)


let sumatotal = (suma + suma2) - (suma3 * 2);
console.log (sumatotal)
