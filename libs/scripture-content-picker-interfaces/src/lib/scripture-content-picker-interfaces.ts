export function scriptureContentPickerInterfaces(): string {
  return 'scripture-content-picker-interfaces';
}

export type ScriptureContentSrcType = 'fs' | 'url';
export type ScriptureContent = {
  description: string;
  language: string;
  src: {
    type: ScriptureContentSrcType;
    path?: string;
    url?: string;
  },
  books: string[];
}

export type ScriptureContentTitle = string;
export type ScriptureContentGroup = Record<ScriptureContentTitle, ScriptureContent>;

export type ScriptureContentType = string;
export type ScriptureSource = Record<ScriptureContentType, ScriptureContentGroup>;
