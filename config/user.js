const creds = {
    // create a bunch (pool) of potential connections for multiple users
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '', // root for mac, blank for windows
    database        : 'roku_temp',
    port            : 3306 // 8889
}

module.exports = creds;