import React from 'react';
import './Mentions.css';
import Navbar from '../Accueil/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Mentions = () => {
    return (
        <div className="mentions-container">
            <motion.h2
                className='mentions-title'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
                Mentions légales
            </motion.h2>

            <div className='mentions-flex'>
                <div className='mentions-col'>
                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                    >
                        Informations sur l'éditeur du site
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                    >
                        Le présent site web, accessible en tout temps et en tous lieux à partir de l’adresse : « sebastiendechand.com » aux visiteurs, 
                        ci-après désignés « Utilisateurs », est édité par : Sébastien DECHAND, entrepreneur individuel (n° de SIRET : 92771364400015) 
                        dont l’adresse de l’établissement est 12 B rue Jean Jaurès 21110 GENLIS.
                    </motion.p>
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                    >
                        Direction de la publication assurée par :
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                    >
                        Sébastien DECHAND, entrepreneur individuel (n° de SIRET : 92771364400015) dont l’adresse de l’établissement est 12 B rue Jean Jaurès 21110 GENLIS.
                        <br /><br />
                        Numéro de téléphone : 06 23 21 38 15<br />
                        Adresse e-mail : sebastiendechand@gmail.com<br />
                        <br />
                        Le Directeur de la publication est Sébastien DECHAND ci-après « l’Editeur ».
                    </motion.p>
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                    >
                        Hébergement
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                    >
                        L’hébergement du présent site internet est assuré par la société 02switch domiciliée au Chem. des Pardiaux, 63000 Clermont-Ferrand.
                    </motion.p>
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                    >
                        Contenu de sebastiendechand.com
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                    >
                        Les informations présentées sur sebastiendechand.com ont un but purement informatif et n’emportent aucun engagement contractuel ou de 
                        toute autre nature que ce soit.<br/>
                        sebastiendechand.com se réserve le droit d’en modifier le contenu, les caractéristiques, la présentation, à son entière discrétion et à tout moment.<br/> 
                        L’intégralité des documents, informations, images, vidéos ou tout autre contenu de toute nature que ce soit sont non libres de reproduction.
                    </motion.p>
                    <br/>
                </div>

                <div className='mentions-col'>
                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                    >
                        Mise en œuvre des services du site internet
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                    >
                        Nous mettons tout en œuvre pour améliorer votre expérience utilisateur. <br/>
                        Malgré tous les soins apportés et diligences accomplies afin de maintenir le site opérationnel, il se peut que ce dernier présente des inexactitudes.<br/>
                        Nous nous dégageons de toute responsabilité en cas d’indisponibilité de certains services proposés sur sebastiendechand.com. <br/>
                        Nous vous remercions de nous faire suivre les éventuelles erreurs à l’adresse suivante : sebastiendechand@gmail.com.
                    </motion.p>  
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.5}}
                    >
                        Liens externes
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.5}}
                    >
                        Les liens établis, en direction d’autres sites, à partir de sebastiendechand.com ne sauraient engager notre responsabilité.
                    </motion.p>  
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.8}}
                    >
                        Informations techniques
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.8}}
                    >
                        Nous rappelons aux utilisateurs de notre site internet que le secret des correspondances ne peut être garanti sur Internet et qu’il leur 
                        appartient de prendre toutes les mesures de précaution appropriées dans le cadre de la protection de leurs données.<br/> 
                        sebastiendechand.com ne pourra être tenu pour responsable des manquements des utilisateurs.
                    </motion.p>  
                    <br/>

                    <motion.p
                        className='mentions-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 3.1}}
                    >
                        Propriété intellectuelle
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 3.1}}
                    >
                        Le présent site internet ainsi que, mais sans s’y limiter, l’ensemble des contenus s’y trouvant ou venant à s’y trouver sont et 
                        demeurent la pleine propriété de l’éditeur du site sauf mention expresse contraire.<br/> 
                        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans autorisation de l’Éditeur 
                        est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété 
                        intellectuelle et le Code civil.
                    </motion.p>  
                    <br/>
                </div>
            </div>
            

            <Link to='/' className='contact-return'>
                <i className="fa-solid fa-house"></i>
                <p>Retour à l'accueil</p>
            </Link>

            <Navbar />
        </div>
    )
}

export default Mentions;
