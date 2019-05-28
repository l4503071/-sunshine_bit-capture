const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const ip6 = devices['iPhone 6'];

module.exports = {
  async capture(options = {}) {
    const {
      url = 'https://github.com/l4503071',
      width = 375,
      height = 667,
      deviceScaleFactor = 2,
      fileName = 'capture.png',
    } = options;
    const browser = await puppeteer.launch({
      headless: true,  // 无 UI 模式
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    const params = {
      width,
      height,
      deviceScaleFactor,
    };
    for(key in params) {
      const value = params[key];
      if(!!key && typeof value === 'number' && !!ip6.viewport[key]) {
        ip6.viewport[key] = value;
      }
    }
    await page.emulate(ip6);
    await page.goto(url, {
      timeout: 30000,
      waitUntil: 'networkidle2',
    });
    await page.screenshot({
      path: fileName,
    });
    await browser.close();
  }
}