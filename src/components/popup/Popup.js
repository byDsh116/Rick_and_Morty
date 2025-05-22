import { useEffect, useCallback } from 'react';
import { PopupEpisodes } from './PopupEpisodes';
import { PopupHeader } from './PopupHeader';
import { PopupInfo } from './PopupInfo';
import { CloseIcon, PopupContainer, StyledPopup } from './Popup.styled';

export function Popup({ settings: { visible, content = {} }, setSettings }) {
  const handleClose = useCallback(() => {
    setSettings((prev) => ({
      ...prev,
      visible: false
    }));
  }, [setSettings]);
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    if (visible) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [visible, handleClose]);

  if (!visible) return null;

  return (
    <PopupContainer visible={visible} onClick={handleOverlayClick}>
      <StyledPopup>
        <CloseIcon onClick={handleClose} />

        <PopupHeader
          name={content.name}
          gender={content.gender}
          image={content.image}
          status={content.status}
          species={content.species}
          type={content.type}
        />

        <PopupInfo origin={content.origin} location={content.location} />
        <PopupEpisodes episodes={content.episode} />
      </StyledPopup>
    </PopupContainer>
  );
}

// Поменяла тогл на функцию
// Оптимизация за счет useCallback и очистки эффектов
// Вынесла стили в отдельный файл
// Добавила закрытие по Escape и клик вне попапа
