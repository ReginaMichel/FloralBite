// Farbthemen
const baseThemes = {
    rot: {
        headerBackground: "/assets/header_03.webp",
        background: "239, 202, 200",   // #EFCAC8
        linkColor: "128, 47, 47",      // #802F2F
    },
    orange1: {
        headerBackground: "/assets/header_02.webp",
        background: "246, 209, 174",   // #F6D1AE
        linkColor: "166, 82, 0",       // #A65200
    },
    green: {
        headerBackground: "/assets/header_04.webp",
        background: "122, 171, 128",   // #7AAB80
        linkColor: "37, 64, 56",       // #254038
    },
    orange2: {
        headerBackground: "/assets/header_01.webp",
        background: "255, 225, 164",   // background: #FFE1A4;
        linkColor: "166, 82, 0",       //
    },
};

// Zuordnung von Pfaden zu Farbthemen
const themeMap: Record<string, keyof typeof baseThemes> = {
    "/": "orange2",
    "/home": "orange2",
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