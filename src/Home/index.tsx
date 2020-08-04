import * as React from "react";
import { Link } from "react-router-dom";

const folders = ["Saves", "Workshop"];

export class Home extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        {folders.map((folder, index) => (
          <Link key={index} to={`/directory/${encodeURIComponent(folder)}`}>
            <button>{folder}</button>
          </Link>
        ))}
      </div>
    );
  }
}
