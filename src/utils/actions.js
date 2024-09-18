import { codes } from "./codes";
import { resetBlinkEffect } from './utils.js';

const result = document.getElementById("result");
const textImage = document.getElementById("text-image");
const doritoVideo = document.getElementById('doritoVideo');
const videoContainer = document.getElementById('videoContainer');
const babyBillImage = document.getElementById('babyBillImage');
const contentRevealSound = document.getElementById('content-reveal');
const yoyoImage = document.getElementById('yoyoImage');
const opacityContainer = document.querySelector('.opacity__container');
const resurrectionImage = document.getElementById('resurrectionImage');
const buttonCloseBottom = document.getElementById('close__container-bottom');
const notApproved = document.getElementById('notApproved');
const imageContainer = document.getElementById('imageContainer');
const scientistImage = document.getElementById("scientistImage");
const stahpSound = document.getElementById('stahpSound');
const lamarImage = document.getElementById("lamarImage");
const hl3Image = document.getElementById("hl3Image");
const sadleysBar = document.getElementById("sadleysBar");
const burnedInsideVideo = document.getElementById('burnedInsideVideo');
const cardBill = document.getElementById("cardBill");
const cloneDipper = document.getElementById("cloneDipper");
const conspiracyVideo = document.getElementById("conspiracyVideo");
const jeffVideo = document.getElementById("jeffVideo");
const ouijaBIll = document.getElementById("ouijaBIll");
const planchetteBill = document.getElementById("planchetteBill");
const deerteethGif = document.getElementById("deerteethGif");
const dionarap = document.getElementById("dionarap");
const rickrollVideo = document.getElementById('rickrollVideo');
const discoGirl = document.getElementById('discoGirl');
const axolotVideo = document.getElementById('axolotVideo');
const marceloVideo = document.getElementById('marceloVideo');
const dotaVideo = document.getElementById('dotaVideo');
const billWellMeetAgainAudio = document.getElementById('billWellMeetAgainAudio');
const billWellMeetAgainVideo = document.getElementById('billWellMeetAgainVideo');

export const actions = {
  "MYSTERY": () => {
    resetBlinkEffect(true);
    result.innerText = codes["MYSTERY"];
    setTimeout(() => {window.location.href = "/mystery";}, 4000); 
  },
  "BILL": () => {
    resetBlinkEffect(true);
    result.innerText = codes["BILL"];
    setTimeout(() => window.open("https://en.wikipedia.org/wiki/Eye_of_Providence", "_blank"), 1000);
  },
  "BILLCIPHER": () => {
    resetBlinkEffect(true);
    result.innerText = codes["BILLCIPHER"];
    setTimeout(() => window.open("https://en.wikipedia.org/wiki/Triangle", "_blank"), 1000);
  },
  "DORITO": () => {
    result.innerText = codes["DORITO"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    doritoVideo.classList.add("visible");
    doritoVideo.play();

    doritoVideo.addEventListener('ended', () => {
      doritoVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "CHIP": () => {
    result.innerText = codes["CHIP"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    doritoVideo.classList.add("visible");
    doritoVideo.play();

    doritoVideo.addEventListener('ended', () => {
      doritoVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "BABY": () => {
    imageContainer.style.display = 'flex';
    babyBillImage.classList.add("visible")
    result.innerText = '';
    textImage.innerText = codes["BABY"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "BABYBILL": () => {
    imageContainer.style.display = 'flex';
    babyBillImage.classList.add("visible")
    result.innerText = '';
    textImage.innerText = codes["BABY"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "YOYO": () => {
    imageContainer.style.display = 'flex';
    yoyoImage.classList.add("visible")
    result.innerText = '';
    textImage.innerText = codes["YOYO"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "MUERTE": () => {
    imageContainer.style.display = 'flex';
    resurrectionImage.classList.add("visible")
    result.innerText = '';
    textImage.innerText = codes["MUERTE"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "CUM": () => {
    imageContainer.style.display = 'flex';
    notApproved.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "ASSHOLE": () => {
    imageContainer.style.display = 'flex';
    notApproved.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "BITCH": () => {
    imageContainer.style.display = 'flex';
    notApproved.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "CUNT": () => {
    imageContainer.style.display = 'flex';
    notApproved.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "DICK": () => {
    imageContainer.style.display = 'flex';
    notApproved.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "HL1": () => {
    imageContainer.style.display = 'flex';
    scientistImage.classList.add("visible");
    result.innerText = '';
    textImage.innerText = codes["HL1"];
    stahpSound.play();
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "HL2": () => {
    imageContainer.style.display = 'flex';
    lamarImage.classList.add("visible");
    result.innerText = '';
    textImage.innerText = codes["HL2"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "HL3": () => {
    imageContainer.style.display = 'flex';
    hl3Image.classList.add("visible");
    result.innerText = '';
    textImage.innerText = codes["HL3"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "CRYPTOGRAMCODEX": () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/CRYPTOGRAM CODEX.zip"; // Ruta del archivo
    downloadLink.download = "CRYPTOGRAM CODEX.zip"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
    resetBlinkEffect(true);
    result.innerText = codes["CRYPTOGRAMCODEX"];
  },
  "BREAKUP": () => {
    imageContainer.style.display = 'flex';
    sadleysBar.classList.add("visible");
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/OSADLEYSLOGO.zip"; // Ruta del archivo
    downloadLink.download = "OSADLEYSLOGO.zip"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
    resetBlinkEffect(true);
    result.innerText = '';
    textImage.innerText = codes["BREAKUP"];
  },
  "BURNEDINSIDE": () => {
    result.innerText = codes["BURNEDINSIDE"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    burnedInsideVideo.classList.add("visible");
    burnedInsideVideo.play();

    burnedInsideVideo.addEventListener('ended', () => {
      burnedInsideVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "DISPENSEMYTREAT": () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/BILLS FILES DO NOT OPEN!!.zip"; // Ruta del archivo
    downloadLink.download = "BILLS FILES DO NOT OPEN!!.zip"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
    resetBlinkEffect(true);
    result.innerText = codes["DISPENSEMYTREAT"];
  },
  "CARD": () => {
    imageContainer.style.display = 'flex';
    cardBill.classList.add("visible");
    buttonCloseBottom.classList.add("not-display");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "CLONE": () => {
    imageContainer.style.display = 'flex';
    cloneDipper.classList.add("visible")
    result.innerText = '';
    textImage.innerText = codes["CLONE"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "CONSPIRACY": () => {
    result.innerText = codes["CONSPIRACY"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    conspiracyVideo.classList.add("visible");
    conspiracyVideo.play();

    conspiracyVideo.addEventListener('ended', () => {
      conspiracyVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "CRAZ": () => {
    result.innerText = codes["CRAZ"];

    resetBlinkEffect(true);
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=lkQE5wuBFeY", "_blank");
    }, 1000); 
  },
  "CREEPYPASTA": () => {
    result.innerText = codes["CREEPYPASTA"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    jeffVideo.classList.add("visible");
    jeffVideo.play();

    jeffVideo.addEventListener('ended', () => {
      jeffVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "CURSEWITTEBANE": () => {
    imageContainer.style.display = 'flex';
    ouijaBIll.classList.add("visible");
    planchetteBill.classList.add("visible");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/OUIJA.zip"; // Ruta del archivo
    downloadLink.download = "OUIJA.zip"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
  },
  "DEERTEETH": () => {
    imageContainer.style.display = 'flex';
    deerteethGif.classList.add("visible");
    result.innerText = '';
    textImage.innerText = codes["DEERTEETH"];
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "DIONARAP": () => {
    imageContainer.style.display = 'flex';
    dionarap.classList.add("visible");
    result.innerText = '';
    textImage.innerText = '';
    contentRevealSound.volume = 1;
    contentRevealSound.play();
  },
  "DIPPYFRESH": () => {
    result.innerText = codes["DIPPYFRESH"];

    resetBlinkEffect(true);
    setTimeout(() => {
      window.open("https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F4p4142atrf381.jpg", "_blank");
    }, 1000);
  },
  "DISCOGIRL": () => {
    resetBlinkEffect(true);
    discoGirl.currentTime = 0;
    discoGirl.volume = 1;
    discoGirl.play();
    document.getElementById("result").innerText = result;
  },
  "RICK": () => {
    result.innerText = codes["RICK"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    rickrollVideo.classList.add("visible");
    rickrollVideo.play();

    rickrollVideo.addEventListener('ended', () => {
      rickrollVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "DOESGODEXIST": () => {
    result.innerText = codes["DOESGODEXIST"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    axolotVideo.classList.add("visible");
    axolotVideo.play();

    axolotVideo.addEventListener('ended', () => {
      axolotVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "FACEOFGOD": () => {
    result.innerText = codes["FACEOFGOD"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    axolotVideo.classList.add("visible");
    axolotVideo.play();

    axolotVideo.addEventListener('ended', () => {
      axolotVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "MARCELO": () => {
    result.innerText = codes["MARCELO"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    marceloVideo.classList.add("visible");
    marceloVideo.volume = 0.7;
    marceloVideo.play();

    marceloVideo.addEventListener('ended', () => {
      marceloVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "DOTA": () => {
    result.innerText = codes["DOTA"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    dotaVideo.classList.add("visible");
    dotaVideo.play();

    dotaVideo.addEventListener('ended', () => {
      dotaVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "WELLMEETAGAIN": () => {
    result.innerText = codes["WELLMEETAGAIN"];

    opacityContainer.classList.remove('loaded');
    videoContainer.style.display = 'block';
    billWellMeetAgainVideo.classList.add("visible");
    billWellMeetAgainVideo.play();
    billWellMeetAgainAudio.play();

    billWellMeetAgainVideo.addEventListener('ended', () => {
      billWellMeetAgainVideo.classList.remove("visible");
      videoContainer.style.display = 'none'; // Oculta el video después de reproducirse
      opacityContainer.classList.add('loaded'); // Asegura que la sección esté completamente visible
    });
  },
  "DECODEX": () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/DECODEX FILES.rar"; // Ruta del archivo
    downloadLink.download = "DECODEX FILES.rar"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
    resetBlinkEffect(true);
    result.innerText = codes["DECODEX"];
  },
  "CODES": () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/download/CODES.txt"; // Ruta del archivo
    downloadLink.download = "CODES.txt"; // Nombre del archivo para descargar
    document.body.appendChild(downloadLink); // Agregar al DOM
    downloadLink.click(); // Simula un clic para iniciar la descarga
    document.body.removeChild(downloadLink); // Elimina el enlace del DOM
    resetBlinkEffect(true);
    result.innerText = codes["CODES"];
  },
}