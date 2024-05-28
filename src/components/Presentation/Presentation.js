// CSS
import './Presentation.css'
import pdf from '../../assets/photo/CV.pdf'

export default function Presentation() {
    return (
        <div className='presentation-ctn'>
            <h3>Bonjour à tous ! Je suis Sébastien Dechand, un Développeur Web passionné.</h3>
            <div className='presentation-flex'>
                <p>
                    Après une décennie dans la grande distribution, j'ai choisi de me tourner vers le monde stimulant du développement web.<br />
                    <br />
                    Grâce à une formation intensive chez OpenClassrooms, j'ai acquis une expertise variée, allant de ReactJS et Node.js à Redux et Sass. 
                    Ces technologies de pointe sont désormais mes outils de prédilection pour créer des applications web performantes et esthétiques.<br />
                    <br />
                    <a href={pdf} target='_blank' className='presentation-txt-link' rel="noreferrer">
                        Voir mon CV...
                    </a>
                </p>
            </div>
        </div>
    )
}

