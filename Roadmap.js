import React from 'react';
import roadmap from '../roadmapL.png';

function Roadmap() {
  return (
    <section className="oakvice-section">
      <div className="align-items-center oakvice-section__header">
        <h3 className="oak-section__wrapper viceUp">Our RoadMap</h3>
        <h3 className="roadmaph3">Explore the Journey Ahead</h3>
      </div>
      <br />
      <br />
      <br />
      <div className="oakvice-container">
        <img
          src={roadmap} // Replace with your roadmap image path
          alt="roadmap"
        />
        <div className="containerBeam">
          {/* Other points */}
          {/* Last Point with Wave Effect */}
          <div className="absolute" style={{ marginBottom: '30px' }}>
            <div className="point"></div>
            <div className="wave"></div> {/* The wave effect */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}

export default Roadmap;
