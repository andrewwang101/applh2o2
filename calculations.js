function decodedAlert(msg) {
	var tempelement = document.createElement('div');
  tempelement.innerHTML = msg;
  alert(tempelement.innerHTML);
}

function calcdensity ()
{
	var temperatur = document.getElementById('temperatur');
	var content = document.getElementById('content');
	var t = document.getElementById('t');
	var u = document.getElementById('u');
	var v = document.getElementById('v');
	var w = document.getElementById('w');
	var x = document.getElementById('x');
	var y = document.getElementById('y');
	var z = document.getElementById('z');
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var a3 = document.getElementById('a3');
	var a4 = document.getElementById('a4');
	var a5 = document.getElementById('a5');
	var a6 = document.getElementById('a6');
	var a7 = document.getElementById('a7');
	var a8 = document.getElementById('a8');
	var a9 = document.getElementById('a9');
	var a10 = document.getElementById('a10');
	var a11 = document.getElementById('a11');
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var c3 = document.getElementById('c3');
	var c4 = document.getElementById('c4');
	var c5 = document.getElementById('c5');
	var zwischen11 = document.getElementById('zwischen11');
	var zwischen12 = document.getElementById('zwischen12');
	var zwischen13 = document.getElementById('zwischen13');
	var zwischen14 = document.getElementById('zwischen14');
	var dichte2 = document.getElementById('dichte2');
	t.value = temperatur.value*16.945176;
	u.value = temperatur.value*temperatur.value*0.0079870401;
	v.value = temperatur.value*temperatur.value*temperatur.value*0.000046170461;
	w.value = temperatur.value*temperatur.value*temperatur.value*temperatur.value*0.00000010556302;
	x.value = temperatur.value*temperatur.value*temperatur.value*temperatur.value*temperatur.value*0.00000000028054253;
	y.value = temperatur.value*0.01687985;
	z.value = y.value*1+1;
	a1.value = 999.83952+t.value*1-u.value*1-v.value*1+w.value*1-x.value*1;
	a2.value = a1.value/z.value;
	zwischen11.value = a2.value/1000;
	a3.value = 0.0028732*temperatur.value;
	a4.value = 0.000032488*temperatur.value*temperatur.value;
	a5.value = 0.00000016363*temperatur.value*temperatur.value*temperatur.value;
	zwischen12.value = a4.value*1-a3.value*1-a5.value*1+0.39763;
	a6.value = 0.0035357*temperatur.value;
	a7.value = 0.000060947*temperatur.value*temperatur.value;
	a8.value = 0.00000036165*temperatur.value*temperatur.value*temperatur.value;
	zwischen13.value = 0.02206+a6.value*1-a7.value*1+a8.value*1;
	a9.value = 0.0019414*temperatur.value;
	a10.value = 0.000039061*temperatur.value*temperatur.value;
	a11.value = 0.000000255*temperatur.value*temperatur.value*temperatur.value;
	zwischen14.value = 0.05187-a9.value*1+a10.value*1-a11.value*1;
	c1.value = content.value/100;
	c2.value = zwischen12.value*c1.value;
	c3.value = zwischen13.value*c1.value*c1.value;
	c4.value = zwischen14.value*c1.value*c1.value*c1.value;
	c5.value = zwischen11.value*1+c2.value*1+c3.value*1+c4.value*1;
	dichte2.value = Math.round(c5.value*10000)/10000;
	if (temperatur.value < 0 ) {
    alert(unescape("The temperature is too small. The value is set to 0%B0C."));
    temperatur.value = 0;
  }
	if (temperatur.value > 96 ) {
    alert(unescape("The temperature is too high. The value is set to 96%B0C."));
    temperatur.value = 96;
  }
	if (content.value < 0 ) {
    alert("The content is too small. The value is set to 0.");
    content.value = 0;
  }
	if (content.value > 100 ) {
    alert("The content is too high. The value is set to 100.");
    content.value = 100;
  }
}
function calcontent(channel)
{
	if(channel == 0)
		var idsuffix = 'A';
	else if(channel == 1)
		var idsuffix = 'B';
	var temperaturx = document.getElementById('temperaturx'+idsuffix);
	var contentx = document.getElementById('contentx'+idsuffix);
	var tx = document.getElementById('tx'+idsuffix);
	var ux = document.getElementById('ux'+idsuffix);
	var vx = document.getElementById('vx'+idsuffix);
	var wx = document.getElementById('wx'+idsuffix);
	var xx = document.getElementById('xx'+idsuffix);
	var yx = document.getElementById('yx'+idsuffix);
	var zx = document.getElementById('zx'+idsuffix);
	var ax = document.getElementById('ax'+idsuffix);
	var bx = document.getElementById('bx'+idsuffix);
	var cx = document.getElementById('cx'+idsuffix);
	var dx = document.getElementById('dx'+idsuffix);
	var ex = document.getElementById('ex'+idsuffix);
	var fx = document.getElementById('fx'+idsuffix);
	var gx = document.getElementById('gx'+idsuffix);
	var hx = document.getElementById('hx'+idsuffix);
	var ix = document.getElementById('ix'+idsuffix);
	var jx = document.getElementById('jx'+idsuffix);
	var kx = document.getElementById('kx'+idsuffix);
	var lx = document.getElementById('lx'+idsuffix);
	var mx = document.getElementById('mx'+idsuffix);
	var nx = document.getElementById('nx'+idsuffix);
	var ox = document.getElementById('ox'+idsuffix);
	var px = document.getElementById('px'+idsuffix);
	var qx = document.getElementById('qx'+idsuffix);
	var rx = document.getElementById('rx'+idsuffix);
	var sx = document.getElementById('sx'+idsuffix);
	var a1x = document.getElementById('a1x'+idsuffix);
	var a2x = document.getElementById('a2x'+idsuffix);
	var a3x = document.getElementById('a3x'+idsuffix);
	var a4x = document.getElementById('a4x'+idsuffix);
	var a5x = document.getElementById('a5x'+idsuffix);
	var a6x = document.getElementById('a6x'+idsuffix);
	var a7x = document.getElementById('a7x'+idsuffix);
	var a8x = document.getElementById('a8x'+idsuffix);
	var a9x = document.getElementById('a9x'+idsuffix);
	var a10x = document.getElementById('a10x'+idsuffix);
	var a11x = document.getElementById('a11x'+idsuffix);
	var b1x = document.getElementById('b1x'+idsuffix);
	var b1ax = document.getElementById('b1ax'+idsuffix);
	var b1bx = document.getElementById('b1bx'+idsuffix);
	var b2x = document.getElementById('b2x'+idsuffix);
	var b2ax = document.getElementById('b2ax'+idsuffix);
	var b3x = document.getElementById('b3x'+idsuffix);
	var b4x = document.getElementById('b4x'+idsuffix);
	var b4ax = document.getElementById('b4ax'+idsuffix);
	var b5x = document.getElementById('b5x'+idsuffix);
	var b6x = document.getElementById('b6x'+idsuffix);
	var b7x = document.getElementById('b7x'+idsuffix);
	var b8x = document.getElementById('b8x'+idsuffix);
	var b9x = document.getElementById('b9x'+idsuffix);
	var b10x = document.getElementById('b10x'+idsuffix);
	var zwischen11x = document.getElementById('zwischen11x'+idsuffix);
	var zwischen12x = document.getElementById('zwischen12x'+idsuffix);
	var zwischen13x = document.getElementById('zwischen13x'+idsuffix);
	var zwischen14x = document.getElementById('zwischen14x'+idsuffix);
	var dichtex = document.getElementById('dichtex'+idsuffix);
	var wurzelx = document.getElementById('wurzelx'+idsuffix);
	tx.value = temperaturx.value*16.945176;
	ux.value = temperaturx.value*temperaturx.value*0.0079870401;
	vx.value = temperaturx.value*temperaturx.value*temperaturx.value*0.000046170461;
	wx.value = temperaturx.value*temperaturx.value*temperaturx.value*temperaturx.value*0.00000010556302;
	xx.value = temperaturx.value*temperaturx.value*temperaturx.value*temperaturx.value*temperaturx.value*0.00000000028054253;
	yx.value = temperaturx.value*0.01687985;
	zx.value = yx.value*1+1;
	a1x.value = 999.83952+tx.value*1-ux.value*1-vx.value*1+wx.value*1-xx.value*1;
	a2x.value = a1x.value/zx.value;
	zwischen11x.value = a2x.value/1000;
	a3x.value = 0.0028732*temperaturx.value;
	a4x.value = 0.000032488*temperaturx.value*temperaturx.value;
	a5x.value = 0.00000016363*temperaturx.value*temperaturx.value*temperaturx.value;
	zwischen12x.value = a4x.value*1-a3x.value*1-a5x.value*1+0.39763;
	a6x.value = 0.0035357*temperaturx.value;
	a7x.value = 0.000060947*temperaturx.value*temperaturx.value;
	a8x.value = 0.00000036165*temperaturx.value*temperaturx.value*temperaturx.value;
	zwischen13x.value = 0.02206+a6x.value*1-a7x.value*1+a8x.value*1;
	a9x.value = 0.0019414*temperaturx.value;
	a10x.value = 0.000039061*temperaturx.value*temperaturx.value;
	a11x.value = 0.000000255*temperaturx.value*temperaturx.value*temperaturx.value;
	zwischen14x.value = 0.05187-a9x.value*1+a10x.value*1-a11x.value*1;
	ax.value = zwischen12x.value*zwischen13x.value*zwischen14x.value*36;
	cx.value = dichtex.value*1-zwischen11x.value*1;
	bx.value = zwischen14x.value*zwischen14x.value*cx.value*108;
	dx.value = zwischen13x.value*zwischen13x.value*zwischen13x.value*8;
	gx.value = zwischen12x.value*zwischen12x.value*zwischen12x.value*zwischen14x.value*4;
	hx.value = zwischen12x.value*zwischen13x.value;
	ix.value = hx.value*hx.value;
	jx.value = zwischen12x.value*zwischen13x.value*zwischen14x.value*cx.value*18;
	kx.value = zwischen14x.value*dichtex.value;
	lx.value = kx.value*kx.value*27;
	mx.value = zwischen14x.value*zwischen14x.value*dichtex.value*zwischen11x.value*54;
	nx.value = zwischen13x.value*zwischen13x.value*zwischen13x.value*dichtex.value*4;
	ox.value = zwischen11x.value*zwischen14x.value;
	px.value = ox.value*ox.value*27;
	qx.value = zwischen13x.value*zwischen13x.value*zwischen13x.value*zwischen11x.value*4;
	fx.value = gx.value*1-ix.value*1+jx.value*1+lx.value*1-mx.value*1-nx.value*1+px.value*1+qx.value*1;
	wurzelx.value = Math.sqrt(fx.value);
	ex.value = zwischen14x.value*wurzelx.value*20.78460969;
	rx.value = ax.value*1+bx.value*1-dx.value*1+ex.value*1;
	sx.value = Math.pow(rx.value,1/3);
	b1x.value = zwischen13x.value*zwischen13x.value;
	b1ax.value = zwischen14x.value*zwischen12x.value*3;
	b1bx.value = b1ax.value*1-b1x.value*1;
	b2x.value = zwischen14x.value*6;
	b2ax.value = 1/b2x.value;
	b3x.value = b2ax.value*sx.value;
	b4x.value = 2/3;
	b4ax.value = b4x.value*b1bx.value;
	b5x.value = b4ax.value/zwischen14x.value;
	b6x.value = b5x.value/sx.value;
	b7x.value = zwischen13x.value/zwischen14x.value;
	b8x.value = 1/3;
	b9x.value = b7x.value*b8x.value;
	b10x.value = b3x.value*1-b6x.value*1-b9x.value*1;
	contentx.value = Math.round(b10x.value*100*100)/100;
 	if (contentx.value > 100 ) {
    alert("Content above 100%. Please check your input.");
		if (temperaturx.value < 0 ) {
      alert(unescape("The temperature is too small. The value is set to 0%B0C."));
      temperaturx.value = 0;
    }
		if (temperaturx.value > 96 ) {
      alert(unescape("The temperature is too high. The value is set to 96%B0C."));
      temperaturx.value = 96;
    }
		if (dichtex.value < 1.0000 ) {
      alert("The density is too small. The value is set to 1.0000.");
      contentx.value = 1.0000;
    }
		if (dichtex.value > 1.4710 ) {
      alert("The density is too high. The value is set to 1.4710.");
      contentx.value = 1.4710;
    }
	}
}

function calmix()
{
	var percentA = document.getElementById('contentxA');
	var percentB = document.getElementById('contentxB');
	var target_percent = document.getElementById('target_percent');
	var target_weight = document.getElementById('target_weight');
	var weightA = document.getElementById('targetxA');
	var weightB = document.getElementById('targetxB');
	
	var weight_percentA = document.getElementById('wpA');
	var weight_percentB = document.getElementById('wpB');
	
	weight_percentA.value = (target_percent.value-percentB.value)/(percentA.value-percentB.value);
	weight_percentB.value = (target_percent.value-percentA.value)/(percentB.value-percentA.value);

	weightA.value = Math.round(weight_percentA.value * target_weight.value*100)/100;
	weightB.value = Math.round(weight_percentB.value * target_weight.value*100)/100;

 	if (!((percentA.value<target_percent.value && percentB.value>target_percent.value)||(percentA.value>target_percent.value && percentB.value<target_percent.value))) {
      alert("Input range does not contain target concentration. Imposible to mix.");
      weightA.value = -1;
      weightB.value = -1;
 	}
 	if (percentA.value == percentB.value) {
      alert("Same Percentage, Check input");
      weightA.value = -1;
      weightB.value = -1;
 	}

 	if (target_percent.value > 100 ) {
    	alert("Content above 100%. Please check your input.");
    	weightA.value = -1;
      	weightB.value = -1;
    }
	if (target_percent.value < 0 ) {
    	alert("Content above 0%. Please check your input.");
    	weightA.value = -1;
      	weightB.value = -1;
    }
}
