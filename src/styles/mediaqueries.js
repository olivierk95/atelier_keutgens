const size = {
    desktop: '992px',
    tablet: '768px',
    phone: '576px',
}

export const device = {
    phone: `(max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};