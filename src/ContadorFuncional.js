import React, { useState } from "react";

function ContadorFuncional() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default ContadorFuncional;
