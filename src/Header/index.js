import './style.scss';
import htmlToElement from '../utils/htmlToElement';
import Header from './index.html';

const header = Header;
export default htmlToElement(header);