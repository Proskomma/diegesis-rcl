// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';

import { ScriptureContentPickerConfig } from '@diegesis-rcl/ScriptureConentPickerConfig';
import { ScriptureSource } from '@diegesis-rcl/scripture-content-picker-interfaces';

import NxWelcome from './nx-welcome';

const defaultSource: ScriptureSource = {
  bible: {
    'my-en-bible': {
      description: 'An English Bible I am translating myself',
      language: 'en',
      src: {
        type: 'fs',
        path: '/home/mark/Documents/bibles/myBible2469/',
      },
      books: ['GEN', 'EXO', 'LEV'],
    },
    'another-bible': {
      description: 'A French Bible I am plagiarizing',
      language: 'fr',
      src: {
        type: 'url',
        url: 'https://www.xenizo.fr/leur_bible_afeswx',
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

  return (
    <div className={styles['picker-config-container']}>
      <ScriptureContentPickerConfig source={source} />
      {/* <NxWelcome title="bouquet-picker" /> */}
    </div>
  );
}

export default App;
