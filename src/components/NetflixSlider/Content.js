import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

const Content = ({movie, onClose}) => (
    <div className="content">
        <div className="content__background">
            <div className="content__background__shadow"/>
            <div
                className="content__background__image"
                style={{'background-image': `url(${movie.backdrop_path})`}}
            />
        </div>
        <div className="content__area">
            <div className="content__area__container">
                <div className="content__title">{movie.title}</div>
                <div className="content__generalInfo">
                    <span className="content__rating">Rating :{movie.vote_average}</span>
                    <span className="content__releaseDate">Released On : {movie.release_date}</span>
                </div>
                <div className="content__description">{movie.overview}</div>
            </div>
            <button className="content__close" onClick={onClose}>
                <IconCross/>
            </button>
        </div>
    </div>
);

export default Content;
