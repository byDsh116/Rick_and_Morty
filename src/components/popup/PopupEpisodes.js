import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader, Text } from '../common';
import {
  Episode,
  EpisodeMarking,
  PopupEpisodesContainer,
  StyledPopupEpisodes
} from './Popup.styled';

const API_EPISODES_URL = 'https://rickandmortyapi.com/api/episode';

export function PopupEpisodes({ episodes }) {
  const [series, setSeries] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!episodes?.length) {
      return;
    }

    setIsFetching(true);

    const episodesIds = episodes.map((ep) => ep.match(/\d+$/)[0]);

    axios
      .get(`${API_EPISODES_URL}/${episodesIds}`)
      .then(({ data }) => {
        setSeries(Array.isArray(data) ? data : [data]);
      })
      .finally(() => setIsFetching(false));
  }, [episodes]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <PopupEpisodesContainer>
      <Text>Participated in episodes:</Text>

      <StyledPopupEpisodes _length={series.length}>
        {series?.map(({ id, name, episode }) => (
          <Episode key={id} _length={series.length}>
            <EpisodeMarking>
              {episode
                .replace(/S0?(\d+)/, 'Season $1 - ')
                .replace(/E0?(\d+)/, 'Ep. $1')}
            </EpisodeMarking>
            {name}
          </Episode>
        ))}
      </StyledPopupEpisodes>
    </PopupEpisodesContainer>
  );
}

// Добавила сброс isFetching после запроса через finally
// Без finally, если запрос завершится с ошибкой, isFetching останется true, и компонент зависнет на лоадере

// Обработала вариант одного эпизода через Array.isArray
// чтобы map() не ломался если передан один эпизод

// Вынесла стили в отдельный файл
