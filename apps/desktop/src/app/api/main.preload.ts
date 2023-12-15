import { contextBridge, ipcRenderer } from 'electron';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';


process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,
  readFileSync,
  readFile,
});