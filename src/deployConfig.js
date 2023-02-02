import parseDatabaseUrl from "parse-database-url";
const sqlurl = process.env.MYSQL_URL || "mysql://root:n0m3l0@localhost:3308/Gestick";
const dbCon = parseDatabaseUrl(sqlurl);

export const port = process.env.PORT || 3000;

export const dbConfig = dbCon;