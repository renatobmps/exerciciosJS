/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const tipoTriangulo = (x, y, z) => {
        
    if(x === y && x === z && y === z){
        console.log('Triangulo Equilátero')
    }else if(x === y || x === z|| y === z){
        console.log('Triangulo Isósceles')
    }else if(x !== y && x !== z && y !== z){
        console.log('Triangulo Escaleno')
    }else{
        console.log(`Valor invalido!
        Inisira 3 numeros.`)
    }
}

tipoTriangulo(2,2,2)
tipoTriangulo(5,2,2)
tipoTriangulo(5,2,3)