import {useEffect, useState} from "react";

// Der Name muss "use" am Anfang haben, damit React es als Hook erkennt.
// Hooks sind spezielle Funktionen von React mit denen man auf Zustand, Lifecycle, Context etc. zugreifen kann.
export function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // window ist eine Abfrage an die Browser-API
        const checkTouch = () => {
            // doppelter Check um auf Nummer sicher zu gehen, dass sinnvolle Ergebnisse zurückkommen.
            // 'ontouchstart': check für Touchfähigkeit
            // TouchPoints: 0 kein Touchgerät, 1 einfaches Touchgerät, 5 oder 10 Multitouch wie Smartphone oder Tablet
            // window.matchMedia('(hover: none)').matches ist eine MediaQuery an die Browser-API, die die Fähigkeit zu
            // hovern abfragt.
            // Letzteres wurde angefügt, da Desktop-Geräte, an denen potentiell eine Toucheingabe angefügt werden kann
            // bei ersterem false-positive werden.
            // Die ersten beiden Abfragen sind da, weil die Browser von modernen Android-Geräten gerne mal
            // false positive auf die Hover-Fähigkeit antworten, weil theoretisch Display-Stifte angeschlossen werden
            // könnten.
            const hasTouchSupport =
                (('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
                    window.matchMedia('(hover: none)').matches);
            setIsTouchDevice(hasTouchSupport);
        };
        // Beim Start
        checkTouch();
        // Erneute Abfrage bei Fenstergrößenänderung, relevant für Hybridgeräte
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    return isTouchDevice;
}