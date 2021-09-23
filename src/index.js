const messages = [
    "Oscar",
    "Ana",
    "Pedro",
    "José",
    "Luis",
    "Harrinson",
    "Nohely",
    "Carlos",
    "Libia",
    "Humberto"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };