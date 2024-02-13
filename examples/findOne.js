require("dotenv/config");
const { Console, RColors } = require("rxl-rest");
const BuildMongo = require("../BuildMongo");
const { Login } = require("../models/main");

const connectToDataBase = async () => {
  await BuildMongo().then(async (connection) => {
    try {
      Console.Color({
        message: `Connected To Mongo as: ${connection.connections[0].name}`,
        color: RColors.Green,
      });

      const UserInfos = {
        Username: "Mohammed",
        Email: "user@example.com",
        Password: "12345678",
      };

      const FindUsers = await Login.findOne({ Email: UserInfos.Email });

      if (FindUsers) {
        Console.Color({
          message: `Username: ${FindUsers.Username} - Email: ${FindUsers.Email}`,
          color: RColors.Blue,
        });
      } else {
        Console.Color({
          message: `There is no users have this email`,
          color: RColors.Red,
        });
      }
    } finally {
      connection.connection.close();
    }
  });
};

connectToDataBase();
