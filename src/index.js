import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import Main from './modules/main/main';

const app = createElement('main', { is: Main });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
