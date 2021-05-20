/**
 * Create an API for interacting with our designated endpoint.
 * @param {string} endpoint
 * @returns {Object}
 */
 const api = {
  //post
  async create(
    newGame,
    endpoint = "http://localhost:8080/game"
  ) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    });
    return response.json();
  },

  //get all
  async getAll(endpoint = "http://localhost:8080/game") {
    const res = await fetch(endpoint);
    return res.json();
  },

  // With 3 parameters, destructured parameters will be helpful
  async update({
    dataUpdate,
    id,
    endpoint = "http://localhost:8080/game",
  } = {}) {

    console.log(dataUpdate);
    const response = await fetch(`${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUpdate),
    });
    return response.statusText;
  },

  async delete(id, endpoint = "http://localhost:8080/game") {
    const response = await fetch(`${endpoint}/${id}`, { method: "DELETE" });
    return response.statusText;
  },

  async getByStudio(studio, endpoint = "http://localhost:8080/game/s") {
    const res = await fetch(`${endpoint}/${studio}`);
    return res.json();
  },


  async getByEsrbRating( esrbRating, endpoint = "http://localhost:8080/game/esrb") {
    const res = await fetch(`${endpoint}/${esrbRating}`);
    return res.json();
  },


  async getByFirstLetterOfTitle(title, endpoint =
    "http://localhost:8080/game/t") {
    const res = await fetch(`${endpoint}/${title}`);
    return res.json();
  },

};

export default api;
