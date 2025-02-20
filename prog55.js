//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log(`------------district having Highest +ve case----------`);
highest_positive = covid_data.reduce((highest, dist) => highest[2] > dist[2] ? highest : dist)
console.log(highest_positive[1]);

//2. district having Highest 1st dose vaccine
console.log(`------------district having Highest 1st dose vaccine----------`);
highest_first_dose = covid_data.reduce((highest, dist) => highest[5] > dist[5] ? highest : dist)
console.log(highest_first_dose[1]);

//3. district having lowest death rate
console.log(`------------district having lowest death rate----------`);
lowest_death_rate = covid_data.reduce((lowest, dist) => lowest[3] < dist[3] ? lowest : dist)
console.log(lowest_death_rate[1]);

//4. sort data with +ve case in descending order
console.log(`------------sort data with +ve case in descending order----------`);
covid_data.sort((a, b) => b[2] - a[2])
console.log(covid_data);

//5. is district with +ve cases > 15000
console.log(`------------sort data with +ve case in descending order----------`);
p = covid_data.some((dist) => dist[2] > 15000)
console.log(p ? 'Yes' : 'No');

//6. sort data with 1st dose vaccine ascending order
console.log(`------------sort data with 1st dose vaccine ascending order----------`);
covid_data.sort((a, b) => a[5] - b[5])
console.log(covid_data);

//7. Print Thrissur details
console.log(`------------Print Thrissur details----------`);
console.log(covid_data.find((dist) => dist[1] == 'Thrissur'));

//8. Print total number of positive cases
console.log(`------------Print total number of positive cases----------`);
//console.log(covid_data.reduce((sum, dist) => sum + dist[2], 0));
console.log(covid_data.map((item) => item[2]).reduce((sum, dist) => sum + dist));

//9. Print total number of curred cases
console.log(`------------Print total number of positive cases----------`);
console.log(covid_data.reduce((sum, dist) => sum + dist[4], 0));

//10. Print curred cases in Idukki
console.log(`------------Print curred cases in Idukki----------`);
cured_idukki = covid_data.find((dist) => dist[1] == 'Idukki')
console.log(cured_idukki[4]);
