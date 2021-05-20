function Cart() {
  return (
    <>
      <h1>Your Cart:</h1>
      <div className="col">
        <button className="btn btn-primary" onClick={addGameClick}>Add a Game</button>
      </div>
    </>
  )
}

export default Cart;