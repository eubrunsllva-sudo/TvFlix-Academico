import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Componente de Card Individual (Otimizado com props)
export const Card = ({ title, date, image }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="movie-card">
                <img 
                    src={`${imageBaseUrl}${image}`} 
                    className="card-img-top" 
                    alt={title} 
                />
                <div className="card-body movie-info">
                    <div className="movie-title">{title}</div>
                    <div className="movie-date">{date}</div>
                </div>
            </div>
        </div>
    );
};

export const CardList = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yzc3ZDIyMjVlZWFiZmQ2ZDdmZDg4YzY1ZTgxYTAyZSIsIm5iZiI6MTc3MTU0MjgwNy41MTcsInN1YiI6IjY5OTc5OTE3N2M4YzJlZTYxZWM5OTQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nv7R_t7xtRQsxgjs4sOEw6BIzX4OIqOxz8GWJCwEniU'
                }
            };

            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', 
                config
            );

            // CORREÇÃO: results (com 'l') e fechamento de aspas no log
            setMovies(response.data.results);
            console.log('filmes:', response.data.results);

        } catch (error) {
            console.log("Erro na API:", error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="container mt-5 pt-5" id="carouselSection">
            <h2 className="section-title">Filmes Populares</h2>


            <div className="row" id="featuredMovies">
                {/* O MAP faz a mágica de criar um card para cada filme da lista */}
        
                {movies.map((movie) => (
                    <Card 
                        key={movie.id} 
                        title={movie.title} 
                        date={movie.release_date} 
                        image={movie.poster_path} 
                    />
                ))}
            </div>
        </section>
    );
};