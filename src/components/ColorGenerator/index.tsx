import React, { useCallback, useState } from 'react';

import { copyToClipboard, getRandomColor } from './utils';

import './style.scss';

const ColorGenerator: React.FC = () => {
    const [color, setColor] = useState(getRandomColor());

    const handleGenerateColor = useCallback(() => {
        const newColor = getRandomColor();
        setColor(newColor);
    }, []);

    const handleCopyHex = useCallback(() => {
        copyToClipboard(color.hex);
    }, [color]);

    const handleCopyRgb = useCallback(() => {
        copyToClipboard(color.rgb);
    }, [color]);

    return (
        <div className="color-generator-container" style={{ backgroundColor: color.hex }}>
            <h1 className="title">Random Color Generator</h1>
            <button className="generate-button" onClick={handleGenerateColor}>
                Generate
            </button>
            <div className="color-info">
                <div className="color-info-item">
                    <p>HEX: {color.hex}</p>
                    <button className="copy-button" onClick={handleCopyHex}>
                        Copy
                    </button>
                </div>
                <div className="color-info-item">
                    <p>RGB: {color.rgb}</p>
                    <button className="copy-button" onClick={handleCopyRgb}>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ColorGenerator;
