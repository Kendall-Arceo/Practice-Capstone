import { useState } from 'react';

function GameFilterBy({filterText, setFilterText}) {
  const [games, setGames] = useState([]);


  function updateFilterText(evt) {
    //all information needed thats why it is an event
    setFilterText(evt.target.value)
    console.log(evt)
  }


  return (
    <>
      <div className="col-lg">

        <form id="searchBox">
          <div className="mb-3">
              <label for="quantity" className="form-label">Search:</label>
              <input type="text" className="form-control" id="updateFilter"  onChange = {updateFilterText} value = {filterText}/>
          </div>


        </form>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="title"/>
          <label className="form-check-label" for="flexCheckDefault">
            By Title
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="esrbRating"/>
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