export interface ApparelItem {
  id: string;
  name: string;
  price: number;
  type: 'HOODIE' | 'TSHIRT' | 'JACKET' | 'PANT';
  imageUrl: string;
  soldOut?: boolean;
}

export type AccentColor = 'red' | 'blue' | 'green' | 'orange' | 'purple';
export type FontFamily = 'mono' | 'sans' | 'serif';
export type BackgroundMode = 'grunge' | 'noise' | 'clean';

export interface ThemeSettings {
  invertColors: boolean;
  showGrid: boolean;
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  accentColor: AccentColor;
  fontFamily: FontFamily;
  backgroundMode: BackgroundMode;
}

export enum GeneratorState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  COMPLETE = 'COMPLETE',
  ERROR = 'ERROR'
}

export interface SketchRequest {
  animal1: string;
  animal2: string;
  intensity: number;
}
