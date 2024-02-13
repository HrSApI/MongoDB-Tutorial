/**
 * Require Env File
 * استيراد ملف التكوين
 */
require("dotenv/config");

/**
 * Switch Console Color Or Debugging Console
 * تغيير لون واجهة التحكم أو تصحيح أخطاء التصحيح
 */
const { Console, RColors } = require("rxl-rest");

/**
 * Build MongoDB Config
 * إعدادات قاعدة بيانات MongoDB
 */
const BuildMongo = require("../BuildMongo");

/**
 * Execute All databases
 * استخراج جميع قواعد البيانات
 */
const { Login } = require("../models/main");

/**
 * Execute Mongo Config & Connect to the data
 * استخراج إعدادات MongoDB والاتصال بالبيانات
 */
const connectToDataBase = async () => {
  await BuildMongo().then(async (connection) => {
    try {
      Console.Color({
        message: `Connected To Mongo as: ${connection.connections[0].name}`,
        color: RColors.Green,
      });

      /**
       * Add User Information to the data
       * إضافة معلومات المستخدم إلى البيانات
       */
      const UserInfos = {
        Username: "Mohammed",
        Email: "user@example.com",
        Password: "12345678",
      };

      /**
       * Add userInfos to Login data
       * إضافة معلومات المستخدم إلى بيانات تسجيل الدخول
       */
      await Login.create({
        Username: UserInfos.Username,
        Email: UserInfos.Email,
        Password: UserInfos.Password,
      }).then(() => {
        Console.Color({
          message: `Successfuly added user to the data`,
          color: RColors.Blue,
        });
      });
    } finally {
      /**
       * Close the Connections when try completed
       * إغلاق الاتصالات بعد الانتهاء من التنفيذ
       */
      connection.connection.close();
    }
  });
};

/**
 * Run Module when node starts
 * تنفيذ الوحدة عند بدء تشغيل Node.js
 */
connectToDataBase();
