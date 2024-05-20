import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, isVideo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {isVideo ? (
          <video controls>
            <source src={imgUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={imgUrl} alt={title} />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
