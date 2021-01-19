javascript:(function(){
	console.log('started');
	let style = document.createElement('span');
	let span = document.getElementsByTagName('span');
	let paragraph = document.getElementsByTagName('p');
	console.log('Sequence 2');
	let cardfooter = document.querySelectorAll('.SZ0kZe');
	let cards = document.querySelectorAll('.gHz6xd.Aopndd.rZXyy');
	const styles = document.querySelectorAll('style');
	console.log('Initialization Passed');

	document.getElementsByTagName('head')[0].appendChild(style);

	for(var a = 0; a < styles.length; a++){
		styles[a].innerHTML += ".JwPp0e, .joJglb, .bg6sud{background: #0F0F0F; } .gHz6xd.Aopndd.rZXyy{background: #2A2A2A; height: 150px; overflow: visible; } .rainbowbg{background: linear-gradient(180deg, #36FFE8, #00FF9E, #E4C700, #FC83FF, #2F85FF, #8D2DFE, #36FFE8); position: absolute; filter: blur(5px); top: -3px; left: -3px; bottom: -3px; right: -3px; background-size: 400%; animation: rainbow 10s ease-in-out alternate infinite; } .Tc9hUd, .TQYOZc{z-index: 2; background: #2A2A2A; } .qhnNic.LBlAUc.Aopndd.TIunU{background: #2A2A2A; box-shadow: 0px 0px 5px 5px white; animation: pulse 5s linear alternate infinite, open 0.5s ease-in-out; } @keyframes pulse{0%{box-shadow: 0px 0px 5px 5px rgba(0,0,0,0); } 100%{box-shadow: 0px 0px 5px 5px white; } } @keyframes open{0%{width: 50px; } 100%{width: 100%; } } .YVvGBb.asQXV, .IMvYId.dDKhVc.YVvGBb{color: #fff; } .v7wOcf.ZGnOx{background: black; } .qk0lee.QRiHXd.VBEdtc-Wvd9Cc{background: white; } .d4Fe0d.LBlAUc{background: #2A2A2A; box-shadow: 0px 0px 20px white; } .d4Fe0d.LBlAUc:hover{background: #2D2D2D!important; } @keyframes rainbow{0%{background-position: 0px 0px; } 100%{background-position: 4000px 4000px; } } p, h2, a, span, .EZrbnd.sxa9Pc{color: #fff!important; } .fJ1Vac.kdAl3b{min-height: 100vh; } .OX4Vcb{background: #2A2A2A; } .ndfHFb-c4YZDc-cYSp0e-Oz6c3e.ndfHFb-c4YZDc-cYSp0e-DARUcf-gSKZZ.ndfHFb-c4YZDc-neVct-RCfa3e{filter:invert(1); } a{color:white!important; } h2{color: white!important; } h3{color: white!important; } h4{color: white!important; } .joJglb, .kLHn3, .yeBmWb{background: #2A2A2A; }"
	}
	for(var b = 0; b < span.length; b++){
		span[b].style.color = "#fff";
	}
	for(var c = 0; c < cardfooter.length; c++){
		cardfooter[c].remove();
	}
	for(var d = 0; d < cards.length; d++){
		cards[d].innerHTML += "<div class='rainbowbg'></div>";
	}

	const announcement = document.querySelectorAll('.qhnNic.LBlAUc.Aopndd.TIunU');
	announcement[0].innerHTML += "<div class='rainbowbg'></div>";
	const works = document.querySelectorAll('.d4Fe0d.LBlAUc');

	window.addEventListener("keyup", function(event){
	if (event.keyCode === 1) {
   	event.preventDefault();
	for(var k = 0; k < document.getElementsByTagName('a'); k++){
   		document.getElementsByTagName('a')[k].style.color = "white";
		document.querySelectorAll('.joJglb')[0].style.background = "black";
	}
  }
});

})()
