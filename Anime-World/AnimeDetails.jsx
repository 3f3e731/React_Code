import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RotateLoader from "../RotataLoader";

const AnimeDetails = () => {

    const { id } = useParams();

    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchApi = async () => {
        setLoading(true);

        try {
            const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
            setAnime(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        const timer = setTimeout(() => {
            fetchApi();
        }, 1500);

        return () => clearTimeout(timer);

    }, [id]);

    if (loading)
        return (
            <div
                style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh",
                }}
            >
                <RotateLoader />
            </div>
        );

    return (
        <div className="details-container">

            <div className="details-grid">

                {/* Poster */}
                <img
                    src={anime?.images?.jpg?.large_image_url}
                    alt={anime?.title}
                    className="details-poster"
                />

                {/* Main Info */}
                <div className="details-info">

                    <h1>{anime?.title_english || anime?.title}</h1>

                    <p className="jp">{anime?.title_japanese}</p>

                    <div className="stats">
                        <span>⭐ {anime?.score}</span>
                        <span>Rank #{anime?.rank}</span>
                        <span>{anime?.type}</span>
                        <span>{anime?.status}</span>
                    </div>

                    <p><b>Episodes:</b> {anime?.episodes}</p>
                    <p><b>Duration:</b> {anime?.duration}</p>
                    <p><b>Rating:</b> {anime?.rating}</p>
                    <p><b>Source:</b> {anime?.source}</p>
                    <p><b>Season:</b> {anime?.season}</p>
                    <p><b>Year:</b> {anime?.year}</p>

                    <p><b>Popularity:</b> {anime?.popularity}</p>
                    <p><b>Members:</b> {anime?.members}</p>
                    <p><b>Scored By:</b> {anime?.scored_by}</p>

                    {/* Genres */}
                    <div className="genres">
                        <h3>Genres</h3>

                        {anime?.genres?.map((g) => (
                            <span key={g.mal_id}>{g.name}</span>
                        ))}
                    </div>

                    {/* Studios */}
                    <div className="studios">
                        <h3>Studios</h3>

                        {anime?.studios?.map((studio) => (
                            <span key={studio.mal_id}>{studio.name}</span>
                        ))}
                    </div>

                    {/* Producers */}
                    <div className="producers">
                        <h3>Producers</h3>

                        {anime?.producers?.map((p) => (
                            <span key={p.mal_id}>{p.name}</span>
                        ))}
                    </div>

                    {/* Themes */}
                    <div className="themes">
                        <h3>Themes</h3>

                        {anime?.themes?.map((t) => (
                            <span key={t.mal_id}>{t.name}</span>
                        ))}
                    </div>

                </div>

            </div>

            {/* Synopsis */}
            <div className="synopsis">
                <h2>Synopsis</h2>
                <p>{anime?.synopsis}</p>
            </div>

            {/* Trailer */}
            {anime?.trailer?.embed_url && (
                <div className="trailer-container">

                    <h2 className="trailer-title">🎬 Official Trailer</h2>

                    <div className="video-wrapper">

                        <iframe
                            src={anime.trailer.embed_url}
                            title="Anime Trailer"
                            allowFullScreen
                        ></iframe>

                    </div>

                </div>
            )}

        </div>
    );
};

export default AnimeDetails;