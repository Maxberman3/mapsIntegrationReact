import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Results = ({places, setXid}) => {
  console.log(places);
  if (!places) {
    return null;
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Distance (m)</th>
            <th>Type of Attraction</th>
          </tr>
        </thead>
        <tbody>
          {places.map(place => {
            return (
              <tr key={place.properties.xid}>
                <td>
                  <Link
                    to="/details"
                    onClick={() => setXid(place.properties.xid)}
                  >
                    {place.properties.name}
                  </Link>
                </td>
                <td>{Math.round(place.properties.dist)}</td>
                <td>{place.properties.kinds}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Results;
