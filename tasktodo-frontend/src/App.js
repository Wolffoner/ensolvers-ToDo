import RoutesUser from "./routes/RoutesUser";
import RoutesUnlogged from "./routes/RoutesUnlogged";
import { useStore } from "./store/storeProvider";

const App = () => {

  const { isLoggedIn } = useStore();

  return (
    <>
      { isLoggedIn ? <RoutesUser/> : <RoutesUnlogged/>}
    </>
  );
}

export default App;