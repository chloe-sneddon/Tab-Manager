// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tab-manager" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('tab-manager.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Welcome to Tab Manager!');
		var panel = vscode.window.createWebviewPanel(
			'tab-manager',
			'Visual Studio Tab Manager Extension',
			vscode.ViewColumn.One,
			{}
		);
		panel.webview.html = getWebviewContent();

		panel.webview.onDidReceiveMessage(message=>{
			switch(message.command){  
				case 'alert':
					vscode.window.showInformationMessage(message.text);
					return;
			}
		});
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(){
	return `<!DOCTYPE html>
		<html>
		<head>
		<title>Visual Studio Tab Manager Extension By Chloe Sneddon/Petersen</title>
		</head>
		<body>
			<h1>Features</h1>
			<p>
				<ul> 
					<li> Perminate Tabs on left side bar.
					<li> If double clicked that group appears in your above tab bar
					<li> Branch Specific Tabs appear on top tab bar
					<li> there is an option to click save branch tabs to perminate tabs (asks you what you would like to call this group)
					<li> you can name groups kinda like how you can organize postman api calls.
				</ul>
			</p>
			<input type = "Call extension.js" value="Call extension.js" onclick="vscode.postMessage({command: 'alert', text: 'hello from the webview'});"/>
		</body>
		</html>`;
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
