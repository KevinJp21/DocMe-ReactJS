
import { useState, useEffect } from 'react';

function useFetchUsers() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user-details`, {
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(`Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }
        fetchUserData();
    }, []);

    return { userData, loading, error };
}

export default useFetchUsers;
