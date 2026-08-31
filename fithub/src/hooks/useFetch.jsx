import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const getData  = async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await res.json();
            setData(json);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
       }

         getData();

}, [url]);
    return { data, error, loading };
}