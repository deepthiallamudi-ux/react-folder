// use effect hook allows you to perform side effects in function components
// It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes. it is used when you want to run some code based on changes to state or props
// By using this hook, you can tell React that your component needs to do something after rendering
// mount means when the component is added to the DOM
// unmount means when the component is removed from the DOM
//use effect is used in 3 main ways
//1. to run side effects after every render
//2. to run side effects only once after the initial render
//3. to run side effects based on specific state or prop changes