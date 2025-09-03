// Farbthemen
const baseThemes = {
    rot: {
        headerBackground: "/assets/header_03.webp",
        background: "#EFCAC8",
        linkColor: "#802F2F",
    },
    orange1: {
        headerBackground: "/assets/header_02.webp",
        background: "#F6D1AE",
        linkColor: "#A65200",
    },
    green: {
        headerBackground: "/assets/header_04.webp",
        background: "#7AAB80",
        linkColor: "#254038",
    },
    orange2: {
        headerBackground: "/assets/header_01.webp",
        background: "#F6D1AE",
        linkColor: "#A65200",
    },
};

// Zuordnung von Pfaden zu Farbthemen
const themeMap: Record<string, keyof typeof baseThemes> = {
    "/": "rot",
    "/about": "rot",
    "/gallery": "orange1",
    "/admin": "green",
    "/adminlogin": "green",
    "/impressum": "green",
    "/contact": "orange2",
    "/offer": "orange2",
};

// Gibt die Farbthemen der Pfade zurück
export const themes: Record<string, typeof baseThemes.rot> = Object.fromEntries(
    Object.entries(themeMap).map(([path, themeKey]) => [path, baseThemes[themeKey]])
);

themes.default = baseThemes.rot;