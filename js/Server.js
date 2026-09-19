class Server {
  constructor() {
    this.routingTable = [];
  }

  connectCable(cable) {
    const clientEndpoint =
      cable.endpointA === this ? cable.endpointB : cable.endpointA;
    this.routingTable.push({ clientId: clientEndpoint.name, cable });
  }

  receive(packet) {
    const recipient = packet.to;
    const connection = this.routingTable.find(
      (item) => item.clientId === recipient,
    );
    if (connection) {
      this.tryToSend(packet, connection.cable);
    } else {
      packet.to = packet.from;
      packet.text = `Your message was not delivered to ${recipient} because the address was not found.`;
      packet.from = "Server";
      const connection = this.routingTable.find(
        (item) => item.clientId === packet.to,
      );
      this.tryToSend(packet, connection.cable);
    }
  }
  tryToSend(packet, cable) {
    if (!cable.currentPackage) {
      cable.sending(packet, this);
    } else {
      setTimeout(() => this.tryToSend(packet, cable), 100);
    }
  }
}
