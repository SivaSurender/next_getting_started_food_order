import React from "react";

function DynamicSlug({ params }) {
  // Inside slug gives dynamic routes i.e id which can be received as a prop like abve
  return <div>DynamicSlug {params.slug}</div>;
}

export default DynamicSlug;
