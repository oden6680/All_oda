chrome.extension.onMessage.addListener(function(request) {
	if (request == "true") {
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
	"../images/P1060215-removebg.png"
]

function change_to_oda() {
	imgs = document.querySelectorAll("img")
	let i = 0;
	let url = "";
	imgs.forEach(function(element) {
		i = Math.floor(Math.random()*urlList.length);
		url = chrome.extension.getURL(urlList[i]);
		element.setAttribute("src", url)
		element.removeAttribute("srcset")
		});
}