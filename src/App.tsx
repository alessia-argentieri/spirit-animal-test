import Test from "./components/Test";
import { data } from "./questions";

const App = () => {
  return (
    <>
      <Test data={data} />
    </>
  );
};

export default App;
