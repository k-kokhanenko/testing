import { validateCardNumber } from "./validateCardNumber";
import { getPaymentSystem } from "./getPaymentSystem";

export class CardNumberWidget {
	constructor(parentNode) {
		this.cardNumberInput = document.createElement("input");
		this.cardNumberInput.type = "text";

		this.checkButton = document.createElement("button");
		this.checkButton.textContent = "Проверить номер";
		this.checkButton.addEventListener("click", this.handleCheckButtonClick.bind(this));

		this.paymentSystemIcons = document.createElement("div");
		this.paymentSystemIcons.classList.add("payment-system-icons");

		this.messageContainer = document.createElement("div");

		this.container = document.createElement("div");
		this.container.appendChild(this.paymentSystemIcons);
		this.container.appendChild(this.cardNumberInput);
		this.container.appendChild(this.checkButton);
		this.container.appendChild(this.messageContainer);

		parentNode.appendChild(this.container);
	}

	handleCheckButtonClick() {
		const cardNumber = this.cardNumberInput.value;

		if (validateCardNumber(cardNumber)) {
		 const paymentSystem = this.getPaymentSystem(cardNumber);
		 const message = `Карта корректная (${paymentSystem})`;

		 // Очищаем предыдущие иконки платежных систем
		 this.paymentSystemIcons.innerHTML = "";

		 // Создаем иконку платежной системы
		 const paymentSystemIcon = document.createElement("img");
		 paymentSystemIcon.src = `icons/${paymentSystem}.png`;
		 
	 	 // Добавляем иконку в контейнер
		 this.paymentSystemIcons.appendChild(paymentSystemIcon);

		 // Выводим сообщение
		 this.messageContainer.textContent = message;
		 this.messageContainer.classList.remove("error");
		} else {
		 this.messageContainer.textContent = "Некорректный номер карты";
		 this.messageContainer.classList.add("error");
		}
	}
}