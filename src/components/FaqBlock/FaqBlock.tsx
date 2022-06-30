import './FaqBlock.scss'

const FaqBlock = (props: { headedText: string, fullText: string }) => {
  const {headedText, fullText} = props

  return (
    <li className='faq-block'>
      <details className="faq-block__container">
        <summary className="faq-block__headed">{headedText}</summary>
        <p className='faq-block__full-text'>{fullText}</p>
      </details>
    </li>
  );
}

export default FaqBlock;
