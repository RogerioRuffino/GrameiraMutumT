

const preco = document.getElementById('preco');
const precofrete = document.getElementById('precofrete');


let ent = document.getElementById('input');
let result = document.getElementById('result');

let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

let display1 = document.getElementById('div1').style.display;

let display2 = document.getElementById('div2').style.display;

const callButton = document.getElementById('call-program');
callButton.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/AppAreaCalc/index.html';
});


// taking initial values
precofrete.addEventListener('keyup', myResult );
preco.addEventListener('keyup', myResult );
ent.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);


option_from = inputType.value;
option_to = resultType.value;
option_to = resultapetes.value;
option_to = valor.value;
option_to = m2.value;
option_to = r$frete.value;


// ========================================================
// ============ function strtonum =========================

function strtonum(fl){
		
	if(fl === ""){
		fl =  0;
	}
else {
	fl = fl.replace(".","");
    fl = fl.replace(",",".");
	fl = parseFloat(fl).toFixed(2);
	 }
	return fl;
}

function numberToBr(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

// ========================================================
// ============ function corrigirNumero =========================

  
// +++++++++++++++++++++++++++++++++++++++++++++++  
 //============== function numtostr ====================

 function numtostrW(a, e, r, t) {
	let n = ""
	  , h = j = 0
	  , u = tamanho2 = 0
	  , l = ajd2 = ""
	  , o = Event ? t.which : Event.keyCode;
	if (13 == o || 8 == o)
		return true;
	if (n = String.fromCharCode(o),
	-1 == "0123456789".indexOf(n)) 
		return false;
	for (u = a.value.length,
	h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
		;
	for (l = ""; h < u; h++)
		-1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
	if (l += n,
	0 == (u = l.length) && (a.value = ""),
	1 == u && (a.value = "0" + r + "0" + l),
	2 == u && (a.value = "0" + r + l),
	u > 2) {
		for (ajd2 = "",
		j = 0,
		h = u - 3; h >= 0; h--)
			3 == j && (ajd2 += e,
			j = 0),
			ajd2 += l.charAt(h),
			j++;
		for (a.value = "",
		tamanho2 = ajd2.length,
		h = tamanho2 - 1; h >= 0; h--)
			a.value += ajd2.charAt(h);
		a.value += r + l.substring(u - 2, u);
	}
	return false
  }
  
// ========================================================================
  function numtostr(str,n) {
	var elemento = document.getElementsByTagName('input')[n];
	var valor = elemento.value;
  
	valor = valor + '';
	valor = parseInt(valor.replace(/[\D]+/g, ''));
  
	if(valor.toString().length === 1) {
	  valor = '0,' + valor;
	} else {
	  valor = valor + '';
	  valor = valor.replace(/([0-9]{2})$/g, ",$1");
	  
	  if (valor.length > 6) {
		valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
	  }
	}
	
	elemento.value = valor;
	if(valor == 'NaN') elemento.value = '';
  }
  
  

// ========================================================
// ============ function numtostring =========================


function numtostring(str,n) {
var elemento = document.getElementsByTagName('input')[n];
var vallor = elemento.value;


valor = valor + '';
valor = parseInt(valor.replace(/[\D]+/g, ''));
valor = valor + '';
valor = valor.replace(/([0-9]{2})$/g, ",$1");

if (valor.length > 6) {
 valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
}

elemento.value = valor;
if(valor == 'NaN') elemento.value = '';


}
// ============== function myResult ====================

function myResult(){

    option_from = inputType.value;
    option_to = resultType.value;

// ==============   m2 para PluginArray, tap e r$ ===

    if(option_from === "m2" && option_to==="pal"){

		document.getElementById('div1').style.display = 'block';
        document.getElementById('div2').style.display = 'none';
		var precoToNum = strtonum(preco.value);
		var pfToNum = strtonum(precofrete.value);
		var entradaToNUm = strtonum(input.value);
		var tapetesToNum = ((entradaToNUm) % 50*4);
		var reaisTotalToNum = (entradaToNUm * precoToNum);

		
		result.value = numberToBr(Math.floor(Number(entradaToNUm) / 50));
		resultapetes.value = numberToBr(tapetesToNum);
		valor.value = numberToBr(reaisTotalToNum);
		r$frete.value = numberToBr(pfToNum*entradaToNUm);
	}
	
// ==============   r$ para PluginArray, tap e m2 ===

	else if(option_from === "R$" && option_to==="pal"){
		document.getElementById('div2').style.display = 'block';
    	document.getElementById('div1').style.display = 'none';

		var pToNum = strtonum(preco.value);
		var pfrToNum = strtonum(precofrete.value);
		var eToNUm = strtonum(ent.value);
		var tToNum = (((Number(eToNUm)) % ((50*pToNum))) / (pToNum)*4);
		var m2ToNum = eToNUm/pToNum;
		

		result.value = (Math.floor((eToNUm) / (50*(pToNum))));
		resultapetes.value = numberToBr(tToNum);
		m2.value = numberToBr(eToNUm/pToNum);
		r$frete.value = numberToBr(m2ToNum*pfrToNum);
		
	}}
