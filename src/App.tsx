import ListGroup from "./components/ListGroup";

function App() {
  let items= ['Chas', 'Shaira', 'Cyreh', 'Marian']

  const handleSelectItem = (item: string) => console.log(item)
  
  return <ListGroup items={items} heading="Team Members" onSelectItem={handleSelectItem}/>
}

export default App;