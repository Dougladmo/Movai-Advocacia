import styles from './ServiceCard.module.css'

export default function Card({title, description, img, link}) {
    return (
        <div className={styles.card}>
            <a href={link}>
            <img src={img} alt="Serviço Movai Advocacia" />
            </a>
            <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Leia mais</a>
            <p>1h</p>
            <a className={styles.btn} href={link}>Agendar agora</a>
            </div>
        </div>
    )
}