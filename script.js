let jokes = [`Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"`,
    `Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.`,
    `I'd tell you a joke about NAT but I would have to translate.`,
    `Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.`,
    `"We messed up the keming again guys."`,
    `A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says "Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!" to which the man replies, "I am a programmer. We don't worry about warnings; we only worry about errors."`,
    `Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...`,
    `The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.`,
    `If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.`,
    `Your momma is so fat, you need to switch to NTFS to store a picture of her.`,
    `Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.`,
    `A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says "I'll have to charge you extra, that's a root beer float".\nThe guy says "In that case, better make it a double."`,
    `If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.`,
    `// This line doesn't actually do anything, but the code stops working when I delete it.`,
    `I'd tell you a joke about NAT but I would have to translate.`,
    `Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says "Do you get the reference?" But Java didn't.`,
    `Your mama's so FAT she can't save files bigger than 4GB.`,
    `The generation of random numbers is too important to be left to chance.`,
    `ASCII silly question, get a silly ANSI.`
]

let joke = jokes[Math.floor(Math.random() * jokes.length)];

let btn = document.getElementById('generate');
let text = document.getElementById('jokeArea');

btn.addEventListener('click', () => {
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    text.innerText = joke;
});