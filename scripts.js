const mirror = document.querySelector('#mirror');
const wh = window.innerHeight;
const ww =  window.innerWidth;

//check if the user has a camera
const hasCamera = async () => {
  let stream = null; 
  const dimensions = { width: ww, height: wh }
  const constraints =  { video: dimensions };

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints)
    mirror.srcObject = stream;
    mirror.onloadedmetadata = e => video.play();
  } catch (error) {
    console.error(error)
  }
}


let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    hasCamera();
  }
}, 100);

// const text = prompt("Cual es tu nombre?:")

// if(text.trim() !== "") {

// }
// nameElement.innerHTML = name;

