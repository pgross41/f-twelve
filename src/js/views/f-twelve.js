import styles from 'src/css/f-twelve.css';
import Tabs from './tabs';
import Console from './content/console/console';

/**
 * F-Twelve entrypoint
 */
export default function() {
  const el = document.createElement('div');
  const console = new Console();

  let onAttach;
  let onDetach;
  let keyDownStack;
  let contentWrapper;
  let content;
  let attached;
  let active;

  const render = () => {
    el.id = 'f-twelve';
    el.className = styles.fTwelve;
    contentWrapper = document.createElement('div');
    el.appendChild(new Tabs({
      console,
      setContent
    }).render());
    el.appendChild(contentWrapper);
    return el;
  };

  const setContent = (el) => {
    if (content) {
      contentWrapper.removeChild(content);
    }
    if (!el.isSameNode(content)) {
      contentWrapper.appendChild(el);
      content = el;
    } else {
      content = undefined;
    }
  };

  const enable = (show = true) => {
    active = true;
    if (show) {
      attach();
    }
    enableKeyboardTrigger();
    console.overrideWindowConsole();
    console.overrideWindowOnError();
  };

  const disable = () => {
    active = false;
    detach();
    disableKeyboardTrigger();
    console.restoreWindowConsole();
    console.restoreWindowOnError();
  };

  const attach = () => {
    if (attached === true || active !== true) {
      return;
    }
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(el);
    attached = true;
    if (typeof onAttach === 'function') {
      onAttach();
    }
  };

  const detach = () => {
    if (attached !== true) {
      return;
    }
    const attachedEl = document.getElementById(el.id);
    attachedEl.parentNode.removeChild(attachedEl);
    attached = false;
    if (typeof onDetach === 'function') {
      onDetach();
    }
  };

  const onKeyDown = (event) => {
    keyDownStack += event.key;
    if (event.key === 'F12' || keyDownStack.toUpperCase() !== 'F12') {
      return;
    }
    if (attached) {
      detach();
    } else {
      attach();
    }
  };

  const onKeyUp = () => {
    keyDownStack = '';
  };

  const enableKeyboardTrigger = () => {
    keyDownStack = '';
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
  };

  const disableKeyboardTrigger = () => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
  };

  enable(false);
  render();

  return {
    el,
    render,
    setContent,
    enable,
    disable,
    attach,
    detach,
    onKeyDown,
    onKeyUp,
    enableKeyboardTrigger,
    disableKeyboardTrigger,
    getKeyDownStack: () => keyDownStack,
    onAttach: callback => (onAttach = callback),
    onDetach: callback => (onDetach = callback)
  };
};
