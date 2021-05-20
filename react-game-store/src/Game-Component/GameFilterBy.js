import { useEffect, useState } from 'react';

function GameFilterBy() {
  const [games, setGames] = useState([]);

  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/game`)
        .then(response => response.json())
        .then(result => setGames(result))
        .catch(err => console.log(err));
  }, []);

  function updateFilterText(evt) {
    //all information needed thats why it is an event
    setFilterText(evt.target.value)
    console.log(evt)
  }

  function FilterByTitle(games){
    console.log(games)
    return games.filter(g => g.title.toLowerCase().includes(filterText.toLowerCase()))

  }


  function FilterByEsrb(){
    //only select by one!
  }

  function FilterByStudio(games){
    //only select by one!
    console.log(games, filterText)
    return games.filter(g => g.studio.toLowerCase().includes(filterText.toLowerCase()))
  }

  return (
    <>
      <div className="col-lg">

        {/* <form id="filterTitle">

          <div className="mb-3">
              <label for="quantity" className="form-label">Filter By Title</label>

              <input type="text" className="form-control" id="titleFilter" name="title" onChange={updateFilterText} value = {filterText}/>
          </div>


          <button onClick={FilterByTitle(gamesToGet)} className="btn btn-dark">Search</button>
        </form>

        <form id="filterEsrb">
          <div className="mb-3">
              <label for="quantity" className="form-label">Filter By ESRB Rating</label>
              <input type="text" className="form-control" id="esrbRatingFilter" name="quantity"/>
          </div>

          <button onClick="submit" className="btn btn-dark">Search</button>

        </form>

        <form id="filterStudio">

          <div className="mb-3">
              <label for="quantity" className="form-label">Filter By Studio</label>
              <input type="text" className="form-control" id="studioFilter" name="quantity"/>
          </div>

          <button onClick="submit" className="btn btn-dark">Search</button>

        </form> */}

        <form id="filterEsrb">
          <div className="mb-3">
              <label for="quantity" className="form-label">Search:</label>
              <input type="text" className="form-control" id="updateFilter"  onChange = {updateFilterText} value = {filterText}/>
          </div>


        </form>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            By Title
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" for="flexCheckDefault">
            By ESRB Rating
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="studio"/>

          <label className="form-check-label" for="flexCheckDefault">
            By Studio
          </label>

        </div>

      </div>
    </>
  )
}

export default GameFilterBy;