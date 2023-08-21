import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
      
    );
  });
  return (
<div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button right blue" style={{marginLeft:"470px"}}> Add New Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
          ref={inputEl}
            type="text"
            placeholder="search contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          ></input>
          <i className="search icon"></i>
        </div>
      </div>
  <div className="ui celled list">{renderContactList}</div>
 </div>
  );
};

export default ContactList;
