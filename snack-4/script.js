// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
//  nome, punti fatti, falli subiti.

// nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli
//  subiti e stampiamo tutto in console.

const getRandomNumbers = (min,max) => {
    return Math.floor(Math.random() * max + 1 - min) + min
};

const squadre = [
  {
    nome: "milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "juve",
    punti: 0,
    falli: 0,
  },
  {
    nome: "roma",
    punti: 0,
    falli: 0,
  },
  {
    nome: "lazio",
    punti: 0,
    falli: 0,
  },
];

// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
for (const squadra of squadre) {
    squadra.falli = getRandomNumbers(1, 100);
    squadra.punti = getRandomNumbers(1, 80);
}

const teamsFouls = squadre.map(({nome , falli}) => {
    return {
        nome,
        falli
    }
});

console.log(teamsFouls);

