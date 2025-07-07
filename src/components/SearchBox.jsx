import React, { useState } from 'react';
import { data } from '../pages/Data/data'
import { Link } from 'react-router-dom';
import { slugText } from '../hooks/textSlug';
export default function SearchBox() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setSuggestions([]);
            return;
        }

        const lower = value.toLowerCase();

        const filtered = data.filter(item =>
            (item.title && item.title.toLowerCase().includes(lower)) ||
            (item.filename && item.filename.toLowerCase().includes(lower)) ||
            (item.content && item.content.toLowerCase().includes(lower)) ||
            (item.excerpt && item.excerpt.toLowerCase().includes(lower))
        );

        setSuggestions(filtered);
    };

    return (
        <div className="relative w-full max-w-md min-w-80 mx-auto">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search…"
                className=" montserrat-regular w-full border border-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
                    {suggestions.map(item => (
                        <Link to={item.file_type === 1 ? `/view-article/${slugText(item.title)}` : `/view-video/${slugText(item.title)}`} key={item.id} onClick={() => {
                            setQuery("");
                            setSuggestions([]);
                        }}>
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <div className="font-medium text-gray-800">{item.title}</div>
                                <div className="text-sm text-gray-500 truncate">{item.excerpt}</div>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}
