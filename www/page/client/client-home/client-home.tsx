/* global HTMLInputElement, HTMLSelectElement */
/* eslint-disable react/jsx-max-depth */

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

type FontFamilyType = {
    letterForm: string;
    name: string;
};

const fontFamilyMap: Array<FontFamilyType> = [
    {
        letterForm: 'sans-serif',
        name: 'Hack Regular Nerd Font Complete',
    },
    {
        letterForm: 'sans-serif',
        name: 'Arial',
    },
    {
        letterForm: 'serif',
        name: 'Georgia',
    },
    {
        letterForm: 'monospace',
        name: 'Courier New',
    },
    {
        letterForm: 'cursive',
        name: 'Brush Script MT',
    },
];

export function ClientHome(): JSX.Element {
    const defaultFontSize = 14;
    const minFontSize = 12;
    const maxFontSize = 36;
    const [backgroundColor, setBackgroundColor] = useState<string>('#0a0d11');
    const [backgroundColorAlpha, setBackgroundColorAlpha] = useState<string>('255');
    const [isShowSendButton, setIsShowSendButton] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(defaultFontSize);
    const [fontFamilyIndex, setFontFamilyIndex] = useState<number>(0);

    /*
        const cssOld = `
    /!* chat-container *!/
    body, div.chat-container {
        border-left: none !important;
        padding: 8px;
        /!* background-color: #0a0d11e3 *!/;
        background-color: ${backgroundColor}${Number.parseInt(backgroundColorAlpha, 10).toString(16).padStart(2, '0')};
    }

    /!* button on the bottom *!/
    div.chat-control-block {
        display: ${isShowSendButton ? 'block' : 'none'};
    }

    /!* shadow line *!/
    .bg-block {
        display: none !important;
    }

    /!* chat height *!/
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
    */

    const css = `
/* Цвет фона окна чата. Для настройки прозрачности из единого места. */
:root {
  --new-bg-color: ${backgroundColor}${Number.parseInt(backgroundColorAlpha, 10).toString(16).padStart(2, '0')};
}

/* Эта секция для того, чтобы настроить прозрачный фон чатика. */
.chat-container { background-color: var(--new-bg-color); }
html { background-color: var(--new-bg-color); }

/* Настройка основных параметров окна чата */
div.chat-container {
    border-left: none !important;
    padding: 8px;
    background-color: var(--new-bg-color);
}

/* Скрытие сообщения дня и кнопки сообщения дня */
div.popup-wrap { display: none; }

/* Скрытие панели чата для ввода текста, смайлов и другие кнопки */
.chat-container .chat-control-block,
div.chat-control-block {
    display: ${isShowSendButton ? 'block' : 'none'};
    position: static;
}

/* Маленький незаметный блок с красивым градиентом позади чата, он не нужен */
.chat-container .content-window .bg-block { display: none; }
.bg-block { display: none !important; }

/* После того, как спрятали полоску для ввода текста, растягиваем чатик вниз */
.content-window {
    height: 100% !important;
    border-left: 0;
}
.chat-container_new-guy .content-window { height: 100% !important; }
.chat-container .content-window { height: 100% !important}

/* Скачиваем нужный шрифт */
@font-face {
    font-family: "Hack Regular Nerd Font Complete";
    src: url("https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/patched-fonts/Hack/Regular/complete/Hack%20Regular%20Nerd%20Font%20Complete.ttf");
}

/* Конфигурируем шрифт сообщений */
.chat-container .message-block .message {
    font-family: ${fontFamilyMap[fontFamilyIndex].name}, ${fontFamilyMap[fontFamilyIndex].letterForm};
    font-size: ${fontSize}px;
}

/* Конфигурируем шрифт ников */
.chat-container .nick {
    font-family: ${fontFamilyMap[fontFamilyIndex].name}, ${fontFamilyMap[fontFamilyIndex].letterForm};
    font-size: ${fontSize}px;
}
`;

    return (
        <div>
            <div className={styleClientHome.home}>
                <div className={styleClientHome.home_container}>
                    <div className={styleClientHome.home_input_container}>
                        <label>
                            <span>Background color:</span>
                            <input
                                defaultValue={backgroundColor}
                                onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                    setBackgroundColor(evt.currentTarget.value);
                                }}
                                type="color"
                            />
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
                        <label>
                            <p>font size: {fontSize}</p>

                            <input
                                defaultValue={defaultFontSize}
                                max={maxFontSize}
                                min={minFontSize}
                                onChange={(evt: SyntheticEvent<HTMLInputElement>) => {
                                    setFontSize(Number.parseInt(evt.currentTarget.value, 10) || defaultFontSize);
                                }}
                                step="1"
                                type="range"
                            />
                        </label>

                        <label>
                            <p>font family:</p>

                            <select
                                defaultValue={fontFamilyIndex}
                                onChange={(evt: SyntheticEvent<HTMLSelectElement>) => {
                                    setFontFamilyIndex(Number.parseInt(evt.currentTarget.value, 10) || 0);
                                }}
                            >
                                {fontFamilyMap.map((fontFamilyItem: FontFamilyType, index: number): JSX.Element => {
                                    return (
                                        <option key={fontFamilyItem.name} value={index}>
                                            {fontFamilyItem.name}, ({fontFamilyItem.letterForm})
                                        </option>
                                    );
                                })}
                            </select>
                        </label>

                        <textarea key={css} rows={10}>
                            {css}
                        </textarea>
                    </div>
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
