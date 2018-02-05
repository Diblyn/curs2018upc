var valores = [true, 5, false, "hola", "adios", 2];
var resultado1, resultado2, resultado3, resultado4, resultado5, resultado11, resultado22, resultado33, resultado44, resultado55

resultado1 = valores[4]<valores[3];
alert("el texto "+valores[0]+" es mayor que el texto " + valores[2]+"? "+ resultado1+"");
resultado2 = valores[1]>valores[5];
alert(resultado2);
resultado3 = valores[2]<=valores[4];
alert(resultado3);
resultado4 = valores[0]>valores[1];
alert(resultado4);
resultado5 = valores[0]>=valores[1];
alert(resultado5);

resultado11 = valores[1] + valores[5];
alert(resultado11);
resultado22 = valores[1] - valores[5];
alert(resultado22);
resultado33 = valores[1] * valores[5];
alert(resultado33);
resultado44 = valores[1] / valores[5];
alert(resultado44);
resultado55 = valores[1] % valores[5];
alert(resultado55);

valor1= valores [1];
valor2= valores[5];
var result = valor1 || valor2;
alert(result);
resultado = valor1 && valor2;
alert(result);