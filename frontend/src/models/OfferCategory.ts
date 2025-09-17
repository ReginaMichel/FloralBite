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