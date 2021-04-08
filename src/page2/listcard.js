import React from "react";

function listcard(props) {
  const { img, title, link, rank } = props;
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
        <div className="licard">
          <img src={img} alt="Card cap" />
          <div className="licard-body">
            <h3>{title}</h3>

            <div>
              <a href={link} className="btn btn-outline-dark" target="_blank">
                Watch Now
              </a>
              <h6>{rank}</h6>
            </div>
            <div className="licard-no"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default listcard;
