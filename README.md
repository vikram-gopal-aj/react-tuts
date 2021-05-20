# ReactJS Tuts
First steps to learning anything, read the documentation lol...

---

# Why JSX
- Jsx expressions are compiled into objects which are called react elements.
- Jsx can be used as an expression.
- Jsx can contain children and empty tags can be closed with "/>".
- Jsx escapes any value not expected and converts all input to string before rendering.
- Jsx uses quotes for strings, curly braces for js expression.
- Jsx allows embedding prototype functions directly without the need to break them out into functions (not recommended for clean code).

---

# React Elements
- Smallest building blocks in react which are plain objects and cheap to create.
- React DOM will manage updating React Elements within the main react root DOM node.
- React elements are immutable.
- React DOM only updates elements and their children that dont match with their previous versions to brin DOM to current state.

---

# Components
- Allows huge features to be broken into small reusable code blocks for better readbility and maintenance.
- If any part of the UI is used several times or is complex enough on its own, it warrants a component.
- Functions and class components are one and the same in terms of purpose with some additional benfits to both.
- Jsx attributes and children can be passed to components as "props".
- Props are read only, all react components must act like pure functions with respect to their props.
- Can export default component from a js file or multiple components neglecting the default keyword in the export statement.

# State and Lifecycle
- DATA Flows Down, STATE is best maintained by one parent component and passed down as prop to its children if needed.
- Parent and child need not know about each other's states at any point.
- Each component can change their rendering in response to external actions without violating the rule of being "pure function".
- This means the props sent to the component can be changed and the component re-rendered with state and lifecycle options.
- ComponentDidMount and ComponentWillUnmount are lifcycle methods for Class Components.
- React Hooks will be used for function components..
- Dont modify state directly, always use "setState", constructor is the only place you should assign state.
- Multiple "setStates" maybe be in one single update so do not create dependencies, rather use second for of "setState" that accepts a function and returns a result.
- Variables inside the state object can be modified without affecting other variables using separate "setState" calls.

---

# Handling Events
- JSX can pass a function as en eventhandler called as an expression "onClick={handler}".
- Have to prevent default manually instead of returning false in React.
- Class methods are not bound by default so be sure to bind them in the class constructor.
- Parameters can be passed to events using arrow/general or function.prototype.bind.

---

# Conditional Rendering
- All condtional statements valid in JS are valid in React.
- Components called directly or by other components can be stopped from rendering by return null based of conditions.

---

# Lists & Keys
- Lists are similar to lists in JS
- Keys are requried to uniquely identify elements in a list, prefer something like the elements own id or can use index of the list.
- If components are extracted then key should be placed as an attribute on the component itself and not within it.
- Keys need to be unique only among its sibiligs, keys can be re-used for different lists.

---

# Forms Controlled/Uncontrolled Components
- Since most form elements have their own state, React updates these properties only using "setState".
- This is done so that there is one source of truth to any form that contains all the values of all form elements in a state object.
- Most inputs output a value which can be stored in the state and some are booleans that can be handled using logical operators.
- React.createRef can be used to get specific form elements without needing a handler for each state update, it is less code but not recommended.
- DefaultValue can be specificed to set an inital value which can be changed later, this is usually for data driven fields.

---

# Lifting State Up
- Always try to maintain state in the most common ancestor for easier maintainenace and the concept of "single source of truth".