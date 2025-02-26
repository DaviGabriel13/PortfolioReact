
import styles from './Sobre.module.css'




function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Davi Gabriel</span> <br />
                    <strong>Estudante de programação</strong> </p>

                    <p>Sou um jovem ambicioso e dedicado. Meu maior sonho é seguir o rumo de tecnologia.
Gosto de aprender,<br/> portanto, torno-me uma 
pessoa mais sábia de acordo com o tempo. A cada linha de código,<br/> sinto que    
é um desafio e uma oportunidade de criar algo novo e revolucionário no futuro.
Consequentemente, <br/> acredito que terei um futuro inovador e irei o moldar
com minha paixão em programação.</p>
                </div>
            </div>

            

        </section>
    )
}

export default Sobre

