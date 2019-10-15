/*
    Variables de color globales establecidas para toda la app
    Estos colores estan basados en la nomenclatura establecida por 
    https://www.color-blindness.com/color-name-hue/
*/

const black = '#000';
const white = '#FFF';
const torchRed = '#ff1027';
const neonBlue = '#1c43ff';
const darkViolet = '#b602c2';
const limeGreen = '#3dd733';
const goldenPoppy = '#dabb00';
const gamboge = '#ea8d0e';
const persianIndigo = '#311175';
const blackcurrant = '#140a2d';
const blueViolet = '#7d21da';
const turbo = '#f5eb29';
const sapphire = '#6105fe';
const blackberry = '#270827';
const elm = '#2c9177';
const ghost ='#c8c9cb';
const redOrange = '#ff4f30';
const carmine = '#A50136';

//Flat Colors
const flat = {
    black,
    white,
    torchRed,
    neonBlue,
    darkViolet,
    limeGreen,
    goldenPoppy,
    gamboge,
    persianIndigo,
    blackcurrant,
    blueViolet,
    turbo,
    sapphire,
    blackberry,
    elm,
    ghost,
    redOrange,
    carmine
};

//Gradient Colors
const gradient = {
    torchRed: `linear-gradient(135deg, #d50016 0%, ${ torchRed } 100%)`,
    neonBlue: `linear-gradient(135deg, #002d95 0%, ${ neonBlue } 100%)`,
    darkViolet: `linear-gradient(135deg, #a000cc 0%, ${ darkViolet } 100%)`,
    limeGreen: `linear-gradient(135deg, #009e06 0%, ${ limeGreen } 100%)`,
    goldenPoppy: `linear-gradient(135deg, #ee9d00 0%, ${ goldenPoppy } 100%)`,
    gamboge: `linear-gradient(135deg, #e71d17 0%, ${ gamboge } 100%)`,
    persianIndigo: `linear-gradient(135deg,#e97b24 0%, ${ persianIndigo } 100%)`,
    blackcurrant: `linear-gradient(135deg, #dc0228 0%, ${ blackcurrant } 100%)`,
    blueViolet: `linear-gradient(135deg, #fd542d 0%, ${ blueViolet } 100%)`,
    turbo: `linear-gradient(135deg, #f31562 0%, ${ turbo } 100%)`,
    sapphire: `linear-gradient(135deg, #1c4cf8 0%, ${ sapphire } 100%)`,
    blackberry: `linear-gradient(135deg, #a70129 0%, ${ blackberry } 100%)`,
    elm: `linear-gradient(135deg, #441c75 0%, ${ elm } 100%)`,
    ghost: `linear-gradient(135deg, #7e8790, ${ ghost } 100%)`,
    redOrange: `linear-gradient(135deg, #a803e0 0%, ${ redOrange } 100%)`,
    carmine: `linear-gradient(135deg, #EC003B 0%, ${ carmine } 100%)`,
};

const colors = {
    flat,
    gradient,
};

module.exports = colors;