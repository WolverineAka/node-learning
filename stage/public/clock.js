let el = document.getElementById('content');
let now, fullDate = {};
setInterval(() => {
    el.innerText = getFullDate();
}, 1000)

function getFullDate() {
    now = new Date();
    fullDate.year = double(now.getFullYear());
    fullDate.month = double(now.getMonth() + 1);
    fullDate.date = double(now.getDate());
    fullDate.hour = double(now.getHours());
    fullDate.minute = double(now.getMinutes());
    fullDate.second = double(now.getSeconds());
    fullDate.day = format(now.getDay());
    return final(fullDate)
}

function double(num) {
    return num > 10 ? num : '0' + num;
}

function format(day) {
    switch (day) {
        case 0:
            return '星期天';
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
        default:
            return '未知';
    }
}

function final(fullDate) {
    return `${fullDate.year}-${fullDate.month}-${fullDate.date}  ${fullDate.hour}:${fullDate.minute}:${fullDate.second}  ${fullDate.day}`;
}