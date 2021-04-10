import HomePage from "./containers/HomeTemplate/HomePage/index";
import AboutPage from "./containers/HomeTemplate/AboutPage/index";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound/index";
import { routesHome } from "./routes";
import NavbarHome from "./Components/NavbarHome/index";

function App() {
  const renderRoutesHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <NavbarHome />
      <Switch>
        {renderRoutesHome(routesHome)}
        {/* <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ListMoviePage></ListMoviePage> */}
        {/* trang chu- localhost:3000; co 3 props (mau do) */}
        {/* <Route exact path="/" component={HomePage} />

      {/* trang chu- localhost:3000/about */}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* trang chu- localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */} */}
        {/* trang PageNotFound ; phai de cuoi cung, neu de sai cho thi se kg thay cac trang khac (duoc xem nhu la default) */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
