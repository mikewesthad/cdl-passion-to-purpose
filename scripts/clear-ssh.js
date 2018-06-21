const path = require("path");
const dotenv = require("dotenv");
const Client = require("ssh2").Client;

dotenv.config({ path: path.resolve(__dirname, "..", ".env.ssh") });

const conn = new Client();

const stdout = data => console.log("STDOUT: " + data);
const stderr = data => console.log("STDERR: " + data);

conn.on("ready", () => {
  console.log("Connected");

  conn.exec(
    "rm -r /usr/home/convergence/public_html/convergencedesignlab.org/web-resources/passion-to-purpose/*",
    (err, stream) => {
      if (err) throw err;
      stream
        .on("close", function(code, signal) {
          console.log(`Exited with code "${code}" and signal "${signal}"`);
          conn.end();
        })
        .on("data", stdout)
        .stderr.on("data", stderr);
    }
  );
});

conn.connect({
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS
});
