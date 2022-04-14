import React from "react";
import { InputWithChoice } from "../components/Inputs/InputWithChoice";
import { InputWithMultipleChoice } from "../components/Inputs/InputWithMultiChoice";
import { InputWithText } from "../components/Inputs/InputWithText";
import { TalkForm } from "../components/talkform/TalkForm";
import { useTalkForm } from "../hooks/useTalkForm";

export const TalkFormTest = (props) => {
  const { getData } = useTalkForm();
  function getPrev(param) {
    return getData(param);
  }
  function exitAction(data) {
    console.log(data);
  }

  return (
    <TalkForm exitAction={exitAction}>
      <InputWithText
        message="That's too short :)"
        validator={(value) => {
          console.log(value);
          if (value !== null && value.length > 3) {
            return true;
          }
          return false;
        }}
        id={"name"}
      >
        <p>{"What should I call you, my friend ?"}</p>
      </InputWithText>
      <InputWithMultipleChoice
        message="You shall not pass"
        validator={(e) => {
          return true;
        }}
        id={"multiple"}
        text={"Select a choice"}
      >
        <div id="instagram">Instagram</div>
        <div id="linkedin">Linkedin</div>
        <div id="facebook">facebook</div>
      </InputWithMultipleChoice>
      <div className=" ">
        <p>Hi there!! Myself Anya. I'll be your guide today</p>
        <img
          className="flex items-center justify-center w-full"
          src="https://c.tenor.com/fRc7yQ0tzFQAAAAM/anime-girl.gif"
          alt="anime girl"
        />
      </div>

      <InputWithChoice
        message={`${getPrev(
          "name"
        )}, You should have a social media account!!!`}
        validator={(value = "") => {
          if (value !== null) {
            return true;
          }
          return false;
        }}
        id={"choice"}
        text={"Which is your favourite social media platform?"}
        values={["A", "B", "C"]}
      ></InputWithChoice>

      <InputWithText
        message="Invalid input"
        validator={(value = "") => {
          if (value !== null && value.length > 3) {
            return true;
          }
          return false;
        }}
        id={"status"}
      >
        <p>{`I love ${getPrev("choice")}!! What's your ${getPrev(
          "choice"
        )} ID`}</p>
      </InputWithText>
      <div className=" ">
        Arigato {getPrev("name")} {"<3"}
      </div>
    </TalkForm>
  );
};
