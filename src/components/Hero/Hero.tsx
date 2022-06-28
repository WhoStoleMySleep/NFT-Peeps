import Button from '../Button/Button';
import './Hero.scss'
import leftHuman from '../../assets/images/left-human.png';
import rightHuman from '../../assets/images/right-human.png';
import bigDot from '../../assets/images/big-dot.png';
import leftDots from '../../assets/images/left-dots.png';
import rightDots from '../../assets/images/right-dots.png';

const Hero = () => {
  return (
    <section className='hero'>
      {window.screen.width > 1100 &&
        <div className='hero__left-human'>
          <img src={bigDot} alt="" />
          <img src={leftHuman} alt="" />
          <img src={leftDots} alt="" />
        </div>
      }
      <div className='hero__center-content'>
        <p className='hero__upper-text'>
          NFT Collection
        </p>
        <h1 className='hero__headed-text'>
          Bored
          <span>
            NFT Peeps
          </span>
        </h1>
        <p className='hero__additional'>
          Tempor interdum sed nisl aliquam ut orci feugiat neque.
          Nibh amet proin in tristique.
          Ipsum morbi adipiscing faucibus eu odio in tellus risus.
        </p>
        <Button text={'OpenSea'} />
      </div>
      {window.screen.width > 1100 &&
        <div className='hero__right-human'>
          <img src={bigDot} alt="" />
          <img src={rightHuman} alt="" />
          <img src={rightDots} alt="" />
        </div>
      }
    </section>
  );
}

export default Hero;
