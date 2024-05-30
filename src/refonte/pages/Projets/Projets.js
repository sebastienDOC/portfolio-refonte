import React, { useState } from 'react';
import './Projets.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projetsData from '../../../data/projets.json';
import ProjetList from './ProjetList/ProjetList';
import ProjetImg from './ProjetImg/ProjetImg';
import Navbar from '../Accueil/Navbar/Navbar';

const Projets = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const variants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3
            },
        }),
    };

    return (
        <div className='projets-container'>
            <div className='projets-top'>
                <motion.h2
                    className='projets-title'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                    PROJETS
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                >
                    Bienvenue sur mon portfolio en ligne, où vous découvrirez une sélection de mes meilleurs travaux en développement web front-end.
                    <br />
                    Vous pourrez trouver ici des projets réalisés pendant ma formation et d'autres projets professionnels.
                </motion.p>
                <br />
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
                >
                    Chaque jour est une nouvelle occasion pour moi d'apprendre, d'acquérir de nouvelles compétences et d'améliorer mes capacités
                    pour créer des expériences utilisateur exceptionnelles.
                </motion.p>
            </div>

            <div className='projets-bottom'>
                <div className='projets-left'>
                    {hoveredProject && (
                        <ProjetImg
                            cover={hoveredProject.cover}
                            alt={hoveredProject.alt}
                            type={hoveredProject.type}
                        />
                    )}
                </div>
                <div className='projets-right'>
                    {projetsData[0].formation.map((data, index) => (
                        <motion.div
                            key={data.id}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={variants}
                        >
                            <Link
                                to={`/projets/${data.id}`}
                                className='projets-right-link'
                                onMouseEnter={() => setHoveredProject(data)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <ProjetList
                                    title={data.title}
                                    subtitle={data.subtitle}
                                    projetId={data.id}
                                    id={data.id}
                                    cover={data.cover}
                                    alt={data.alt}
                                />
                            </Link>
                        </motion.div>
                    ))}
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

export default Projets;
