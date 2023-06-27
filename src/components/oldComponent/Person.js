function Person({ id, firstName, lastName, email, img }) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{email}</h2>
      <img src={img} />
    </div>
  )
}

export default Person
