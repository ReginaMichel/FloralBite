export type OfferCategory = "cold" | "menu" | "sweet" | "savory" | "special" | "party";

// Um darüber iterieren zu können, brauche ich es als Array. Da Typen nur zur Compile-Zeit, aber nicht zur Laufzeit
// existieren.
export const offerCategories: OfferCategory[] = [
    "cold",
    "menu",
    "sweet",
    "savory",
    "special",
    "party",
];

// Um Dopplungen in OfferPage und OfferDetail zu vermeiden
export const offerCategoryTitles: Record<OfferCategory, string> = {
    cold: "Kalte Auswahl",
    menu: "Festliche Menüs",
    sweet: "Süße Auswahl",
    savory: "Süß und salzig",
    special: "Specials",
    party: "Festbedarf",
};

export const offerCategoryDescriptions: Record<OfferCategory, string> = {
    cold: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua." +
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
    menu: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua."+
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
    sweet: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua."+
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
    savory: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua."+
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
    special: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua."+
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
    party: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
        "veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua."+
        " veniam, quis nostrud. Wiusmod tempor incididunt. Adipiscing elit, sed do eiusmod tempor incididunt ut" +
        "labore et dolore magna aliqua.",
};