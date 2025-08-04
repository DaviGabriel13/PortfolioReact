import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {

    const [ repositories, setRepositories ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://api.github.com/users/DaviGabriel13/repos?per_page=100')
                
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`)
                }
                
                const data = await response.json()
                setRepositories(data)
                setError(null)
            } catch (err) {
                console.error('Erro ao buscar repositórios:', err)
                setError('Erro ao carregar repositórios')
                setRepositories([])
            } finally {
                setLoading(false)
            }
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                loading ? (
                    <p>Carregando repositórios...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : repositories.length > 0 ? (
                    <nav className={styles.centralizarDiv}>
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                    </nav>
                ) : (
                    <p>Nenhum repositório encontrado.</p>
                )
            }
        </section>
    )
}

export default Projetos
