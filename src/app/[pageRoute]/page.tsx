import MainPage from "../components/MainPage/MainPage";

export default function Main({ params }: MainPageProps) {
  const { pageRoute } = params;

  return (
    <MainPage title={pageRoute ?? ''}/>
  );
}

interface MainPageProps {
  params: {
    pageRoute?: string;
  };
}
