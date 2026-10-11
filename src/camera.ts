import type { CameraFacing } from './types';

export function requestCameraStream(facing: CameraFacing): Promise<MediaStream> {
  if (!navigator.mediaDevices?.getUserMedia) {
    return Promise.reject(new Error('Camera access is not available in this browser.'));
  }

  return navigator.mediaDevices.getUserMedia({
    video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 1600 } },
    audio: false,
  });
}

export function stopCameraStream(stream: MediaStream | null): void {
  stream?.getTracks().forEach((track) => track.stop());
}

export function waitForVideoReady(video: HTMLVideoElement, stream: MediaStream): Promise<void> {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.videoWidth) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const finish = (error?: Error): void => {
      video.removeEventListener('loadeddata', onReady);
      video.removeEventListener('error', onError);
      stream.removeEventListener('inactive', onInactive);
      if (error) reject(error);
      else resolve();
    };
    const onReady = (): void => finish();
    const onError = (): void => finish(new Error('The camera video could not be started.'));
    const onInactive = (): void => finish(new Error('The camera stopped before it was ready.'));

    video.addEventListener('loadeddata', onReady, { once: true });
    video.addEventListener('error', onError, { once: true });
    stream.addEventListener('inactive', onInactive, { once: true });
  });
}

export async function playCameraStream(
  video: HTMLVideoElement,
  stream: MediaStream,
  facing: CameraFacing,
): Promise<void> {
  video.srcObject = stream;
  video.classList.remove('hidden');
  video.classList.toggle('rear', facing === 'environment');
  await video.play();
  await waitForVideoReady(video, stream);
}
