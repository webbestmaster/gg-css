/* global document */

import {createRoot} from 'react-dom/client';

import {selector} from './const';
import {App} from './component/app/app';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (!nodeWrapper) {
    throw new Error('[main]: Can not find appWrapper');
}

createRoot(nodeWrapper).render(<App />);
