
//possible error point 
// if (process.env.NODE_ENV === 'developmet') {
//     // local에서 개발 중일 떄 
//     module.exports = require('./dev'); 
// } else {
//     // 서버에서 배포 중일 때 
//     module.exports = require('./prod'); 
// }

module.exports = {
    mysqlHOST: 'healthy-miok-db.css640snysar.ap-northeast-2.rds.amazonaws.com', 
    mysqlPORT: 3306,
    mysqlUSER: 'admin',
    mysqlPASSWORD: 'jigunmiok1118', 
    mysqlDATABASE: 'healthy_miok'
}