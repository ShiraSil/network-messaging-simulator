const template = document.getElementsByClassName("userEmailTemplate")[0];
const container = document.getElementById("AllEmailBoxes");

class Client {
  constructor(clientName) {
    this.name = clientName;
    this.cable = null;

    const clone = template.content.cloneNode(true);
    const form = clone.querySelector("form");
    const emailAndReceivedWrapper = clone.querySelector(
      ".emailAndReceivedWrapper",
    );
    emailAndReceivedWrapper.id = this.name;

    clone.querySelector(".clientName").textContent = this.name;
    container.appendChild(clone);

    const messageAddresseeInput = form.querySelector(".toUser");
    const messageTextInput = form.querySelector(".textOfMessage");

    form.querySelector(".sendEmail").addEventListener("click", (e) => {
      e.preventDefault();
      const to = messageAddresseeInput.value;
      const text = messageTextInput.value;
      if (to) {
        if (!text) {
          if (!confirm("Send this message without text?")) {
            return;
          }
        }
        const newPackage = new Package(this.name, text, to);
        form.reset();
        this.tryToSend(newPackage);
      }
    });
  }

  tryToSend(newPackage) {
    if (!this.cable.currentPackage) {
      this.cable.sending(newPackage, this);
    } else {
      setTimeout(() => this.tryToSend(newPackage), 100);
    }
  }

  receive(packet) {
    const wrapper = document.getElementById(this.name);
    const emailBox = wrapper.querySelector(".emailContent");
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<strong>From: ${packet.from}</strong><br>${packet.text}<br>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<img src="./images/garbage.png" width="15rem"/>';
    div.appendChild(deleteBtn);
    emailBox.prepend(div);
    deleteBtn.addEventListener("click", () => div.remove());
  }
}
