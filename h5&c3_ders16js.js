function secme(){
    document.querySelector('#a').onclick=tıkla;
}
function secmeHepsi(){
    var liste=document.querySelectorAll('#a');
    for(var i=0;i<liste.length;i++){
        liste[i].onclick=tıkla;
    }
}
function tıkla(){
    alert('Tıklandı');
}
window.onload=secme;