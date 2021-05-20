function FilterInventory() {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option selected="default value">Filter through our inventory:</option>
        <option value="1">Game</option>
        <option value="2">T-Shirt</option>
        <option value="3">Console</option>
      </select>
    </>
  )
}

export default FilterInventory;