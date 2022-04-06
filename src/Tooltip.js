import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

function Tooltip() {
  return (
    <div className="tippy">
      <Tippy content="Basic tooltip" href="www.google.com">
        <button>
          Tooltip
        </button>
      </Tippy>
    </div>
  );
}

export default Tooltip;
