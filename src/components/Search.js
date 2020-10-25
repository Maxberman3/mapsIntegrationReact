import React from "react";
import {Form, Button} from "react-bootstrap";
import {useField} from "../hooks/index";
import searchService from "../services/searchs";
import {useHistory} from "react-router-dom";

const Search = ({setPlaces, notify}) => {
  const history = useHistory();
  const [placeName, resetPlaceName] = useField("text");
  const [radius, resetRadius] = useField("number");
  const resetForm = () => {
    resetPlaceName();
    resetRadius();
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const places = await searchService.get(placeName.value, radius.value);
      setPlaces(places);
      resetForm();
      history.push("/results");
    } catch (error) {
      console.log(error.message);
      notify(error.message);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "20%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <h1>Search for Places!</h1>
      <Form className="text-center" onSubmit={onSubmit} inline={true}>
        <Form.Label className="mb-2 mr-sm-2">
          <b>Place:</b>
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-3"
          type={placeName.type}
          onChange={placeName.onChange}
          placeholder="...Oakland City Hall"
        />
        <Form.Label className="mb-2 mr-sm-2">
          <b>Radius:</b>
        </Form.Label>
        <Form.Control
          className="mb-2 mr-sm-2"
          type={radius.type}
          onChange={radius.onChange}
          placeholder="...in meters"
        />
        <Button variant="primary" type="submit" className="mb-2 mr-sm-2">
          Search!
        </Button>
      </Form>
    </div>
  );
};
export default Search;
