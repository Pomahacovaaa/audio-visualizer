

var song
var fft


function preload() {
    song1 = loadSound('vltava.m4a')
    song2 = loadSound('sarka.mp3')
    song3 = loadSound('song3.mp3')
    song4 = loadSound('song4.mp3')
    song5 = loadSound('song5.mp3')

    song6 = loadSound('song.mp3')
    song7 = loadSound('song2.mp3')
    song8 = loadSound('requiem.mp3')
    song9 = loadSound('clair.mp3')

    song = song1
    
}

function setup() {
    createCanvas(windowWidth, windowHeight * 0.9);
    angleMode(DEGREES)
    fft = new p5.FFT()
    colorMode(HSB);

}

function draw() {
    background(35, 10, 245)
    stroke(255,255,255)
    noFill()
    strokeWeight(2)

    translate(width / 2, height / 2) 


    var wave = fft.waveform()
    beginShape()
    for (var i = 0; i <= 180; i++) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1))

        var r = map(wave[index], -1, 1, 150, 350)

        var x = r* sin(i)
        var y = r * cos(i)

        stroke(20 + sin(i + frameCount) * 2, 45, 55)

        //strokeWeight(sin(i + frameCount)+2)
        

        vertex(x, y)
    }
    endShape()
        beginShape()
    for (var i = 0; i <= 180; i++) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1))

        var r = map(wave[index], -1, 1, 150, 350)

        var x = r* -sin(i)
        var y = r * cos(i)
        vertex(x, y)
    }
    endShape()


  
}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause() 
        noLoop()
    } else {
        song.play()
        loop()
    }
}

function keyPressed() {

    if (key === '1') {
        song.stop()
        song = song1
        song.play()
        document.getElementById("songTitle").innerText = "Vltava"
    }

    if (key === '2') {
        song.stop()
        song = song2
        song.play()
        document.getElementById("songTitle").innerText = "Šárka"
    }

    if (key === '3') {
        song.stop()
        song = song3
        song.play()
        document.getElementById("songTitle").innerText = "Vacation - Mixkit"
    }

    if (key === '4') {
        song.stop()
        song = song4
        song.play()
        document.getElementById("songTitle").innerText = "Meditation - Mixkit"
    }

    if (key === '5') {
        song.stop()
        song = song5
        song.play()
        document.getElementById("songTitle").innerText = "Fright Night - Mixkit"
    }

    if (key === '6') {
        song.stop()
        song = song6
        song.play()
        document.getElementById("songTitle").innerText = "Driving Ambition - Mixkit"
    }

    if (key === '7') {
        song.stop()
        song = song7
        song.play()
        document.getElementById("songTitle").innerText = "Secret Garden - Mixkit"
    }

    if (key === '8') {
        song.stop()
        song = song8
        song.play()
        document.getElementById("songTitle").innerText = "Requiem"
    }

    if (key === '9') {
        song.stop()
        song = song9
        song.play()
        document.getElementById("songTitle").innerText = "Clair de Lune"
    }

    
}


