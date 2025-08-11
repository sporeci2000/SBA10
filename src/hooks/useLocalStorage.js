import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    //Get from localStorage or default to initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("useLocalStorage get error:", error);
            return initialValue;
        }
    });

    //Save to localStorage whenever storedValue changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("useLocalStorage set error:", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
