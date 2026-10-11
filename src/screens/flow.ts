import type { ScreenName } from '../types';

const screenElements: Record<ScreenName, HTMLElement> = {
  home: requireElement('#welcomeScreen'),
  loading: requireElement('#loadingScreen'),
  booth: requireElement('#boothApp'),
  result: requireElement('#previewModal'),
};

function requireElement(selector: string): HTMLElement {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    throw new Error(`Required screen element not found: ${selector}`);
  }
  return element;
}

export function setScreenVisibility(screen: ScreenName, visible: boolean): void {
  const element = screenElements[screen];
  element.classList.toggle('hidden', !visible);
  element.setAttribute('aria-hidden', String(!visible));
}
