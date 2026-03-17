import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import RotateLoader from "../RotataLoader";

const AnimeWorld = ({ api }) => {
    const [anime, setAnime] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    const naigate = useNavigate();

    async function fetchApi(query = "") {
        setLoading(true);
        try {
            const url = query ? `https://api.jikan.moe/v4/anime?q=${query}&limit=12` : api;

            const res = await axios.get(url);
            setAnime(res.data.data);
        } catch (err) {
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchApi(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);


    return (
        <div className="app">
            <h1 className="logo">ANIME WORLD</h1>

            <SearchBar search={search} setSearch={setSearch} />

            {
                (loading ? (<div
                    style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "90vh",
                    }}
                >
                    <RotateLoader />
                </div>) : (<div className="anime-grid">
                    {anime.map((a) => (
                        <div className="anime-card" key={a.mal_id}>
                            <img
                                src={a.images.jpg.large_image_url}
                                alt={a.title}
                                className="anime-poster"
                                onClick={() => naigate(`/anime/${a.mal_id}`)}
                            />

                            <div className="anime-info">
                                <h3>{a.title_english || a.title}</h3>

                                <p className="jp">{a.title_japanese}</p>

                                <div className="badges">
                                    <span className="rating">⭐ {a.score}</span>
                                    <span className="episodes">{a.episodes} EP</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>))
            }
        </div >
    );
};

export default AnimeWorld;