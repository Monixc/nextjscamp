import b_on from "./assets/images/b_on.png";
import b_off from "./assets/images/b_off.png";
import { useState } from "react";

const App = () => {
  const [lamp, setLamp] = useState(false);

  return (
    <>
      <img src={lamp ? b_on : b_off} onClick={() => setLamp((prev) => !prev)} />
    </>
  );
};
export default App;
