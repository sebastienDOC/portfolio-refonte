import React from 'react'
import "./Footer.css"
import Copyright from './Copyright/Copyright'
import Mentions from './Mentions/Mentions'
import Cookies from './Cookies/Cookies'
import Confidentialité from './Confidentialité/Confidentialité'
// Data
import contact from '../../data/contact.json'
// Composants
import ContactData from '../Contact/ContactData'
import { ElfsightWidget } from 'react-elfsight-widget';

const Footer = () => {
  return (
    <div className='footer-ctn' id="home-contact">
        <div className='footer-top'>
            <div className='footer-left'>
                <h4 className='footer-title'>Création de site internet en Bourgogne</h4>
                <p className='footer-subtitle'>Développeur Web sur Dijon et la Côte d'Or</p>
                <p className='footer-txt'>React, Node.js</p>
                <ul className='footer-list'>
                    <li>Création, refonte et optimisation de site internet</li>
                    <li>Nom de domaine et hébergement de site internet</li>
                    <li>Maintenance de site internet</li>
                </ul>
            </div>
            <div className='footer-middle'>
                <h4 className='footer-title'>Contactez nous</h4>
                {contact[0].contact.map((contact) => 
                        <ContactData 
                            key={contact.id}
                            cover={contact.cover}
                            alt={contact.alt}
                            href={contact.href}
                            // title={contact.title}
                            description={contact.description}
                            description_2={contact.description_2}
                        />
                    )}
                {/* <ul className='footer-middle-list'>
                    <li>
                        <a href='tel:+33623213815'>
                            <i class="fa-solid fa-phone"></i>
                            <p>06 23 21 38 15</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:sebastiendechand@gmail.com">
                            <i class="fa-solid fa-envelope"></i>
                            <p>sebastiendechand@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <a href='https://maps.app.goo.gl/QAK4DLAp2voUy1HA9'>
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <p>12 B rue Jean Jaurès</p>
                                <p>21110 Genlis, FRANCE</p>
                            </div>
                        </a>
                    </li>
                </ul> */}
            </div>
            <div className='footer-right'>
                <Mentions />
                <Confidentialité />
                <Cookies />
                <ElfsightWidget widgetId="39eede1a-eef5-4f92-9f2b-6de0d53fed99" lazy modern className='google'/>
            </div>
        </div>
        <Copyright />
    </div>
  )
}

export default Footer

