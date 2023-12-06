import { useState, useContext } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './scripture-content-list-item.module.css';

import { Tag } from '../tag/tag';
import { Spinner } from '../spinner/spinner';
import DeleteIcon from './delete-icon';
import EditIcon from './edit-icon';

import type {
  ScriptureContentMetaExcludeTypeInfo,
  ScriptureContentType,
} from '@diegesis-rcl/scripture-content-picker-interfaces';

import { ScriptureContentEditModal } from '../scripture-content-edit-modal/scripture-content-edit-modal';
import {
  ContentContext,
  ScriptureSourceContext,
  ComponentTypeContext,
} from '../../contexts/scripture-content-picker-context';

import { useScriptureReader } from '../../hooks/scripture-reader-hook';

export interface ScriptureContentListItemProps {
  content: ScriptureContentMetaExcludeTypeInfo;
}

export function ScriptureContentListItem({
  content,
}: ScriptureContentListItemProps) {
  const { contentType } = useContext(ContentContext);
  const { removeContent } = useContext(ScriptureSourceContext);
  const componentType = useContext(ComponentTypeContext);

  const { loading, fetch } = useScriptureReader({
    ...content,
    contentType: contentType as ScriptureContentType,
  });

  const {
    description,
    language,
    books,
    src: { url, path },
  } = content;

  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    if (componentType === 'config') return;
    await fetch();
  };

  return (
    <div className={styles['container']} onClick={handleClick}>
      <div className={styles['labels']}>
        <p className={styles['local-label']}>{content.localLabel}</p>
        <p>
          {description} &#40; {language} &#41;
        </p>
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
      {componentType === 'config' && (
        <div className={styles['btn-group']}>
          <span
            onClick={() => {
              removeContent &&
                removeContent(
                  contentType as ScriptureContentType,
                  content.localLabel
                );
            }}
          >
            <DeleteIcon />
          </span>
          <span
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <EditIcon />
          </span>
        </div>
      )}

      <ScriptureContentEditModal
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        initialState={{ ...content }}
      />
      <Spinner show={loading} />
    </div>
  );
}

export default ScriptureContentListItem;
