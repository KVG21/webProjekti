import './App.css';
import React from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
=======
import { useState } from 'react';
import Etusivu from './components/Etusivu';
import Search from './components/Searchbar';
>>>>>>> Stashed changes

const posts = [
    { id: '1', name: 'mcdonalds' },
    { id: '2', name: 'hesburger' },
    { id: '3', name: 'arbello' },
    { id: '4', name: 'quatro' },
];

const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <div>
<<<<<<< Updated upstream
            <Etusivu/>
            <nav>
                <button className="naviNappi"><Link className="naviNimi" to="/Ravintoloitsija">Ravintoloitsija</Link></button>   
            </nav>
=======
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
>>>>>>> Stashed changes
        </div>
    );
}

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};



export default App;

<Etusivu/>