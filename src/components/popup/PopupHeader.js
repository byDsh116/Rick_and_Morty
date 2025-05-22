import {
  PopupHeaderContainer,
  PopupImage,
  PopupStatus,
  PopupTitle
} from './Popup.styled';

export function PopupHeader({ image, name, gender, status, species, type }) {
  return (
    <PopupHeaderContainer>
      <PopupImage src={image?.replace('../', '')} alt={name} />
      <PopupTitle name={name} gender={gender} />
      <PopupStatus status={status} species={species} type={type} />
    </PopupHeaderContainer>
  );
}

// Вынесла стили
