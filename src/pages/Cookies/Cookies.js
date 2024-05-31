import React from 'react'
import './Cookies.css'
import Navbar from '../../components/Navbar/Navbar';
import { motion } from 'framer-motion';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const Cookies = () => {
    return (
        <div className="cookies-container">
            <div className='cookies-col-title'>
                <motion.h2
                    className='cookies-title'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5}}
                >
                    Politique de gestion des cookies
                </motion.h2>
                <div className='cookies-col-title'>
                    <motion.p
                        className='cookies-subtitle'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                    >
                        Introduction
                    </motion.p>
                    <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                    >
                        Les cookies sont des fichiers textes placés sur votre ordinateur pour collecter des informations standard de journal Internet 
                        et des informations sur le comportement des visiteurs.
                    </motion.p>
                    <br/>
                </div>
            </div>

            <div className='cookies-flex'>
                <div className='cookies-col'>
                    <motion.p
                        className='cookies-subtitle'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                    >
                        Types de cookies utilisés
                    </motion.p>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                    >
                        <p>Nous utilisons les types de cookies suivants :</p>
                        <ul className='cookies-list'>
                            <li>Cookies de session</li>
                            <li>Cookies persistants</li>
                            <li>Cookies analytiques</li>
                        </ul>
                    </motion.div>
                    <br/>

                    <motion.p
                        className='cookies-subtitle'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                    >
                        Gestion des cookies
                    </motion.p>
                    <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                    >
                        Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou en cliquant sur l'icone en bas a droite. 
                        Des informations détaillées sur la gestion des cookies peuvent être trouvées sur sebastiendechand.com.
                    </motion.p>
                    <br/>
                </div>

                <div className='cookies-col'>
                    <motion.p
                        className='conf-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                    >
                        Finalités des cookies
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                    >
                        <p>Les cookies que nous utilisons servent à :</p>
                        <ul className='cookies-list'>
                            <li>Améliorer la fonctionnalité du site</li>
                            <li>Analyser l'utilisation du site</li>
                            <li>Personnaliser le contenu</li>
                        </ul>
                    </motion.div> 
                    <br/>

                    <motion.p
                        className='conf-subtitle'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                    >
                        Consentement des utilisateurs
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                    >
                        En utilisant notre site, vous consentez à l'utilisation de cookies. 
                        Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur ou en nous contactant.
                    </motion.p> 
                    <br/>
                </div>
            </div>

            <BurgerMenu />

            <Navbar />
        </div>
  )
}

export default Cookies
