const addZero = (n) => n < 10 ? `0${n}` : n;

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

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    
    return { dayOfMonth, month, year, hours, minutes, dayOfWeek }


    console.log(hours, minutes);

};