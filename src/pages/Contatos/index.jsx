
import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
           <nav className={styles.sectionFlex}>
               
            <section><h2>Formulário de Contato</h2>
    <form
      action="https://formsubmit.co/davigabrieltoliveira@gmail.com"
      method="POST"
      className={styles.form}
    >
      <label for="name">Nome</label>
      <input type="text" name="name" id="name" required />
      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" required />
      <label for="message">Mensagem</label>
      <textarea name="message" id="message" required></textarea>
      <input type="hidden" name="_captcha" value="false" />
     
      <button type="submit">Enviar</button>
    </form></section>
    <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre:</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:davigabrieltoliveira@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://instagram.com/davi_gab13/?next=%2F' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        

                        <a href='https://github.com/DaviGabriel13' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/davigabrielteixeiradeoliveira/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
    </nav>
        </>
    )
}

export default Contatos
