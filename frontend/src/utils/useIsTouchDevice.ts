import {useEffect, useState} from "react";

// Der Name muss "use" am Anfang haben, damit React es als Hook erkennt.
// Hooks sind spezielle Funktionen von React mit denen man auf Zustand, Lifecycle, Context etc. zugreifen kann.
export function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            // MediaQuery, ob das Gerät über Maus-Hover verfügt oder nicht
            setIsTouchDevice(window.matchMedia('(hover: none)').matches);
        };
        // Beim Start
        checkTouch();
        // Erneute Abfrage bei Fenstergrößenänderung, relevant für Hybridgeräte
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    return isTouchDevice;
}