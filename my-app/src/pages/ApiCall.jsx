import React, { useEffect, useState } from "react";

function ApiCall() {
    const [data, setData] = useState([]); // Initialize as an array
    const [loading, setLoading] = useState(false)
    const Api = "https://jsonplaceholder.typicode.com/todos";


    useEffect(() => {
        setLoading(true)
        fetch(Api)
            .then((res) => res.json())
            .then((data) => setData(data)) // Explicitly pass data
            .catch((err) => console.log(err)).finally(() => setLoading(false));
    }, []); // No need to add `Api` as a dependency


    if (loading) return <p>loding....</p>
    return (

        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

export default ApiCall;
