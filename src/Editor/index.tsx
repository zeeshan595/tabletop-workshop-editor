import * as React from "react";
import * as fs from "fs";
import MonacoEditor from "react-monaco-editor";
import "./style.scss";

export interface EditorProps {
  match: {
    params: {
      path: string;
    };
  };
}

export interface EditorState {
  currentContext: any;
  currentlyActive: string;
}

export class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentContext: this.loadJson(),
      currentlyActive: "",
    };
    window.onresize = () => {
      const container = document.getElementsByClassName(
        "react-monaco-editor-container"
      ) as HTMLCollectionOf<HTMLElement>;
      if (container.length > 0) {
        container[0].style.height = `calc(${window.innerHeight}px - 100px)`;
        const editor = container[0].getElementsByClassName(
          "monaco-editor"
        ) as HTMLCollectionOf<HTMLElement>;
        if (editor.length > 0) {
          editor[0].style.height = `calc(${window.innerHeight}px - 100px)`;
          const guard = editor[0].getElementsByClassName(
            "overflow-guard"
          ) as HTMLCollectionOf<HTMLElement>;
          if (guard.length > 0) {
            guard[0].style.height = `calc(${window.innerHeight}px - 100px)`;
            const scrollable = guard[0].getElementsByClassName(
              "monaco-scrollable-element"
            ) as HTMLCollectionOf<HTMLElement>;
            if (scrollable.length > 0) {
              scrollable[0].style.height = `calc(${window.innerHeight}px - 100px)`;
            }
          }
        }
      }
    };
  }

  private getDirectory() {
    return decodeURIComponent(this.props.match.params.path);
  }

  private updateContext(key: string) {
    this.setState({
      ...this.state,
      currentlyActive: `${this.state.currentlyActive}/${key}`,
    });
  }

  private getControls(obj: any, key: string, index: number): JSX.Element {
    if (typeof obj === "number") {
      return (
        <div key={index}>
          <input className="numberInput" type="number" defaultValue={obj} />
        </div>
      );
    } else if (typeof obj === "boolean") {
      return (
        <div key={index}>
          {key}:<input type="checkbox" defaultChecked={obj === true} />
        </div>
      );
    } else {
      return (
        <button key={index} onClick={() => this.updateContext(key)}>
          {key}
        </button>
      );
    }
  }

  private backContext() {
    const splitActive = this.state.currentlyActive.split("/");
    if (splitActive.length < 2) return;
    this.setState({
      ...this.state,
      currentlyActive: splitActive.splice(splitActive.length - 1).join("/"),
    });
  }

  private loadJson() {
    const rawJson = fs.readFileSync(this.getDirectory(), {
      encoding: "utf8",
    });
    let data = JSON.parse(rawJson);
    return data;
  }

  render(): JSX.Element {
    let context: any = this.state.currentContext;
    const splitContext = this.state.currentlyActive.split("/");
    splitContext.forEach((s, i) => {
      if (i === 0) return;
      context = context[s];
    });

    let back = <button onClick={() => window.history.back()}>Back</button>;
    if (splitContext.length !== 1) {
      back = <button onClick={() => this.backContext()}>Back</button>;
    }

    let content = Object.keys(context).map((key, index) =>
      this.getControls(context[key], key, index)
    );
    if (typeof context === "string") {
      content = [
        <MonacoEditor
          key="monaco"
          height={`calc(${window.innerHeight}px - 100px)`}
          width="100%"
          theme="vs-dark"
          value={context}
          options={{
            automaticLayout: true,
          }}
        />,
      ];
    }

    return (
      <div className="editor">
        <div>{back}</div>
        {content}
      </div>
    );
  }
}
