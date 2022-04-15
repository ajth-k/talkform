# TalkForm for React

[![npm version](https://badge.fury.io/js/talk-form.svg)](http://badge.fury.io/js/talk-form)

## Demo

![Alt Text](https://s7.gifyu.com/images/ezgif-5-a74189b24c.gif)

## What is Talkform?

- A simple component that'll let you generate chat like form UI.

## Installation

Install through npm:

```

npm i talk-form

```

## Usage

wrap App.js with < TalkformContextProvider >

```jsx
import {
  InputWithChoice,
  InputWithMultipleChoice,
  InputWithText,
  TalkForm,
  useTalkForm,
} from "talk-form";

function Form() {
  const { getData } = useTalkForm();
  function exitAction(data) {
    console.log(data);
  }

  return (
    <TalkForm exitAction={exitAction}>
      <div className=" ">
        <p>Hi there!! Welcome to talkForm</p>

        <img
          className="flex items-center justify-center w-full"
          src="https://c.tenor.com/fRc7yQ0tzFQAAAAM/anime-girl.gif"
          alt="anime girl"
        />
      </div>

      <InputWithText
        message="That's too short :)"
        validator={(value = "") => {
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
        text={`${getData("name")}! select your fav games`}
        id="choice"
      >
        <p>valorant</p>

        <p>pubg</p>

        <p>minecraft</p>
      </InputWithMultipleChoice>

      <InputWithChoice
        values={[":)", ";)"]}
        id={"multiple"}
        text={"Thank you so much <3"}
      ></InputWithChoice>
    </TalkForm>
  );
}
```

```javascript
import Form from "./Form";
import { TalkformContextProvider } from "talk-form";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    // components
    <TalkformContextProvider>
      <Form />
    </TalkformContextProvider>
  </React.StrictMode>
);
```

### props

The `<TalkForm />` Component supports the following components:

**exitAction** _required_

At the end of the form exitAction function will be executed with the data.

```js
function exitAction(data) {
  console.log(data);
  // data contains the user inputs
}
```

**avatar** _optional_
replace the default talkform avatar.

The `Input fields` Component supports the following :

- **validator** _optional_
  validates the user input - **message** _required_: display message on failed validation.
- **id** _required_ : identifier

`InputWithMultipleChoice`
**text** _required_ : display text
`InputWithChoice`
**values** _required_: list of values for selection.

## Contribution

Your contributions and suggestions are heartily welcome.

## License

MIT
