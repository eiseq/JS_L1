function domainName(url) {
    const regex = /^(https?:\/\/)?(www\.)?/;
    return url.replace(regex, "").split(".")[0];
} 