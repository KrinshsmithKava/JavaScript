// if-else

// Hour
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12am and 6pm: Good afternoon!
// Otherwise: Good evening!

// let hour = 20;

// if (hour >= 6 && hour < 12)
//     console.log('Good morning');

// else if (hour >=12 && hour < 18)
//     console.log('Good afternoon');

// else
//     console.log('Good evening');

// switch-case

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// if (role === 'guest' && hour > 12) console.log('Guest');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown User');