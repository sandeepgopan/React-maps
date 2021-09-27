import "./styles.css";

var shoppingList = ["milk", "tea", "bread", "flowers"];
export default function App() {
  return (
    <div className="App">
      <h1>Print a shopping list</h1>
      <ul>
        {shoppingList.map((item) => {
          console.log(item);
          return <li>mapping</li>;
        })}
      </ul>
    </div>
  );
}
