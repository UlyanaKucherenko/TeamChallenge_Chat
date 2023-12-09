import { forwardRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './index.module.css';
import { Room } from '../../../utils/types/rooms.type';
import { IconClose } from '../../icons/IconClose';
import { RoomDetailsUserList } from './RoomDetailsUserList';
import { RButtonIcon } from '../../ui/RButtonIcon';

type Props = {
  onClose: () => void;
};

export type Ref = HTMLDivElement;

export const RoomDetails = forwardRef<Ref, Props>(({ onClose }, ref) => {
  const room = useLoaderData() as Room;
  return (
    <div className={styles.roomDetails} ref={ref}>
      <RButtonIcon
        className={styles.close}
        icon={IconClose}
        type="button"
        aria-label="close"
        onClick={onClose}
      />
      {!room && <p>No data</p>}
      {room && (
        <>
          <h2 className={styles.roomTitle}>{room.title}</h2>
          <div className={styles.roomCreatedAt}>
            {new Date(room.createdAt).toLocaleDateString('uk-UA')}
          </div>
          <div className={styles.roomDescription}>{room.description}</div>
          <div className={styles.members}>
            <div className={styles.membersTitle}>Members</div>
            <RoomDetailsUserList owner={room.owner} members={room.users} />
          </div>
        </>
      )}
    </div>
  );
});