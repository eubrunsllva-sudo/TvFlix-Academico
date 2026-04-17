import React from 'react'
import { formatDate } from '../../util/Dateutil'

export const Card = ({title, date, image}) => {
    return (
        <div class="col-6 col-sm-4 col-md-3">
            <div class="movie-card">

                <img src="https://media.themoviedb.org/t/p/w440_and_h660_face//pyok1kZJCfyuFapYXzHcy7BLlQa.jpg"
                    class="card-img-top" alt="{title}" />
                    
                <div class="card-body movie-info">
                    <div class="movie-title">{title}</div>
                    <div class="movie-date">{date && formatDate}</div>
                </div>
            </div>
        </div>
    ) 
}

