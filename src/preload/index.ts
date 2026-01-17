import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message-from-ui', message),
  onUpdate: (callback: (event: any, value: string) => void) => 
    ipcRenderer.on('update-data', callback),
});