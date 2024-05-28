// Composant
import Collapse from '../Collapse/Collapse'

export default function Projets({id, title, sub, cover, alt, banner, altBanner, client, description, github, ghpages, figma, skills, type}) {
    return (
        <Collapse  
            key={id}
            title={title}
            sub={sub}
            cover={cover}
            alt={alt}
            banner={banner}
            altBanner={altBanner}
            client={client}
            description={description}
            github={github}
            ghpages={ghpages}
            figma={figma}
            skills={skills} 
            type={type}
        />
    )
}