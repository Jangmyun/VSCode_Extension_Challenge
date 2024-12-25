// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { executeCommand } from "./util";

// 익스텐션 활성화될 때 호출되는 메서드
// 명령어 처음 실행할 때 활성화 됨
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "extensionchallenge" is now active!');

  // 명령어는 package.json에 정의됨
  // registerCommand를 통해 command의 구현 제공
  // commandId 파라미터는 package.json에 정의된 command field와 일치해야 한다.

  const helloWorld = vscode.commands.registerCommand("extensionchallenge.helloWorld", () => {
    // registerCommand의 두번째 파라미터(콜백함수)는 command가 실행될때마다 실행됨
    // 메시지 박스를 유저에게 보여줌
    vscode.window.showInformationMessage("Hello World from extensionChallenge!");
    vscode.window.showInputBox({
      placeHolder: "Password",
      prompt: "This is Prompt",
      title: "Title",
      ignoreFocusOut: true,
    });
  });

  const askQuestion = vscode.commands.registerCommand("extensionchallenge.askQuestion", async () => {
    const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad");

    if (answer === "good") {
      vscode.window.showOpenDialog();
    } else {
      console.log({ answer });
    }
  });

  context.subscriptions.push(helloWorld, askQuestion);
}

// This method is called when your extension is deactivated
export function deactivate() {}
