/* global HTMLInputElement */
import {SyntheticEvent, useState} from "react";

// import foreign styles
import style1 from '../../../material/187145_files/style-new.css';

console.log(style1)

import styleClientHome from './client-home.scss';

export function ClientHome(): JSX.Element {
    const [backgroundColor, setBackgroundColor] = useState<string>('#000000');
    const [backgroundColorAlpha, setBackgroundColorAlpha] = useState<string>('255');

    return (
        <div className={styleClientHome.home}>
            <div className={styleClientHome.home_container}>
                <label>
                    <p>
                        Background color:
                        <input
                            onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                setBackgroundColor(evt.currentTarget.value);
                            }}
                            type="color"
                            defaultValue={backgroundColor}
                        />
                    </p>
                </label>
                <label>
                    <p>
                        Background transparent:
                        <input
                            onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                setBackgroundColorAlpha(evt.currentTarget.value);
                            }}
                            min="0"
                            max="255"
                            step="1"
                            type="range"
                            defaultValue={backgroundColor}
                        />
                    </p>
                </label>
                <h1>inputs</h1>
            </div>
            <div className={styleClientHome.home_container}>
                <h1>result</h1>
                <p>{backgroundColor}</p>
                <p>{backgroundColorAlpha}</p>
                <div>

                </div>

            </div>
        </div>
    );
}
