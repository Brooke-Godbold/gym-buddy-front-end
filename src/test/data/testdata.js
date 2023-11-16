const dummyReview = () => {
  return {
    userId: 1,
    reviewId: 1,
    gymId: 1,
    rating: 5,
    summary: 'Lorem ipsum dolor sit amet consectetur',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt repellat saepe, asperiores sequi iste harum facere sit sunt labore veniam, reprehenderit voluptatibus, tempore dolore. Doloribus iure labore ab recusandae!',
    votes: [],
  };
};

const dummyGym = () => {
  return {
    gymId: 1,
    name: 'Sunnyvale Gym Group',
    address: {
      line1: '10 Downtown Road',
      city: 'Manchester',
      county: 'Northumbria',
      postcode: 'AB6 7TY',
    },
    avgRating: 6.315789473684211,
  };
};

const dummyGymDetail = () => {
  return {
    gymId: 1,
    name: 'Sunnyvale Gym Group',
    address: {
      line1: '10 Downtown Road',
      city: 'Manchester',
      county: 'Northumbria',
      postcode: 'ABC 7TY',
    },
    isVisible: true,
    avgRating: 6.315789473684211,
    reviews: [
      {
        reviewId: 1,
        userId: 43,
        gymId: 1,
        rating: 8,
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt repellat saepe, asperiores sequi iste harum facere sit sunt labore veniam, reprehenderit voluptatibus, tempore dolore. Doloribus iure labore ab recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt repellat saepe, asperiores sequi iste harum facere sit sunt labore veniam, reprehenderit voluptatibus, tempore dolore. Doloribus iure labore ab recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt repellat saepe, asperiores sequi iste harum facere sit sunt labore veniam, reprehenderit voluptatibus, tempore dolore. Doloribus iure labore ab recusandae!',
        votes: [1, 32],
        summary: 'Lorem ipsum dolor sit amet consectetur',
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
        ],
        accuracy: [
          {
            userId: 64,
            isCorrect: true,
          },
        ],
      },
    ],
  };
};

const dummyList = (item, number) => {
  const list = [];
  for (let i = 0; i < number; i++) {
    list.push(item);
  }
  return list;
};

const dummyPostcodeResponse = () => {
  return {
    status: 200,
    result: [
      {
        outcode: 'SE16',
      },
    ],
  };
};

async function interceptRequests(
  page,
  urlStringList,
  responseCode,
  responseJSON
) {
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.isInterceptResolutionHandled()) return;
    if (urlStringList.every((item) => interceptedRequest.url().includes(item)))
      interceptedRequest.respond({
        status: responseCode,
        content: 'application/json',
        body: JSON.stringify(responseJSON),
      });
    else interceptedRequest.continue();
  });
}

export {
  dummyReview,
  dummyGym,
  dummyGymDetail,
  dummyList,
  dummyPostcodeResponse,
  interceptRequests,
};
