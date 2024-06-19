import React from "react";

function GoogleMap() {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102915.89196318493!2d50.08950499841689!3d36.28509871408027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff355249e1ae59f%3A0x9b4276368ecb03b6!2z2YLYstmI24zZhtiMINin2LPYqtin2YYg2YLYstmI24zZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1717264083694!5m2!1sfa!2s"
          
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
