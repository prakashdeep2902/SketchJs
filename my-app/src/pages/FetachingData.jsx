import React, { useEffect, useState } from 'react'


function useFetch(url) {

    console.log(url)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!url) return;
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));


    }, [url])

    return { data, loading, error };

}
function FetachingData() {

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default FetachingData
