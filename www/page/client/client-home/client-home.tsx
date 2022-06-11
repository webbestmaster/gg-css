/* global HTMLInputElement */
import {SyntheticEvent, useState} from "react";
import rawHtml from './../../../material/187145.txt';

// import foreign styles
import style1 from '../../../material/187145_files/style-new.css';
import style2 from '../../../material/187145_files/style-new(1).css';

// <link href="./187145_files/style-new.css" rel="stylesheet" type="text/css">
// <link rel="stylesheet" type="text/css" href="./187145_files/style-new(1).css">
// <link rel="stylesheet" type="text/css" href="./187145_files/fonts.css">
// <link rel="stylesheet" href="./187145_files/channels_icons.css" media="all">
// <link rel="stylesheet" href="./187145_files/channels_smiles.css" media="all">
// <link rel="stylesheet" href="./187145_files/common_smiles.css" media="all">

console.log(style1);
console.log(style2);

console.log(rawHtml);

import {classNames} from "../../../util/css";

import styleClientHome from './client-home.scss';

export function ClientHome(): JSX.Element {
    const [backgroundColor, setBackgroundColor] = useState<string>('#00cc00');
    const [backgroundColorAlpha, setBackgroundColorAlpha] = useState<string>('00');

    const css = `
        .result-wrapper {
            background-color: ${backgroundColor}${backgroundColorAlpha};
        }
    `;

    return (
        <div>
            <div className={styleClientHome.home}>
                <div className={styleClientHome.home_container}>
                    <h1>inputs</h1>
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
                                    setBackgroundColorAlpha(parseInt(evt.currentTarget.value).toString(16));
                                }}
                                min="0"
                                max="255"
                                step="1"
                                type="range"
                                defaultValue={backgroundColor}
                            />
                        </p>
                    </label>
                    <textarea key={css}>{css}</textarea>
                </div>
                <div className={classNames(styleClientHome.home_container, 'result-wrapper')}>
                    <style dangerouslySetInnerHTML={{__html: css}}></style>
                    {/*<h1>result</h1>*/}
                    {/*<p>{backgroundColor}</p>*/}
                    {/*<p>{backgroundColorAlpha}</p>*/}

                    <div dangerouslySetInnerHTML={{__html: rawHtml}}/>

                </div>
            </div>
        </div>
    );
}
