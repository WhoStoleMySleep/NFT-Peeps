import RoadmapBlock from '../RoadmapBlock/RoadmapBlock';
import './Roadmap.scss'
import roadmapFirstHuman from '../../assets/images/roadmap-first-human.png'
import roadmapTwoHuman from '../../assets/images/roadmap-two-human.png'
import roadmapThreeHuman from '../../assets/images/roadmap-three-human.png'

const Roadmap = () => {
  const roadmapBlockContent = [
    {
      precent: 0,
      data: 'Q1 2022',
      headerText: 'Community DAO',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: null,
    },
    {
      precent: 20,
      data: 'Q2 2022',
      headerText: 'Opening Event',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: roadmapFirstHuman,
    },
    {
      precent: 40,
      data: 'Q3 2022',
      headerText: 'Charity Donation',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: null,
    },
    {
      precent: 60,
      data: 'Q4 2022',
      headerText: 'Rare Giveaways',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: roadmapTwoHuman,
    },
    {
      precent: 80,
      data: 'Q1 2023',
      headerText: 'New Nfts',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: null,
    },
    {
      precent: 100,
      data: 'Q2 2023',
      headerText: 'Metaverse',
      additionalText: 'Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus posuere turpis commodo leo ipsum magnis.',
      img: roadmapThreeHuman,
    },
  ]

  return (
    <section className='roadmap' id='roadmap'>
      <p className='roadmap__upper'>Releases</p>
      <h2 className='roadmap__headed'>Our Roadmap</h2>
      <ul className='roadmap__list'>
        <RoadmapBlock {...roadmapBlockContent[0]} />
        <RoadmapBlock {...roadmapBlockContent[1]} />
        <RoadmapBlock {...roadmapBlockContent[2]} />
        <RoadmapBlock {...roadmapBlockContent[3]} />
        <RoadmapBlock {...roadmapBlockContent[4]} />
        <RoadmapBlock {...roadmapBlockContent[5]} />
      </ul>
    </section>
  );
}

export default Roadmap;
