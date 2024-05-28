import React, { useState } from 'react'
import './Confidentialité.css'
import GenericModale from '../../Modal/GenericModale';

const Confidentialité = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  return (
    <div className="cookies-container">
        {/* <button onClick={handleOpenModal} className='cookies-btn'>Politique de confidentialité</button> */}
        <button onClick={handleOpenModal} className='cookies-btn'>Confidentialité</button>
        <GenericModale show={showModal} handleClose={handleCloseModal}>
            <h2 className='conf-title'>Politique de confidentialité</h2>
            <p className='conf-subtitle'>Introduction</p>
            <p>
                Nous attachons une grande importance à la protection de vos données personnelles et nous nous engageons à les traiter 
                dans le respect de la réglementation en vigueur, notamment le RGPD.
            </p>
            <br/>

            <p className='conf-subtitle'>Données collectées</p>
            <p>Nous collectons différentes données personnelles vous concernant, telles que :</p>
            <ul className='conf-list'>
                <li>Nom</li>
                <li>Adresse e-mail</li>
                <li>Adresse postale</li>
                <li>Numéro de téléphone</li>
            </ul>
            <br/>
            
            <p className='conf-subtitle'>Utilisation des données</p>
            <p>Vos données personnelles sont utilisées pour :</p>
            <ul className='conf-list'>
                <li>Améliorer nos services</li>
                <li>Vous contacter pour des informations ou des offres promotionnelles</li>
                <li>Analyser le trafic du site</li>
            </ul>
            <br/>

            <p className='conf-subtitle'>Partage des données</p>
            <p>
                Nous pouvons partager vos données avec des partenaires de confiance dans le cadre de la fourniture de nos services. 
                Nous nous assurons que ces partenaires respectent des standards élevés de protection des données.
            </p>
            <br/>

            <p className='conf-subtitle'>Droits des utilisateurs</p>
            <p>Vous disposez des droits suivants :</p>
            <ul className='conf-list'>
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d’opposition</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à : sebastiendechand@gmail.com.</p>
            <br/>

            <p className='conf-subtitle'>Sécurité des données</p>
            <p>Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé.</p>
            <br/>

            <p className='conf-subtitle'>Modifications de la politique de confidentialité</p>
            <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité. 
                Toute modification sera publiée sur cette page et, si nécessaire, vous en serez informé par e-mail.
            </p>
            <br/>

        </GenericModale>
    </div>
  )
}

export default Confidentialité
