import './LevelBlock.scss'

const LevelBlock = (props: {
  headedText: string,
  level: number,
  additionalText: string,
  skinImg: any,
}) => {
  const levelCheck = () => {
    const addIndex = () => {
      addIndex.index += 1

      return props.level >= addIndex.index ?
        `level-block__tier-dot active` : 'level-block__tier-dot';
    }

    addIndex.index = 0
 
    return addIndex;
  }

  const levelChecked = levelCheck()

  return (
    <li className='level-block'>
      <div className='level-block__text-col'>
        <h3 className='level-block__item-headed'>{props.headedText}</h3>
        <div className='level-block__tier'>
          <h5 className='level-block__tier-headed'>Tier {props.level}</h5>
          <ul className='level-block__tier-dots'>
            <li className={levelChecked()}></li>
            <li className={levelChecked()}></li>
            <li className={levelChecked()}></li>
            <li className={levelChecked()}></li>
            <li className={levelChecked()}></li>
          </ul>
        </div>
        <p className='level-block__additional'>
          {props.additionalText}
        </p>
      </div>
      <img src={props.skinImg} alt='' className='level-block__skin' />
    </li>
  );
}

export default LevelBlock;