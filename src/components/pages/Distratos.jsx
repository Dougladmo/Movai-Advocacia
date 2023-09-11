import { HiArrowLeft } from "react-icons/hi2";
import logo from '../../img/logo_clara.png'
import styles from './Pages.module.css'

export default function Distratos (){
    return (
        <>
        <header className={styles.header} >
            <nav className="d-flex justify-content-between align-items-center">
            <a href="/"><HiArrowLeft/></a>
            <a href="/"><img src={logo} alt="Maoai advocacia" /></a>
            </nav>
        </header>
        <div className={styles.main}>
        <div className={styles.distratos}>         
        </div>
           <div className={styles.content}>
           <div className={styles.service}>
            <h1>Distratos imobiliários</h1>
            <p>Rescisão de contratos</p>
            <ul>
                <li><span>1h</span></li>
                <li>Praça Barão do Rio Branco</li>
            </ul>
            <a href="/">Agendar agora</a>
           </div>
           <div className={styles.description}>
            <h3>Descrição do serviço</h3>
            <p>A regularização pode ser realizada junto a Prefeituras e Cartórios de Registro de Imóveis, além de que os imóveis podem ser objeto de inventário, devendo estes serem regularizados para serem partilhados.</p>
           </div>
           <div className={styles.contact}>
            <h3>Informações de contato</h3>
            <p>OAB Ordem dos Advogados do Brasil - Seção Pará - Praça Barão do Rio Branco - Campina, Belém - PA, Brasil</p>
            <p>Tel: (91) 99993-9074</p>
            <p>Email: movai.advocacia@gmail.com</p>
           </div>
        </div>
        </div>
        </>
    )
}