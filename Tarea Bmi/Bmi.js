let a;
do {
    a = parseFloat(prompt("Ingrese su peso en kilogramos."));
} while (isNaN(a) || a < 0 || a == 0);

let b;
do {
    b = parseFloat(prompt("Ingrese su altura en metros."));
} while (isNaN(b) || b < 0 || b == 0 );

let bmi = parseFloat(`${a / (b*b)}`);

if (bmi < 18.50) {
   alert("Se encuentra bajo de su peso ideal.")
}
else {x}

if (18.50 < bmi && bmi < 25.00) {
    alert("Se encuentra en su peso ideal.")
}
else {x}

if (25.00 < bmi && bmi < 30.00) {
    alert("Se encuentra en el rango sobrepeso.")
}
else {x}

if (30.00 < bmi) {
    alert("Se encuentra en el rango de obesidad.")
}
