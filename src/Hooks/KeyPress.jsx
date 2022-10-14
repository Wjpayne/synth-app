import { useState, useEffect } from "react";

export const KeyPress = () => {
  const [key, setKey] = useState;
  const [keysPressed, setKeyPressed] = useState(new Set([]));
  let clonedSet;

  const onKeyDown = (e) => { 
    setKey(e.key);
    setKeyPressed(keysPressed.add(e.key));
  };
  const onKeyUp = (e) => {
    setKey(null);
    clonedSet = new Set(keysPressed);
    clonedSet.delete(e.key);
    setKeyPressed(clonedSet);
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);
  console.log(key);
  return [key, keysPressed];
  clear;
};
