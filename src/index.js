/*Acá va tu código*/
document.getElementById("btnName").addEventListener("click", welcome);
function welcome()
{
let saveName = document.getElementById("name").value;
document.getElementById("saveName").innerHTML = saveName;
document.getElementById("paginaPrincipal").style.display = "none";
document.getElementById("hellow").style.display = "block";
}

document.getElementById("boton1").addEventListener("click",steepone);
function steepone()
{
document.getElementById("hellow").style.display = "none";
document.getElementById("accionCifrar").style.display = "block";
document.getElementById("decode").style.display = "none";
}

document.getElementById("boton2").addEventListener("click", decode);
function decode()
{
document.getElementById("hellow").style.display = "none";
document.getElementById("decode").style.display = "block";
}

document.getElementById("btnCipher").addEventListener("click", finalmessage);
function finalmessage()
{
let saveText = document.getElementById("msg1").value.toUpperCase() 
//document.getElementById("msg1").value = cipher.encode(nOffSet,saveText);
let nOffSet = parseInt(document.getElementById("offSetCipher").value); 
document.getElementById("msgSecret").innerHTML = cipher.encode(nOffSet, saveText);

document.getElementById("accionCifrar").style.display = "none";
document.getElementById("cipherOk").style.display = "block";
}

document.getElementById("btnDecipher").addEventListener("click", finalmessage2);
function finalmessage2()
{
let saveCipher = document.getElementById("textEncode").value.toUpperCase();
let nOffSetDecode = parseInt(document.getElementById("offSetDecode").value); 
document.getElementById("msgDecode").innerHTML = cipher.decode(nOffSetDecode, saveCipher);
document.getElementById("decode").style.display = "none";
document.getElementById("decodeOk").style.display = "block";
}

document.getElementById("backBtn").addEventListener("click", backToCipher);
function backToCipher ()
{
document.getElementById("cipherOk").style.display = "none";
document.getElementById("accionCifrar").style.display = "block";
}
document.getElementById("exitBtn").addEventListener("click", cerrar);
function cerrar()
{
window.close();

}
document.getElementById("backBtn2").addEventListener("click" , backToDecipher);
function backToDecipher()
{
document.getElementById("decodeOk").style.display = "none";
document.getElementById("decode").style.display = "block";
}


document.getElementById("share").addEventListener("click", compartir);
function compartir(){}
document.getElementById("exitBtn2").addEventListener("click", closed);
function closed()
{
window.close();

}


// Para (variable i desde 0;mientras el valor de i sea menor al largo del contenido de savetext ; se incremente de a uno)	
// Para (variable i desde 0;mientras el valor de i sea menor al largo del contenido de savetext ; se incremente de a uno)	
//aqui iba el for y su formula, y el return variable "cifrada"



// Para (variable i desde 0;mientras el valor de i sea menor al largo del contenido de savetext ; se incremente de a uno)	
//aqui iba el for y su formula 
