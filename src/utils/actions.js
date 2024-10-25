import { codes } from "./codes";
import {
  resetBlinkEffect,
  handleImageDisplay,
  handleWindowOpen,
  handleVideoDisplay,
  handleFileDownload,
} from "./utils.js";

const result = document.getElementById("result");
const doritoVideo = document.getElementById("doritoVideo");
const videoContainer = document.getElementById("videoContainer");
const babyBillImage = document.getElementById("babyBillImage");
const contentRevealSound = document.getElementById("content-reveal");
const yoyoImage = document.getElementById("yoyoImage");
const opacityContainer = document.querySelector(".opacity__container");
const resurrectionImage = document.getElementById("resurrectionImage");
const buttonCloseBottom = document.getElementById("close__container-bottom");
const notApproved = document.getElementById("notApproved");
const imageContainer = document.getElementById("imageContainer");
const scientistImage = document.getElementById("scientistImage");
const stahpSound = document.getElementById("stahpSound");
const lamarImage = document.getElementById("lamarImage");
const hl3Image = document.getElementById("hl3Image");
const sadleysBar = document.getElementById("sadleysBar");
const burnedInsideVideo = document.getElementById("burnedInsideVideo");
const cardBill = document.getElementById("cardBill");
const cloneDipper = document.getElementById("cloneDipper");
const conspiracyVideo = document.getElementById("conspiracyVideo");
const jeffVideo = document.getElementById("jeffVideo");
const ouijaBIll = document.getElementById("ouijaBIll");
const planchetteBill = document.getElementById("planchetteBill");
const deerteethGif = document.getElementById("deerteethGif");
const dionarap = document.getElementById("dionarap");
const rickrollVideo = document.getElementById("rickrollVideo");
const discoGirl = document.getElementById("discoGirl");
const axolotVideo = document.getElementById("axolotVideo");
const marceloVideo = document.getElementById("marceloVideo");
const dotaVideo = document.getElementById("dotaVideo");
const billWellMeetAgainAudio = document.getElementById("billWellMeetAgainAudio");
const billWellMeetAgainVideo = document.getElementById("billWellMeetAgainVideo");

export const actions = {
  MYSTERY: () => {
    handleWindowOpen(codes["MYSTERY"], "/mystery");
  },
  BILL: () => {
    handleWindowOpen(
      codes["BILL"],
      "https://en.wikipedia.org/wiki/Eye_of_Providence"
    );
  },
  BILLCIPHER: () => {
    handleWindowOpen(
      codes["BILLCIPHER"],
      "https://en.wikipedia.org/wiki/Triangle"
    );
  },
  DORITO: () => {
    handleVideoDisplay(
      doritoVideo,
      videoContainer,
      opacityContainer,
      codes["DORITO"]
    );
  },
  CHIP: () => {
    handleVideoDisplay(
      doritoVideo,
      videoContainer,
      opacityContainer,
      codes["CHIP"]
    );
  },
  BABY: () => {
    handleImageDisplay(
      babyBillImage,
      codes["BABY"],
      contentRevealSound,
      imageContainer
    );
  },
  BABYBILL: () => {
    handleImageDisplay(
      babyBillImage,
      codes["BABY"],
      contentRevealSound,
      imageContainer
    );
  },
  YOYO: () => {
    handleImageDisplay(
      yoyoImage,
      codes["YOYO"],
      contentRevealSound,
      imageContainer
    );
    handleWindowOpen(
      codes["YOYO"],
      "https://www.instagram.com/yoyolafrenchie/",
      5000
    );
  },
  MUERTE: () => {
    handleImageDisplay(
      resurrectionImage,
      codes["MUERTE"],
      contentRevealSound,
      imageContainer
    );
  },
  CUM: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(notApproved, "", contentRevealSound, imageContainer);
  },
  ASSHOLE: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(notApproved, "", contentRevealSound, imageContainer);
  },
  BITCH: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(notApproved, "", contentRevealSound, imageContainer);
  },
  CUNT: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(notApproved, "", contentRevealSound, imageContainer);
  },
  DICK: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(notApproved, "", contentRevealSound, imageContainer);
  },
  HL1: () => {
    stahpSound.play();
    handleImageDisplay(
      scientistImage,
      codes["HL1"],
      contentRevealSound,
      imageContainer
    );
  },
  HL2: () => {
    handleImageDisplay(
      lamarImage,
      codes["HL2"],
      contentRevealSound,
      imageContainer
    );
  },
  HL3: () => {
    handleImageDisplay(
      hl3Image,
      codes["HL3"],
      contentRevealSound,
      imageContainer
    );
  },
  CRYPTOGRAMCODEX: () => {
    handleFileDownload(
      "/download/CRYPTOGRAM CODEX.zip",
      "CRYPTOGRAM CODEX.zip",
      codes["CRYPTOGRAMCODEX"]
    );
  },
  BREAKUP: () => {
    handleImageDisplay(
      sadleysBar,
      codes["BREAKUP"],
      contentRevealSound,
      imageContainer
    );
    handleFileDownload("/download/OSADLEYSLOGO.zip", "OSADLEYSLOGO.zip", "");
  },
  BURNEDINSIDE: () => {
    handleVideoDisplay(
      burnedInsideVideo,
      videoContainer,
      opacityContainer,
      codes["CHIP"]
    );
  },
  DISPENSEMYTREAT: () => {
    handleFileDownload(
      "/download/BILLS FILES DO NOT OPEN!!.zip",
      "BILLS FILES DO NOT OPEN!!.zip",
      codes["DISPENSEMYTREAT"]
    );
  },
  CARD: () => {
    buttonCloseBottom.classList.add("not-display");
    handleImageDisplay(cardBill, "", contentRevealSound, imageContainer);
  },
  CLONE: () => {
    handleImageDisplay(
      cloneDipper,
      codes["CLONE"],
      contentRevealSound,
      imageContainer
    );
  },
  CONSPIRACY: () => {
    handleVideoDisplay(
      conspiracyVideo,
      videoContainer,
      opacityContainer,
      codes["CONSPIRACY"]
    );
  },
  CRAZ: () => {
    handleWindowOpen(
      codes["CRAZ"],
      "https://www.youtube.com/watch?v=lkQE5wuBFeY"
    );
  },
  CREEPYPASTA: () => {
    handleVideoDisplay(
      jeffVideo,
      videoContainer,
      opacityContainer,
      codes["CREEPYPASTA"]
    );
  },
  CURSEWITTEBANE: () => {
    planchetteBill.classList.add("visible");
    handleImageDisplay(ouijaBIll, "", contentRevealSound, imageContainer);
    handleFileDownload("/download/OUIJA.zip", "OUIJA.zip", "");
  },
  DEERTEETH: () => {
    handleImageDisplay(
      deerteethGif,
      codes["DEERTEETH"],
      contentRevealSound,
      imageContainer
    );
  },
  DIONARAP: () => {
    handleImageDisplay(dionarap, "", contentRevealSound, imageContainer);
  },
  DIPPYFRESH: () => {
    handleWindowOpen(
      codes["DIPPYFRESH"],
      "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F4p4142atrf381.jpg"
    );
  },
  DISCOGIRL: () => {
    resetBlinkEffect(true);
    discoGirl.currentTime = 0;
    discoGirl.volume = 1;
    discoGirl.play();
    result.innerText = codes["DISCOGIRL"];
  },
  RICK: () => {
    handleVideoDisplay(
      rickrollVideo,
      videoContainer,
      opacityContainer,
      codes["RICK"]
    );
  },
  DOESGODEXIST: () => {
    handleVideoDisplay(
      axolotVideo,
      videoContainer,
      opacityContainer,
      codes["DOESGODEXIST"]
    );
  },
  FACEOFGOD: () => {
    handleVideoDisplay(
      axolotVideo,
      videoContainer,
      opacityContainer,
      codes["FACEOFGOD"]
    );
  },
  MARCELO: () => {
    handleVideoDisplay(
      marceloVideo,
      videoContainer,
      opacityContainer,
      codes["MARCELO"]
    );
  },
  DOTA: () => {
    handleVideoDisplay(
      dotaVideo,
      videoContainer,
      opacityContainer,
      codes["DOTA"]
    );
  },
  WELLMEETAGAIN: () => {
    billWellMeetAgainAudio.play();
    handleVideoDisplay(
      billWellMeetAgainVideo,
      videoContainer,
      opacityContainer,
      codes["WELLMEETAGAIN"]
    );
  },
  DECODEX: () => {
    handleFileDownload(
      "/download/DECODEX FILES.rar",
      "DECODEX FILES.rar",
      codes["DECODEX"]
    );
  },
  CODES: () => {
    handleFileDownload("/download/CODES.txt", "CODES.txt", codes["CODES"]);
  },
  GITHUB: () => {
    handleWindowOpen(
      codes["GITHUB"],
      "https://github.com/sebastianterleira/happy-mystery"
    );
  },
};
