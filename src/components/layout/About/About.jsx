import justice from '../../../img/aboutUs.webp'

import { Fade } from 'react-awesome-reveal'

import styles from './About.module.css'

export default function About() {
    return (
        <div id='aboutUs' className={styles.about_us}>
        <Fade triggerOnce>
        <img className={styles.justice} src={justice} alt="justiça estatua" />
        </Fade>
        <div className={styles.about_us_content}></div>
        <h2>Sobre a Movai</h2>
        <p className={styles.mobile_text} >Ter uma questão jurídica tende a ser uma experiência desagradável. Isso pode ...
        <a href="/">Leia mais...</a>
        </p>
        <p className={styles.desktop_text} >Ter uma questão jurídica tende a ser uma experiência desagradável. Isso pode significar que você foi machucado, ferido ou injustiçado de alguma forma. A Movai Advocacia entende o quão confuso(a) você pode estar se sentindo. Não se preocupe, estou aqui para proteger e defender seus direitos. Você não precisa sofrer em silêncio se a lei estiver do seu lado. A Movai Advocacia oferecerá a você uma consulta inicial para verificar como posso atender aos seus interesses. As causas jurídicas (e até mesmo a linguagem jurídica) podem ser complicados e intimidadores. Vou orientar você em cada etapa da sua causa, manterei você atualizado(a), garantindo que você entenda exatamente o que está acontecendo e aconselhando você em todas as decisões que precisam ser tomadas.
        A Movai Advocacia mantém você envolvido e no centro das atenções.Estou aqui para servir você.Tenho orgulho de proteger seus direitos e de outras pessoas no Estado do PARÁ.Entre em contato comigo ainda hoje para agendar um atendimento.
        </p>
    </div>
    )
}