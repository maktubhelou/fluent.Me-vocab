const sentences = {
  Animals: {
    list_ID: 1,
    listCategory: 'Animals',
    listWords: ['dog', 'cat', 'fish'], // , 'bird', 'cow', 'pig', 'mouse', 'horse', 'wing'],
    sentences: {
      dog: 'The dog barks at the cat.',
      cat: 'The cat likes fish',
      bird: 'The bird flies in the sky',
      cow: 'The cow makes good milk',
      pig: 'The pig plays in the mud',
      mouse: 'The mouse takes the cheese',
      horse: 'The horse gallops on the plain',
      wing: 'The bird has big wings to help it fly'
    }
  },
  Transportation: {
    list_ID: 2,
    listCategory: 'Transportation',
    listWords: [
      'train',
      'plane',
      'car',
      'truck',
      'bicycle',
      'bus',
      'boat',
      'ship',
      'tire',
      'gasoline',
      'engine',
      '(train) ticket'
    ],
    sentences: {
      train: 'The train has many cabins.',
      plane: "There's a plane in the sky",
      car: 'You want a good car you should buy a Volvo.'
    }
  },
  Location: {
    list_ID: 3,
    listCategory: 'Location',
    listWords: [
      'city',
      'house',
      'apartment',
      'street/road',
      'airport',
      'train station',
      'bridge',
      'hotel',
      'restaurant',
      'farm',
      'court',
      'school',
      'office',
      'room',
      'town',
      'university',
      'club',
      'bar',
      'park',
      'camp',
      'store/shop',
      'theater',
      'library',
      'hospital',
      'church',
      'market',
      'country (USA',
      'France',
      'etc.)',
      'building',
      'ground',
      'space (outer space)',
      'bank'
    ],
    sentences: {
      city: 'Ho Chi Minh is a very big city in Vietnam.',
      house: 'The rich family lives in a big house',
      apartment: 'My apartment is small but I like it'
    }
  },
  Clothing: {
    list_ID: 4,
    listCategory: 'Clothing',
    listWords: [
      'hat',
      'dress',
      'suit',
      'skirt',
      'shirt',
      'T-shirt',
      'pants',
      'shoes',
      'pocket',
      'coat',
      'stain'
    ],
    sentences: {
      hat: 'Wearing a hat in church is rude.',
      dress: 'Her red dress is beautiful',
      skirt: 'She wore a long skirt to the wedding',
      'T-shirt': 'He always wears a white T-shirt'
    }
  },
  People: {
    list_ID: 5,
    listCategory: 'People',
    listWords: [
      'son',
      'daughter',
      'mother',
      'father',
      'parent (= mother/father)',
      'baby',
      'man',
      'woman',
      'brother',
      'sister',
      'family',
      'grandfather',
      'grandmother',
      'husband',
      'wife',
      'king',
      'queen',
      'president',
      'neighbor',
      'boy',
      'girl',
      'child (= boy/girl)',
      'adult (= man/woman)',
      'human (≠ animal)',
      'friend (Add a friend’s name)',
      'victim',
      'player',
      'fan',
      'crowd'
    ]
  },
  Job: {
    list_ID: 6,
    listCategory: 'Job',
    listWords: [
      'Teacher',
      'student',
      'lawyer',
      'doctor',
      'patient',
      'waiter',
      'secretary',
      'priest',
      'police',
      'army',
      'soldier',
      'artist',
      'author',
      'manager',
      'reporter',
      'actor'
    ]
  },
  Society: {
    list_ID: 7,
    listCategory: 'Society',
    listWords: [
      'religion',
      'heaven',
      'hell',
      'death',
      'medicine',
      'money',
      'dollar',
      'bill',
      'marriage',
      'wedding',
      'team',
      'race (ethnicity)',
      'sex (the act)',
      'sex (gender)',
      'murder',
      'prison',
      'technology',
      'energy',
      'war',
      'peace',
      'attack',
      'election',
      'magazine',
      'newspaper',
      'poison',
      'gun',
      'sport',
      'race (sport)',
      'exercise',
      'ball',
      'game',
      'price',
      'contract',
      'drug',
      'sign',
      'science',
      'God'
    ]
  },
  Art: {
    list_ID: 8,
    listCategory: 'Art',
    listWords: ['band', 'song', 'instrument (musical)', 'music', 'movie', 'art']
  },
  Beverages: {
    list_ID: 9,
    listCategory: 'Beverages',
    listWords: ['coffee', 'tea', 'wine', 'beer', 'juice', 'water', 'milk']
  },
  Food: {
    list_ID: 10,
    listCategory: 'Food',
    listWords: [
      'egg',
      'cheese',
      'bread',
      'soup',
      'cake',
      'chicken',
      'pork',
      'beef',
      'apple',
      'banana',
      'orange',
      'lemon',
      'corn',
      'rice',
      'oil',
      'seed',
      'knife',
      'spoon',
      'fork',
      'plate',
      'cup',
      'breakfast',
      'lunch',
      'dinner',
      'sugar',
      'salt',
      'bottle'
    ]
  },
  Home: {
    list_ID: 11,
    listCategory: 'Home',
    listWords: [
      'table',
      'chair',
      'bed',
      'dream',
      'window',
      'door',
      'bedroom',
      'kitchen',
      'bathroom',
      'pencil',
      'pen',
      'photograph',
      'soap',
      'book',
      'page',
      'key',
      'paint',
      'letter',
      'note',
      'wall',
      'paper',
      'floor',
      'ceiling',
      'roof',
      'pool',
      'lock',
      'telephone',
      'garden',
      'yard',
      'needle',
      'bag',
      'box',
      'gift',
      'card',
      'ring',
      'tool'
    ]
  },
  Electronics: {
    list_ID: 12,
    listCategory: 'Electronics',
    listWords: [
      'clock',
      'lamp',
      'fan',
      'cell phone',
      'network',
      'computer',
      'program (computer)',
      'laptop',
      'screen',
      'camera',
      'television',
      'radio'
    ]
  },
  Body: {
    list_ID: 13,
    listCategory: 'Body',
    listWords: [
      'head',
      'neck',
      'face',
      'beard',
      'hair',
      'eye',
      'mouth',
      'lip',
      'nose',
      'tooth',
      'ear',
      'tear (drop)',
      'tongue',
      'back',
      'toe',
      'finger',
      'foot',
      'hand',
      'leg',
      'arm',
      'shoulder',
      'heart',
      'blood',
      'brain',
      'knee',
      'sweat',
      'disease',
      'bone',
      'voice',
      'skin',
      'body'
    ]
  },
  Nature: {
    list_ID: 14,
    listCategory: 'Nature',
    listWords: [
      'sea',
      'ocean',
      'river',
      'mountain',
      'rain',
      'snow',
      'tree',
      'sun',
      'moon',
      'world',
      'Earth',
      'forest',
      'sky',
      'plant',
      'wind',
      'soil/earth',
      'flower',
      'valley',
      'root',
      'lake',
      'star',
      'grass',
      'leaf',
      'air',
      'sand',
      'beach',
      'wave',
      'fire',
      'ice',
      'island',
      'hill',
      'heat'
    ]
  },
  Materials: {
    list_ID: 15,
    listCategory: 'Materials',
    listWords: [
      'glass',
      'metal',
      'plastic',
      'wood',
      'stone',
      'diamond',
      'clay',
      'dust',
      'gold',
      'copper',
      'silver'
    ]
  },
  'Math/Measurements': {
    list_ID: 16,
    listCategory: 'Math/Measurements',
    listWords: [
      'meter',
      'centimeter',
      'kilogram',
      'inch',
      'foot',
      'pound',
      'half',
      'circle',
      'square',
      'temperature',
      'date',
      'weight',
      'edge',
      'corner'
    ]
  },
  'Misc Nouns': {
    list_ID: 17,
    listCategory: 'Misc Nouns',
    listWords: [
      'map',
      'dot',
      'consonant',
      'vowel',
      'light',
      'sound',
      'yes',
      'no',
      'piece',
      'pain',
      'injury',
      'hole',
      'image',
      'pattern'
    ]
  },
  Directions: {
    list_ID: 18,
    listCategory: 'Directions',
    listWords: [
      'top',
      'bottom',
      'side',
      'front',
      'back',
      'outside',
      'inside',
      'up',
      'down',
      'left',
      'right',
      'straight',
      'north',
      'south',
      'east',
      'west'
    ]
  },
  Seasons: {
    list_ID: 19,
    listCategory: 'Seasons',
    listWords: ['Summer', 'Spring', 'Winter', 'Fall']
  },
  Numbers: {
    list_ID: 20,
    listCategory: 'Numbers',
    listWords: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '30',
      '31',
      '32',
      '40',
      '41',
      '42',
      '50',
      '51',
      '52',
      '60',
      '61',
      '62',
      '70',
      '71',
      '72',
      '80',
      '81',
      '82',
      '90',
      '91',
      '92',
      '100',
      '101',
      '102',
      '110',
      '111',
      '1000',
      '1001',
      '10000',
      '100000',
      'million',
      'billion',
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th'
    ]
  },
  Months: {
    list_ID: 21,
    listCategory: 'Months',
    listWords: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
  },
  DaysOfWeek: {
    list_ID: 22,
    listCategory: 'Days of the week',
    listWords: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]
  },
  Time: {
    list_ID: 23,
    listCategory: 'Time',
    listWords: [
      'year',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'second ',
      'morning',
      'afternoon',
      'evening',
      'night'
    ]
  },
  Verbs: {
    list_ID: 24,
    listCategory: 'Verbs',
    listWords: [
      'work',
      'play',
      'walk',
      'run',
      'drive',
      'fly',
      'swim',
      'goC',
      'stop',
      'follow',
      'think',
      'speak/say',
      'eat',
      'drink',
      'kill',
      'die',
      'smile',
      'laugh',
      'cry',
      'buy',
      'pay',
      'sell',
      'shoot(a gun)',
      'learn',
      'jump',
      'smell',
      'hear (a sound)',
      'listen (music)',
      'taste',
      'touch',
      'see (a bird)',
      'watch (TV)',
      'kiss',
      'burn',
      'melt',
      'dig',
      'explode',
      'sit',
      'stand',
      'love',
      'pass by',
      'cut',
      'fight',
      'lie down',
      'dance',
      'sleep',
      'wake up',
      'sing',
      'count',
      'marry',
      'pray',
      'win',
      'lose',
      'mix/stir',
      'bend',
      'wash',
      'cook',
      'open',
      'close',
      'write',
      'call',
      'turn',
      'build',
      'teach',
      'grow',
      'draw',
      'feed',
      'catch',
      'throw',
      'clean',
      'find',
      'fall',
      'push',
      'pull',
      'carry',
      'break',
      'wear',
      'hang',
      'shake',
      'sign',
      'beat',
      'lift'
    ]
  },
  Adjectives: {
    list_ID: 25,
    listCategory: 'Adjectives',
    listWords: [
      'long',
      'short (long)',
      'tall',
      'short (vs tall)',
      'wide',
      'narrow',
      'big/large',
      'small/little',
      'slow',
      'fast',
      'hot',
      'cold',
      'warm',
      'cool',
      'new',
      'old (new)',
      'young',
      'old (young)',
      'good',
      'bad',
      'wet',
      'dry',
      'sick',
      'healthy',
      'loud',
      'quiet',
      'happy',
      'sad',
      'beautiful',
      'ugly',
      'deaf',
      'blind',
      'nice',
      'mean',
      'rich',
      'poor',
      'thick',
      'thin',
      'expensive',
      'cheap',
      'flat',
      'curved',
      'male',
      'female',
      'tight',
      'loose',
      'high',
      'low',
      'soft',
      'hard',
      'deep',
      'shallow',
      'clean',
      'dirty',
      'strong',
      'weak',
      'dead',
      'alive',
      'heavy',
      'light (heavy)',
      'dark',
      'light (dark)',
      'nuclear',
      'famous'
    ]
  },
  Pronouns: {
    list_ID: 26,
    listCategory: 'Pronouns',
    listWords: [
      'I',
      'you (singular)',
      'he',
      'she',
      'it',
      'we',
      'you (plural)',
      'they'
    ]
  }
}

export default sentences
