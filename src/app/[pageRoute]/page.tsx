import { isNil } from "lodash";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";

export default function Main({ params }: MainPageProps) {
  const { pageRoute } = params;

  const routes = new Map([
    ['home', <HomePage />],
    ['inicio', <MainPage />],
  ]);

  const getRoute = () => {
    const route = routes.get(pageRoute?.toLowerCase() ?? '');

    if (!isNil(route)) {
      return route;
    }

    return <HomePage />;
  }

  return (
    getRoute()
  );
}

interface MainPageProps {
  params: {
    pageRoute?: string;
  };
}
