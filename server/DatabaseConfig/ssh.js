const { Client } = require("ssh2");

const sshConfig = {
  host: "172.25.164.253",
  port: 22,
  username: "mohamed",
  password: "conteh",
};

const sshConnection = new Client();

sshConnection.on("ready", () => {
  console.log("SSH connection established!");
});

sshConnection.connect(sshConfig);

module.exports = sshConnection;
