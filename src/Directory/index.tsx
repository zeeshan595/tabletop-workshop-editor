import * as React from "react";
import * as fs from "fs";
import { Link } from "react-router-dom";
import { nativeImage } from "electron";
import "./item.scss";

export interface DirectoryProps {
  match: {
    params: {
      path: string;
    };
  };
}

export interface FileInfo {
  Directory: string;
  Name: string;
  UpdateTime: number;
  Image: string;
}

export class Directory extends React.Component<DirectoryProps> {
  private getInfo(): FileInfo[] {
    let infoPath = "";
    if (this.props.match.params.path === "Saves")
      infoPath = "/SaveFileInfos.json";
    else if (this.props.match.params.path === "Workshop")
      infoPath = "WorkshopFileInfos.json";
    else throw new Error("unknown path selected");

    const rawData = fs.readFileSync(`${this.getPath()}/${infoPath}`, {
      encoding: "utf8",
    });
    const data: FileInfo[] = JSON.parse(rawData);
    data.forEach((data) => {
      data.Image = data.Directory.substr(0, data.Directory.length - 4) + "png";
    });
    return data;
  }

  private getPath(): string {
    let dir = "";
    if (this.props.match.params.path === "Saves") dir = "/Saves";
    else if (this.props.match.params.path === "Workshop")
      dir = "/Mods/Workshop";
    else throw new Error("unknown path selected");

    if (process.platform == "win32")
      return `${process.env["USERPROFILE"]}/Documents/My Games/Tabletop Simulator${dir}`;
    else return `${process.env["HOME"]}/.local/share/Tabletop Simulator${dir}`;
  }

  render(): JSX.Element {
    const infos = this.getInfo();
    return (
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
        <div>
          {infos.map((info, index) => {
            const img = nativeImage.createFromPath(info.Image);
            return (
              <Link
                key={index}
                to={`/editor/${encodeURIComponent(info.Directory)}`}
              >
                <div
                  className="item"
                  style={{ backgroundImage: `url('${img.toDataURL()}')` }}
                >
                  <span className="name">{info.Name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
