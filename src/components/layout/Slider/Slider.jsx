import Carousel from 'react-bootstrap/Carousel';

import Flip from 'react-reveal/Flip';

import styles from './Slider.module.css'

import imagem_1 from '../../../img/imagem_1.jpg'
import imagem_2 from '../../../img/imagem_2.jpeg'
import imagem_3 from '../../../img/imagem_3.webp'
import logo from '../../../img/logo.png'
import logo_clara from '../../../img/logo_clara.png'

function UncontrolledExample() {
  return (
    <div className={styles.slider}>
    <Carousel>
      <Carousel.Item>
        <img src={imagem_1} alt="Belém do Pará" />
        <Carousel.Caption>
          <Flip top>
          <img  className={styles.logo} src={logo_clara} alt='movai advocacia' />
          </Flip>
          <h3>First slide label</h3>
          <p>Precisando regularizar seu imóvel? 
          Pergunte-me como!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imagem_2} alt="Belém do Pará" />
        <Carousel.Caption>
        <img className={styles.logo} src={logo} alt='movai advocacia' />
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={imagem_3} alt="Belém do Pará" />
        <Carousel.Caption>
        <img  className={styles.logo} src={logo} alt='movai advocacia' />
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;