var today = new Date()
var date = String(today.getDate)
var month = String(today.getMonth + 1)
let d = () => { date; }

let m = () => { month; }

let getBaInfo = () => {
    ("Thorium ,W3D1, the topic of today is nodejs!");
}

module.exports.d = date;
module.exports.m = month;
module.exports.getbaInfo = getBaInfo;