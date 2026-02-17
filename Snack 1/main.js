console.log('ciacciao');

const bici_da_corsa = [
    {
        nome : 'ChadRacing',
        peso_kg : 6.9
    },
    {
        nome : 'PeakSport',
        peso_kg : 6.6
    },
    {
        nome : 'Chonker',
        peso_kg : 7.9
    },
    {
        nome : 'Sigma',
        peso_kg : 7.3
    },
    {
        nome : '67racing',
        peso_kg : 7.6
    }
]
console.log(bici_da_corsa);
let massaBici = 99999;
let biciPiuLeggera = {};
for (let index = 0; index < bici_da_corsa.length; index++) {
    const unaBici = bici_da_corsa[index];
    if (unaBici.peso_kg<massaBici) {
        massaBici=unaBici.peso_kg;
        biciPiuLeggera=bici_da_corsa[index]; 
    }
     
}
document.getElementById('bici').innerHTML=`${biciPiuLeggera.nome} ${biciPiuLeggera.peso_kg}kg`;

