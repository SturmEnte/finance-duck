const { app, BrowserWindow } = require("electron");

let mainWindow;

app.whenReady().then(() => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: false,
		autoHideMenuBar: true,
		title: "Finance Duck",
	});

	mainWindow.loadFile("frontend/index.html");
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
