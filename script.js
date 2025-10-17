document.getElementById('solveBtn').addEventListener('click', () => {
  const url = document.getElementById('imageUrl').value;
  const resultPara = document.getElementById('result');
  resultPara.textContent = 'Processing...';
  fetch('https://api.example.com/solve-captcha?url=' + encodeURIComponent(url))
    .then(response => response.json())
    .then(data => {
      if (data && data.solution) {
        resultPara.textContent = 'Captcha Solution: ' + data.solution;
      } else {
        resultPara.textContent = 'Failed to solve captcha.';
      }
    })
    .catch(error => {
      resultPara.textContent = 'Error: ' + error;
    });
});