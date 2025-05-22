import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);

  const fetchData = useCallback(async (url, signal) => {
    try {
      setIsFetching(true);
      setIsError(false);
      const { data } = await axios.get(url, { signal });
      setCharacters(data.results);
      setInfo(data.info);
    } catch (e) {
      if (!axios.isCancel(e)) {
        setIsError(true);
        console.error(e);
      }
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(apiURL, controller.signal);

    return () => controller.abort();
  }, [apiURL, fetchData]);

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      fetchData,
      isFetching,
      isError,
      info
    }),
    [activePage, apiURL, characters, isFetching, isError, info, fetchData]
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

// Добавила AbortController чтобы отменять старые запросы при новых действиях и зависание лоадера
// Добавила useCallback для fetchData чтобы функция не пересоздавалась при каждом рендере
// Сброс isFetching в finally - устраняет бесконечное отображение лоадера
// Добавила apiURL в зависимости useEffect чтобы запросы запускались при изменении параметров (пагинация/фильтры)
