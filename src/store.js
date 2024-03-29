import React, { useState } from "react";

const initialState = {
  isTvOn: false,
  isTvPwrBtn: false,
  isRemoteInView: true,
  channel: 1,
  volumeNum: 10,
  mute: false,
  showVolume: false,
  guide: false,
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [storeState, setStoreState] = useState(initialState);

  return <Context.Provider value={[storeState, setStoreState]}>{children}</Context.Provider>;
};

export default Store;
