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
let biciPiuLeggera = bici_da_corsa[0];
for (let index = 0; index < bici_da_corsa.length; index++) {
    const unaBici = bici_da_corsa[index];
    if (unaBici.peso_kg<biciPiuLeggera.peso_kg) {
        biciPiuLeggera=bici_da_corsa[index]; 
    }
     
}
document.getElementById('bici').innerHTML=`${biciPiuLeggera.nome} ${biciPiuLeggera.peso_kg}kg`;

