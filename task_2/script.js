
    let elemCount = document.getElementsByClassName('gallery__img').length;
    let currentTime = new Date();
    let day = currentTime.getDate();
    let month = currentTime.getMonth()+1;
    let year = currentTime.getFullYear();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    if (month < 10){
        month = '0' + month;
    } 
    document.getElementById('gallery__counter').innerHTML = 'Количество фотографий: ' + elemCount;
    document.getElementById('gallery__date').innerHTML = `${day}.${month}.${year}`;
    document.getElementById('gallery__time').innerHTML = hours + ":" + minutes;

    let modal = document.getElementById("myModal");
    let img = document.getElementsByClassName("gallery__img");
    let modalImg = document.getElementById("gallery__img1");
    let captionText = document.getElementById("caption");
    for (i = 0; i < img.length; i++) {
        img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
          }
    }
let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    
  modal.style.display = "none";
}