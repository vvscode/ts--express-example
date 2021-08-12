import sqlite3, {RunResult} from 'sqlite3'
import util, {CustomPromisify} from 'util'

const db = new sqlite3.Database(`${__dirname}/../dbcounter.sqlite3`);
db.run('CREATE TABLE IF NOT EXISTS visitors (ts INTEGER, agent TEXT)');

type DbRun = (sql: string, params: any) => RunResult;
export const dbRun = util.promisify<DbRun>(db.run.bind(db) as unknown as  CustomPromisify<DbRun>);
export const dbGet = util.promisify(db.get.bind(db));