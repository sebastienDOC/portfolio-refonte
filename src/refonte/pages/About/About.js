// About.js
import React from 'react';
import './About.css';
import Navbar from '../Accueil/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seb from '../../../assets/photo/Seb.jpg';
import diplome from '../../../assets/photo/Diplome.pdf'
import cv from '../../../assets/photo/CV.pdf'
import BurgerMenu from '../../BurgerMenu/BurgerMenu';

const About = () => {
  return (
    <div className='about-ctn'>
      <motion.img
          className='about-img'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2.8}}
          src={Seb}
          alt='Sébastien'
      />
      
      <motion.div
          className='about-link-1'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 3.1}}
          src={Seb}
          alt='Sébastien'
      >
        <a href={diplome} target='_blank' rel="noreferrer">
            Voir mon diplôme
        </a>
      </motion.div>

      <motion.div
          className='about-link-2'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 3.4}}
          src={Seb}
          alt='Sébastien'
      >
        <a href={cv} target='_blank' rel="noreferrer">
            Voir mon CV
        </a>
      </motion.div>
      
      <div className='about-title-ctn'>
        <motion.h1
          className='about-title'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5}}
        >
          À PROPOS
        </motion.h1>
      </div>

      <BurgerMenu />

      <div className='about-sub-ctn'>
        <motion.h2
          className='about-sub'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1}}
        >
          Je suis Sébastien, Développeur Web passionné.
        </motion.h2>
      </div>

      <div className='about-txt-ctn'>
        <motion.p
          className=''
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.3}}
        >
          Après une décennie dans le secteur de la grande distribution, 
          j’ai pivoté vers le monde dynamique et stimulant du développement web. <br />
          <br />
        </motion.p>
        <motion.p
          className=''
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
        >
          Ma transition s’est opérée grâce à une formation intensive chez OpenClassrooms, 
          où j’ai acquis une expertise technique pointue. 
          <br />
          Je maîtrise un large éventail de technologies modernes, 
          me permettant de créer des applications web performantes et esthétiques. <br />
          Mon objectif ? Répondre aux besoins spécifiques des utilisateurs tout en offrant une expérience fluide et engageante.<br />
          <br />
        </motion.p>
        <motion.p
          className=''
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.9}}
        >
          Je suis toujours prêt à relever de nouveaux défis et à apporter des solutions créatives et efficaces aux projets qui me sont confiés.<br />
          <br />
          <br />
        </motion.p>
 
      </div>

      <div className='about-xp-ctn'>
        <motion.div
            className='about-skills-ctn'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 2.2}}
        >
          <h3>Compétences</h3>
          <div className='about-skills-flex'>
            <div className='about-skills'>
              <h4>Front-end</h4>
              <ul className='about-skills-list'>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Sass</li>
              </ul>
            </div>
            <div className='about-skills'>
              <h4>Back-end</h4>
              <ul className='about-skills-list'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className='about-skills'>
              <h4>Autre</h4>
              <ul className='about-skills-list'>
                <li>GitHub</li>
                <li>Notion</li>
                <li>SEO</li>
              </ul>
            </div>
          </div>
        </motion.div> 
      </div> 
      
      <Navbar />
    </div>
  );
}

export default About;
