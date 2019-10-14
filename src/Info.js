import React from "react";

export default function Info() {
  return (
    <header>
      <h1 className="title">Resize Observer API with React</h1>
      <p>See some ways to use the Resize Observer API using React JS.</p>
      <p>
        The Resize Observer API is a way to subscribe to size changes of an
        element.
      </p>
      <h4>How is the API being used in this example?</h4>
      <p>
        You'll notice a resizable box with some text inside it. When you pull
        the handle left or right to change the size, the text within the box
        will change to some breakpoints.
        <br />
        We can define breakpoints in our hook like so.
        <br />
        <code>
          {[
            `[{ small: 200 },`,
            <br />,
            `{ medium: 400 },`,
            <br />,
            `{ large: 600 }]`
          ]}
        </code>
      </p>
    </header>
  );
}
