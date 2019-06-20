window.cipher = {
 encode: (nOffSet, saveText) => {
let cifrada = "";
for (let i = 0; i < saveText.length; i++) {
let newpositionLetter = (saveText[i].charCodeAt()-65+nOffSet)%26+65;
cifrada += String.fromCharCode(newpositionLetter);
}
return cifrada;

},
  decode: (nOffSetDecode,textEncode) => {
    /* Acá va tu código */
let descifrada = "";
for (let i = 0; i < textEncode.length; i++) {
let newpositionLetter2 = (textEncode[i].charCodeAt()-90-nOffSetDecode)%26+90;
 descifrada += String.fromCharCode(parseInt(newpositionLetter2))	 
}
return descifrada;
}
}