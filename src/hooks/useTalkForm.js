import { useContext } from "react";
import { TalkformContext } from "../context/TalkFormContext";

export const useTalkForm = (props) => {
  const { data, setData } = useContext(TalkformContext);
  function addData(element, index) {
    if (getData(index) === null)
      setData([...data, { value: element, key: index }]);
    else {
      let mutArray = Array.from(data);
      mutArray.forEach((e) => {
        if (e.key === index) {
          e.value = element;
        }
        setData(mutArray);
      });
    }
  }
  function clear() {
    setData([]);
  }
  function getData(key) {
    let value = null;
    data.forEach((e) => {
      if (e.key === key) {
        value = e.value;
      }
    });
    return value;
  }
  return { data, addData, getData, clear };
};
