// Object {}
// Boolean true, false
// String '', ""
// Template ``

// Template Literals

const message = 'Hi ' + name + ',\n'

const another =
`Hi John,

Thank you for joining my mailing list.

Regards,
Krinshsmith`;

console.log(another);

const name = 'Krinshsmith'
const another =
`Hi ${name} ${ 2 + 3 },

Thank you for joining my mailing list.

Regards,
Kava`;

console.log(another);