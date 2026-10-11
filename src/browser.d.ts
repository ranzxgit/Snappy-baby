interface SaveFilePickerOptions {
  suggestedName: string;
  types: Array<{
    description: string;
    accept: Record<string, string[]>;
  }>;
}

interface SaveFileWritable {
  write(data: Blob): Promise<void>;
  close(): Promise<void>;
}

interface SaveFileHandle {
  createWritable(): Promise<SaveFileWritable>;
}

interface Window {
  webkitAudioContext?: typeof AudioContext;
  showSaveFilePicker?: (options: SaveFilePickerOptions) => Promise<SaveFileHandle>;
}
