// bisher zulässige Kategorien herzhaft und süß:
type ImageCategory = 'herzh' | 'suess';

// gibt die URLs aller Bilder einer bestimmten Kategorie als String-Array zurück:
export function loadImages(category: ImageCategory): string[] {
    const allImages = import.meta.glob('../assets/*.{webp}', {
        // "eager" heißt, dass es direkt geladen wird und nicht "lazy", erst wenn es benötigt wird.
        eager: true,
        // default import von einem Bild ist die Url zu dem Bild
        import: 'default',
    });

    // Filter nach Kategorie
    return Object.entries(allImages)
        .filter(([path]) => path.includes(`/${category}`))
        .map(([, src]) => src as string);
}