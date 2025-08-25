
function getdates()
{
    let startTime = new Date(); 
    let endTime = new Date('2013/10/09 12:00');
    
    return{
        start:startTime,
        end:endTime
    }
}

function getMinutesBetweenDates(startTime, endTime) {
    let diff = endTime.getTime() - startTime.getTime();

    let result = (diff / 60000);

    return (Math.abs(result));
}

function converthrs(diff)
{
    let hr = diff / 60;
    let hrtomin = diff - (60 * Math.floor(hr));

    let res = Math.floor(hr) + " : " + Math.floor(hrtomin);

    return res;
}

function timer()
{
    let start = getdates().start;
    let end = getdates().end;

    let diff = getMinutesBetweenDates(start, end);

    let res = converthrs(diff);

    return res;
}

console.log(timer());





