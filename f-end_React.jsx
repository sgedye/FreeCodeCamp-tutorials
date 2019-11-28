//Create a Stateless Functional Component
const MyComponent = () => {
  return (
    <div>This is a string of text</div>
  );
};

//Create a Component with Composition (a child component) and render it to an HTML div (with ID: idOfAnHtmlElement)
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
ReactDOM.render(<ParentComponent />, document.getElementById("idOfAnHtmlElement"));

//Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};
class Calendar extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
}; //Return What date is it? The current date is: Thu Nov 28 2019 11:52:01 GMT+1100 (AEST)


//Pass an array as props.
const List = (props) => {
  return <p>{props.task.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today:</h2>
        <List task={['eat cake', 'buy pizza', 'smell the roses']}     />
        <h2>Tomorrow:</h2>
        <List task={['jump', 'hop', 'walk', 'run', 'fight!']}/>
      </div>
    );
  }
}; //Return To Do Lists \n Today: eat cake, buy pizza, smell the roses \n Tomorrow: jump, hop, walk, run, fight!
