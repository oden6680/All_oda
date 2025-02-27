chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === "true") {
    change_to_oda();
  }
});

const urlList = [
  "../images/P1060105-removebg.png",
  "../images/P1060115-removebg.png",
  "../images/P1060120-removebg.png",
  "../images/P1060135-removebg.png",
  "../images/P1060152-removebg.png",
  "../images/P1060175-removebg.png",
  "../images/P1060178-removebg.png",
  "../images/P1060198-removebg.png",
  "../images/P1060203-removebg.png",
  "../images/P1060215-removebg.png",
];

function change_to_oda() {
  const imgs = document.querySelectorAll("img");
  imgs.forEach((element) => {
    const i = Math.floor(Math.random() * urlList.length);
    const url = chrome.runtime.getURL(urlList[i]);
    element.setAttribute("src", url);
    element.removeAttribute("srcset");
  });
}
