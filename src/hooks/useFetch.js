import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null); // store API data
    const [loading, setLoading] = useState(true); // true when fetching
    const [error, setError] = useState(null); // store error message if it fails

    useEffect(() => {
        // if no url provided, do nothing
        if (!url) return;

        setLoading(true);
        setError(null);

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [url]); // runs when the url changes

    return { data, loading, error };
}