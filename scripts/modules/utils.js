export const getCurrentDataTime = () => {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
    ];

    const weekdays = [
        'воскресенье',
        'понедельник', 
        'вторник', 
        'среда', 
        'четверг', 
        'пятница', 
        'суббота',    
    ];

    const date = new Date();

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = weekdays[date.getDay()];
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return { dayOfMonth, month, year, hours, minutes, dayOfWeek }


    console.log(hours, minutes);

};