javascript:(function(){
    console.log('Pomodoro Bookmarklet Started');
    const body = document.getElementsByTagName('body');
    const html = document.getElementsByTagName('html');
    const style = document.getElementsByTagName('style');

    console.log('Initialization Finished');

    for(var a = 0; a < style.length; a++){
        style[a].innerHTML+=".AddOnoverlay{position: absolute!important; top:0; left:0; min-height: 100vh; z-index:+50; display: flex; align-items: center; justify-content:center; width: 100%; height: 100%; font-size: 5em; font-weight: 700; color: white; background: rgba(0,0,0,0.75); animation: fade-in 3s ease-in-out;}@keyframes fade-in{0%{opacity: 0;}50%{opacity:1;}100%{opacity: 0;}}";
    }

    console.log('Overlay Style Added');
    body[0].addEventListener("keydown", (e) => {
        if(e.ctrlKey)
        {
            console.log('Ctrl Key is Pressed');

            if(e.keyCode == 16)
            {
                console.log('Pomodoro Executed');
                html[0].innerHTML+="<div class='AddOnoverlay'>KICK IN DA BUTT</div>";
                console.log('Overlay Element Added');
                setTimeout(function(){
                    let AddOnoverlay = document.querySelectorAll('.AddOnoverlay');
                    for(var b = 0; b < AddOnoverlay.length; b++){
                        AddOnoverlay[b].remove();
                        console.log('Overlay Removed');
                    }
                }, 3000);
            
                setTimeout(function(){
                    let AddOnoverlay = document.querySelectorAll('.AddOnoverlay');
                    html[0].innerHTML+="<div class='AddOnoverlay'>BUT U CANT KICK UR BUTT</div>";
                    console.log("It's Break Time");
                    setTimeout(function(){
                        let AddOnoverlay = document.querySelectorAll('.AddOnoverlay');
                        for(var b = 0; b < AddOnoverlay.length; b++){
                            AddOnoverlay[b].remove();
                            console.log('Overlay Removed');  
                        }
                    }, 3000);
                }, 6000);
            }
        }
    })
})()
