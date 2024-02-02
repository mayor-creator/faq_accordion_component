let icons = document.querySelectorAll(".icons");
let active = document.querySelectorAll(".active");
let questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener("click", function () {
		let image = questions[i].lastElementChild;
		image.src = "../assets/images/icon-minus.svg";
		let displayAnswer = questions[i].nextElementSibling;
		displayAnswer.stylsetDefault();
	});
}
