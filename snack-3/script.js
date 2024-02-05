// Creare un array di oggetti:

// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.

// Stampare in console la bici con peso minore utilizzando il destructuring


const biciclette = [ 
    {
    nome: 'mountanbike',
    peso: 2
},
{
    nome:'bici2',
    peso: 10
},
{
    nome: 'bici3',
    peso: 9
},
{
    nome: 'bici4',
    peso: 5
}
]


biciclette.forEach((bicicletta) =>{
    console.log(bicicletta.peso);
});

const pesoMinore = biciclette.find((bicicletta) =>  {
    return bicicletta.peso <= 2 
    
});
console.log(pesoMinore);