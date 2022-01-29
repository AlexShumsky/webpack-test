import './style.scss';

const Button = ({ title, className, onClick }) => {

	const buttonElement = document.createElement('button');

	buttonElement.innerHTML = `<span>${title}</span>`;
	buttonElement.classList.add('button');
	if (className) buttonElement.classList.add(className);
	buttonElement.addEventListener('click', onClick);
	return buttonElement;
}

export default Button;

