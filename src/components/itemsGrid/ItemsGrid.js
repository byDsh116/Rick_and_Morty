import { useState } from 'react';
import { Popup } from '../popup';
import { useData } from '../providers';
import { Card } from '../card/Card';
import { Container } from './ItemsGrid.styled';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  function cardOnClickHandler(props) {
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props) => (
        <Card
          key={props.id}
          onClickHandler={() => cardOnClickHandler(props)}
          {...props}
        />
      ))}

      <Popup settings={popupSettings} setSettings={setPopupSettings} />
    </Container>
  );
}

// Перенесла стили в отдельный файл
// Сменила ключ, теперь не по индексу, а по айдишке - так надежнее
