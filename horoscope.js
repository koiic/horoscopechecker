const horoscope = {
    leo: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/aquarius/',
        meaning: 'Air zodiacSigns are rational, social, and love communication and relationships with other people. They are thinkers, friendly, intellectual, communicative and analytical. '
    },
    virgo: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/virgo/',
        meaning: 'Earth zodiacSigns are “grounded” and the ones that bring us down to earth. They are mostly conservative and realistic, but they can also be very emotional.'
    },
    libra: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/libra/',
        meaning: 'Air zodiacSigns are rational, social, and love communication and relationships with other people. They are thinkers, friendly, intellectual, communicative and analytical. '
    },
    scorpio: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/scorpio/',
        meaning: ' Water zodiacSigns are exceptionally emotional and ultra-sensitive. They are highly intuitive and they can be as mysterious as the ocean itself.'
    },
    capricon: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/capricon/',
        meaning: 'Earth zodiacSigns are “grounded” and the ones that bring us down to earth. They are mostly conservative and realistic, but they can also be very emotional.'
    },
    aquarius: {
        imagelink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/aquarius/',
        meaning: 'Water zodiacSigns are exceptionally emotional and ultra-sensitive. They are highly intuitive and they can be as mysterious as the ocean itself.'
    },
    pisces: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/pisces/',
        meaning: 'Water zodiacSigns are exceptionally emotional and ultra-sensitive. They are highly intuitive and they can be as mysterious as the ocean itself.'
    },
    aries: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/aries/',
        meaning: ' Fire zodiacSigns tend to be passionate, dynamic, and temperamental. They get angry quickly, but they also forgive easily.'
    },
    sagittarius: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/sagittarius/',
        meaning: ' Fire zodiacSigns tend to be passionate, dynamic, and temperamental. They get angry quickly, but they also forgive easily. '
    },
    taurus: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/taurus/',
        meaning: 'Earth zodiacSigns are “grounded” and the ones that bring us down to earth. They are mostly conservative and realistic, but they can also be very emotional.'
    },
    cancer: {
        imageLink: 'http://www.astrology-zodiac-zodiacSigns.com/zodiac-zodiacSigns/cancer/',
        meaning: 'Water zodiacSigns are exceptionally emotional and ultra-sensitive. They are highly intuitive and they can be as mysterious as the ocean itself.'
    },
}

const input = () => {

    let day = document.getElementById('day').value;
    let month = document.getElementById('month');
    let monthName = month.options[month.selectedIndex].text;
    let monthNumber = month.options[month.selectedIndex].value;

    // check for empty fields
    if (month.selectedIndex == 0 || !day) {
        swal("Invalid", "Please Fill all required fields", "error");
        clear();
        return;
    }

    //check if the inputed day is lesser or equals 0
    if (day <= 0) {
        swal("Oops!", "Day value is Invalid. Enter a valid day between 1 - 31", "error");
        clear();
        return
    }

    let dateInstance = new Date(2018, monthNumber, 0);
    console.log(dateInstance);

    // Throw an exception if day entered is more than days in the actual month
    if (day > dateInstance.getDate()) {
        let exceptionMessage = `${monthText.toUpperCase()} is not up to ${day} days.\n\n ${monthText.toUpperCase()} has only ${d.getDate()} days`
        swal("Oops!", exceptionMessage, "error");
        clearFields();
        return;
    }

    // let horoscopeDay = Number(day);
    // let horoscopeMonth = Number(monthNumber);

    checkHoroscope(Number(day), Number(monthNumber));
    console.log(Number(day) + " :   " + Number(monthNumber))

}

const checkHoroscope = (day, month) => {

    let zodiacSign;

    switch (month) {
        case 1:
            zodiacSign = day < 20 ? 'capricon' : 'aquarius';
            break;

        case 2:
            zodiacSign = day < 19 ? 'aquarius' : 'pisces';
            break;

        case 3:
            zodiacSign = day < 21 ? 'pisces' : 'aries';
            break;

        case 4:
            zodiacSign = day < 20 ? 'aries' : 'taurus';
            break;

        case 5:
            zodiacSign = day < 21 ? 'taurus' : 'gemini';
            break;

        case 6:
            zodiacSign = day < 21 ? 'gemini' : 'cancer';
            break;

        case 7:
            zodiacSign = day < 23 ? 'cancer' : 'leo';
            break;

        case 8:
            zodiacSign = day < 23 ? 'leo' : 'virgo';
            break;

        case 9:
            zodiacSign = day < 23 ? 'virgo' : 'libra';
            break;

        case 10:
            zodiacSign = day < 23 ? 'libra' : 'scorpio';
            break;

        case 11:
            zodiacSign = day < 22 ? 'scorpio' : 'sagittarius';
            break;

        case 12:
            zodiacSign = day < 22 ? 'sagittarius' : 'capricon';
            break;

        default:
            zodiacSign = 'hello';
            break;

    }

    let quickTellerResult = ` 
                            Your Horoscope is ${zodiacSign.toUpperCase()}\n
                            INFO : ${horoscope[zodiacSign].meaning}
                            `;
    swal("waoh!", quickTellerResult, "success");
    // swal({
    //     title : quickTellerResult,
    //     text : "<img src='" + horoscope[zodiacSign].imagelink + "' style='width:150px;'>",
    //     html : true
    // })
    clear();

}

// ${horoscope[zodiacSign].imageLink}\n


// Add an event listener on button click
let submit = document.getElementById('submitBtn');
submit.addEventListener('click', input);


const clear = () => {
    document.getElementById('day').value = "";
    document.getElementById('month').selectedIndex = 0;
}