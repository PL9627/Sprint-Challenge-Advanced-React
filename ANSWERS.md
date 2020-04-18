- [ ] Why would you use class component over function components (removing hooks from the question)?

    We are able to use the react component lifecycle through class components. This allows the web applications to be more dynamic. Functional components do not have access to the component lifecycle; creating only static components.

- [ ] Name three lifecycle methods and their purposes.

    `render()` returns a part of the DOM so that they can be mounted to the DOM and should only return the same thing each time `render()` is called.

    `componentDidMount()` is only invoked when a component is mounted immediately.

    Once an update goes through, `componentDidUpdate()` is invoked.

- [ ] What is the purpose of a custom hook?

    To impart stateful logic and non-visual behavior within components and can be reused.

- [ ] Why is it important to test our apps?

    To minimize the possibility of bugs appearing in the product and to check if the product is functioning properly.