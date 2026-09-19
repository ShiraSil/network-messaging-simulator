class Package {
  constructor(from, text, to) {
    this.from = from;
    this.text = text;
    this.to = to;
  }

  packageAnimation(state, client) {
    const div = document.getElementById(client);
    const cable = div.querySelector(".cable");
    const template = document.querySelector(
      state ? ".envelopeAnimation1" : ".envelopeAnimation2",
    );
    const clone = template.content.cloneNode(true);
    const img = clone.querySelector("img");
    cable.appendChild(img);
    setTimeout(() => {
      cable.removeChild(img);
    }, 4000);
  }
}
