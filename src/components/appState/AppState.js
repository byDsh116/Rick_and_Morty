import { Loader, Text } from '../common';
import { useData } from '../providers';
import { AppStateContainer } from './AppState.styled.js';

export function AppState() {
  const { isFetching, isError } = useData();

  if (isError) {
    return (
      <AppStateContainer>
        <Text>An error has occurred. Try other search parameters.</Text>
      </AppStateContainer>
    );
  }

  if (isFetching) {
    return (
      <AppStateContainer>
        <Loader />
      </AppStateContainer>
    );
  }

  return null;
}

// Стили вынесены в отдельный файл
