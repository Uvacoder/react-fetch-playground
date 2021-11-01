import "./styles.css";
import { TableView } from "./components/TableVIew";

export default function App() {
  return (
    <div className="App">
      <div className="Layout">
        <div className="Layout-main">
          <h1>Hello CodeSandbox</h1>
          <TableView />
        </div>
      </div>
    </div>
  );
}
