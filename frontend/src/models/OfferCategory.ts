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