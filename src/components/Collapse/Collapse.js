// CSS
import './Collapse.css'
// Hooks
import { useEffect, useState } from 'react';
// Images
import GitHub from '../../assets/contact/github.webp'
import Link from '../../assets/contact/link.webp'
import Figma from '../../assets/contact/figma.webp'
import OC from '../../assets/logo/oc.webp'
import Logo from '../../assets/logo/logo2.webp'
// Motion
import { motion } from 'framer-motion'

export default function Collapse({key, title, sub, cover, alt, banner, altBanner, client, description, github, ghpages, figma, skills, type}) {
    // State pour ouverture/fermeture de la collapse
    const [openCollapse, setOpenCollapse] = useState(false);
    const toggle = () => {
        setOpenCollapse(!openCollapse);
    };
    // Récupération des images 
    function getImgCover(img) {
        let images = require("../../assets/projets/formation" + img);
        return images;
    }
    function getImgCoverSkills(img) {
        let images = require("../../assets/skills" + img);
        return images;
    }

    return (
        <div key={key} className='collapse-ctn'>
            
            <motion.div 
                className='collapse-btn'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className='collapse-logo-ctn'>
                    {type === 'Formation' ?
                        <img src={OC} alt="Logo d'OpenClassrooms" className='collapse-logo' title='Projet OpenClassrooms' onClick={toggle}/> 
                        :
                        <img src={Logo} alt="Logo de Sébastien Dechand" className='collapse-logo' title='Projet Professionnel / Personnel' onClick={toggle}/> 
                    }
                </div>
                <img src={getImgCover(cover)} alt={alt} className='collapse-img' onClick={toggle}/>
                <div className='collapse-dropup' onClick={toggle}>
                    <h3 className='collapse-title'>{title}</h3>
                    <div className='collapse-ctn-icons'>
                        {github ? 
                        <a href={github} className='collapse-github' target='_blank' rel='noreferrer' title='Lien GitHub'>
                            <img src={GitHub} alt='Logo GitHub' className='collapse-icons'/>
                        </a>
                        : null} 
                        {ghpages ? 
                        <a href={ghpages} className='collapse-ghpages' target='_blank' rel='noreferrer' title='Lien vers le site web'>
                            <img src={Link} alt='Logo GitHub' className='collapse-icons'/>
                        </a>
                        : null}
                    </div>
                </div>
            </motion.div>

            <div className={`collapse-content ${openCollapse ? 'open' : ''}`}>
                <div className={`collapse-content-bg ${openCollapse ? 'open-bg' : ''}`}></div>
                <div className='collapse-content-txt'>
                    <i className="fa-solid fa-xmark" onClick={toggle}></i>
                    <img src={getImgCover(banner)} alt={altBanner} className='collapse-banner' title={title}/>
                    <h3 className='collapse-title'>{title}</h3>
                    <h4 className='collapse-title'>{sub}</h4>
                    <p className='collapse-txt'>
                        <span className='underline'>
                            Client : 
                        </span> {client}
                    </p>
                    <p className='collapse-txt'>
                        <span className='underline'>
                            Description de la mission : 
                        </span> {description}
                    </p>
                    
                    <div className='collapse-skills'>
                        {skills.map((image, id) => {
                            return <img 
                                        src={getImgCoverSkills(image)} 
                                        alt={image} 
                                        key={id} 
                                        title="Compétence"
                                        className='collapse-skills-icons'
                                    />
                        })}
                    </div>

                    <div className='collapse-ctn-icons'>
                        {github ? 
                            <a href={github} className='collapse-github' target='_blank' rel='noreferrer' title='Lien GitHub'>
                                <img src={GitHub} alt='Logo GitHub' className='collapse-icons'/>
                            </a>
                        : null} 
                        {ghpages ? 
                            <a href={ghpages} className='collapse-ghpages' target='_blank' rel='noreferrer' title='Lien vers le site web'>
                                <img src={Link} alt='Logo GitHub' className='collapse-icons'/>
                            </a>
                        : null}
                        {figma ? 
                            <a href={figma} className='collapse-figma' target='_blank' rel='noreferrer' title='Lien Figma'>
                                <img src={Figma} alt='Logo GitHub' className='collapse-icons'/>
                            </a>
                        : null}
                    </div>
                </div>
            </div>
            
        </div>
    )
}