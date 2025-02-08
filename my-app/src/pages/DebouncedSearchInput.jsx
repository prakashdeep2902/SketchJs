
import { useState, useEffect } from "react";

const DebouncedSearchInput = () => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query) {
                onSearch(query);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
    );
}

export default DebouncedSearchInput
