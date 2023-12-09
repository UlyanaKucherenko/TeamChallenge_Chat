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
};

export const NewMessageForm = ({
  value,
  onSubmit,
  onChange,
  onKeyDown,
  userTypingData,
}: Props) => {
  const { t } = useTranslation();
  return (
    <form className={styles.messageForm} onSubmit={onSubmit}>
      {userTypingData && (
        <div className={styles.textUsersTyping}>Smb is typing...</div>
      )}

      <div className={styles.formWrap}>
        <TextareaAutosize
          onKeyDown={onKeyDown}
          maxRows={3}
          className={styles.messageInput}
          placeholder={t('chat.placeholder')}
          onChange={onChange}
          value={value}
          maxLength={1000}
        />
        <RButtonIcon icon={IconSend} type="submit" className={styles.send} />
      </div>
    </form>
  );
};
