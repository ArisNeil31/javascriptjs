(function(){
		let p = document.getElementsByTagName('p');
		let h1 = document.getElementsByTagName('h1');
		let h2 = document.getElementsByTagName('h2');
		let a = document.getElementsByTagName('a');
		let span = document.getElementsByTagName('span');
		let comments = document.getElementsByTagName('yt-formatted-string');
		var text;

		console.log("Initialization Complete");

		function randomize(){
			switch(Math.floor(Math.random()*10)+1){
				case 1: return "OwO";break;
				case 2: return "UwU";break;
				case 3: return "O_O";break;
				case 4: return "=_=";break;
				case 5: return "(~OwO)~";break;
				case 6: return "(~UwU)~";break;
				case 7: return "(>O_O)>";break;
				case 8: return "(/>o<)/";break;
				case 9: return "(~>_<)~";break;
				case 10: return "(>OwO)>";break;
			}
		}

		console.log("Randomize Declaration Complete");

		for(var aa = 0; aa < p.length; aa++){
			p[aa].innerHTML = randomize();
		}
		for(var b = 0; b < h1.length; b++){
			h1[b].innerHTML = randomize();
		}
		for(var c = 0; c < h2.length; c++){
			h2[c].innerHTML = randomize();
		}
		for(var d = 0; d < p.length; d++){
			a[d].innerHTML = randomize();
		}
		for(var e = 0; e < span.length; e++){
			span[e].innerHTML = randomize();
		}
		for(var f = 0; f < comments.length; f++){
			comments[f].innerHTML = randomize();
		}
	})()
