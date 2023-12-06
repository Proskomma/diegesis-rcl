// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './scripture-content-list.module.css';
import type {
  ScriptureContentGroup,
  ScriptureContentTitle,
  ScriptureContent,
} from '@diegesis-rcl/scripture-content-picker-interfaces';

import { ScriptureContentListItem } from '../scripture-content-list-item/scripture-content-list-item';

export interface ScriptureContentListProps {
  group: ScriptureContentGroup;
}

export function ScriptureContentList({ group }: ScriptureContentListProps) {
  return (
    <div className={styles['container']}>
      {Object.entries(group).map(
        ([title, content]: [ScriptureContentTitle, ScriptureContent]) => (
          <ScriptureContentListItem
            title={title}
            content={content}
            key={title}
          />
        )
      )}
    </div>
  );
}

export default ScriptureContentList;
