import React, { useState, useContext } from 'react';

import {
  ScriptureContentSrcType,
  ScriptureContentMetaExcludeTypeInfo,
} from '@diegesis-rcl/scripture-content-picker-interfaces';
import styles from './scripture-content-edit-modal.module.css';
import Modal from 'react-modal';
import {
  ContentContext,
  ScriptureSourceContext,
} from '../../contexts/scripture-content-picker-context';

/* eslint-disable-next-line */
export interface ScriptureContentEditModalProps {
  initialState: ScriptureContentMetaExcludeTypeInfo;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ScriptureContentEditModal({
  initialState,
  isOpen,
  setIsOpen,
}: ScriptureContentEditModalProps) {
  const { contentType } = useContext(ContentContext);
  const { addContent } = useContext(ScriptureSourceContext);
  const [scriptureContent, setScriptureContent] =
    useState<ScriptureContentMetaExcludeTypeInfo>(initialState);

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    if (event.target.name === 'type') {
      setScriptureContent((prev) => ({
        ...prev,
        src: {
          type: event.target.value as ScriptureContentSrcType,
        },
      }));
    } else if (event.target.name === 'source') {
      setScriptureContent((prev) => ({
        ...prev,
        src: {
          type: prev.src.type as ScriptureContentSrcType,
          path: prev.src.type === 'fs' ? event.target.value : undefined,
          url: prev.src.type === 'url' ? event.target.value : undefined,
        },
      }));
    } else {
      setScriptureContent((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!contentType) return;
    addContent &&
      addContent({ ...scriptureContent, contentType }, initialState);
    setScriptureContent(initialState);
    closeModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add content"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className={styles['form_content_wrap']}>
          <div className={styles['form_content_inputs']}>
            <div>
              <div>
                <label>Local Label:</label>
              </div>
              <div>
                <input
                  type="text"
                  name="localLabel"
                  required
                  value={scriptureContent.localLabel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Description:</label>
              </div>
              <div>
                <textarea
                  name="description"
                  rows={3}
                  value={scriptureContent.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Language:</label>
              </div>
              <div>
                <input
                  type="text"
                  name="language"
                  required
                  value={scriptureContent.language}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label>SourceType:</label>
              </div>
              <div>
                <select
                  name="type"
                  value={scriptureContent.src.type}
                  onChange={handleChange}
                >
                  <option value="fs">FS</option>
                  <option value="url">URL</option>
                </select>
              </div>
            </div>
            <div>
              <div>
                <label>Source:</label>
              </div>
              <div>
                <input
                  type="text"
                  name="source"
                  value={
                    (scriptureContent.src.type === 'fs'
                      ? scriptureContent.src.path
                      : scriptureContent.src.url) || ''
                  }
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles['form_content_btn-wrap']}>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default ScriptureContentEditModal;
