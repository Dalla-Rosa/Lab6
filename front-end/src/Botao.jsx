import React, { useState } from 'react';

function Botao() {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);

  const [title, setTitle] = useState("Follow");
    function followed() {
        if (title === "Follow") {
            setTitle("Unfollow");
        } else {
            setTitle("Follow");
        }
    }

  return (
    <div>
      <button onClick={followed}>
        {title}
      </button>
    </div>
  );

}


export default Botao;