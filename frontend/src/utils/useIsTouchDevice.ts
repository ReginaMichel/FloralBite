import {useEffect, useState} from "react";

// Der Name muss "use" am Anfang haben, damit React es als Hook erkennt.
// Hooks sind spezielle Funktionen von React mit denen man auf Zustand, Lifecycle, Context etc. zugreifen kann.
export function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // window ist eine Abfrage an die Browser-API
        const checkTouch = () => {
            // mehrfacher Check um auf Nummer sicher zu gehen, dass sinnvolle Ergebnisse zurückkommen.
            // 'ontouchstart': check für Touchfähigkeit
            // TouchPoints: 0 kein Touchgerät, 1 einfaches Touchgerät, 5 oder 10 Multitouch wie Smartphone oder Tablet
            // window.matchMedia('(hover: none)').matches ist eine MediaQuery an die Browser-API über Hover-Fähigkeit
            // pointer gibt coarse bei smartphones und tablets an, allerdings auch bei manchen Hybridgeräten
            // innerWidth < xxx ist optional dabei, weil Chrome auf Android gerne falsche Dinge meldet
            // innerWidth < 850 oder 600 je nachdem wie man Smartphones im Querformat werten möchte.
            const hasTouchSupport =
                ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
                (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches);
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