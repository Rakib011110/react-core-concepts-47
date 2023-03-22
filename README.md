# react core concept

<details>
<summary>
 What is JSX
</summary>
  <br >

- JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript files. It stands for "JavaScript XML," and is used primarily with React, a popular JavaScript library for building user interfaces.

- JSX allows developers to write code that is easier to read and understand than traditional JavaScript syntax, particularly when it comes to rendering HTML elements. With JSX, developers can write code that looks like HTML, but is actually JavaScript code that creates and renders the HTML elements.

```js
// -For example, instead of writing:

const element = document.createElement("div");
element.setAttribute("class", "my-class");
element.textContent = "Hello, World!";
document.body.appendChild(element);
```

- with JSX, you could write:

```js
const element = <div className="my-class">Hello, World!</div>;
ReactDOM.render(element, document.getElementById("root"));
```

- This code accomplishes the same thing as the first example, but is much easier to read and understand.

- বাংলাঃ JSX হল JavaScript XML। এটি একটি জাভাস্ক্রিপ্ট এক্সটেনশন যা একটি কম্পিউটারে একটি ডকুমেন্ট লেআউট এবং লজিক একত্রিত করে।

- JSX হল সিনটেক্স সিমিলার কনভেনশন যা রিটার্ন করতে ব্যবহৃত হয় এবং এটি একটি ফাংশন হিসাবে স্কোপ প্রদর্শন করে। এটি পুরোপুরি একই জাভাস্ক্রিপ্ট সিনট্যাক্স থেকে স্থানান্তর করা হয় কিন্তু এটি রিটার্ন করে যখন সংক্ষিপ্ত লিখা না যায়।

</details>

<details>
<summary>
 What is useState in react.js

</summary>
<br >

- In React.js, useState is a hook that allows you to add state to a functional component. State is an object that holds data that may change over time, and by using the useState hook, you can manage state within a functional component.

- Here is an example of how you can use the useState hook in React:

```js
import React, { useState } from "react";

function Example() {
  // Declare a new state variable called "count" with initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- In this example, useState is used to declare a new state variable called "count" and initialize it to 0. The setCount function is used to update the value of "count". When the button is clicked, the setCount function is called with the new value of "count", which triggers a re-render of the component with the updated value.

- Using useState makes it easy to manage state within a functional component, and allows you to update the state and re-render the component based on user interactions or other events.
-

</details>

<details>
<summary>
  বাংলায় পড়ুন
</summary>

```js

```

<br >
  
-

</details>

<details>
<summary>
  বাংলায় পড়ুন
</summary>

```js

```

<br >
  
-

</details>

<details>
<summary>
  বাংলায় পড়ুন
</summary>

```js

```

<br >
  
-

</details>

<details>
<summary>
  বাংলায় পড়ুন
</summary>

```js

```

<br >
  
-

</details>
