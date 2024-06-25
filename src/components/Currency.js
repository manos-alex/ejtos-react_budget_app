import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import { Dropdown, DropdownButton } from "react-bootstrap";
import './Currency.css';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const options = ['$ Dollar', '£ Pound', '€ Euro', '₹ Rupee'];
    const [selectedItem, setSelectedItem] = useState("Currency (" + options[1] + ")");

    const handleSelect = (eventKey) => {
        setSelectedItem("Currency (" + eventKey + ")");
        let newCurrency = eventKey[0];

        dispatch({
            type: "CHG_CURRENCY",
            payload: newCurrency
        })
    };
  
    return (
      <Dropdown onSelect={handleSelect}>
        <DropdownButton
          title={selectedItem}
          id="dropdown-basic"
          className="custom-dropdown"
        >
          {options.map((option, index) => (
            <Dropdown.Item className="custom-dropdown-item" key={index} eventKey={option}>
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Dropdown>
    );
};

export default Currency;