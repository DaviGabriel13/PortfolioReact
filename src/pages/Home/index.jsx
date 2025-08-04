import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

import html from './images/html.png'
import css from './images/social.png'
import js from './images/js.png'
import react from './images/react.png'
import c from './images/c-sharp.png'
import node from './images/node-js.png'
import sql from './images/mysql.png'
import laravel from './images/laravel.png'
import php from './images/php.png'
import kotlin from './images/kotlin.webp'
import ts from './images/ts.png'
import swift from './images/swift.webp'

const habilidades = [
    { nome: "HTML", src: html},
    { nome: "CSS", src: css},
    { nome: "JavaScript", src: js},
    { nome: "React", src: react},
    { nome: "Node.js", src: node},
    { nome: "C", src: c},
    { nome: "SQL", src: sql},
    { nome: "Laravel", src: laravel},
    { nome: "PHP", src: php},
    { nome: "Kotlin", src: kotlin},
    { nome: "TypeScript", src: ts},
    { nome: "Swift", src: swift},
  ];

  


function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
       <>
          
                  <section className={styles.home}>
                    <nav className={styles.homeFront}>
                      <div className={styles.apresentacao}>
                          <p>
                              Prazer, sou<br />
                              <span className={styles.textBlue}>Davi Gabriel</span> <br />
                              Programador
                          </p>
                          <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}>
                              Saiba mais sobre mim
                          </Link>
                      </div>
                      <figure>
                        <div className={styles.fundoImg}>
                          <img className={styles.imgHome} src="fotoPerfil.JPG" alt="Imagem de Home" />
                        </div>
                      </figure>
                    </nav>

                    <div className={styles.centralizarTexto}>
                    <h2>Habilidades Técnicas</h2>
</div>
<nav className={styles.navFlexHabTec}>
  <section className={styles.habilidadesTecnicas}>
    {habilidades.map((hab, index) => (
      <div
        key={index}
        className={styles.cardHabilidadeTecnica}
        
      >
        <img className={styles.imgHabTec} src={hab.src} alt={hab.nome} />
        
      </div>
    ))}
  </section>
</nav>

    <div  className={styles.centralizarTexto}>
    <h2>Habilidades pessoais</h2>
    </div>
    <nav className={styles.navFlexHabPessoais}>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Dedicado</h3><br />
          <p className={styles.textoHabilidadePessoais}>Sou esforçado e sempre farei o meu melhor.</p>
          </div>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Estudioso</h3><br />
          <p className={styles.textoHabilidadePessoais}>Constantemente procuro ganhar novos conhecimentos.</p>
          </div>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Ambicioso</h3><br />
          <p className={styles.textoHabilidadePessoais}>Estou disposto a sempre dar o máximo para alcançar meu objetivo.</p>
          </div>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Independente</h3><br />
          <p className={styles.textoHabilidadePessoais}>Tenho autonomia e proatividade.</p>
          </div>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Organizado</h3><br />
          <p className={styles.textoHabilidadePessoais}>Tenho organização, principalmente em minha rotina.</p>
          </div>
          <div className={styles.cardHabilidadePessoal}>
          <h3 className={styles.tituloHabilidadesPessoais}>Adaptável</h3><br />
          <p className={styles.textoHabilidadePessoais}>Sou capaz de me adaptar em novas situações.</p>
          </div>
    </nav>
      

                  </section>
                  
         
        </> 
    )
}

export default Home
