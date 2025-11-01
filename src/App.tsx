import Message from "./message"
import Alert from "./components/alert";
import ListGroup from "./components/ListGroup";
function App(){
  // const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Mumbai'];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup 
  //       items={items} 
  //       heading="Cities"
  //       onSelectItem={handleSelectItem} />
        
  //   </div>
  // )
return( <div>
    <Alert text={"this is the alert"}/>
  </div>
  );
 
}

export default App;