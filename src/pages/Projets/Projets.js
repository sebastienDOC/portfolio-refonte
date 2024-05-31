import React, { useState } from 'react';
import './Projets.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projetsData from '../../data/projets.json';
import ProjetList from './ProjetList/ProjetList';
import ProjetImg from './ProjetImg/ProjetImg';
import Navbar from '../../components/Navbar/Navbar';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

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
                    Vous découvrirez des projets réalisés pendant ma formation 
                    et d'autres projets professionnels. <br />
                    Je conçois des sites modernes et intuitifs qui captivent les utilisateurs dès la première visite. 
                </motion.p>
                <br />
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
                >
                    Ma maitrise des langages de développement du HTML, CSS 3, ReactJS, Redux, Sass, Javascript 
                    vous garantit des applications rapides, bien structurées, responsive et optimisé pour les moteurs de recherche. <br />
                </motion.p>
                <br />
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
                >
                    Je travaille pour une collaboration efficace prenant en compte vos besoins 
                    et vos objectifs vous garantissant ainsi des résultats dans le respect de vos budgets et de vos délais.
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

            <BurgerMenu />

            <Navbar />
        </div>
    )
}

export default Projets;
