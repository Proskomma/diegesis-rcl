// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import { ScriptureContentPickerConfig } from '@diegesis-rcl/scripture-content-picker-config';
import { ScriptureContentPicker } from '@diegesis-rcl/scripture-content-picker';

import {
  ScriptureSource,
  ScriptureContentDetail,
  ScriptureContentPickerError,
  ScriptureSourceContent,
} from '@diegesis-rcl/scripture-content-picker-interfaces';

const defaultSource: ScriptureSource = {
  bible: {
    'my-en-bible': {
      description: 'An English Bible I am translating myself',
      language: 'en',
      src: {
        type: 'fs',
        path: '/home/user/Documents/Proskomma/test.txt',
      },
      books: ['GEN', 'EXO', 'LEV'],
    },
    'another-bible': {
      description: 'A French Bible I am plagiarizing',
      language: 'fr',
      src: {
        type: 'url',
        url: 'https://git.door43.org/unfoldingWord/en_ult/raw/branch/master/03-LEV.usfm',
      },
      books: ['MRK'],
    },
    'pi-bible': {
      description: 'A French Bible I am plagiarizing',
      language: 'fr',
      src: {
        type: 'url',
        url: 'https://www.xenizo.fr/leur_bible_afeswx',
      },
      books: ['MRK'],
    },
  },
  tNotes: {},
  OBS: {},
  'OBS-TN': {},
};

export function App() {
  const [source, setSource] = useState<ScriptureSource>(defaultSource);
  const [sourceContent, setSourceContent] = useState<ScriptureSourceContent>(
    {}
  );

  const handleSelect = (
    content: ScriptureContentDetail,
    error: ScriptureContentPickerError
  ) => {
    if (!error) {
      setSourceContent((prev) => {
        return {
          ...prev,
          [content.contentType]: {
            ...prev[content.contentType],
            [content.localLabel]: content.data,
          },
        };
      });
    } else {
      console.error('got error while fetching==>', error);
    }
  };

  useEffect(() => {
    console.log('useffect sourceContent==>', sourceContent);
  }, [sourceContent]);

  useEffect(() => {
    console.log('useeffect source==>', source);
  }, [source])

  return (
    <div>
      <div>
        <h4>ScriptureContentPickerConfig</h4>
        <div className={styles['picker-config-container']}>
          <ScriptureContentPickerConfig source={source} setSource={setSource} />
        </div>
      </div>
      <div>
        <h4>ScriptureContentPicker</h4>
        <div className={styles['picker-container']}>
          <ScriptureContentPicker source={source} onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
