const cliente = {
    nome: 'Marcelo',
    compras: {
        digitais: {
            livros: ['livro 1', 'livro 2'],
            videos: ['video 23', 'video 30'],
        },
        fisicas: {
            cadernos: ['caderno 1'],
            cartas: ['carta 1', 'carta 2'],
        }
    }
}

console.log(cliente.nome);

const {livros, videos} = cliente.compras.digitais;  //fazendo isso, estou utilizando o destructuring.
const {cadernos, cartas} = cliente.compras.fisicas;

console.log({livros, videos});
console.log({cadernos,cartas});

// testando coisas

function testandoObj(teste) {
   if(cliente.compras.digitais = true) {
    livros.forEach(testando => {
      // console.log(testando.reverse());
    });
   }
}

testandoObj();

//  fazendo outro teste 

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const isEven = x => x % 2 === 0;

//numbers.forEach(x => console.log(x % 2 === 0));

const myMap = numbers.map(isEven); // retorna true ou false do isEven
console.log(myMap[5]);

const everNumbers = numbers.filter(isEven);
console.log(everNumbers);

console.log(numbers.reduce((previous, current) => previous + current)); 
//soma todos os valores da array numbers. 

//Ordenando Elementos. 

console.log(numbers.reverse()); // vai inverter a ordem da array

console.log(numbers.sort((a, b) => a - b)); 

// find e findIndex

function multiploDe13(element, index, array) {
    return (element % 13 === 0);
}

console.log(numbers.find(multiploDe13));
console.log(numbers.findIndex(multiploDe13));


// vou fazer um teste com fetch puxando documento em json.

const resJson = document.querySelector('.resultadoJson');
const botaoJson = document.querySelector('.btnJson');

botaoJson.addEventListener('click', mostrarJson)

function mostrarJson() {
    fetch('api.json')
    .then(response => response.text())
    .then(body => {
        resJson.innerHTML = body;
    })
}
