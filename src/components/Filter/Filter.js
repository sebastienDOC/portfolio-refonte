import React, { useState, useEffect, useRef } from 'react';
import './Filter.css';
import Projets from '../Projets/Projets';
import Pagination from '../Pagination/Pagination';
import { motion, AnimatePresence } from 'framer-motion';
import alliance from "../../assets/banniere/alliance.webp";
import projetsData from '../../data/projets.json';

export default function Filter() {
    const [items, setItems] = useState(projetsData[0].formation);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setProjectsPerPage] = useState(9);
    const firstProjectRef = useRef(null);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 800) {
                setProjectsPerPage(4);
            } else if (window.innerWidth < 1200) {
                setProjectsPerPage(6);
            } else {
                setProjectsPerPage(9);
            }
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const firstProject = document.querySelector('.filter-ctn');
        if (firstProject) {
            firstProject.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = items.slice(indexOfFirstProject, indexOfLastProject);

    function categoryItem(categorieItem) {
        const updatedItems = projetsData[0].formation.filter((currentElement) => {
            return currentElement.type === categorieItem;
        });
        setItems(updatedItems);
        setCurrentPage(1)
    }

    function timingItem(categorieItem) {
        const updatedItems = projetsData[0].formation.filter((currentElement) => {
            return currentElement.finished === categorieItem;
        });
        setItems(updatedItems);
        setCurrentPage(1)
    }
    
    return (
        <div className='filter'>
            <h3>Bienvenue dans la section Projets de mon site !</h3>
            <div className='filter-ctn'>
                <button 
                    type='button' 
                    onClick={() => setItems(projetsData[0].formation)} 
                    className='filter-btn '
                >
                    Tous
                </button>
                <button 
                    type='button' 
                    onClick={() => categoryItem('Formation')} 
                    className='filter-btn'
                >
                    Formation
                </button>
                <button 
                    type='button' 
                    onClick={() => categoryItem('Professionnel')} 
                    className='filter-btn'
                >
                    Professionnel
                </button>
                <button 
                    type='button' 
                    onClick={() => timingItem(false)} 
                    className='filter-btn'
                >
                    En cours
                </button>
                <button 
                    type='button' 
                    onClick={() => timingItem(true)} 
                    className='filter-btn'
                >
                    Terminé
                </button>
            </div>

            <AnimatePresence>
                <motion.div className='projets-grid' >
                    {currentProjects.map((projets, index) => (
                        <div key={projets.id} ref={index === 0 ? firstProjectRef : null} className="projets">
                            <Projets
                                title={projets.title}
                                sub={projets.subtitle}
                                cover={projets.cover}
                                alt={projets.alt}
                                banner={projets.banner}
                                altBanner={projets.altBanner}
                                client={projets.client}
                                description={projets.description}
                                github={projets.github}
                                ghpages={projets.ghpages}
                                figma={projets.figma}
                                skills={projets.skills}
                                finished={projets.finished}
                                type={projets.type}
                            />
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
            
            <Pagination
                totalItems={items.length}
                itemsPerPage={projectsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}