console.log('asdf');

let squadre_di_calcio = [
    {
        nome: 'Inter',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Mialn',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Juventus',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Napoli',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Roma',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Toro',
        'punti fatti': 0,
        falli_subiti : 0
    },
    {
        nome: 'Sampdoria',
        'punti fatti': 0,
        falli_subiti : 0
    }
    
]

for (let index = 0; index < squadre_di_calcio.length; index++) {
    const squadra = squadre_di_calcio[index];
    squadra["punti fatti"]= Math.floor(Math.random()*10);
    squadra.falli_subiti= Math.floor(Math.random()*5)   
}

let sq_di_calcio = [];
for (let index = 0; index < squadre_di_calcio.length; index++) {
    const squadra = squadre_di_calcio[index];
    let squadraDue  = squadra;
    delete squadraDue["punti fatti"];
    sq_di_calcio.push(squadraDue)
}
console.log(sq_di_calcio);
