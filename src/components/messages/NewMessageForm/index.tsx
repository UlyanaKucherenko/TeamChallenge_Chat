import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './index.module.css';
import { IconSend } from '../../icons/IconSend';
import { RButtonIcon } from '../../ui/RButtonIcon';

type Props = {
  value: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  userTypingData: string;
  roomType: string;
  errorValid?: boolean;
};

export const NewMessageForm = ({
  value,
  onSubmit,
  onChange,
  onKeyDown,
  userTypingData,
  roomType,
  errorValid,
}: Props) => {
  const { t } = useTranslation();
  return (
    <form className={styles.messageForm} onSubmit={onSubmit}>
      {userTypingData && roomType === 'public' && (
        <div className={styles.textUsersTyping}>Smb is typing...</div>
      )}
      {userTypingData && roomType === 'private' && (
        <div className={styles.textUsersTyping}>Typing...</div>
      )}

      <div className={styles.formWrap}>
        <TextareaAutosize
          onKeyDown={onKeyDown}
          maxRows={3}
          className={`${styles.messageInput} ${
            errorValid ? styles.inputError : ''
          }`}
          placeholder={t('chat.placeholder')}
          onChange={onChange}
          value={value}
          maxLength={1000}
        />
        <RButtonIcon icon={IconSend} type="submit" className={styles.send} />

        {errorValid && (
          <div className={styles.textValidError}>
            Input error, too many characters
          </div>
        )}
      </div>
    </form>
  );
};
