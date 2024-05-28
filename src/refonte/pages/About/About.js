// About.js
import React from 'react';
import './About.css';
import Navbar from '../Accueil/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seb from '../../../assets/photo/Seb.jpg';
import diplome from '../../../assets/photo/Diplome.pdf'
import cv from '../../../assets/photo/CV.pdf'

const About = () => {
  return (
    <div className='about-ctn'>
      <motion.img
          className='about-img'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 4}}
          src={Seb}
          alt='Sébastien'
      />
      

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

      <Link to='/' className='return'>
        <i class="fa-solid fa-house"></i>
        <p>Retour à l'accueil</p>
      </Link>

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
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.5}}
        >
          Après avoir consacré une décennie au secteur de la grande distribution, 
          j'ai décidé de réorienter ma carrière vers le monde dynamique et stimulant du développement web. <br />
          <br />
        </motion.p>
        <motion.p
          className=''
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2}}
        >
          Ma transition vers cette nouvelle carrière a été marquée par une formation intensive chez OpenClassrooms,
          où j'ai acquis une expertise technique approfondie. <br />
          Je maîtrise un large éventail de technologies modernes. <br />
          Ces outils me permettent de créer des applications web à la fois performantes et esthétiques,
          répondant ainsi aux besoins spécifiques des utilisateurs tout en offrant une expérience utilisateur fluide et engageante.<br />
          <br />
        </motion.p>
        <motion.p
          className=''
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 2.5}}
        >
          Je suis toujours prêt à relever de nouveaux défis et à apporter des solutions créatives et efficaces aux projets qui me sont confiés.<br />
          <br />
          <br />
        </motion.p>
 
      </div>

      <div className='about-xp-ctn'>
        <motion.div
            className='about-xp'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3}}
        >
          <h3>Expérience</h3>
          <p>- 1 an d'expérience en temps que Développeur Web Front-end</p>
          <a href={diplome} target='_blank' rel="noreferrer">
              Voir mon diplôme
          </a>
          <a href={cv} target='_blank' rel="noreferrer">
              Voir mon CV
          </a>
        </motion.div>

        <motion.div
            className='about-skills-ctn'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 3.5}}
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
                <li>Redux</li>
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
