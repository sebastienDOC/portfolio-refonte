import React from 'react'
import './Activite.css'
import tel from '../../assets/banniere/tel_3.png'
import alliance from "../../assets/banniere/alliance.webp";
import { ElfsightWidget } from 'react-elfsight-widget'

const Activite = () => {
  return (
    <div className='activite-ctn'>
        <div className='flex-row'>
            <h3>
                Sébastien Dechand - Développement Web est une entreprise dynamique spécialisée dans le développement web sur mesure pour les TPE, PME ou même les particuliers. <br/>
            </h3>
            <div>
                <div>
                    <img src={tel} alt='Un téléphone avec le site Kasa' title='Kasa' className='img_tel'/>
                    <p>Exemple de responsive design (Kasa)</p>
                </div>
                <div>
                    <img src={alliance} alt='Un ordinateur avec des lunettes et une tasse' title='Alliance-Équine' className='img_desk'/>
                    <p>Exemple de responsive design (Alliance-Équine)</p>
                </div>
            </div>
        </div>
        <div className='activite-boxes desktop'>
            <ul>
                <li title='Création'>
                    <i className="fa-brands fa-internet-explorer"></i>
                    <h3>Création de site internet</h3>
                    <p>
                        Créez un impact visuel avec des sites web à la fois beaux et performants. <br/>
                        <br/>
                        Notre approche combine design responsive, performance optimale et esthétisme saisissant pour une expérience utilisateur inoubliable.
                    </p>
                </li>
                <li title='Maintenance'>
                    <i className="fa-solid fa-hourglass-start"></i>
                    <h3>Maintenance de site internet</h3>
                    <p>  
                        Assurez la longévité de votre présence en ligne avec notre service de maintenance de sites web. <br />
                        <br />
                        Nous offrons une surveillance proactive, des mises à jour régulières et un support réactif pour garder votre site beau, 
                        performant, à jour et sécurisé en permanence.
                    </p>
                </li>
                <li title='Hébergement'>
                    <i className="fa-solid fa-house-laptop"></i>
                    <h3>Nom de domaine et hébergement</h3>
                    <p>
                        Maîtrisez chaque aspect de votre présence en ligne avec notre service complet d'enregistrement de noms de domaine et d'hébergement. <br />
                        <br />
                        Nous assurons une disponibilité maximale, une sécurité renforcée et une performance optimale pour votre site.
                    </p>
                </li>
                <li title='Refonte'>
                    <i className="fa-solid fa-signs-post"></i>
                    <h3>Refonte de site internet</h3>
                    <p>
                        Redynamisez votre présence en ligne avec notre service de refonte de sites web. <br />
                        <br />
                        Nous combinons expertise en design, performances améliorées et nouvelles fonctionnalités pour offrir à votre site 
                        une nouvelle vie et une expérience utilisateur renouvelée.
                    </p>
                </li>
            </ul>
        </div>
        <div className='activite-boxes mobile'>
            <ul>
                <li>
                    <i className="fa-brands fa-internet-explorer"></i>
                    <h3>Création de site internet</h3>
                    <p>
                        Créez un impact visuel avec des sites web à la fois beaux et performants. <br/>
                        <br/>
                        Notre approche combine design responsive, performance optimale et esthétisme saisissant pour une expérience utilisateur inoubliable.
                    </p>
                </li>
                <li>
                    <i className="fa-solid fa-hourglass-start"></i>
                    <h3>Maintenance de site internet</h3>
                    <p>
                        Assurez la longévité de votre présence en ligne avec notre service de maintenance de sites web. <br />
                        <br />
                        Nous offrons une surveillance proactive, des mises à jour régulières et un support réactif pour garder votre site beau, 
                        performant, à jour et sécurisé en permanence.
                    </p>
                </li>
            </ul>
            <ul>
                <li>
                    <i className="fa-solid fa-house-laptop"></i>
                    <h3>Nom de domaine et hébergement</h3>
                    <p>
                        Maîtrisez chaque aspect de votre présence en ligne avec notre service complet d'enregistrement de noms de domaine et d'hébergement. <br />
                        <br />
                        Nous assurons une disponibilité maximale, une sécurité renforcée et une performance optimale pour votre site.
                    </p>
                </li>
                <li>
                    <i className="fa-solid fa-signs-post"></i>
                    <h3>Refonte de site internet</h3>
                    <p>
                        Redynamisez votre présence en ligne avec notre service de refonte de sites web. <br />
                        <br />
                        Nous combinons expertise en design, performances améliorées et nouvelles fonctionnalités pour offrir à votre site 
                        une nouvelle vie et une expérience utilisateur renouvelée.
                    </p>
                </li>
            </ul>
        </div>
        <h3 className='activite-subtitle'>Qu'en pensent nos clients ?</h3>
        <ElfsightWidget widgetId="d1270272-2e73-47c1-99a9-795ad8c06215" lazy modern className='rating'/>
    </div>
  )
}

export default Activite
