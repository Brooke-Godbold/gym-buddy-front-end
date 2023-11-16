import { dummyGymDetail, interceptRequests } from '../data/testdata';

describe('Gym Details', () => {
  let newPage;

  beforeEach(async () => {
    newPage = await browser.newPage();

    interceptRequests(
      newPage,
      ['localhost:8001', 'gyms'],
      200,
      dummyGymDetail()
    );
  });

  it('should display correct Gym details', async () => {
    await newPage.goto('http://localhost:5173/gym/1', {
      waitUntil: ['networkidle0'],
    });

    const nameSelector = await newPage.waitForSelector('#gym-name');
    const name = await nameSelector.evaluate((s) => s.textContent);
    expect(name).toBe('Sunnyvale Gym Group');

    const addressLine1Selector = await newPage.waitForSelector(
      '#gym-address-line-1'
    );
    const line1 = await addressLine1Selector.evaluate((s) => s.textContent);
    expect(line1).toBe('10 Downtown Road');

    const addressCitySelector = await newPage.waitForSelector(
      '#gym-address-city'
    );
    const city = await addressCitySelector.evaluate((s) => s.textContent);
    expect(city).toBe('Manchester');

    const addressCountySelector = await newPage.waitForSelector(
      '#gym-address-county'
    );
    const county = await addressCountySelector.evaluate((s) => s.textContent);
    expect(county).toBe('Northumbria');

    const addressPostcodeSelector = await newPage.waitForSelector(
      '#gym-address-postcode'
    );
    const postcode = await addressPostcodeSelector.evaluate(
      (s) => s.textContent
    );
    expect(postcode).toBe('ABC 7TY');
  });
});
