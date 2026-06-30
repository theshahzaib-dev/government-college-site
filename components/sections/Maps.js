import { collegeConfig } from "@/data/mockData";
import React from "react";

const Maps = ({ src }) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-lg border-2 border-brand-accent">
      <iframe
        src={collegeConfig?.contact?.mapEmbedUrl}
        className="w-full h-64  shadow-inner"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="College Location Map"
      ></iframe>
    </div>
  );
};

export default Maps;
