// Reset when storage is more than 3hours
export default function localStorageExpire(){
var hours = 3; 
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
    }
}

}