import * as vscode from "vscode";

export function createWebview() {
  const panel = vscode.window.createWebviewPanel("catCoding", "Cat Coding", vscode.ViewColumn.One);
}
