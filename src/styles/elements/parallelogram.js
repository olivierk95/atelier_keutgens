import variables from "../variables";

// Adaptable clip-path with a given slope and a variable width for the div.

function clipPath(width) {
    return `polygon(0 0, 100% calc(${variables.parallelogramSlope} * (${width} / 100)), 100% 100%, 0 calc(100% - (${variables.parallelogramSlope} * (${width} / 100))))`;
};

function clipPathTop(width) {
    return `polygon(0 0, 100% calc(${variables.parallelogramSlope} * (${width} / 100)), 100% 100%, 0 100%)`;
};

function clipPathBottom(width) {
    return `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - (${variables.parallelogramSlope} * (${width} / 100))))`;
};

function divWidth(width) {
    return `${width}vw`;
}

export default function parallelogram(width) {
    let clipPathCSS = clipPath(width);
    let widthCSS = divWidth(width);
    return (
        `clip-path: ${clipPathCSS};
        width: ${widthCSS};
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        `
    );
};

export function parallelogramTop(width) {
    let clipPathCSS = clipPathTop(width);
    let widthCSS = divWidth(width);
    return (
        `clip-path: ${clipPathCSS};
        width: ${widthCSS};
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        `
    );
};

export function parallelogramBottom(width) {
    let clipPathCSS = clipPathBottom(width);
    let widthCSS = divWidth(width);
    return (
        `clip-path: ${clipPathCSS};
        width: ${widthCSS};
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        `
    );
};