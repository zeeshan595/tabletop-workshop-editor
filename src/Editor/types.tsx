export interface CustomUiAsset {
    Name: string;
    URL: string;
}

export interface Color {
    b: number;
    g: number;
    r: number;
}
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface Grid {
    BothSnapping: boolean;
    Color: Color;
    Lines: boolean;
    Offset: boolean;
    Opacity: number;
    PosOffset: Vector3;
    Snapping: boolean;
    TickLines: boolean;
    Type: number;
    xSize: number;
    ySize: number;
}

export interface Hands {
    DisableUnused: boolean;
    Enable: boolean;
    Hiding: number;
}

export interface Lighting {
    AmbientEquatorColor: Color;
    AmbientGroundColor: Color;
    AmbientIntensity: number;
    AmbientSkyColor: Color;
    AmbientType: number;
    LightColor: Color;
    LightIntensity: number;
    LutContribution: number;
    LutIndex: number;
    LutURL: string;
    ReflectionIntensity: number;
}

export interface AssetBundle {
    AssetbundleSecondaryURL: string;
    AssetbundleURL: string;
    LoopingEffectIndex: number;
    MaterialIndex: number;
    TypeIndex: number;
}

export interface MaterialPhysics {
    BounceCombine: number;
    Bounciness: number;
    DynamicFriction: number;
    FrictionCombine: number;
    StaticFriction: number;
}

export interface Rigidbody {
    AngularDrag: number;
    Drag: number;
    Mass: number;
    UseGravity: number;
}

export interface Transform {
    posX: number;
    posY: number;
    posZ: number;
    rotX: number;
    rotY: number;
    rotZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
}

export interface ObjectState {
    Autoraise: boolean;
    ColorDiffuse: Color;
    CustomAssetBundle: AssetBundle;
    Description: string;
    DragSelectable: boolean;
    GMNotes: string;
    Grid: boolean;
    GridProjection: boolean;
    GUID: string;
    Hands: boolean;
    HideWhenFaceDown: boolean;
    IgnoreFoW: boolean;
    Locked: boolean;
    LuaScript: string;
    LuaScriptState: string;
    MeasureMovement: boolean;
    Name: string;
    Nickname: string;
    PhysicalMaterial: MaterialPhysics;
    Rigidbody: Rigidbody;
    Snap: boolean;
    Sticky: boolean;
    Tooltip: boolean;
    Transform: Transform;
    XmlUI: string;
}

export interface SnapPoint {
    Position: Vector3;
}

export interface TableState {
    body: string;
    color: string;
    id: number;
    title: string;
    visibleColor: Color;
}

export interface Turn {
    DisableInteractions: boolean;
    Enable: boolean;
    PassTurn: boolean;
    Reverse: boolean;
    SkipEmpty: boolean;
    TurnColor: string;
    TurnOrder: unknown[];
}

export interface VectorLine {
    color: Color;
    points3: Vector3[];
    thickness: number;
}

export interface TableTopWorkshop {
    CustomUIAssets: CustomUiAsset[];
    Date: string;
    DecalPallet: unknown[];
    GameComplexity: string;
    GameMode: string;
    GameType: string;
    Gravity: number;
    Grid: Grid;
    Hands: unknown;
    Lighting: Lighting;
    LuaScript: string;
    LuaScriptState: string;
    MusicPlayer: unknown;
    Note: string;
    ObjectStates: ObjectState[];
    PlayArea: number;
    PlayerCounts: number[];
    PlayingTime: number[];
    Rules: string;
    SaveName: string;
    Sky: string;
    SkyURL: string;
    SnapPoints: SnapPoint[];
    Table: string;
    TabStates: TableState[];
    Tags: unknown[];
    Turns: Turn;
    VectorLines: VectorLine[];
    VersionNumber: string;
    XmlUI: string;
}