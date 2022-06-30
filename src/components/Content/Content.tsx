import LevelBlock from '../LevelBlock/LevelBlock';
import './Content.scss'
import common from '../../assets/images/john.png'
import uncomon from '../../assets/images/matthew.png'
import rare from '../../assets/images/rare.png'
import veryRare from '../../assets/images/very-rare.png'
import legendary from '../../assets/images/jessica.png'

const Content = () => {
  const levelBlockInform = [
    {
      headedText: 'Common',
      level: 1,
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      skinImg: common,
    },
    {
      headedText: 'Uncommon',
      level: 2,
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      skinImg: uncomon,
    },
    {
      headedText: 'Rare',
      level: 3,
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      skinImg: rare,
    },
    {
      headedText: 'Very Rare',
      level: 4,
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      skinImg: veryRare,
    },
    {
      headedText: 'Legendary',
      level: 5,
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      skinImg: legendary,
    },
  ]

  return (
    <section className='content' id='content'>
      <p className='content__upper'>Rarity</p>
      <h2 className='content__headed'>Exclusive Content</h2>
      <ul className='content__level-list'>
        <LevelBlock {...levelBlockInform[0]} />
        <LevelBlock {...levelBlockInform[1]} />
        <LevelBlock {...levelBlockInform[2]} />
        <LevelBlock {...levelBlockInform[3]} />
        <LevelBlock {...levelBlockInform[4]} />
      </ul>
    </section>
  );
}

export default Content;
