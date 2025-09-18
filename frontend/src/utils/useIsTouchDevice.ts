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
            const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
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