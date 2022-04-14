import React, { createContext, useState } from "react";

export const TalkformContext = createContext(null);
export const TalkformContextProvider = (props) => {
  const [data, setData] = useState([]);

  return (
    <TalkformContext.Provider value={{ data, setData }}>
      {props.children}
    </TalkformContext.Provider>
  );
};
