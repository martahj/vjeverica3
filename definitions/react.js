// @flow

declare type ReactSyntheticEvent = {
  bubbles: boolean,
  cancelable: boolean,
  currentTarget: DOMEventTarget,
  defaultPrevented: boolean,
  eventPhase: number,
  isTrusted: boolean,
  nativeEvent: DOMEvent,
  preventDefault: () => void,
  isDefaultPrevented: () => boolean,
  stopPropagation: () => void,
  isPropagationStopped: () => boolean,
  target: DOMEventTarget,
  timeStamp: number,
  type: string,
};
