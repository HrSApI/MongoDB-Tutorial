require("dotenv/config");
const BuildMongo = require("./BuildMongo");
const { Console, RColors } = require("rxl-rest");
const { Login } = require("./models/main");

const connectToDatabase = async () => {
  await BuildMongo().then(async (connection) => {
    try {
      Console.Color({
        message: `Connected To database as: ${connection.connections[0].name}`,
        color: RColors.Green,
      });

      const Userinfo = {
        Username: "Mohammed",
        Email: "user@gmail.com",
        Password: "9955Mm",
      };

      await Login.create({
        Username: Userinfo.Username,
        Email: Userinfo.Email,
        Password: Userinfo.Password,
      }).then(() => {
        Console.Color({
          message: "Successfuly Added user to the data",
          color: RColors.Blue,
        });
      });
    } finally {
      connection.connection.close();
    }
  });
};

connectToDatabase();

Console.DebuggingErrors();
