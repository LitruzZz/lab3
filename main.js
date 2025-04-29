let countries = [
	{
	  name: "Україна",
	  capital: "Київ",
	  governance: "Президентсько-парламентська республіка"
	},
	{
	  name: "Німеччина",
	  capital: "Берлін",
	  governance: "Федеративна республіка"
	},
	{
	  name: "Японія",
	  capital: "Токіо",
	  governance: "Конституційна монархія"
	}
  ];
  
  let populations = [
	{
	  country: "Україна",
	  genderMale: 18000000,
	  genderFemale: 20000000,
	  total: 38000000
	},
	{
	  country: "Німеччина",
	  genderMale: 41000000,
	  genderFemale: 42000000,
	  total: 83000000
	},
	{
	  country: "Японія",
	  genderMale: 61000000,
	  genderFemale: 64000000,
	  total: 125000000
	}
  ];
  
  let nationalities = [
	{
	  name: "Українець",
	  language: "Українська",
	  total: 35000000
	},
	{
	  name: "Німець",
	  language: "Німецька",
	  total: 78000000
	},
	{
	  name: "Японець",
	  language: "Японська",
	  total: 123000000
	}
  ];
  
  const countriesTab = document.getElementById('countriesTableBody');
  let countriesContent = "";
  for (let i = 0; i < countries.length; i++) {
	countriesContent += `
	  <tr>
		<td>${countries[i].name}</td>
		<td>${countries[i].capital}</td>
		<td>${countries[i].governance}</td>
	  </tr>
	`;
  }
  countriesTab.innerHTML = countriesContent;

  const populationsTab = document.getElementById('populationsTableBody');
  let populationsContent = "";
  for (let i = 0; i < populations.length; i++) {
	populationsContent += `
	  <tr>
		<td>${populations[i].country}</td>
		<td>${populations[i].genderMale}</td>
		<td>${populations[i].genderFemale}</td>
		<td>${populations[i].total}</td>
	  </tr>
	`;
  }
  populationsTab.innerHTML = populationsContent;
  
  const nationalitiesTab = document.getElementById('nationalitiesTableBody');
  let nationalitiesContent = "";
  for (let i = 0; i < nationalities.length; i++) {
	nationalitiesContent += `
	  <tr>
		<td>${nationalities[i].name}</td>
		<td>${nationalities[i].language}</td>
		<td>${nationalities[i].total}</td>
	  </tr>
	`;
  }
  nationalitiesTab.innerHTML = nationalitiesContent;
  
