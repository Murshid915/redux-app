const Editprofile = () => {
  return (
    <div className="edit">
      <label>Name: </label>
      <input placeholder="Enter Name..." /><br />
      <label>Age: </label>
      <input placeholder="Enter Age..." /><br />
      <label>Phone: </label>
      <input placeholder="Enter Phone..." /><br />
      <label>Select Gender</label>
      <select > <option value={'Male'}>Male</option>
        <option value={'Female'}>Female</option> </select><br />
      <button>Save Changes</button> </div>)
}

export default Editprofile