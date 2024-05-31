import React from 'react'
import './ProjetImg.css'
import OC from '../../../../assets/logo/oc.webp'
import Logo from '../../../../assets/logo/logo2.webp'

const ProjetImg = ({cover, alt, id, type}) => {
  return (
      <div id={id} className='projets-img-ctn'>
        <div className='projets-logo-ctn'>
            {type === 'Formation' ?
                <img src={OC} alt="Logo d'OpenClassrooms" className='projets-logo' title='Projet OpenClassrooms' /> 
                :
                <img src={Logo} alt="Logo de Sébastien Dechand" className='projets-logo' title='Projet Professionnel / Personnel'/> 
            }
        </div>
        <img src={cover} alt={alt} style={{ display: 'block' }} preload="true"/>
      </div>
  )
}

export default ProjetImg
