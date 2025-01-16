import { useEffect, useState } from "react";

const useOnlineStaus = () => {
    const [ isOnline, setIsOnline ] = useState(false);
    // return 

    useEffect(()=> {
        window.addEventListener("online", () => {
            setIsOnline(true);
        });
    
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });

    }, []);

    return isOnline;
}

export default useOnlineStaus;