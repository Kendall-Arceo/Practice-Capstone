import GameRow from './GameRow';
function GameTable({ games, notify, id}) {
  console.log(games);
  function handleDelete (game) {
      fetch(`http://localhost:8080/game/${game.id}`, {method: "DELETE"})
      .then(() => notify({action: "delete", game}))
      .catch(error => notify ({ action : "delete", error}));
  }


  // function renderUserRows(games) {
  //   return games
  //       .map(
  //         (game) => {
  //           const { id, title, esrbRating, description, price, studio, quantity } = game;

  //         return(

  //       <tr>

  //         <td>{id}</td>
  //         <td>{title}</td>
  //         <td>{esrbRating}</td>
  //         <td>{description}</td>
  //         <td>{price}</td>
  //         <td>{studio}</td>
  //         <td>{quantity}</td>

  //         <td><button type="button" className="btn btn-danger btn-sm"  onClick={() => handleDelete(game)}>Delete</button></td>

  //         <td><button type="button" className="btn btn-success btn-sm" onClick={() => notify({ action: "edit-form", game })}>Update</button></td>
  //       </tr>

  //     )
  //   }

  //   );
  // }


  const dataSorting = {};
  return (
    <>
      <div className ="container">
        <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="row">ID<i className="bi {dataSorting.id}" data-key="id"></i></th>

              <th scope="col">Title<i className="bi {dataSorting.title}" data-key="title"></i> </th>

              <th scope="col">ESRB Rating<i className="bi {dataSorting.esrbRating}" data-key="esrbRating"></i> </th>

              <th scope="col">Description<i className="bi {dataSorting.description}" data-key="description"></i> </th>

              <th scope="col">Price<i className="bi {dataSorting.price}" data-key="price"></i> </th>

              <th scope="col">Studio<i className="bi {dataSorting.studio}" data-key="studio"></i> </th>

              <th scope="col">Quantity<i className="bi {dataSorting.quantity}" data-key="quantity"></i> </th>


            </tr>
          </thead>
          <tbody>
          {/* {renderUserRows(games)} */}
            <GameRow games ={games} notify ={notify} id ={id}></GameRow>
          </tbody>
        </table>

        </div>
      </div>
    </>
  )

}

export default GameTable;