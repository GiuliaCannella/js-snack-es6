// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi:

// nome del tavolo, nome dell'ospite e posto occupato.

// Generiamo e stampiamo in console la lista per i segnaposto.



const tavoloVip = [
    {
        nome:'Brad Pitt',
        tavolo: 'vikings',
        posto:'21'

    },
    {
        nome:'Johnny Depp',
        tavolo: 'Robin Hood',
        posto:'19'

    },
    {
        nome:'Lady Gaga',
        tavolo: 'the last',
        posto:'7'

    },
    {
        nome:'Cristiano Ronaldo',
        tavolo: 'calcio',
        posto:'24'

    },
    {
        nome:'Georgina Rodriguez',
        tavolo: 'influencer',
        posto:'25'

    }
]

tavoloVip.forEach((tavolo) =>{
    console.log(tavolo.posto);
})