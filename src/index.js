import './styles/style.scss';
import Header from './Header';
import Button from './Button';


const root = document.getElementById('root');
const blueButton = Button({
	title: 'Blue Button',
	className: 'button-blue',
	onClick: () => alert("It's blue!!!"),
});
const redButton = Button({
	title: 'Red Button',
	className: 'button-red',
	onClick: () => alert("It's red!!!"),
});
root.append(Header);
root.append(blueButton);
root.append(redButton);
