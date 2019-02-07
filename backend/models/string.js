const db = require('../db');
class String {
  /** Find all jobs (can filter on terms in data). */

  /** Given a job id, return data about job. */

  static async findAll() {
    const stringRes = await db.query(`SELECT * FROM strings`);

    return stringRes.rows;
  }

  /** Create a job (from data), update db, return new job data. */

  static async add(data) {
    const result = await db.query(
      `INSERT INTO strings (data) 
             VALUES ($1) 
             RETURNING data`,
      [data],
    );

    return result.rows[0];
  }
}
module.exports = String;
