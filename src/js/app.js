import { CardNumberWidget } from "./widget";

document.addEventListener("DOMContentLoaded", () => {
	const parentNode = document.querySelector(".widget-container");
	console.log(parentNode);

	const widget = new CardNumberWidget(parentNode);
});
