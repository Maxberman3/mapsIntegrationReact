import React, {useEffect, useState} from "react";
import detailService from "../services/details";

const Details = ({xid, notify}) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await detailService.get(xid);
        setDetails(data);
      } catch (err) {
        notify(err.message);
      }
    };
    getDetails();
  }, []);
  console.log(details);
  const checkIfWiki = () => {
    if (details.wikipedia_extracts) {
      return <div> {details.wikipedia_extracts.text}</div>;
    }
    return null;
  };
  const checkIfImage = () => {
    if (details.preview) {
      return <img src={details.preview.source} />;
    }
    return null;
  };
  if (!details) {
    return <div> ...loading</div>;
  }
  return (
    <div>
      <h2> {details.name}</h2>
      {checkIfImage()}
      <h5>
        {" "}
        Address: {details.address.house_number} {details.address.pedestrian}/
        {details.address.road}, {details.address.city}/{details.address.hamlet},{" "}
        {details.address.state}, {details.address.country}
      </h5>
      {checkIfWiki()}
    </div>
  );
};
export default Details;
