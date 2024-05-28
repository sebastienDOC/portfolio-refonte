import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
    const [texte, setTexte] = useState("Création de site internet");
    const [dernierMotIndex, setDernierMotIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const mots = ["internet", "vitrine", "professionnel", "e-commerce"];

    useEffect(() => {
        const interval = setInterval(() => {
            setDernierMotIndex(prevIndex => (prevIndex + 1) % mots.length);
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false); 
            }, 2000); 

            return () => clearInterval(interval);
        }, 4000);
    
        return () => clearInterval(interval);
    }, [mots.length]);
    

    useEffect(() => {
        setTexte(prevTexte => {
            const motsPrecedents = prevTexte.split(" ");
            motsPrecedents[motsPrecedents.length - 1] = mots[dernierMotIndex];
            return motsPrecedents.join(" ");
        });
    }, [mots, dernierMotIndex]);

    return (
        <header>
            <div className='header-banniere'>
                <div className="banner">
                    <h2 className='banner-title'>
                        {texte.split(" ").map((mot, index) => (
                            <span key={index}>
                                {mot.split("").map((lettre, idx) => (
                                    <span
                                        key={idx}
                                        className={animate ? "fade" : "fade-out"}
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        {lettre}
                                    </span>
                                ))}
                                {index < texte.split(" ").length - 1 && " "}
                            </span>
                        ))}
                    </h2>
                    <div className='banner-txt-ctn'>
                        <ul className='banner-list'>
                            <li>
                                <i className="fa-brands fa-internet-explorer"></i>
                                Création de site internet
                            </li>
                            <li>
                                <i className="fa-solid fa-house-laptop"></i>
                                Nom de domaine et hébergement
                            </li>
                            <li>
                                <i className="fa-solid fa-truck-fast"></i>
                                Optimisation SEO
                            </li>
                        </ul>
                        <ul className='banner-list'>
                            <li>
                                <i className="fa-solid fa-hourglass-start"></i>
                                Maintenance de site internet
                            </li>
                            <li>
                                <i className="fa-solid fa-signs-post"></i>
                                Refonte de site internet
                            </li>
                            <li>
                                <i className="fa-regular fa-money-bill-1"></i>
                                Rapport qualité prix
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
