// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...

// Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni.

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

// Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);

// Questo è l'elenco degli studenti:

// Id Name Grades
// 213 Marco della Rovere 78
// 110 Paola Cortellessa 96
// 250 Andrea Mantegna 48
// 145 Gaia Borromini 74
// 196 Luigi Grimaldello 68
// 102 Piero della Francesca 50
// 120 Francesca da Polenta 84

const students = [
    {
        id:213,
        nome:'Marco della Rovere',
        voto: '78'
    },
    {
        id:110,
        nome:'Paola Cortellessa',
        voto: '96'
    },
    {
        id:250,
        nome:'Andrea Mantegna',
        voto: '48'
    },
    {
        id:145,
        nome:'Gaia Borromini',
        voto: '74'
    },
    {
        id:196,
        nome:'Luigi Grimandello',
        voto: '68'
    },
    {
        id:102,
        nome:'Piero Della Francesca',
        voto: '50'
    },
    {
        id:120,
        nome:'Francesca Da Polenta',
        voto: '84'
    },
]

students.forEach(studente => studente.targa = studente.nome.toUpperCase());

const arrayFilterVoti= students.filter(studente => parseInt(studente.voto) >= 70);
arrayFilterVoti.forEach(studente => console.log(studente, 'arrayFilterVoti'))

const arrayFilterVotiAndId= students.filter(studente => parseInt(studente.voto) >= 70 && studente.id >= 120 );
arrayFilterVotiAndId.forEach(studente => console.log(studente,'arrayFilterVotiAndId'))

