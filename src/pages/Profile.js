const Profile = () => {
    const profileData = {
        name: "John Doe",
        age: 30,
        phone: "123-456-7890",
        gender: "Male"
    };

    return (
        <div className="container">
            <label>Name: </label>
            {profileData.name}<br />
            <label>Age: </label>
            {profileData.age}<br />
            <label>Phone: </label>
            {profileData.phone}<br />
            <label>Gender:</label>
            {profileData.gender}<br />
        </div>
    )
}

export default Profile;
