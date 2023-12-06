import { useState } from 'react';

import {
  ScriptureSource,
  ScriptureContentType,
  ScriptureContentGroup,
} from '@diegesis-rcl/scripture-content-picker-interfaces';
import {
  ScriptureContentTypeMenu,
  ScriptureContentList,
} from '@diegesis-rcl/shared-ui';
import styles from './scripture-content-picker-config.module.css';
import AddIcon from './add-icon';

/* eslint-disable-next-line */
export interface ScriptureContentPickerConfigProps {
  source: ScriptureSource;
}

export function ScriptureContentPickerConfig({
  source,
}: ScriptureContentPickerConfigProps) {
  const contentTypes = Object.keys(source);
  const [contentType, setContentType] = useState<ScriptureContentType>();
  const scriptureContentGroup: ScriptureContentGroup = contentType
    ? source[contentType]
    : {};

  return (
    <div className={styles['container']}>
      <ScriptureContentTypeMenu
        items={contentTypes}
        onSelectMenuItem={setContentType}
        selectedItem={contentType}
      />
      <div className={styles['list-wrap']}>
        <ScriptureContentList group={scriptureContentGroup} />
        <div className={styles['btn-wrap']}>
          <AddIcon />
        </div>
      </div>
    </div>
  );
}

export default ScriptureContentPickerConfig;
