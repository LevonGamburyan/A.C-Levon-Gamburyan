// The Final and Dominant one!
// var music;
// var song;
// var amp;
// var volhistory = [];



// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }

// function preload() {
//   music = loadSound('myBeat.mp3');
//   song = loadSound("Next Level.mp3")
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
//   song.play();
//   amp = new p5.Amplitude();
// }



// function draw() {
//   background(0);
//   var vol = amp.getLevel();
//   volhistory.push(vol);
//   stroke(random(255), 0, random(255));   
//   noFill();

//   translate(width / 2, height / 2);
//   beginShape();
//   for (var i = 0; i < 360; i++) {
    
//     var r = map(volhistory[i], 0, 1, 100, 2000);
//     var x = r * cos(i);
//     var y = r * sin(i);
//     vertex(x, y);
//   }
//   endShape();

//   if (volhistory.length > 360) {
//     volhistory.splice(0, 1);
//   }
// //   ellipse(100, 100, 200, vol * 200);
// }


//     function mousePressed() {
//           if (song.isPlaying()) {
//             // .isPlaying() returns a boolean
//             song.stop();
//             music.loop()
//             loop();
//           } else {
//             music.stop()
//             song.loop();
//             loop();
//           }
//         }

//         function keyPressed(){
//           if(keyCode === LEFT_ARROW){
//           song.stop();
//           music.stop();
//           Loop();          
//           } else  {
//             song.stop();
//             music.stop();
//             noLoop();
//           }
//         }
       

        
// The Final and Dominant one!
var amp;
var volhistory = [];
var mic;

var smoothMicLevel=0;







function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
	mic = new p5.AudioIn()
    mic.start()
}




function draw() {
  background(0);
  micLevel = mic.getLevel();
  console.log(micLevel);  
  smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
  var vol = mic.getLevel();
  volhistory.push(vol);
  stroke(random(255), random(255), random(255));   
  noFill();

  translate(width / 2, height / 2);
  //beginShape();
  for (var i = 0; i < 360; i++) {
    
    var r = map(volhistory[i], 0, 1, 100, 2000);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
//   ellipse(100, 100, 200, vol * 200);
}

// function keyPressed() {
//             if (mic.start()) {
//               // .isPlaying() returns a boolean
//               mic.stop();
//               loop();
//             } else {
//               mic.loop();
//               loop();
//             }
//           }
      

function keyPressed(){
            if(keyCode === DOWN_ARROW){
             mic.stop();          
            }else if(keyCode === UP_ARROW) {
              mic.stop();
              noLoop()
            }
            else  {
              mic.start();
              loop()
            }
          }   