import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {ClientHome} from '../../page/client/client-home/client-home';
import {Error404} from '../../page/service/error-404/error-404';

import {appRoute} from './app-route';

export function AppRouting(): JSX.Element {
    const switchNode = (
        <Routes>
            <Route element={<ClientHome />} path={appRoute.root.path} />

            <Route element={<Error404 />} path="*" />
        </Routes>
    );

    return <BrowserRouter>{switchNode}</BrowserRouter>;
}
