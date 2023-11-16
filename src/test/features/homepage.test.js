import {
  dummyGym,
  dummyList,
  dummyPostcodeResponse,
  dummyReview,
} from '../data/testdata';

describe('Home Page', () => {
  let newPage;

  beforeEach(async () => {
    newPage = await browser.newPage();

    await newPage.evaluateOnNewDocument(function () {
      navigator.geolocation.getCurrentPosition = (cb) =>
        cb({
          coords: {
            accuracy: 21,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 23.129163,
            longitude: 113.264435,
            speed: null,
          },
        });
    });
  });

  it('should have no Recent Reviews', async () => {
    await newPage.setRequestInterception(true);
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.isInterceptResolutionHandled()) return;
      if (
        interceptedRequest.url().includes('localhost:8001') &&
        interceptedRequest.url().includes('reviews')
      )
        interceptedRequest.respond({
          status: 200,
          content: 'application/json',
          body: JSON.stringify([]),
        });
      else interceptedRequest.continue();
    });

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    const recentReviewsSelector = await newPage.waitForSelector(
      '#recent-reviews-list'
    );

    const recentReviewsCount = await recentReviewsSelector.evaluate(
      (recentReviews) => recentReviews.childElementCount
    );
    expect(recentReviewsCount).toBe(0);
  });

  it('should have 5 Recent Reviews', async () => {
    const dummyReviewList = dummyList(dummyReview(), 5);

    await newPage.setRequestInterception(true);
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.isInterceptResolutionHandled()) return;
      if (
        interceptedRequest.url().includes('localhost:8001') &&
        interceptedRequest.url().includes('reviews')
      )
        interceptedRequest.respond({
          status: 200,
          content: 'application/json',
          body: JSON.stringify(dummyReviewList),
        });
      else interceptedRequest.continue();
    });

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    const recentReviewsSelector = await newPage.waitForSelector(
      '#recent-reviews-list'
    );

    const recentReviewsCount = await recentReviewsSelector.evaluate(
      (recentReviews) => recentReviews.childElementCount
    );
    expect(recentReviewsCount).toBe(5);
  });

  it('should have 0 Nearby Gyms, and 5 Gyms total', async () => {
    const dummyGymList = dummyList(dummyGym(), 5);

    await newPage.setRequestInterception(true);
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.isInterceptResolutionHandled()) return;
      if (interceptedRequest.url().includes('api.postcodes.io')) {
        return interceptedRequest.respond({
          status: 200,
          content: 'application/json',
          body: JSON.stringify(dummyPostcodeResponse()),
        });
      }
      if (
        interceptedRequest.url().includes('localhost:8001') &&
        interceptedRequest.url().includes('gyms')
      ) {
        if (searchQueryValue(interceptedRequest.url())) {
          return interceptedRequest.respond({
            status: 200,
            content: 'application/json',
            body: JSON.stringify([]),
          });
        } else {
          return interceptedRequest.respond({
            status: 200,
            content: 'application/json',
            body: JSON.stringify(dummyGymList),
          });
        }
      } else interceptedRequest.continue();
    });

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    const nearbyGymsSelector = await newPage.waitForSelector(
      '#nearby-gyms-list'
    );
    const nearbyGymsCount = await nearbyGymsSelector.evaluate(
      (nearbyGyms) => nearbyGyms.childElementCount
    );
    expect(nearbyGymsCount).toBe(5);

    const gymsListHeadingSelector = await newPage.waitForSelector(
      '#gyms-list-heading'
    );
    const gymsListHeading = await gymsListHeadingSelector.evaluate(
      (h) => h.textContent
    );
    expect(gymsListHeading).toBe('See our Gyms');
  });

  it('should have 2 Nearby Gyms', async () => {
    const dummyGymList = dummyList(dummyGym(), 5);

    const dummyNearbyGyms = dummyList(dummyGym(), 2);

    await newPage.setRequestInterception(true);
    newPage.on('request', (interceptedRequest) => {
      if (interceptedRequest.isInterceptResolutionHandled()) return;
      if (interceptedRequest.url().includes('api.postcodes.io')) {
        return interceptedRequest.respond({
          status: 200,
          content: 'application/json',
          body: JSON.stringify(dummyPostcodeResponse()),
        });
      }
      if (
        interceptedRequest.url().includes('localhost:8001') &&
        interceptedRequest.url().includes('gyms')
      ) {
        if (searchQueryValue(interceptedRequest.url())) {
          return interceptedRequest.respond({
            status: 200,
            content: 'application/json',
            body: JSON.stringify(dummyNearbyGyms),
          });
        } else {
          return interceptedRequest.respond({
            status: 200,
            content: 'application/json',
            body: JSON.stringify(dummyGymList),
          });
        }
      } else interceptedRequest.continue();
    });

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    const nearbyGymsSelector = await newPage.waitForSelector(
      '#nearby-gyms-list'
    );
    const nearbyGymsCount = await nearbyGymsSelector.evaluate(
      (nearbyGyms) => nearbyGyms.childElementCount
    );
    expect(nearbyGymsCount).toBe(2);

    const gymsListHeadingSelector = await newPage.waitForSelector(
      '#gyms-list-heading'
    );
    const gymsListHeading = await gymsListHeadingSelector.evaluate(
      (h) => h.textContent
    );
    expect(gymsListHeading).toBe('Gyms Near You');
  });
});

function searchQueryValue(queryParam) {
  return queryParam
    .split('?')[1]
    ?.split('&')
    ?.find((q) => q.includes('search'))
    ?.split('=')[1];
}
