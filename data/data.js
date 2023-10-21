export const gymsData = [
  {
    gymId: 1,
    name: 'Sunnyvale Gym Group',
    address: {
      line1: '10 Downtown Road',
      city: 'Manchester',
      county: 'Northumbria',
      postcode: 'AB6 7TY',
    },
    avgRating: 5.5,
  },
  {
    gymId: 2,
    name: 'Anytime Fitness',
    address: {
      line1: '14 Russia Dock Road',
      city: 'London',
      county: 'London',
      postcode: 'SE14 8YY',
    },
    avgRating: null,
  },
  {
    gymId: 3,
    name: 'Lobster Gym',
    address: {
      line1: '111 Fish Road',
      city: 'Chelmsford',
      county: 'Essex',
      postcode: 'CM7 6TT',
    },
    avgRating: null,
  },
  {
    gymId: 4,
    name: 'Lobster Gym',
    address: {
      line1: '111 Fish Road',
      city: 'Chelmsford',
      county: 'Essex',
      postcode: 'CM7 6TT',
    },
    avgRating: null,
  },
  {
    gymId: 5,
    name: 'Lobster Gym',
    address: {
      line1: '111 Fish Road',
      city: 'Chelmsford',
      county: 'Essex',
      postcode: 'CM7 6TT',
    },
    avgRating: null,
  },
  {
    gymId: 6,
    name: 'Lobster Gym',
    address: {
      line1: '111 Fish Road',
      city: 'Chelmsford',
      county: 'Essex',
      postcode: 'CM7 6TT',
    },
    avgRating: null,
  },
  {
    gymId: 7,
    address: {
      line1: '15 Test Street',
      city: 'Maldon',
      county: 'Essex',
      postcode: 'TS1 S31',
    },
    name: 'The Test Gym',
    avgRating: null,
  },
  {
    gymId: 8,
    address: {
      line1: '15 Test Street',
      city: 'Maldon',
      county: 'Essex',
      postcode: 'TS1 S31',
    },
    name: 'The Test Gym 2',
    avgRating: null,
  },
];

export const gymData = {
  gymId: 1,
  name: 'Sunnyvale Gym Group',
  address: {
    line1: '10 Downtown Road',
    city: 'Manchester',
    county: 'Northumbria',
    postcode: 'AB6 7TY',
  },
  avgRating: 5.5,
  reviews: [
    {
      reviewId: 1,
      userId: 43,
      gymId: 1,
      rating: 7,
      content:
        'Integer luctus semper sollicitudin. Phasellus ex purus, facilisis eget mauris non, ultrices suscipit quam. Praesent imperdiet pharetra porttitor. Vestibulum laoreet velit sed risus malesuada convallis. Nam eros purus, placerat eu fringilla nec, malesuada et arcu. Nulla eleifend nisl eu purus pharetra, sit amet mollis odio tincidunt. Aliquam sagittis tristique augue eget vehicula. Maecenas eu luctus felis. Suspendisse nibh tellus, commodo ut sem in, accumsan aliquet ex. Sed venenatis ultricies ex nec egestas.',
      votes: [],
    },
    {
      reviewId: 2,
      content:
        'Integer luctus semper sollicitudin. Phasellus ex purus, facilisis eget mauris non, ultrices suscipit quam. Praesent imperdiet pharetra porttitor. Vestibulum laoreet velit sed risus malesuada convallis. Nam eros purus, placerat eu fringilla nec, malesuada et arcu. Nulla eleifend nisl eu purus pharetra, sit amet mollis odio tincidunt. Aliquam sagittis tristique augue eget vehicula. Maecenas eu luctus felis. Suspendisse nibh tellus, commodo ut sem in, accumsan aliquet ex. Sed venenatis ultricies ex nec egestas.',
      gymId: 1,
      rating: 4,
      userId: 21,
      votes: [],
    },
  ],
  equipment: [
    {
      equipmentId: 1,
      userId: 54,
      gymId: 1,
      name: 'Cable Machine',
      quality: [
        {
          userId: 54,
          rating: 4,
        },
        {
          userId: 74,
          rating: 5,
        },
      ],
      accuracy: [
        {
          userId: 64,
          isCorrect: false,
          _id: '652848238ee2cb81d2110eb3',
        },
        {
          userId: 75,
          isCorrect: false,
          _id: '652848298ee2cb81d2110ec2',
        },
      ],
    },
    {
      equipmentId: 2,
      accuracy: [],
      gymId: 1,
      name: 'Rowing Machine',
      quality: [
        {
          userId: 79,
          rating: 3,
        },
      ],
      userId: 79,
    },
    {
      equipmentId: 3,
      accuracy: [],
      gymId: 1,
      name: 'Leg Press',
      quality: [
        {
          userId: 86,
          rating: 8,
        },
      ],
      userId: 86,
    },
    {
      equipmentId: 4,
      accuracy: [],
      gymId: 1,
      name: 'Leg Press 2',
      quality: [
        {
          userId: 98,
          rating: 8,
        },
      ],
      userId: 98,
    },
  ],
};
