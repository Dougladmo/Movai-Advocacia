import Navbar from '../layout/Navbar/Navbar'
import Card from '../layout/Cards/ServiceCard'
import Slider from '../layout/Slider/Slider'

import styles from './Home.module.css'

import justice from '../../img/aboutUs.webp'
import registro from '../../img/regularizar-imovel.jpeg'
import usucapiao from '../../img/usocapião.webp'
import contratos from '../../img/contratos.jpg'
import distratos from '../../img/distrato.jpg'
import lightLogo from '../../img/SÍMBOLO CLARO.webp'

import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Home (){
    return (
        <>
        {/* whatsapp Icon */}
        <a className={styles.whatsapp} href='/'> <FaSquareWhatsapp/></a>
        {/* Header e navbar */}
        <header className={styles.header}>
            < Navbar/>
        </header>
        <div className='main'>
        {/* Slider carousel */}
            <Slider/>
            {/* About us section */}
            <div className={styles.about_us}>
                <img className={styles.justice} src={justice} alt="justiça estatua" />
                <div className={styles.about_us_content}></div>
                <h2>Sobre a Movai</h2>
                <p>Ter uma questão jurídica tende a ser uma experiência desagradável. Isso pode ...
                <a href="/">Leia mais...</a>
                </p>
                {/* Services Section */}
            </div>
            <div className={styles.services}>
                <h2>Serviços Movai Advocacia</h2>
                <Card 
                link='/regularizacao'
                title='Registro e regularização de imóveis'
                description='Matricula do imóvel, Registro em Cartórios'
                img={registro} 
                />
                <Card 
                link='/usucapiao'
                title='Usucapião judicial e extrajudicial'
                description='Propriedade do imóvel oficial.'
                img={usucapiao} 
                />
                <Card 
                link='/contratos'
                title='Elaboração de contratos de vendas'
                description='Elaboração de contratos de vendas'
                img={contratos} 
                />
                <Card 
                link='/Distratos'
                title='Distratos imobiliários'
                description='Rescisão de contratos'
                img={distratos} 
                />
            </div>
            <div className={styles.info}>
                <img src={lightLogo} alt="Logo movai"/>
                <h3>O QUE A REGULARIZAÇÃO DE IMÓVEIS SIGNIFICA NA VIDA DE UMA PESSOA</h3>
                <ul>
                    <li>Propriedade;</li>
                    <li>Possibilidade de financiamento;</li>
                    <li>Valorização do imóvel;</li>
                    <li>Possibilidade de adquirir linha de crédito;</li>
                    <li>Possibilidade de transmissão.</li>
                </ul>
                <h4>QUEM NÃO TEM REGISTRO NA MATRÍCULA DO IMÓVEL NÃO É PROPRIETÁRIO</h4>
            </div>
        </div>
    
        </>

    )
}