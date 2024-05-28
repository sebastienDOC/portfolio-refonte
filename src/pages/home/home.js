import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './home.css';
import skills from '../../data/skills.json';
import Presentation from '../../components/Presentation/Presentation';
import Skills from '../../components/Skills/Skills';
import Filter from '../../components/Filter/Filter';
import Contact from '../../components/Contact/Contact';
import Activite from '../../components/Activite/Activite';
import { ElfsightWidget } from 'react-elfsight-widget';

export default function Home() {
    const [currentStep, setCurrentStep] = useState(null);

    const onStepEnter = ({ data }) => {
        setCurrentStep(data);
    };

  return (
    <main>
      <ElfsightWidget widgetId="a5142191-17bd-4a6e-a41f-e3e7bdb0f3a0" lazy modern className='rating'/>

      <Scrollama onStepEnter={onStepEnter}>

      <Step data='presentation'>
            <div className={`${currentStep !== 'presentation' ? 'fadeOut' : 'fadeInUp'}`}>
                <div id="home-presentation" className='anchor'></div>
                <section>
                    <h2 className='home-presentation-title'>Présentation</h2>
                    <Presentation />
                    <div className='home-skills-flex'>
                        <div className='home-skills-grid'>
                        {skills[0].principaux.map((skill) => 
                            <Skills 
                                key={skill.id}
                                cover={skill.cover}
                                alt={skill.alt}
                                title={skill.title}
                            />
                        )}
                        </div>
                        <div className='home-skills-second'>
                        {skills[1].secondaires.map((skill) => 
                            <Skills 
                                key={skill.id}
                                cover={skill.cover}
                                alt={skill.alt}
                                title={skill.title}
                            />
                        )}
                        </div>
                    </div>
                </section>
                <div className='separate'></div>
            </div>
        </Step>
        
        <Step data='create'>
            <div className={`${currentStep !== 'create' ? 'fadeOut' : 'fadeInUp'}`}>
                <div id="home-create" className='anchor'></div>
                <section>
                    <h2 className='home-create-title'>Création de site internet</h2>
                    <Activite />
                </section>
                <div className='separate'></div>
            </div>
        </Step>

        <Step data='projets'>
            <div className={`${currentStep !== 'projets' ? 'fadeOut' : 'fadeInUp'}`}>
                <div id="home-projets" className='anchor'></div>
                <section>
                    <h2 className='home-projets-title'>Projets</h2>
                    <Filter />
                </section>
                {/* <div className='separate'></div> */}
            </div>
        </Step>

        {/* <Step data={'contact'}>
            <div className={`${currentStep !== 'contact' ? 'fadeOut' : 'fadeInUp'}`}>
                <div id="home-contact" className='anchor'></div>
                <section>
                    <h2 className='home-contact-title'>Contact</h2>
                    <Contact />
                </section>
            </div>
        </Step> */}

      </Scrollama>
    </main>
  );
}
