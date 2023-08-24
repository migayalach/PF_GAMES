import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getRating, postRating, updateRating } from '../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Biblioteca.module.css'
import Swal from "sweetalert2";

const Card = (props) => {
    const dispatch = useDispatch();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { user } = useAuth0();
    const currentUser = useSelector(state => state.user)
    const ratingsUser = useSelector(state => state.ratings?.filter(index => index.userInfoIdUser == currentUser?.idUser));
    const ratingConditional = ratingsUser.filter(index => index.gameIdGame == props.id)

    const [comment, setComment] = useState(
        props.id === ratingConditional[0]?.gameIdGame ? ratingConditional[0]?.comment : ''
    );
    const [rating, setRating] = useState(
        props.id === ratingConditional[0]?.gameIdGame ? ratingConditional[0]?.amountStars : 0
    );
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const handleComment = (event) => {
        event.preventDefault();
        setComment(event.target.value);
    }

    const agregarComentario = () => {
        dispatch(postRating({
            idUser: currentUser.idUser,
            idGame: props.id,
            amountStars: rating,
            comment: comment,
        }));
        Swal.fire({
            title: "Comment added!",
            icon: "success"
        })
    }

    const editarComentario = () => {
        dispatch(updateRating({
            userInfoIdUser: currentUser.idUser,
            gameIdGame: props.id,
            amountStars: rating,
            comment: comment,
        }));
        Swal.fire({
            title: "Comment updated!",
            icon: "success"
        })
    }

    return (
        <div className={styles.contenedorPadre}>
            <div className={styles.contenedorGame}>
                <Link to={`/detail/${props.id}`}>
                    <div className={styles.contenedorSubGame}>
                        <img src={props.image} alt={props.name} className={styles.imageContainer} />
                        <h3 className={styles.descriptionGame}>{props.name}</h3>
                    </div>
                </Link>
                {
                    props.id == ratingConditional[0]?.gameIdGame
                        ? <button onClick={openPopup}>EDIT</button>
                        : <button onClick={openPopup}>RATE</button>
                }
                {isPopupVisible && (
                    <div className={styles.contenedorPadreRating}>
                        <div className={styles.subContenedorRating}>
                            <div>
                                <h1 style={{ color: 'black' }}>RATING</h1>
                                <br />
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <label>
                                            <input
                                                className={styles.input}
                                                type="radio"
                                                name='rating'
                                                value={ratingValue}
                                                onClick={() => setRating(ratingValue)}
                                            />
                                            <FaStar className={styles.star}
                                                color={ratingValue <= rating ? "#ffc107" : "#00FFFF"}
                                            />
                                        </label>
                                    )
                                })}
                            </div>
                            <input value={comment} onChange={event => handleComment(event)} style={{ height: "200px", }} type="text" placeholder='Leave a comment...' />
                            <div className={styles.contenedorInput}>
                                <button onClick={closePopup}>CLOSE</button>
                                {
                                    props.id == ratingConditional[0]?.gameIdGame
                                        ? <button onClick={() => editarComentario()}>EDIT</button>
                                        : <button onClick={() => agregarComentario()}>ADD</button>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Card;