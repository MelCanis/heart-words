class List {
    constructor (color, words) {
        this.color = color;
        this.words = words;
    }
}

const lists = [
    new List("#E62245", [ //red
        {
          word: "the",
          hearted: ["th", "e*"],
          sentence: "The cat is big."
        },
        {
          word: "a",
          hearted: ["a*"],
          sentence: "A dog is nice."
        },
        {
          word: "I",
          hearted: ["I*"],
          sentence: "I am happy."
        },
        {
          word: "to",
          hearted: ["t", "o*"],
          sentence: "I want to play."
        },
        {
          word: "do",
          hearted: ["d", "o*"],
          sentence: "I can do it."
        },
        {
          word: "and",
          hearted: ["a", "n", "d"],
          sentence: "Fish are small and fast."
        },
        {
          word: "was",
          hearted: ["w", "a*", "s*"],
          sentence: "He was tall."
        },
        {
          word: "for",
          hearted: ["f", "or*"],
          sentence: "I have a gift for you."
        },
        {
          word: "you",
          hearted: ["y", "ou*"],
          sentence: "Can you help me?"
        },
        {
          word: "of",
          hearted: ["o*", "f*"],
          sentence: "Mom gave me a piece of cake."
        }
    ]),
    new List("#FF914D", [ //orange
        {
          word: "as",
          hearted: ["a", "s*"],
          sentence: "I run as fast as I can."
        },
        {
          word: "has",
          hearted: ["h", "a", "s*"],
          sentence: "She has a new toy."
        },
        {
          word: "his",
          hearted: ["h", "i", "s*"],
          sentence: "His hat is red."
        },
        {
          word: "is",
          hearted: ["i", "s*"],
          sentence: "The sun is bright."
        },
        {
          word: "be",
          hearted: ["b", "e*"],
          sentence: "Be kind to others."
        },
        {
          word: "he",
          hearted: ["h", "e*"],
          sentence: "He can jump high."
        },
        {
          word: "she",
          hearted: ["sh", "e*"],
          sentence: "She loves to sing."
        },
        {
          word: "we",
          hearted: ["w", "e*"],
          sentence: "We are friends."
        },
        {
          word: "me",
          hearted: ["m", "e*"],
          sentence: "Can you help me?"
        }
      ]
    ),
    new List("#FFDE59", [ //yellow
        {
          word: "been",
          hearted: ["b", "ee*", "n"],
          sentence: "I have been to the park."
        },
        {
          word: "have",
          hearted: ["h", "a", "ve*"],
          sentence: "We have a blue car."
        },
        {
          word: "said",
          hearted: ["s", "ai*", "d"],
          sentence: "She said, 'Hello!'"
        },
        {
          word: "were",
          hearted: ["w", "ere*"],
          sentence: "They were playing outside."
        },
        {
          word: "what",
          hearted: ["wh", "a*", "t"],
          sentence: "What is your name?"
        },
        {
          word: "come",
          hearted: ["c", "o*", "me*"],
          sentence: "Come with me."
        },
        {
          word: "some",
          hearted: ["s", "o*", "me*"],
          sentence: "I want some ice cream."
        },
        {
          word: "from",
          hearted: ["f", "r", "o*", "m"],
          sentence: "She is from France."
        },
        {
          word: "word",
          hearted: ["w", "or*", "d"],
          sentence: "Read the word aloud."
        },
        {
          word: "your",
          hearted: ["y", "our*"],
          sentence: "Is this your book?"
        }
      ]
    ),
    new List ("#00BF63", [ //green
        {
          word: "one",
          hearted: ["o*", "ne*"],
          sentence: "I have one toy."
        },
        {
          word: "two",
          hearted: ["tw*", "o*"],
          sentence: "I see two birds."
        },
        {
          word: "all",
          hearted: ["a*", "ll*"],
          sentence: "We are all here."
        },
        {
          word: "into",
          hearted: ["i", "n", "t", "o*"],
          sentence: "He walked into the room."
        },
        {
          word: "who",
          hearted: ["wh*", "o*"],
          sentence: "Who is that?"
        },
        {
          word: "find",
          hearted: ["f", "i*", "n", "d"],
          sentence: "Let's find the treasure."
        },
        {
          word: "would",
          hearted: ["w", "oul*", "d"],
          sentence: "I would like some cake."
        },
        {
          word: "should",
          hearted: ["sh", "oul*", "d"],
          sentence: "You should eat your vegetables."
        },
        {
          word: "could",
          hearted: ["c", "oul*", "d"],
          sentence: "She could swim very well."
        }
    ]),
    new List ("#5271FF", [ //blue
        {
          word: "give",
          hearted: ["g", "i", "ve*"],
          sentence: "Please give me a book."
        },
        {
          word: "water",
          hearted: ["w", "a*", "t", "er"],
          sentence: "I am thirsty. Can I have some water?"
        },
        {
          word: "their",
          hearted: ["th", "eir*"],
          sentence: "Their house is big."
        },
        {
          word: "there",
          hearted: ["th", "ere*"],
          sentence: "Look, there is a rainbow!"
        },
        {
          word: "go",
          hearted: ["g", "o*"],
          sentence: "Let's go to the park."
        },
        {
          word: "no",
          hearted: ["n", "o*"],
          sentence: "No, I don't want that."
        },
        {
          word: "so",
          hearted: ["s", "o*"],
          sentence: "I am so happy!"
        },
        {
          word: "by",
          hearted: ["b", "y*"],
          sentence: "He went by the store."
        },
        {
          word: "my",
          hearted: ["m", "y*"],
          sentence: "This is my toy."
        },
        {
          word: "many",
          hearted: ["m", "a*", "n", "y*"],
          sentence: "There are many stars in the sky."
        }
    ]),
    new List ("#CB6CE6", [ //violet
        {
          word: "are",
          hearted: ["are*"],
          sentence: "We are going to the park."
        },
        {
          word: "they",
          hearted: ["th", "ey*"],
          sentence: "They are playing in the garden."
        },
        {
          word: "want",
          hearted: ["w", "a*", "n", "t"],
          sentence: "I want to eat ice cream."
        },
        {
          word: "work",
          hearted: ["w", "or*", "k"],
          sentence: "Dad goes to work every day."
        },
        {
          word: "four",
          hearted: ["f", "our*"],
          sentence: "There are four seasons in a year."
        },
        {
          word: "eight",
          hearted: ["eigh*", "t"],
          sentence: "There are eight planets in our solar system."
        },
        {
          word: "laugh",
          hearted: ["l", "au*", "gh*"],
          sentence: "Her joke made us laugh."
        },
        {
          word: "house",
          hearted: ["h", "ou", "se*"],
          sentence: "We live in a blue house."
        },
        {
          word: "school",
          hearted: ["s", "ch*", "oo", "l"],
          sentence: "I go to school every weekday."
        }
    ]),
    new List ("#FF66C4", [ //pink
        {
          word: "done",
          hearted: ["d", "o*", "ne*"],
          sentence: "I am done with my homework."
        },
        {
          word: "gone",
          hearted: ["g", "o*", "ne*"],
          sentence: "The bird has flown away. It's gone."
        },
        {
          word: "both",
          hearted: ["b", "o*", "th"],
          sentence: "Both of them are wearing blue."
        },
        {
          word: "friend",
          hearted: ["f", "r", "ie*", "n", "d"],
          sentence: "She is my best friend."
        },
        {
          word: "thought",
          hearted: ["th", "ough*", "t"],
          sentence: "I thought I saw a rainbow."
        },
        {
          word: "brought",
          hearted: ["b", "r", "ough*", "t"],
          sentence: "She brought her favorite book."
        },
        {
          word: "pull",
          hearted: ["p", "u*", "ll*"],
          sentence: "Can you help me pull the wagon?"
        },
        {
          word: "put",
          hearted: ["p", "u*", "t"],
          sentence: "Put your toys in the box."
        }
    ]),
    new List ("#5CE1E6", [ //lightblue
        {
          word: "does",
          hearted: ["d", "oe*", "s*"],
          sentence: "She does her homework every day."
        },
        {
          word: "new",
          hearted: ["n", "ew*"],
          sentence: "I got a new toy for my birthday."
        },
        {
          word: "few",
          hearted: ["f", "ew*"],
          sentence: "We have a few apples left."
        },
        {
          word: "know",
          hearted: ["kn*", "ow*"],
          sentence: "Do you know the answer?"
        },
        {
          word: "once",
          hearted: ["o*", "n", "ce*"],
          sentence: "I saw a shooting star once."
        },
        {
          word: "please",
          hearted: ["p", "l", "ea*", "se*"],
          sentence: "May I have some ice cream, please?"
        },
        {
          word: "world",
          hearted: ["w", "or*", "l", "d"],
          sentence: "The Earth is our world."
        },
        {
          word: "where",
          hearted: ["wh", "ere*"],
          sentence: "Where is my pencil?"
        },
        {
          word: "sure",
          hearted: ["s*", "ure*"],
          sentence: "Are you sure about that?"
        },
        {
          word: "buy",
          hearted: ["b", "uy*"],
          sentence: "I want to buy a new book."
        },
        {
          word: "clothes",
          hearted: ["c", "l", "o", "thes*"],
          sentence: "I need to buy new clothes."
        }
    ]),
    new List ("#7ED957", [ //lightgreen
        {
          word: "wash",
          hearted: ["w", "a*", "sh"],
          sentence: "I need to wash my hands."
        },
        {
          word: "wear",
          hearted: ["w", "ear*"],
          sentence: "What should I wear today?"
        },
        {
          word: "door",
          hearted: ["d", "oor*"],
          sentence: "Please close the door."
        },
        {
          word: "poor",
          hearted: ["p", "oor*"],
          sentence: "They live in a poor neighborhood."
        },
        {
          word: "early",
          hearted: ["ear*", "l", "y"],
          sentence: "She woke up early in the morning."
        },
        {
          word: "pretty",
          hearted: ["p", "r", "e*", "tt", "y"],
          sentence: "The flowers are pretty."
        },
        {
          word: "ready",
          hearted: ["r", "ea*", "d", "y"],
          sentence: "Are you ready to go?"
        },
        {
          word: "very",
          hearted: ["v", "er*", "y"],
          sentence: "He is very tall."
        }
    ]),
    new List ("#A6A6A6", [ //gray
        {
          word: "enough",
          hearted: ["e", "n", "ou*", "gh*"],
          sentence: "I have had enough to eat."
        },
        {
          word: "something",
          hearted: ["s", "o*", "me*", "th", "i*", "ng"],
          sentence: "I want something sweet to eat."
        },
        {
          word: "because",
          hearted: ["b", "e", "c", "au", "se*"],
          sentence: "I am happy because I got a gift."
        },
        {
          word: "cause",
          hearted: ["c", "au", "se*"],
          sentence: "The storm caused damage to the house."
        },
        {
          word: "eyes",
          hearted: ["eye*", "s*"],
          sentence: "Her eyes are blue."
        },
        {
          word: "half",
          hearted: ["h", "a", "lf*"],
          sentence: "I ate half of the pizza."
        },
        {
          word: "warm",
          hearted: ["w", "ar*", "m"],
          sentence: "The sun feels warm on my skin."
        },
        {
          word: "though",
          hearted: ["th", "ough*"],
          sentence: "He went to the party, though he was tired."
        },
        {
          word: "built",
          hearted: ["b", "ui*", "l", "t"],
          sentence: "The house was built last year."
        },
        {
          word: "more",
          hearted: ["m", "ore*"],
          sentence: "Can I have more cookies, please?"
        },
        {
          word: "front",
          hearted: ["f", "r", "o*", "n", "t"],
          sentence: "She stood in the front of the line."
        },
        {
          word: "course",
          hearted: ["c", "our*", "se*"],
          sentence: "I am taking a math course this semester."
        }
    ]),
    new List ("#A52A2A", [//brown
        {
          word: "any",
          hearted: ["a*", "n", "y"],
          sentence: "Do you have any questions?"
        },
        {
          word: "anything",
          hearted: ["a*", "n", "y", "th", "i*", "ng"],
          sentence: "You can choose anything you want."
        },
        {
          word: "carry",
          hearted: ["c", "ar*", "r", "y"],
          sentence: "Can you help me carry these boxes?"
        },
        {
          word: "before",
          hearted: ["b", "e", "f", "ore*"],
          sentence: "We need to finish our work before we can play."
        },
        {
          word: "today",
          hearted: ["t", "o*", "d", "ay"],
          sentence: "What are you doing today?"
        },
        {
          word: "people",
          hearted: ["p", "eo*", "p", "le"],
          sentence: "There are many people at the park."
        },
        {
          word: "country",
          hearted: ["c", "ou*", "n", "t", "r", "y"],
          sentence: "I live in a beautiful country."
        },
        {
          word: "sometimes",
          hearted: ["s", "o*", "me*", "t", "i", "me", "s*"],
          sentence: "Sometimes it's good to take a break."
        }
    ]),
    new List ("#4D4D4D", [ //black
        {
          word: "mother",
          hearted: ["m", "o*", "th", "er"],
          sentence: "My mother cooks delicious food."
        },
        {
          word: "father",
          hearted: ["f", "a*", "th", "er"],
          sentence: "My father is a doctor."
        },
        {
          word: "together",
          hearted: ["t", "o*", "g", "e", "th", "er"],
          sentence: "We can achieve great things when we work together."
        },
        {
          word: "another",
          hearted: ["a*", "n", "o*", "th", "er"],
          sentence: "Can I have another cookie?"
        },
        {
          word: "brother",
          hearted: ["b", "r", "o*", "th", "er"],
          sentence: "My brother is playing soccer."
        },
        {
          word: "head",
          hearted: ["h", "ea*", "d"],
          sentence: `"Use your head!" said Dad.`
        },
        {
          word: "learn",
          hearted: ["l", "ear*", "n"],
          sentence: "I want to learn how to play the guitar."
        },
        {
          word: "suit",
          hearted: ["s", "ui*", "t"],
          sentence: "He wore a black suit to the wedding."
        },
        {
          word: "woman",
          hearted: ["w", "o*", "m", "a*", "n"],
          sentence: "The woman is reading a book."
        }
    ]),
];

export default lists;