import React, { useState } from 'react'
import './Cookies.css'
import GenericModale from '../../Modal/GenericModale';

const Cookies = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
        <div className="cookies-container">
            {/* <button onClick={handleOpenModal} className='cookies-btn'>Politique de gestion de cookies</button> */}
            <button onClick={handleOpenModal} className='cookies-btn'>Cookies</button>
            <GenericModale show={showModal} handleClose={handleCloseModal}>
                <h2 className='cookies-title'>Politique de gestion des cookies</h2>
                <p className='cookies-subtitle'>Introduction</p>
                <p>
                    Les cookies sont des fichiers textes placés sur votre ordinateur pour collecter des informations standard de journal Internet 
                    et des informations sur le comportement des visiteurs.
                </p>
                <br/>

                <p className='cookies-subtitle'>Types de cookies utilisés</p>
                <p>Nous utilisons les types de cookies suivants :</p>
                <ul className='cookies-list'>
                    <li>Cookies de session</li>
                    <li>Cookies persistants</li>
                    <li>Cookies analytiques</li>
                </ul>
                <br/>

                <p className='cookies-subtitle'>Finalités des cookies</p>
                <p>Les cookies que nous utilisons servent à :</p>
                <ul className='cookies-list'>
                    <li>Améliorer la fonctionnalité du site</li>
                    <li>Analyser l'utilisation du site</li>
                    <li>Personnaliser le contenu</li>
                </ul>
                <br/>

                <p className='cookies-subtitle'>Gestion des cookies</p>
                <p>
                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou en cliquant sur l'icone en bas a droite. 
                    Des informations détaillées sur la gestion des cookies peuvent être trouvées sur sebastiendechand.com.
                </p>
                <br/>

                <p className='cookies-subtitle'>Consentement des utilisateurs</p>
                <p>
                    En utilisant notre site, vous consentez à l'utilisation de cookies. 
                    Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur ou en nous contactant.
                </p>
                <br/>
            </GenericModale>
        </div>
  )
}

export default Cookies
