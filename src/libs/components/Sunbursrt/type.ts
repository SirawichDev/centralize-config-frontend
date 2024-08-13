export interface TSunbursrtChart {
  data: Array<TSunbursrtChart>;
  layout?: MOCK_SUNBURST_LAYOUT;
}

export interface MOCK_SUNBURST_LAYOUT {
  margin: Margin;
  width: number;
  height: number;
}

export interface Margin {
  l: number;
  r: number;
  b: number;
  t: number;
}

export interface TData {
  type: string;
  labels: string[];
  parents: string[];
  values: number[];
  outsidetextfont: Outsidetextfont;
  leaf: Leaf;
  marker: Marker;
}

export interface Outsidetextfont {
  size: number;
  color: string;
}

export interface Leaf {
  opacity: number;
}

export interface Marker {
  line: Line;
}

export interface Line {
  width: number;
}
