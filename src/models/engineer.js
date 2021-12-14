const db = require("../config/db");

module.exports = {
  /**
   * findEngineerByEmail can use DRY
   * can move this to another file model
   * select * from COMPANY/ENGINEER where email like EMAIL
   *
   */

  findEngineerByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM engineer WHERE EMAIL ILIKE '${email}'`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  registerEngineer: (body) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO engineer (name, description, email, password, location) VALUES ($1, $2, $3, $4, $5)",
        [body.name, body.description, body.email, body.password, body.location],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getEngineerById: (params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM engineer WHERE id = ${params}`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getSkillsEngineerById: (params) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM skill WHERE engineer_id = ${params}`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },

  getAllEngineer: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM engineer", (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  getLimitEngineer: (startLimit, resultsPerPage) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM engineer LIMIT ${resultsPerPage} OFFSET ${startLimit}`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },
};
