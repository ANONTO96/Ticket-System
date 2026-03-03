# React Fundamentals – Short Answers

## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension that allows you to write HTML-like code inside JavaScript in React.

It is used because:
- It makes UI code easier to read and write.
- It allows embedding JavaScript inside HTML using `{}`.
- It gets compiled into regular JavaScript (`React.createElement()`).

**Example:**
```jsx
const element = <h1>Hello, World!</h1>;

## 2. What is the difference between State and Props?

Both **State** and **Props** are used to manage data in React components, but they serve different purposes.

### Props

- Passed from parent to child components.
- Read-only (cannot be modified by the child).

### State

- Managed inside the component.
- Can be updated using a setter function.
- Causes the component to re-render when changed.

### Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

const [count, setCount] = useState(0);


## 3. What is the useState hook, and how does it work?

`useState` is a Hook that allows functional components to use state.

It works by:

- Initializing a state value.
- Returning the current state and a function to update it.
- Re-rendering the component when the state changes.

### Syntax

```jsx
const [state, setState] = useState(initialValue);


const [count, setCount] = useState(0);

### Example


const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  {count}
</button>


## 4. How can you share state between components in React?

React follows a top-down data flow.

You can share state by:

### Lifting State Up
Move the state to a common parent component and pass it down via props.

### Using Context API
Share state across deeply nested components without prop drilling.

### Using State Management Libraries
For larger applications (e.g., Redux).

### Example (Lifting State Up)


function Parent() {
  const [value, setValue] = useState("");

  return <Child value={value} setValue={setValue} />;
}


## 5. How is event handling done in React?

React uses a synthetic event system.

### Key points

- Events use camelCase (`onClick`, `onChange`).
- Event handlers are passed as functions.
- You must manually prevent default behavior when needed.

### Example

function handleClick() {
  console.log("Clicked");
}

<button onClick={handleClick}>Click Me</button>

