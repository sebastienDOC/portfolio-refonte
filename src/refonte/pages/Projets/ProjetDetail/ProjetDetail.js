import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projetsData from '../../../../data/projets.json';
import './ProjetDetail.css';
import { motion } from 'framer-motion';
import BurgerMenu from '../../../BurgerMenu/BurgerMenu';
import Carousel from '../../../Carousel/Carousel';
import NavProjet from '../NavProjet/NavProjet';
import SkillsList from '../../../SkillsList/SkillsList';

const ProjetDetail = () => {
    const { id } = useParams();
    const project = projetsData[0].formation.find(projet => projet.id === id);

    const videoRef = useRef(null);

    useEffect(() => {
        if (!project) {
            return; // Exit early if project is not found
        }

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% of the video is visible
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [project]);

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    function getVideo(vd) {
        let video = require("../../../../assets/pictures/" + vd);
        return video;
    }

    return (
        <div className="projet-detail-container">
            
            <motion.div
                className='projet-detail-title-ctn'
                initial={{ opacity: 0, y: -1000 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
            >
                <motion.div
                    className='projet-detail-title-ctn'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
                >
                    <h1 className='projet-detail-title'>{project.title}</h1>
                    <h2 className='projet-detail-subtitle'>{project.subtitle}</h2>
                </motion.div>
            </motion.div>
            
            <motion.ul
                className='projet-detail-list'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
            >
                <li>
                    <h4>Rôle</h4>
                    <div className='projet-detail-underline'></div>
                    <p>{project.role}</p>
                </li>
                <li>
                    <h4>Compétences</h4>
                    <div className='projet-detail-underline'></div>
                    <SkillsList skills={project.skills} />
                </li>
                <li>
                    <h4>URL</h4>
                    <div className='projet-detail-underline'></div>
                    <a href={project.link ? project.link : project.github} target="_blank" rel="noopener noreferrer">
                        {project.link ? project.link : project.github}
                    </a>
                </li>
            </motion.ul>

            <motion.video
                className='projet-detail-video'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 2.5 }}
                ref={videoRef}
                src={getVideo(project.video)} 
                autoPlay 
                loop 
                muted 
                alt="Visualisation rapide du site" 
                type="video/mp4" 
            />

            <motion.div
                className='projet-detail-txt'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
            >
                <h4>Client</h4>
                <p>{project.client}</p>
            </motion.div>

            <motion.div
                className='projet-detail-txt'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 3.5 }}
            >
                <h4>Mission</h4>
                <p>{project.description}</p>
            </motion.div>

            <Carousel data={project.pictures}/>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 4.5 }}
            >
                <div className='projet-detail-bottom'>
                    <h3 className='projet-detail-quote'>Consultez le.</h3>
                    {project.link ?
                        project.link && 
                            <button className='projet-detail-link'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.link}
                                </a>
                            </button>
                        : 
                        project.github && 
                            <button className='projet-detail-link'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" >
                                    {project.github}
                                </a>
                            </button>
                    }
                </div>
            </motion.div>

            <BurgerMenu />

            <NavProjet />
        </div>
    );
};

export default ProjetDetail;
