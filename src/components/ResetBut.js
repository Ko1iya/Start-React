function ResetBut({ count, onClick }) {
  return (
    <div style={{ textAlign: "center" }}>
      {count > 0 && (
        <button className='but' onClick={onClick}>
          Reset
        </button>
      )}
    </div>
  )
}

export default ResetBut
