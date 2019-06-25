//The Final and Dominant one!
var music;
var song;
var amp;
var volhistory = [];



function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  music = loadSound('myBeat.mp3');
  song = loadSound("Next Level.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  song.play();
  amp = new p5.Amplitude();
}



function draw() {
  background(255);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0,random(255),random(255));   
  fill(0,random(255),random(255))

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    
    var r = map(volhistory[i], 0, 1, 100, 1000);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  stroke(random(255))
  fill(random(255),random(255),random(255))
 ellipse(0, 0, 200, vol * 500);

}


    function mousePressed() {
          if (song.isPlaying()) {
            // .isPlaying() returns a boolean
            song.stop();
            music.loop()
            loop();
          } else {
            music.stop()
            song.loop();
            loop();
          }
        }

        function keyPressed(){
          if(keyCode === LEFT_ARROW){
          song.stop();
          music.stop();
          Loop();          
          } 
          else  {
            song.stop();
            music.stop();
            noLoop();
          }
        }
       

        
 