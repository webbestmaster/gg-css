/* global HTMLInputElement */
import {SyntheticEvent, useState} from 'react';

import rawHtml from '../../../material/187145.txt';

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

import {classNames} from '../../../util/css';

import styleClientHome from './client-home.scss';

export function ClientHome(): JSX.Element {
    const [backgroundColor, setBackgroundColor] = useState<string>('#0a0d11');
    const [backgroundColorAlpha, setBackgroundColorAlpha] = useState<string>('255');
    const [isShowSendButton, setIsShowSendButton] = useState<boolean>(true);

    const css = `
/* chat-container */
body, div.chat-container {
    border-left: none !important;
    padding: 8px;
    /* background-color: #0a0d11e3 */;
    background-color: ${backgroundColor}${Number.parseInt(backgroundColorAlpha, 10).toString(16).padStart(2, '0')};
}

/* button on the bottom */
div.chat-control-block {
    display: ${isShowSendButton ? 'block' : 'none'};
}

/* shadow line */
.bg-block {
    display: none !important;
}

/* chat height */
div.content-window {
    height: 100% !important;
}

.chat-container_new-guy .content-window {
    height: 100% !important;
}

.content-window {
    height: 100%;
}

.chat-container .content-window {
    height: 100%
}

.chat-container {
    border-left: 0;
}

div.content-window {
    height: 100% !important;
}

@font-face {
    font-family: "Hack Regular Nerd Font Complete";
    src: url("https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/patched-fonts/Hack/Regular/complete/Hack%20Regular%20Nerd%20Font%20Complete.ttf");
}

.chat-container .message-block .message {
    font-family: "Hack Regular Nerd Font Complete";
    font-size: 19px
}

.chat-container .nick {
    font-family: "Hack Regular Nerd Font Complete";
    font-size: 19px
}
    `;

    return (
        <div>
            <div className={styleClientHome.home}>
                <div className={styleClientHome.home_container}>
                    <label>
                        <p>
                            <span>Background color:</span>
                            <input
                                defaultValue={backgroundColor}
                                onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                    setBackgroundColor(evt.currentTarget.value);
                                }}
                                type="color"
                            />
                        </p>
                    </label>
                    <label>
                        <p>
                            <span>Background transparent:</span>
                            <input
                                defaultValue={backgroundColorAlpha}
                                max="255"
                                min="0"
                                onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                    setBackgroundColorAlpha(evt.currentTarget.value);
                                }}
                                step="1"
                                type="range"
                            />
                        </p>
                    </label>
                    <label>
                        <p>
                            <span>Show send button:</span>
                            <input
                                defaultChecked={isShowSendButton}
                                onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                    setIsShowSendButton(evt.currentTarget.checked);
                                }}
                                style={{display: 'inline-block'}}
                                type="checkbox"
                            />
                        </p>
                    </label>
                    <textarea key={css} rows={10}>
                        {css}
                    </textarea>
                </div>
                <div className={classNames(styleClientHome.home_container, 'result-wrapper')}>
                    <style
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{__html: css}}
                    />
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{__html: rawHtml}}
                    />
                </div>
            </div>
        </div>
    );
}
