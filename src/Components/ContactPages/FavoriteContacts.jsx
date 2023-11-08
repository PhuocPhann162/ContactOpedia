import Contact from "./Contact";

const FavoriteContacts = () => {
    return (
        <div className="border" style={{backgroundColor: "#363636", height: "40vh", borderRadius: "10px"}}>
            <div className="col-12 text-center text-white-50 p-2">Favorites</div>
            <div className="col-12 ">
                <Contact />
                <Contact />
            </div>
        </div>
    );
}

export default FavoriteContacts;