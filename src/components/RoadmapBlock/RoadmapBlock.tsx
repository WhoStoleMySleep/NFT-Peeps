import React from 'react';
import './RoadmapBlock.scss'
import threeDot from '../../assets/images/three-dot.png'
const ImgSuspense = React.lazy(() => import('../ImgSuspense/ImgSuspense'))

const RoadmapBlock = (props: {
  precent: number,
  data: string,
  headerText: string,
  additionalText: string,
  img?: null | undefined | any,
}) => {
  const { precent, data, headerText, additionalText, img } = props

  return (
    <li className='roadmap-block'>
      <div className='roadmap-block__precent-container'>
        <img src={threeDot} alt='' className='roadmap-block__precent-img' />
        <p className='roadmap-block__precent'>{precent}%</p>
      </div>
      <div className='roadmap-block__content'>
        <h5 className='roadmap-block__data'>{data}</h5>
        <h3 className='roadmap-block__headed'>{headerText}</h3>
        <p className='roadmap-block__additional'>{additionalText}</p>
      </div>
      {!img || window.screen.width >= 396 &&
        <div className='roadmap-block__image-container'>
          <ImgSuspense src={img} className={'roadmap-block__img'} />
        </div>
      }
    </li>
  );
}

export default RoadmapBlock;
