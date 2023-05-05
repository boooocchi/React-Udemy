import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      {params.eventId} <Link to="edit">edit</Link>
    </div>
  );
};

export default EventDetailPage;
