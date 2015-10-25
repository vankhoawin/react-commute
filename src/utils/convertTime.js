export function toSeconds(time) {
    let parts = time.split(':');
    return (+parts[0])*3600 + (+parts[1])*60 + (+parts[2]);
}

export function toHHMMSS(sec) {
    let sec_num = parseInt(sec, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    let time = hours + ':' + minutes + ':' + seconds;
    return time;
}
