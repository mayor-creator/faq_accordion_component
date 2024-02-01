let icons = document.querySelectorAll(".icons");
let active = document.querySelectorAll(".active");

function changeImage() {
	for (let index = 0; index < icons.length; index++) {
		icons[index].addEventListener("click", function () {
			// Set image src
			let image = icons[index];
			image.src = "../assets/images/icon-minus.svg";
		});
	}
}
