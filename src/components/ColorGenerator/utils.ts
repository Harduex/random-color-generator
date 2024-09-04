export const getRandomColor = () => {
    const hex = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    const rgb = hexToRgb(hex);
    return { hex, rgb };
};

export const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};
