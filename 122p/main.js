//inicializar variables, sirven para cambiar o colocar posiscion aleatoria  los dibujos
x = 0;
y = 0;
screenWidth=0
screenHeight=0
pera=""
manzana=""
speechData=""
toNumber=0


//almacenaran lo que escuche la compu
draw_pear = "";//circle
draw_apple = "";//rect


// sintesis de voz a textyo
var SpeechRecognition = window.webkitSpeechRecognition;
  // nuevo reconocimiento de voz
var recognition = new SpeechRecognition();

function preload(){
    pera=loadImage("pera.png")
    manzana=loadImage("apple.png")
}


function start()
{
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";
    // empiece a funcionar la parte de reconocer la voz
    recognition.start();
}
 


//obtiene el resultado de reconocer la voz
recognition.onresult = function(event) {
 console.log(event);


// transcribe lo que escucha a texto
var content = event.results[0][0].transcript;
// muestra en status lo que reconocio en voz y lo muestra en texto
   document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
   toNumber=Number(content)
   // si reconoce circle
      if(Number.isInteger(toNumber))
      {
document.getElementById("status").innnerHTML = "Se empezo a dibujar"

        //
       
        draw_pear = "set";
        draw_apple = "set";
      }
     
}


function setup() {
  //crea el canvas con ese altura y ancho
  screenWidth=window.innerWidth
  screenHeight=window.innerHeight
  canvas = createCanvas(screenWidth, screenHeight-150);
  canvas.position(0, 150)
}


function draw() {
  if(draw_pear == "set")
  {
    for (let index = 1; index <= toNumber; index++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(pera, x, y, 50, 50)
      
    }
    
   
  }


  if(draw_apple == "set")
  {
    for (let index2 = 1; index2 <= toNumber; index2++) {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(manzana, x, y, 50, 50)
      
    }
  }


}
