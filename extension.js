// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var beautify = require('./src/index');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    /**
     * format all code
     */
    var format = vscode.commands.registerTextEditorCommand('vueBeautify.format', function (textEditor) {
        // only for language of vue
        if (textEditor.document.languageId !== 'vue' || !/\.vue$/i.test(textEditor.document.fileName)) {
            return;
        }

        // textEditor option
        var editorInsertSpace = textEditor.options.insertSpaces;
        var editorTabSize = textEditor.options.tabSize;

        // editor text
        var text = textEditor.document.getText();

        // beautify code
        var code = beautify(text, !editorInsertSpace, editorTabSize);

        // edit
        textEditor.edit(function (editBuilder) {
            var document = textEditor.document;
            var lastLine = document.lineAt(document.lineCount - 1);
            var start = new vscode.Position(0, 0);
            var end = new vscode.Position(document.lineCount - 1, lastLine.text.length);
            var range = new vscode.Range(start, end);
            editBuilder.replace(range, code);
        });

    });

    /**
     * format vue template attribute
     */
    var formatAttribute = vscode.commands.registerTextEditorCommand('vueBeautify.formatAttribute', function (textEditor) {
        // get selection range
        var start = textEditor.selection.start;
        var end = textEditor.selection.end;
        var range = new vscode.Range(start, end);

        // selection text
        var text = textEditor.document.getText(range);

    });

    context.subscriptions.push(format, formatAttribute);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;