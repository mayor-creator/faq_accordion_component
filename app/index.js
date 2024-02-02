let active = document.querySelectorAll(".active");
let questions = document.querySelectorAll(".question");

let setDefault = () => {
	for (let index = 0; index < active.length; index++) {
		active[index].style.display = "none";
		// set the image location source
		let imageId = active[index].previousElementSibling.lastElementChild;
		imageId.src = "../assets/images/icon-plus.svg";
	}
};

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener("click", function () {
		setDefault();
		//change the image location source
		let image = questions[i].lastElementChild;
		image.src = "../assets/images/icon-minus.svg";
		let displayAnswer = questions[i].nextElementSibling;
		displayAnswer.style.display = "block";
	});
}
