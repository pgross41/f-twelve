/**
 * Single tab for the tab bar
 */
class Tab {
  constructor({ onClick, label, content }) {
    this.el = document.createElement('div');
    this.onClick = onClick;
    this.label = label;
    this.content = content;
  }

  render() {
    this.el.className = 'f-twelve-tab';
    this.el.innerText = this.label;
    this.el.onclick = this.onClick.bind(this, this.content.render());
    return this.el;
  }
}

export default Tab;
