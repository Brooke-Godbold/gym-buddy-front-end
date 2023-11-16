import { dummyGym, dummyList, interceptRequests } from '../data/testdata';

describe('Search', () => {
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

  it('should return 0 search results', async () => {
    interceptRequests(newPage, ['localhost:8001', 'gyms'], 200, []);

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    await newPage.locator('#main-search-input').fill('test');

    const searchButton = await newPage.waitForSelector('#main-search-button');
    await searchButton.click();

    const resultListSelector = await newPage.waitForSelector('#list-container');
    const resultCount = await resultListSelector.evaluate(
      (results) => results.childElementCount
    );
    expect(resultCount).toBe(1);

    const resultsErrorSelector = await newPage.waitForSelector(
      '#page-error-text'
    );
    const resultsError = await resultsErrorSelector.evaluate(
      (error) => error.textContent
    );
    expect(resultsError).toBe('Looks like nothing was found for that search!');
  });

  it('should return 3 search results', async () => {
    const dummyGymList = dummyList(dummyGym(), 3);

    interceptRequests(newPage, ['localhost:8001', 'gyms'], 200, dummyGymList);

    await newPage.goto('http://localhost:5173/search', {
      waitUntil: ['networkidle0'],
    });

    await newPage.locator('#main-search-input').fill('test');

    const searchButton = await newPage.waitForSelector('#main-search-button');
    await searchButton.click();

    const resultListSelector = await newPage.waitForSelector('#list-container');
    const resultCount = await resultListSelector.evaluate(
      (results) => results.childElementCount
    );
    expect(resultCount).toBe(3);
  });
});
