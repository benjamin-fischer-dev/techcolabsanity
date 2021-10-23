import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToBottom() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(10000, 10000)
    }, [pathname]);

    return null;
}