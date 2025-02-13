import { Fragment, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [items, setItems] = useState(["Chas", "Marian", "Cyreh", "Shaira"])

  const addItem = (element: string) => {
    setItems([...items, element])
  }

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const handleClickButton = () => {
    console.log("Added a new member")
    addItem("New member!")
  }
  return (
    <Fragment>
      <div>
        <Alert type='success'>
          Get <a href="#" className="alert-link">Free Robux</a>! Get it while it's hot!
        </Alert>
        <Alert type='danger'>
          Nooo! Don't click da free roboks boton
        </Alert>

        <ListGroup items={items} heading="Team Members" onSelectItem={handleSelectItem}></ListGroup>

        <Button color="primary" label="Test" onClickButton={handleClickButton}></Button>
      </div>
    </Fragment>
  )

}

export default App;