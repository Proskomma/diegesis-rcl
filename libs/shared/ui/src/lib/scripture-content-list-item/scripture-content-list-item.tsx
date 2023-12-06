// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './scripture-content-list-item.module.css';

import { Tag } from '../tag/tag';
import DeleteIcon from './delete-icon';
import EditIcon from './edit-icon';

import type {
  ScriptureContentTitle,
  ScriptureContent,
} from '@diegesis-rcl/scripture-content-picker-interfaces';

export interface ScriptureContentListItemProps {
  title: ScriptureContentTitle;
  content: ScriptureContent;
}

export function ScriptureContentListItem({
  title,
  content,
}: ScriptureContentListItemProps) {
  const {
    description,
    books,
    src: { url, path },
  } = content;

  return (
    <div className={styles['container']}>
      <div className={styles['labels']}>
        <p className={styles['title']}>{title}</p>
        <p>{description}</p>
        <p>
          {books.map((book) => (
            <Tag color="#cbc3e3" key={book}>
              {book}
            </Tag>
          ))}
        </p>
        {path && <p>Local FS: {path}</p>}
        {url && <p>URL: {url}</p>}
      </div>
      <div className={styles['btn-group']}>
        <DeleteIcon />
        <EditIcon />
      </div>
    </div>
  );
}

export default ScriptureContentListItem;
