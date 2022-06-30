import FaqBlock from '../FaqBlock/FaqBlock';
import './Faq.scss'

const Faq = () => {
  const faqBlockInfo = [
    {
      headedText: 'Imperdiet et nunc, ipsum laoreet iaculis aliquet?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
    {
      headedText: 'Mi fringilla sit felis tristique varius tempus?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
    {
      headedText: 'Faucibus nec dictum pellentesque arcu ultrices ultricies?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
    {
      headedText: 'Morbi eget tristique porttitor turpis placerat tristique?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
    {
      headedText: 'Dolor turpis at turpis senectus convallis nunc pellentesque?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
    {
      headedText: 'Amet, viverra tellus ultricies non eros faucibus hendrerit?',
      fullText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas, fugit harum voluptatibus optio reprehenderit tempora asperiores ea suscipit totam a? Odit facilis illo dicta sit doloremque modi sed pariatur!'
    },
  ]

  return (
    <section className='faq'>
      <p className="faq__upper">Faq</p>
      <h2 className="faq__headed">Frequent Questions</h2>
      <ul className="faq__questions-container">
        <FaqBlock {...faqBlockInfo[0]} />
        <FaqBlock {...faqBlockInfo[1]} />
        <FaqBlock {...faqBlockInfo[2]} />
        <FaqBlock {...faqBlockInfo[3]} />
        <FaqBlock {...faqBlockInfo[4]} />
        <FaqBlock {...faqBlockInfo[5]} />
      </ul>
    </section>
  );
}

export default Faq;
