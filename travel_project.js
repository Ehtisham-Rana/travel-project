const searchbtn = document.getElementById(searchbtn);

function searchCondition() {
    const input = document.getElementById('cityInput').value.toLowerCase();
    const resultDiv = document.getElementById('intro');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.countries.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const city = condition.cities;
          const temple = condition.temples;
          const beache = condition.beaches;
          

          resultDiv.innerHTML += `<h2>${city.name}</h2>`;
          resultDiv.innerHTML += `<img src="${city.imageURL}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Decription:</strong> ${city.description}</p>`;
          resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
          resultDiv.innerHTML += `<img src="${temple.imageURL}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Decription:</strong> ${temple.description}</p>`;
          resultDiv.innerHTML += `<h2>${beache.name}</h2>`;
          resultDiv.innerHTML += `<img src="${beache.imageURL}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Decription:</strong> ${beache.description}</p>`;
        
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
  searchbtn.addEventListener('click', searchCondition);