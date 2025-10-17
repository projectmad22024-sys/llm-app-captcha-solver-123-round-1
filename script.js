const defaultImage = 'sample.png';
const imageUrlInput = document.getElementById('image-url');
const captchaImg = document.getElementById('captcha-img');
const resultDiv = document.getElementById('result');
const loadBtn = document.getElementById('load-btn');
const solveBtn = document.getElementById('solve-btn');

// Load the selected image URL
loadBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim() || defaultImage;
  captchaImg.src = url;
  resultDiv.textContent = '';
});

// Function to fetch the image and convert to base64
function fetchImageAsBase64(url) {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    });
}

// Function to mock captcha solving
function mockCaptchaSolver(base64Image) {
  // For demonstration, return a fixed string or extract from image if desired
  // Here, just returning '1234' as a demo
  return Promise.resolve('1234');
}

solveBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim() || defaultImage;
  fetchImageAsBase64(url)
    .then(base64 => {
      resultDiv.textContent = 'Solving...';
      return mockCaptchaSolver(base64);
    })
    .then(solution => {
      resultDiv.textContent = 'Captcha Solution: ' + solution;
    })
    .catch(error => {
      resultDiv.textContent = 'Error: ' + error;
    });
});
