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
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-1111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((previousState) => {
      return {
        contactList: previousState.contactList.concat(newFinalContact),
      };
    });
  };
  handleFavoritesContact = (updateContact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((c) => {
          if (c.id === updateContact.id) {
              return { ...c, isFavorite: !updateContact.isFavorite };
          }
          return c;
        }),
      };
    });
  };

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
            <div className="col-8 offset-2 row">
              <AddContact handleAddContact={this.handleAddContact} />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <FavoriteContacts handleFavoritesContact={this.handleFavoritesContact}
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite === true
                )}
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-8 offset-2 row">
              <GeneralContacts handleFavoritesContact={this.handleFavoritesContact}
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite === false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
