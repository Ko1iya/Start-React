import { useState } from "react"

function Form() {
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data.login, data.userName)
  }

  const [data, setData] = useState({ userName: "", login: "" })

  return (
    <>
      <h1>Моя Форма</h1>
      <form className='form-container' onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='userName'>Username:</label>
          <input
            value={data.userName}
            type='text'
            id='userName'
            name='userName'
            onChange={(e) => setData({ ...data, userName: e.target.value })}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='login'>Login:</label>
          <input
            type='text'
            value={data.login}
            onChange={(e) => setData({ ...data, login: e.target.value })}
            id='login'
            name='login'
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
