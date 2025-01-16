import { useEffect, useState } from "react";

const useOnlineStaus = () => {
    const [ isOnline, setIsOnline ] = useState(true);
    // return 

    useEffect(()=> {
        window.addEventListener("online", () => {
            setIsOnline(true);
        });
    
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });

    }, []);

    return isOnline; // boolean value
}

export default useOnlineStaus;