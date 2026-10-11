export type Filter =
  | 'original'
  | 'bw'
  | 'vintage'
  | 'warm'
  | 'cool'
  | 'soft'
  | 'rose'
  | 'film'
  | 'fade'
  | 'crisp'
  | 'lavender'
  | 'golden'
  | 'matte'
  | 'sepia'
  | 'dreamy'
  | 'y2k'
  | 'noir'
  | 'glow'
  | 'peach';

export type ThemeName =
  | 'classic'
  | 'midnight'
  | 'pastel'
  | 'birthday'
  | 'graduation'
  | 'wedding'
  | 'halloween'
  | 'christmas'
  | 'minimal'
  | 'cream'
  | 'lavender'
  | 'sky'
  | 'film'
  | 'vintage'
  | 'valentines';

export type ScreenName = 'home' | 'loading' | 'booth' | 'result';

export type CameraFacing = 'user' | 'environment';

export type LayoutName = 'portrait' | 'strip' | 'grid' | 'wide' | 'film' | 'mosaic';

export type DesignStyle = 'none' | 'sparkles' | 'hearts' | 'flowers';

export type Sticker = {
  emoji: string;
  x: number;
  y: number;
  size: number;
};

export type ThemeInfo = {
  name: string;
  title: string;
  color: string;
  ink: string;
  accent: string;
  decoration: string;
};

export type PhotoBox = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type LayoutGeometry = {
  w: number;
  h: number;
  boxes: PhotoBox[];
};

export type PortraitFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
  photoWidth: number;
  photoHeight: number;
  gap: number;
  padding: number;
  stackHeight: number;
};

export type PhotoStrip = {
  photos: string[];
  theme: ThemeName;
  filter: Filter;
  capturedAt: Date;
};
