function Button({ onClick, text }) {
  return (
    <button className='but' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
