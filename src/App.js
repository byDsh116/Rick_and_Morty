import { Pagination, ItemsGrid, Header, AppState, useData } from './components';
import { Main } from './App.styled';

export function App() {
  const { isFetching, isError } = useData();

  return (
    <Main>
      <Header />
      <AppState />
      {!isFetching && !isError && (
        <>
          <ItemsGrid />
          <Pagination />
        </>
      )}
    </Main>
  );
}

// Перенесла styled компонент main из app.js в app.styled.js
