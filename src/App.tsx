import ListGroup from "./components/ListGroup";

function App() {
  let items= ['Chas', 'Shaira', 'Cyreh', 'Marian']
  
  return <ListGroup items={items} heading="Team Members"/>
}

export default App;