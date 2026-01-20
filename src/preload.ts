const electron = require("electron");

async function getConfig() {
    let config = null;
    const ipcRenderer = electron.ipcRenderer || false;
    if (ipcRenderer) {
        ipcRenderer.on("envReply", (event: any, arg: any) => {
            config = arg.parsed;
            return config.parsed;
        });
        ipcRenderer.send("invokeEnv");
    }
}

getConfig();