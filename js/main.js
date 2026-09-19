const server = new Server();
const clientsArray = [];

document.getElementById("addClientButton").addEventListener("click", (e) => {
  e.preventDefault();
  addClient();
});

function addClient() {
  const clientElement = document.getElementById("newClientNameText");
  if (!clientElement.value) {
    return;
  }
  if (clientsArray.find((client) => client.name === clientElement.value)) {
    alert("this username already exist!");
    clientElement.value = "";
    return;
  }
  const client = new Client(clientElement.value);
  clientsArray.push(client);
  const serverBox = document.getElementById("server");
  for (let i = 0; i < 4; i++) {
    const serverDiv = document.createElement("div");
    serverDiv.classList.add("serverDrawer");
    serverBox.appendChild(serverDiv);
  }
  const cable = new Cable(client, server);
  client.cable = cable;
  clientElement.value = "";
  server.connectCable(cable);
}
