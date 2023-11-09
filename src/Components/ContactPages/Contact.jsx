import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavoriteButton = this.handleFavoriteButton.bind(this)
  }

  handleFavoriteButton = (e) => {
    e.preventDefault();
    this.props.handleFavoritesContact(this.props.contact);
  }

  render() {
    return (
      <div
        className="row p-md-2 mb-2"
        style={{ border: "1px solid #555", borderRadius: "20px" }}
      >
        <div className="col-2 col-md-1 pt-2 pt-md-1">
          <img
            src={`https://ui-avatars.com/api/?name=${this.props.contact.name}`}
            alt="KW"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-6 col-md-5 text-warning pt-0">
          <span className="h4">{this.props.contact.name}</span>
          <br />
          <div className="text-white-50">
            <span>{this.props.contact.email}</span>
            <br />
            <span>{this.props.contact.phone}</span>
          </div>
        </div>
        <div className="col-2 col-md-2 pt-md-3">
          <button onClick={this.handleFavoriteButton}
            className={`btn btn-sm m-1 ${
              this.props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"
            }`}
          >
            <i className="bi bi-star" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
        <div className="col-2 col-md-3 pt-md-3">
          <button className="btn btn-primary btn-sm m-1">
            <i className="bi bi-pencil-square" style={{ fontSize: "1rem" }}></i>
          </button>
          <button className="btn btn-danger btn-sm m-1">
            <i className="bi bi-trash3" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
