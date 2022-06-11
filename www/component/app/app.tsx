import {StrictMode} from 'react';

import {ErrorBoundary} from '../error-boundary/error-boundary';

import {AppProvider} from './app-provider';
import {AppRouting} from './app-routing';

export function App(): JSX.Element {
    return (
        <StrictMode>
            <ErrorBoundary errorFallBack={<h1>Front-end error</h1>}>
                <AppProvider>
                    <AppRouting />
                </AppProvider>
            </ErrorBoundary>
        </StrictMode>
    );
}
