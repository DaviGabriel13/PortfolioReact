import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel } from 'react-icons/fa'
import { SiTypescript, SiFlutter, SiDart } from 'react-icons/si'

import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url, owner }) {
    const [languages, setLanguages] = useState({})

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const repoName = html_url.split('github.com/')[1] // ex: "user/repo"
                const response = await fetch(`https://api.github.com/repos/${repoName}/languages`)
                
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`)
                }
                
                const data = await response.json()
                setLanguages(data)
            } catch (error) {
                console.error('Erro ao buscar linguagens:', error)
                setLanguages({})
            }
        }

        fetchLanguages()
    }, [html_url])

    // Mapeia linguagens para ícones
    const languageIcons = {
    HTML: <FaHtml5 key="HTML" />,
    CSS: <FaCss3Alt key="CSS" />,
    JavaScript: <FaJs key="JavaScript" />,
    TypeScript: <SiTypescript key="TypeScript" />,
    PHP: <FaPhp key="PHP" />,
    Dart: <SiDart key="Dart" />,
    Flutter: <SiFlutter key="Flutter" />,
    Laravel: <FaLaravel key="Laravel" />,
    React: <FaReact key="React" />, // você pode manter React manualmente, se detectar
}

    const displayedIcons = Object.keys(languages).map(lang => languageIcons[lang]).filter(Boolean)

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {displayedIcons.length > 0 ? displayedIcons : <span>Sem ícones</span>}
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card
