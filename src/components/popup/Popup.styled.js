import styled, { css } from 'styled-components';
import { CardStatus } from '../card/CardStatus';
import { CardTitle } from '../card/CardTitle';

export const PopupContainer = styled.div`
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const StyledPopup = styled.div`
  position: relative;
  background: #263750;
  border-radius: 15px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  border: 2px solid #83bf46;
  margin: 20px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #fff;
    left: 3px;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const PopupEpisodesContainer = styled.div``;

export const StyledPopupEpisodes = styled.div`
  display: flex;
  flex-direction: column;

  ${({ _length }) =>
    _length > 20 &&
    css`
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(
        ${window.screen.width < 600 ? _length : Math.ceil(_length / 2)},
        1fr
      );

      & p {
        width: 95%;
        border-bottom: 2px solid #eee;
      }

      & span {
        margin-bottom: ${window.screen.width < 600 ? '10px' : 0};
      }
    `};

  ${window.screen.width < 600 && 'grid-template-columns: 1fr'};
`;

export const Episode = styled.p`
  width: 100%;
  display: grid;
  align-items: center;
  padding: 10px 0;
`;

export const EpisodeMarking = styled.span`
  margin-bottom: 8px;
  color: #83bf46;
`;

export const PopupHeaderContainer = styled.div``;

export const PopupTitle = styled(CardTitle)`
  font-size: 22px;
  margin-top: 30px;
  justify-content: center;
`;

export const PopupStatus = styled(CardStatus)`
  font-size: 20px;
  justify-content: center;

  & p {
    text-align: center;
    margin-top: 10px;
  }
`;

export const PopupImage = styled.img`
  display: block;
  border-radius: 5px;
  margin: 0 auto;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
`;

export const StyledPopupInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PopupOrigin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: 48%;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const PopupLastLocation = styled(PopupOrigin)``;

export const PopupOriginValue = styled.p`
  color: #83bf46;
`;

export const PopupLastLocationValue = styled(PopupOriginValue)``;
