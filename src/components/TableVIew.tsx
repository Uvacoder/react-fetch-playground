import { VFC } from "react";
import { DefaultButton } from "./DefaultButton";
import { useFetch } from "../hooks/useFetch";

export const TableView: VFC<{}> = () => {
  const data = useFetch({ url: "https://jsonplaceholder.typicode.com/posts" });

  // const [tableData, setTableData] = useState([] as userData);

  // useEffect(() => {
  //   // Define asynchronous function - since useEffect hook can't handle async directly,
  //   // a nested function needs to be defined first and then called thereafter
  //   const fetchData = async () => {
  //     try {
  //       // Fetch data from REST API
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );

  //       if (response.status === 200) {
  //         // Extract json
  //         const rawData = await response.json();
  //         setTableData(rawData);
  //       } else {
  //         console.error(`Error ${response.status} ${response.statusText}`);
  //       }
  //     } catch (error) {
  //       console.error(`Error ${error}`);
  //     }
  //   };
  //   // Call async function
  //   fetchData();
  // }, []);

  return (
    <div className="markdown-body mb-4">
      <h2>test</h2>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <td>title</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <th>{item.userId}</th>
                <td>{item.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <DefaultButton onClick={(e) => console.log(e)}>Sync</DefaultButton>
    </div>
  );
};
