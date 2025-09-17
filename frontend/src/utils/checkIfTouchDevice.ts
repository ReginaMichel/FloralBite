import {useEffect, useState} from "react";

export default function CheckIfTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            // MediaQuery, ob das Gerät über Maus-Hover verfügt oder nicht
            setIsTouchDevice(window.matchMedia('(hover:none)').matches);
        };
        // Beim Start
        checkTouch();
        // Erneute Abfrage bei Fenstergrößenänderung, relevant für Hybridgeräte
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    return isTouchDevice;
}