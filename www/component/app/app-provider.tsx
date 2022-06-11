import {ReactNode} from 'react';

import {LocalizationProvider} from '../../provider/locale/locale-context';

type PropsType = {
    children: ReactNode;
};

export function AppProvider(props: PropsType): JSX.Element {
    const {children} = props;

    return <LocalizationProvider>{children}</LocalizationProvider>;
}
