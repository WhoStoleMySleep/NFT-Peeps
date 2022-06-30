import React from 'react';
import './TeamBlock.scss'
const ImgSuspense = React.lazy(() => import('../ImgSuspense/ImgSuspense'))

const TeamBlock = (props : {
  img: any,
  profession: string,
  name: string,
}) => {
  const {img, profession, name} = props

  return (
    <li className='team-block'>
      <div className='team-block__human-img-container'>
        <ImgSuspense src={img} alt={name.toLowerCase()} className={'team-block__human-img'} />
      </div>
      <div className='team-block__text-container'>
        <h5 className='team-block__profession'>{profession}</h5>
        <h3 className='team-block__name'>{name}</h3>
      </div>
    </li>
  );
}

export default TeamBlock;
