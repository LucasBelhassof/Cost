import { useLocation } from 'react-router-dom'

import Message from '../layout/Message.js'
import styles from './Projects.module.css'
import Container from '../layout/Container.js'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <div>
                <h1>Meu Projetos</h1>
                <a href="#">novo projeto</a>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}
export default Projects