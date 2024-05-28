import React, { useState } from 'react';
import './Mentions.css';
import GenericModale from '../../Modal/GenericModale';

const Mentions = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    return (
        <div className="mentions-container">
            <button onClick={handleOpenModal} className='mentions-btn'>Mentions légales</button>
            <GenericModale show={showModal} handleClose={handleCloseModal}>
                <h2 className='mentions-title'>Mentions légales</h2>

                <p className='mentions-subtitle'>Informations sur l'éditeur du site</p>
                <p>
                    Le présent site web, accessible en tout temps et en tous lieux à partir de l’adresse : « sebastiendechand.com » aux visiteurs, 
                    ci-après désignés « Utilisateurs », est édité par : Sébastien DECHAND, entrepreneur individuel (n° de SIRET : 92771364400015) 
                    dont l’adresse de l’établissement est 12 B rue Jean Jaurès 21110 GENLIS. <br />
                    <br />
                </p>

                <p className='mentions-subtitle'>La direction de la publication est assurée par :</p>
                <p>
                    Sébastien DECHAND, entrepreneur individuel (n° de SIRET : 92771364400015) dont l’adresse de l’établissement est 12 B rue Jean Jaurès 21110 GENLIS.
                    <br /><br />
                    Numéro de téléphone : 06 23 21 38 15<br />
                    Adresse e-mail : sebastiendechand@gmail.com<br />
                    <br />
                    Le Directeur de la publication est Sébastien DECHAND ci-après « l’Editeur ».<br />
                    <br />
                </p>

                <p className='mentions-subtitle'>Hébergement</p>
                <p>
                    L’hébergement du présent site internet est assuré par la société 02switch domiciliée au Chem. des Pardiaux, 63000 Clermont-Ferrand.
                </p>
                <br/>

                <p className='mentions-subtitle'>Contenu de sebastiendechand.com</p>
                <p>
                    Les informations présentées sur sebastiendechand.com ont un but purement informatif et n’emportent aucun engagement contractuel ou de 
                    toute autre nature que ce soit.<br/>
                    sebastiendechand.com se réserve le droit d’en modifier le contenu, les caractéristiques, la présentation, à son entière discrétion et à tout moment.<br/> 
                    L’intégralité des documents, informations, images, vidéos ou tout autre contenu de toute nature que ce soit sont non libres de reproduction.
                </p>
                <br/>

                <p className='mentions-subtitle'>Mise en œuvre des services du site internet</p>
                <p>
                    Nous mettons tout en œuvre pour améliorer votre expérience utilisateur. <br/>
                    Malgré tous les soins apportés et diligences accomplies afin de maintenir le site opérationnel, il se peut que ce dernier présente des inexactitudes.<br/>
                    Nous nous dégageons de toute responsabilité en cas d’indisponibilité de certains services proposés sur sebastiendechand.com. <br/>
                    Nous vous remercions de nous faire suivre les éventuelles erreurs à l’adresse suivante : sebastiendechand@gmail.com.
                </p>
                <br/>

                <p className='mentions-subtitle'>Liens externes</p>
                <p>
                    Les liens établis, en direction d’autres sites, à partir de sebastiendechand.com ne sauraient engager notre responsabilité.
                </p>
                <br/>

                <p className='mentions-subtitle'>Informations techniques</p>
                <p>
                    Nous rappelons aux utilisateurs de notre site internet que le secret des correspondances ne peut être garanti sur Internet et qu’il leur 
                    appartient de prendre toutes les mesures de précaution appropriées dans le cadre de la protection de leurs données.<br/> 
                    sebastiendechand.com ne pourra être tenu pour responsable des manquements des utilisateurs.
                </p>
                <br/>

                <p className='mentions-subtitle'>Propriété intellectuelle</p>
                <p>
                    Le présent site internet ainsi que, mais sans s’y limiter, l’ensemble des contenus s’y trouvant ou venant à s’y trouver sont et 
                    demeurent la pleine propriété de l’éditeur du site sauf mention expresse contraire.<br/> 
                    Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans autorisation de l’Éditeur 
                    est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété 
                    intellectuelle et le Code civil.
                </p>
                <br/>
            </GenericModale >
        </div>
    )
}

export default Mentions;
