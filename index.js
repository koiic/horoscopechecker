const clearFields = () => {
    document.getElementById('day').value = "";
    document.getElementById('month').selectedIndex = 0;
}

const horoscopeTraits = {
    leo: {
        strengths: 'Creative, passionate, generous, warm-hearted, cheerful, humorous',
        weaknesses: 'Arrogant, stubborn, self-centered, lazy, inflexible',
        compatibility: 'Aquarius and Gemini'
    },
    virgo: {
        strengths: 'Loyal, analytical, kind, hardworking, practical',
        weaknesses: 'Shyness, worry, overly critical of self and others, all work and no play',
        compatibility: 'Pisces and Cancer'
    },
    libra: {
        strengths: 'Cooperative,diplomatic, gracious, fair-minded, social',
        weaknesses: 'Indecisive, avoids confrontations, will carry a grudge, self-pity',
        compatibility: 'Aries and Sagittarius'
    },
    scorpio: {
        strengths: 'Resourceful, brave, passionate, stubborn, a true friend',
        weaknesses: 'Distrusting, jealous, secretive, violent',
        compatibility: 'Taurus and Cancer'
    },
    sagittarius: {
        strengths: 'Generous, idealistic, great sense of humor',
        weaknesses: 'Promises more than can deliver, very impatient, will say anything no matter how, undiplomatic',
        compatibility: 'Gemini and Aries'
    },
    capricon: {
        strengths: ' Responsible, disciplined, self-control, good managers',
        weaknesses: 'Know-it-all, unforgiving, condescending, expecting the worst',
        compatibility: 'Taurus and Cancer'
    },
    aquarius: {
        strengths: 'Progressive, original, independent, humanitarian',
        weaknesses: 'Runs from emotional expression, temperamental, uncompromising, aloof',
        compatibility: 'Leo and Sagittarius'
    },
    pisces: {
        strengths: 'Compassionate, artistic, intuitive, gentle, wise, musical',
        weaknesses: 'Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr',
        compatibility: 'Virgo and Taurus'
    },
    aries: {
        strengths: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
        weaknesses: 'Impatient, moody, short-tempered, impulsive, aggressive',
        compatibility: 'Libra and Leo'
    },
    taurus: {
        strengths: 'Reliable, patient, practical, devoted, responsible, stable',
        weaknesses: 'Stubborn, possessive, uncompromising',
        compatibility: 'Scorpio and Cancer'
    },
    gemini: {
        strengths: 'Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas',
        weaknesses: 'Nervous, inconsistent, indecisive',
        compatibility: 'Sagittarius and Aquarius'
    },
    cancer: {
        strengths: 'Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive',
        weaknesses: 'Moody, pessimistic, suspicious, manipulative, insecure',
        compatibility: ' Capricorn and Taurus'
    }
}

const inputValidator = () => {

    let day = document.getElementById('day').value;
    let month = document.getElementById('month')
    let monthText = month.options[month.selectedIndex].text;
    let monthValue = month.options[month.selectedIndex].value;

    // Check if day and month fields are empty
    if (!day || month.selectedIndex == 0) {
        swal("Oops!", "Please Fill all fields", "error");
        clearFields();
        return;
    }

    if (day <= 0) {
        swal("Oops!", "Day Invalid. Please Enter a day between 1 - 31", "error");
        clearFields();
        return;
    }

    let d = new Date(2018, monthValue, 0);
    console.log(d);

    // Throw an exception if day entered is more than days in the actual month
    if (day > d.getDate()) {
        let formattedMessage = `${monthText.toUpperCase()} is not up to ${day} days.\n\n ${monthText.toUpperCase()} has only ${d.getDate()} days`
        swal("Oops!", formattedMessage, "error");
        clearFields();
        return;
    }

    horoscope(Number(day), Number(monthValue));

}

const horoscope = (day, month) => {

    let sign;

    switch (month) {

        case 1:
            sign = day < 20 ? 'capricon' : 'aquarius';
            break;

        case 2:
            sign = day < 19 ? 'aquarius' : 'pisces';
            break;

        case 3:
            sign = day < 21 ? 'pisces' : 'aries';
            break;

        case 4:
            sign = day < 20 ? 'aries' : 'taurus';
            break;

        case 5:
            sign = day < 21 ? 'taurus' : 'gemini';
            break;

        case 6:
            sign = day < 21 ? 'gemini' : 'cancer';
            break;

        case 7:
            sign = day < 23 ? 'cancer' : 'leo';
            break;

        case 8:
            sign = day < 23 ? 'leo' : 'virgo';
            break;

        case 9:
            sign = day < 23 ? 'virgo' : 'libra';
            break;

        case 10:
            sign = day < 23 ? 'libra' : 'scorpio';
            break;

        case 11:
            sign = day < 22 ? 'scorpio' : 'sagittarius';
            break;

        case 12:
            sign = day < 22 ? 'sagittarius' : 'capricon';
            break;

        default:
            sign = 'hello';
            break;

    }

    const horoscopeResult = `
                           Your Horoscope is ${sign.toUpperCase()} \n
                           STRENGHTS : ${horoscopeTraits[sign].strengths} \n
                           WEAKNESSES : ${horoscopeTraits[sign].weaknesses} \n
                           COMPATIBILITY : ${horoscopeTraits[sign].compatibility}
                           `;

    swal("Weldone!", horoscopeResult, "success");
    clearFields();


}

// Add an event listener on button click
let submit = document.getElementById('submitBtn');
submit.addEventListener('click', inputValidator);