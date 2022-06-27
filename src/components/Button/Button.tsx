import './Button.scss'

const Button = (props: { text: string }) => {
  const text = props.text

  return (
    <button className='button'>
      {text}
    </button>
  );
}

export default Button;
