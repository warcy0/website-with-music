audio = new Audio();
            audio.src = "ses.mp3";
            audio.loop = true;
            function play() {
              if(document.getElementById("song").className === "fas fa-play") {
                audio.play();
                document.getElementById("song").className="fas fa-pause";
              } else {
                audio.pause();
                document.getElementById("song").className = "fas fa-play";
              }
            }