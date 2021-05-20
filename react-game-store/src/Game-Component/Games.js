import { useEffect, useState } from 'react';
import FilterInventory from '../Filter-Component/FilterInventory';
import GameFilterBy from './GameFilterBy';
import GameForm from './GameForm';
import GameTable from './GameTable';
function Games() {

  const [games, setGames] = useState([]);
  const [scopedGame, setScopedGame] = useState({id : 0});
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState();
  const[refresh, setRefresh] = useState(0);
  const [filterText, setFilterText] = useState("");

    console.log(games);
    useEffect(() => {
        fetch("http://localhost:8080/game")
            .then(response => response.json())
            .then(result => setGames(result))
            .catch(err => console.log(err));
    }, [refresh]);


    function addGameClick() {

        setScopedGame({ id: 0, title: "", esrbRating: "",
        description: "", price: "", studio: "", quantity:"", });
        setShowForm(true);
    }


    function getFilteredGames(games){
        //only select by one!
        console.log(games, filterText)
        return games.filter(g => g.studio.toLowerCase().includes(filterText.toLowerCase()))
    }

    function updateFilterText(evt) {
        //all information needed thats why it is an event
        setFilterText(evt.target.value)
        console.log(evt)
    }

    function notify({ action, game, error }) {
    console.log(action, game, error)
    if (error) {
        setError(error);
        setShowForm(false);
        return;
    }

    switch (action) {
        case "add":
            setGames([...games, game]);
            break;
        case "edit":
            // setGames(games.map(g => {
            //     if (g.id === game.id) {
            //         return game;
            //     }
            //     return g;
            // }));
            setRefresh(refresh + 1)
            break;
        case "edit-form":
            setScopedGame(game);
            setShowForm(true);
            return;
        case "delete":
            setGames(games.filter(g => g.id !== game.id));
            break;
    }
    setShowForm(false);
  }

  if (showForm) {
    return <GameForm game={scopedGame} notify={notify} />
  }

  return (
    <>
        {/* props will need to be called into the component and passing it in*/ }
        <div className="row mt-2">


            <div className="col-8">
                <h2>Games Inventory:</h2>
            </div>

            <div className="col">
                <button className="btn btn-primary" onClick={addGameClick}>Add a Game</button>
            </div>

        </div>
        {error && <div className="alert alert-danger">{error}</div>}

{/*
        {getFilteredGames(games).map( g => <GameTable games={games} notify={notify}/>)} */}

        <GameTable games={games} notify={notify}/>


        <div className="row mt-2">
            <div className="col-8">
                <FilterInventory/>
            </div>

            <div className="col-4">
                <GameFilterBy/>

                {/* <form id="filterEsrb">
                    <div className="mb-3">
                        <label for="quantity" className="form-label">Search:</label>
                        <input type="text" className="form-control" id="updateFilter"  onChange = {updateFilterText} value = {filterText}/>
                    </div>


                </form>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="studio"/>

                    <label className="form-check-label" for="flexCheckDefault">
                        By Studio
                    </label>

                </div> */}
            </div>
        </div>

    </>
  )  ;
}

export default Games;