function cizim(){
    var can=document.getElementById('cizimalani');
    canvas= can.getContext('2d');
    var grad=canvas.createLinearGradient(0,0,100,100);
    grad.addColorStop(0.0,"red");
    grad.addColorStop(0.5,"yellow");
    grad.addColorStop(1.0,"blue");
    canvas.fillStyle=grad;
    canvas.fillRect(0,0,100,100);
    /*
    canvas.strokeStyle="red";
    canvas.fillStyle="yellow";
    canvas.strokeRect(25,25,100,200);
    canvas.strokeRect(-25,-25,100,200);
    canvas.fillRect(250,250,100,200);
    canvas.clearRect(260,260,80,180);
    for(var i=0;i<10;i++){
       canvas.fillRect(0+i*50,0+i*50,50,50);
       canvas.clearRect(10+i*50,10+i*50,30,30);
   }
*/
}
window.onload=cizim;