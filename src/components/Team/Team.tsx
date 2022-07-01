import TeamBlock from '../TeamBlock/TeamBlock';
import './Team.scss'
import jennifer from '../../assets/images/jennifer.webp'
import matthew from '../../assets/images/matthew.webp'
import john from '../../assets/images/john.webp'
import justin from '../../assets/images/justin.webp'
import jessica from '../../assets/images/jessica.webp'
import katty from '../../assets/images/katty.webp'

const Team = () => {
  const teamBlockInfo = [
    {
      img: jennifer,
      profession: 'CEO',
      name: 'Jennifer',
    },
    {
      img: matthew,
      profession: 'Developer',
      name: 'Matthew',
    },
    {
      img: john,
      profession: 'Developer',
      name: 'John',
    },
    {
      img: justin,
      profession: 'Designer',
      name: 'Justin',
    },
    {
      img: jessica,
      profession: 'Designer',
      name: 'Jessica',
    },
    {
      img: katty,
      profession: 'Designer',
      name: 'Katty',
    },
  ]

  return (
    <section className='team' id='team'>
      <p className='team__upper'>Team</p>
      <h2 className='team__headed'>Meet Our Team</h2>
      <ul className='team__developer-container'>
        <TeamBlock {...teamBlockInfo[0]} />
        <TeamBlock {...teamBlockInfo[1]} />
        <TeamBlock {...teamBlockInfo[2]} />
        <TeamBlock {...teamBlockInfo[3]} />
        <TeamBlock {...teamBlockInfo[4]} />
        <TeamBlock {...teamBlockInfo[5]} />
      </ul>
    </section>
  );
}

export default Team;
