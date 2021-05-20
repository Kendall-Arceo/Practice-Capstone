function GameRow({games, notify}) {


  function handleDelete (game) {
    fetch(`http://localhost:8080/game/${game.id}`, {method: "DELETE"})
    .then(() => notify({action: "delete", game}))
    .catch(error => notify ({ action : "delete", error}));
}


  function renderUserRows(games) {
    return games
        .map(
          (game) => {
            const { id, title, esrbRating, description, price, studio, quantity } = game;
          //destructured game above
        // <GameRow id ={id}></GameRow>
        //game row component below, plus update and delete functionality
          return(

        <tr>

          <td>{id}</td>
          <td>{title}</td>
          <td>{esrbRating}</td>
          <td>{description}</td>
          <td>{price}</td>
          <td>{studio}</td>
          <td>{quantity}</td>

          <td><button type="button" className="btn btn-danger btn-sm"  onClick={() => handleDelete(game)}>Delete</button></td>

          <td><button type="button" className="btn btn-success btn-sm" onClick={() => notify({ action: "edit-form", game })}>Update</button></td>

          <td>
            <label>Quantity</label>
            <select class="form-select" aria-label="Default select example">

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </td>

          <td><button type="button" className="btn btn-warning btn-sm">Add to Cart</button></td>

        </tr>

      )
    }

    );
  }

  return(
      <>
        {renderUserRows(games)}
      </>
  )
}

export default GameRow;