/* global document */

import {createRoot} from 'react-dom/client';

import {selector} from './const';
import {App} from './component/app/app';
import {ErrorData} from './layout/error-data/error-data';
import {Markdown} from './layout/markdown/markdown';

console.log(ErrorData);
console.log(Markdown);

const nodeWrapper = document.querySelector(selector.appWrapper);

if (!nodeWrapper) {
    throw new Error('[main]: Can not find appWrapper');
}

createRoot(nodeWrapper).render(<App />);
