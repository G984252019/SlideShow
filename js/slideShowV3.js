let count = 1;
const src ="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document. querySelector("div.thumbnails");
const min = 1;
const Max = 19;
let url;
function left(){
  count = count-1;
  if(count < min){
    count = Max;
    thumbnailsElement.children[0].classList.remove("selected");
  }else{
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<10){
    url = src + "0" +count+".jpg";
  }else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function right(){
  count = count+1;
  if(Max<count){
    count = min;
    thumbnailsElement.children[Max-1].classList.remove("selected");
  }else{
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if(count<10){
    url = src + "0" +count+".jpg";
  }else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add("selected");
}

// -----------------------------
let nowPlaying=false;
let timer;
function play(){
  if(!nowPlaying){
    nowPlaying = true;
    autoPlay();
  }
}
function autoPlay(){
  right();
  timer = setTimeout(function(){autoPlay()}, 1000 );
}
function stop(){
  clearTimeout(timer);
  nowPlaying = false;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
  url = src + "01.jpg";
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[min-1].classList.add("selected");
  count = 1;

}
