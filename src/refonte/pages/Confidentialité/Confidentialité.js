import React from 'react'
import './Confidentialité.css'
import Navbar from '../Accueil/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Confidentialité = () => {
  return (
    <div className="conf-container">
        <motion.h2
          className='conf-title'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5}}
        >
          Politique de confidentialité
        </motion.h2>


        <div className='conf-flex'>
            <div className='conf-col'>
                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                >
                    Introduction
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
                >
                    Nous attachons une grande importance à la protection de vos données personnelles et nous nous engageons à les traiter 
                    dans le respect de la réglementation en vigueur, notamment le RGPD.
                </motion.p>
                <br/>

                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                >
                    Données collectées
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
                >
                    <p>Nous collectons différentes données personnelles vous concernant, telles que :</p>
                    <ul className='conf-list'>
                        <li>Nom</li>
                        <li>Adresse e-mail</li>
                        <li>Adresse postale</li>
                        <li>Numéro de téléphone</li>
                    </ul>
                    <br/>
                </motion.div>
                
                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                >
                    Utilisation des données
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
                >
                    <p>Vos données personnelles sont utilisées pour :</p>
                    <ul className='conf-list'>
                        <li>Améliorer nos services</li>
                        <li>Vous contacter pour des informations ou des offres promotionnelles</li>
                        <li>Analyser le trafic du site</li>
                    </ul>
                    <br/>
                </motion.div>

                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                >
                    Partage des données
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
                >
                    Nous pouvons partager vos données avec des partenaires de confiance dans le cadre de la fourniture de nos services. 
                    Nous nous assurons que ces partenaires respectent des standards élevés de protection des données.
                </motion.p>
            </div>

            <div className='conf-col'>
                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                >
                    Droits des utilisateurs
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
                >
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
                </motion.div>             

                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.5}}
                >
                    Sécurité des données
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.5}}
                >
                    Nous mettons en place des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé.
                </motion.p>  
                <br/>

                <motion.p
                    className='conf-subtitle'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.8}}
                >
                    Modifications de la politique de confidentialité
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 2.8}}
                >
                    <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité. 
                        Toute modification sera publiée sur cette page et, si nécessaire, vous en serez informé par e-mail.
                    </p>
                </motion.p>  

            </div>
        </div>

        <Link to='/' className='contact-return'>
            <i class="fa-solid fa-house"></i>
            <p>Retour à l'accueil</p>
        </Link>

        <Navbar />
    </div>
  )
}

export default Confidentialité
