# Captcha Solver Web Application

## Overview
This simple web application allows users to input a URL of a captcha image (defaulting to sample.png), loads the image, and simulates solving the captcha. It demonstrates how to fetch an image, convert it to base64, and integrate a mocked captcha solver.

## Features
- Enter custom captcha image URL or use the default sample.
- Load and display the captcha image.
- Click 'Solve Captcha' to receive a mocked solution.
- Designed as a single-page application.

## How to Run
1. Ensure the sample.png image is in the same directory.
2. Open `index.html` in a modern web browser.
3. Enter a captcha image URL if desired or use the default.
4. Click 'Load Image' to display the image.
5. Click 'Solve Captcha' to simulate solving.

## Notes
- The captcha solver used here is a mock and always returns '1234'.
- Extend it to incorporate real OCR or API calls for actual solving.

## License
See `LICENSE` file for licensing details.
