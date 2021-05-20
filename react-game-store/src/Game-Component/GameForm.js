import { useState } from 'react';

function GameForm({ game: initialGame, notify }) {

    const [game, setGame] = useState(initialGame);
    const [scopedGame, setScopedGame] = useState({});
    const [showForm, setShowForm] = useState(false);
    const isAdd = initialGame.id === 0;
    console.log(isAdd, initialGame);

    // useEffect(() => {
    //     fetch("http://localhost:8080/game")
    //     .then(response => response.json())
    //     .then(result => setGame(result))
    //     .catch(console.log)
    // }, []);

    function handleChange(evt) {
      const clone = { ...game };
      //TODO Please do this for handling changes within the form of GAME
      clone[evt.target.name] = evt.target.value;
      setGame(clone) //updates the state, for the submit

    }


    function handleSubmit(evt) {
        evt.preventDefault();
        //for ADMIN, updates and adds games
        //no pathvariable id on the update method in the api
        // this url works since it doesnt need an id
        const url = "http://localhost:8080/game";
        const method = isAdd ? "POST" : "PUT";
        const expectedStatus = isAdd ? 201 : 204;


        const init = {

            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(game)
        };
        console.log(init, url)

        fetch(url, init)
            .then(response => {
                if (response.status === expectedStatus) {
                    if (isAdd) {
                        return response.json();
                    } else {
                        return game;
                    }
                }
                return Promise.reject(`Didn't receive expected status: ${expectedStatus}`);
            })
            .then(result => notify({
                action: isAdd ? "add" : "edit",
                game: result,

            }))
            .catch(error => notify({ error }));

    }

    return (
        <>
           <h1>{game.id > 0 ? "Edit" : "Add"} Game</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title"
                        className="form-control"
                        value={game.title} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="esrbRating">ESRB Rating</label>
                    <textarea id="esrbRating" name="esrbRating" className="form-control"
                        value={game.esrbRating} onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="form-control"
                        value={game.description} onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price"
                        className="form-control"
                        value={game.price} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="studio">Studio</label>
                    <textarea id="studio" name="studio" className="form-control"
                        value={game.studio} onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="quantity">Quantity</label>
                    <textarea id="quantity" name="quantity" className="form-control"
                        value={game.quantity} onChange={handleChange}></textarea>
                </div>

                {/* <div className="mb-3">

                    <select name ="investigators" className="form-control" multiple onChange={handleChange}>

                        {investigators.map(i =>
                        <option name="investigators" value ={i.id} key={i.id}>{i.firstName} {i.lastName}</option>)}

                    </select>
                </div> */}

                <br/>

                <div className="mb-3">
                    <button className="btn btn-primary mr-3" type="submit" >Save</button>

                    <button className="btn btn-secondary" type="button" onClick={() => notify({ action: "cancel" })}>Cancel</button>
                </div>


            </form>
        </>
    );
}

export default GameForm;