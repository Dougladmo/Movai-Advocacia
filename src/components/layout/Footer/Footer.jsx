import styles from './Footer.module.css'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Footer () {
    return (
    <div className={styles.footer}>
    <div className={styles.contact}>
    <p>Tel.:  (91) 3060-8877  |  (91) 9 9993 -9074 </p>
    <ul className={styles.footer}>
        <li> <BiLogoFacebook/> </li>
        <li> <BiLogoInstagram/> </li>
        <li> <BiLogoWhatsapp/> </li>
    </ul>
    </div>
        <p className={styles.copyright}>©2022 por Movai Advocacia. Todos os direitos reservados.</p>
    </div>
    )
}