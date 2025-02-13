import { Fragment } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Chas", "Marian", "Cyreh", "Shaira"]

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <Fragment>
      <div>
        <Alert>
          Get <a href="#" className="alert-link">Free Robux</a>! Get it while it's hot!
        </Alert>
        <Alert>
          Nooo! Don't click da free roboks boton
        </Alert>
      </div>
      <div>
        <ListGroup items={items} heading="Team Members" onSelectItem={handleSelectItem}></ListGroup>
      </div>
    </Fragment>
  )

}

export default App;