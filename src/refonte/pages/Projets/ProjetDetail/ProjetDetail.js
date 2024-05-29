import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import projetsData from '../../../../data/projets.json';
import './ProjetDetail.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../Accueil/Navbar/Navbar';
import Carousel from '../../../Carousel/Carousel';

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
    }, [project]); // Make sure to include project in the dependencies array

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    function getVideo(vd) {
        let video = require("../../../../assets/pictures/" + vd);
        return video;
    }

    return (
        <div className="projet-detail-container">
            
            <h1 className='projet-detail-title'>{project.title}</h1>
            <h2 className='projet-detail-subtitle'>{project.subtitle}</h2>
            
            <ul className='projet-detail-list'>
                <li>
                    <h4>Rôle</h4>
                    <div className='projet-detail-underline'></div>
                    <p>{project.role}</p>
                </li>
                <li>
                    <h4>Compétences</h4>
                    <div className='projet-detail-underline'></div>
                    <p className="projet-detail-skills">
                        {project.skills.map((skill, index) => (
                            <div key={index}>{skill}</div>
                        ))}
                    </p>
                </li>
                <li>
                    <h4>URL</h4>
                    <div className='projet-detail-underline'></div>
                    <a href={project.link ? project.link : project.github} target="_blank" rel="noopener noreferrer">
                        {project.link ? project.link : project.github}
                    </a>
                </li>
            </ul>

            <video ref={videoRef} src={getVideo(project.video)} autoPlay loop muted alt="Visualisation rapide du site" type="video/mp4" className='projet-detail-video'/>

            <div className='projet-detail-txt'>
                <h4>Client</h4>
                <p>{project.client}</p>
            </div>
            <div className='projet-detail-txt'>
                <h4>Mission</h4>
                <p>{project.description}</p>
            </div>

            <Carousel data={project.pictures}/>

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

            <Link to='/' className='contact-return'>
                <i className="fa-solid fa-house"></i>
                <p>Retour à l'accueil</p>
            </Link>

            <Link to='/projets' className='projet-return'>
                <i className="fa-solid fa-person-running"></i>
                <p>Retour aux projets</p>
            </Link>

            <Navbar />
        </div>
    );
};

export default ProjetDetail;
