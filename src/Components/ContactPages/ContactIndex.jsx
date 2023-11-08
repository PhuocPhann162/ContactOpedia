import React from "react";

import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: "",
      count: 0,
      randomContact: "",
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
          </div>
          <div className="row py-2">
            <AddContact />
          </div>
          <div className="row py-2">
            <FavoriteContacts />
          </div>
          <div className="row py-2">
            <GeneralContacts />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;