import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibilty] = useState(false);
  return (
    <div>
      { alertVisible && <Alert>My Alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibilty(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
