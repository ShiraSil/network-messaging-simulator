class Cable {
  constructor(endpointA, endpointB) {
    this.endpointA = endpointA;
    this.endpointB = endpointB;
    this.currentPackage = null;
  }

  sending(packet, from) {
    this.currentPackage = packet;
    const to = from === this.endpointA ? this.endpointB : this.endpointA;
    if (to === server) {
      packet.packageAnimation(1, packet.from);
    } else {
      packet.packageAnimation(0, packet.to);
    }
    this.simulateSending(() => {
      to.receive(packet);
      this.currentPackage = null;
    });
  }

  simulateSending = (callback) => {
    setTimeout(callback, 4000);
  };
}
