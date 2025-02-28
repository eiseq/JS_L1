function ipv4Parser(ip, mask) {
    const ipParts = ip.split(".").map(Number);
    const maskParts = mask.split(".").map(Number);
    const networkBlock = ipParts.map((part, index) => part & maskParts[index]);
    const hostIdentifier = ipParts.map((part, index) => part ^ networkBlock[index]);
    return [networkBlock.join("."), hostIdentifier.join(".")];
}