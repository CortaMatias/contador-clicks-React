import React from "react";
import "../style-sheet/Contador.css"

function Contador ({ clic }) {
  return (
    <div className="contador">
      {clic}
    </div>
  )
}

export default Contador;