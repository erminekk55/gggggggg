exports.run = async client => {
    console.log("witaj świecie: " + client.user.tag);
    client.user.setActivity("!komendy", { type: "PLAYING" });
};