import {useState} from "react";

// import foreign styles
import style1 from '../../../material/187145_files/style-new.css';

console.log(style1)

import styleClientHome from './client-home.scss';

export function ClientHome(): JSX.Element {
    const [color, setColor] = useState<string>('#000000');

    return (
        <div className={styleClientHome.home}>
            <div className={styleClientHome.home_container}>
                <h1>inputs</h1>
            </div>
            <div className={styleClientHome.home_container}>
                <h1>result</h1>

                <div>

                </div>

            </div>
        </div>
    );
}
