import { CardImg, CardInfo, StyledCard } from './Card.styled';
import { CardStatus } from './CardStatus';
import { CardTitle } from './CardTitle';

export function Card({
  status,
  name,
  species,
  type,
  gender,
  image,
  onClickHandler
}) {
  return (
    <StyledCard onClick={onClickHandler}>
      <CardImg src={image} alt={name} />
      <CardInfo>
        <CardTitle name={name} gender={gender} />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </StyledCard>
  );
}

// Стили вынесены в отдельный файл
// CardTitle и CardStatus вынесены в отдельные файлы
