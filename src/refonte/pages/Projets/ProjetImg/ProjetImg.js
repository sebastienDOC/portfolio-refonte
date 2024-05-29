import React from 'react'
import './ProjetImg.css'
import OC from '../../../../assets/logo/oc.webp'
import Logo from '../../../../assets/logo/logo2.webp'

const ProjetImg = ({cover, alt, id, type}) => {
  // Récupération des images 
  function getImgCover(img) {
    let images = require("../../../../assets/projets/formation" + img);
    return images;
  }
  return (
      <div id={id} className='projets-img-ctn'>
        <div className='projets-logo-ctn'>
            {type === 'Formation' ?
                <img src={OC} alt="Logo d'OpenClassrooms" className='projets-logo' title='Projet OpenClassrooms' /> 
                :
                <img src={Logo} alt="Logo de Sébastien Dechand" className='projets-logo' title='Projet Professionnel / Personnel'/> 
            }
        </div>
        <img src={getImgCover(cover)} alt={alt} style={{ display: 'block' }}/>
      </div>
  )
}

export default ProjetImg
