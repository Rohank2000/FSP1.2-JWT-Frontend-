import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect = (() => {
        const fetchFunction = async () => {
            try {
                const JWTtoken = localStorage.getItem('fetchKey');
                const tokenHeaders = {
                    'Content-Type': 'application/json',
                };

                if (JWTtoken) {
                    tokenHeaders.Authorization = `Bearer ${JWTtoken}`;
                }

                const response = await fetch(url, {
                    headers: tokenHeaders,
                });

                if (!response.ok) {
                    throw new Error('Failed to Fetch Data');
                }

                const JSONresponse = await response.json();
                setData(JSONresponse);

            } catch (error) {
                setData(null);
                setError(error.message);
            }
        }
        fetchFunction();
    }, [url]);

    return { data, error };
}

export default useFetch;