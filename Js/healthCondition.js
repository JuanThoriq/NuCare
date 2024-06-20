const healthInfo = {
    toddler: `
        <h2 style="color: #05B98A;">Toddler </h2>
        <h4>1-3 Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> About 1,000-1,300 calories per day.</p>
        <p>2. <strong>Protein:</strong> 13 grams per day.</p>
        <p>3. <strong>Carbohydrates:</strong> 130 grams per day.</p>
        <p>4. <strong>Fiber:</strong> 19 grams per day.</p>
        <p>5. <strong>Fats:</strong> 30-40% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 300 mcg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 15 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 700 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 7 mg</p>
    `,
    earlychildhood: `
        <h2 style="color: #05B98A;">Early Childhood </h2>
        <h4>4-8 Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> About 1,200-1,800 calories per day.</p>
        <p>2. <strong>Protein:</strong> 19 grams per day.</p>
        <p>3. <strong>Carbohydrates:</strong> 130 grams per day.</p>
        <p>4. <strong>Fiber:</strong> 25 grams per day.</p>
        <p>5. <strong>Fats:</strong> 25-35% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 400 mcg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 25 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 1,000 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 10 mg</p>
    `,
    latechildhood: `
        <h2 style="color: #05B98A;">Late Childhood</h2>
        <h4>9-12 Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> About 1,600-2,600 calories per day (depending on activity level).</p>
        <p>2. <strong>Protein:</strong> 34 grams per day.</p>
        <p>3. <strong>Carbohydrates:</strong> 130 grams per day.</p>
        <p>4. <strong>Fiber:</strong> 26-31 grams per day.</p>
        <p>5. <strong>Fats:</strong> 25-35% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 600 mcg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 45 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 1,300 mg</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 8 mg</p>
    `,
    teenagers: `
        <h2 style="color: #05B98A;">Teenagers</h2>
        <h4>13-19 Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> Calorie needs vary based on activity level and gender:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Teenage boys: 2,200-3,200 calories per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Teenage girls: 1,800-2,400 calories per day.</p>
        <p>2. <strong>Protein:</strong> About 46-52 grams per day for teenage girls and 52-56 grams per day for teenage boys.</p>
        <p>3. <strong>Carbohydrates:</strong> 45-65% of total daily calories. For example, if a teenager needs 2,500 calories, 1,125-1,625 calories should come from carbohydrates (about 281-406 grams of carbohydrates).</p>
        <p>4. <strong>Fiber:</strong> 25-30 grams per day for teenage girls and 31-38 grams per day for teenage boys.</p>
        <p>5. <strong>Fats:</strong> 25-35% of total daily calories, with saturated fats less than 10% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 700-900 mcg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 65-75 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin D: 600 IU per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 1,300 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 8-15 mg per day for teenage girls (depending on menstruation) and 11 mg per day for teenage boys.</p>
    `,
    adults: `
        <h2 style="color: #05B98A;">Adults</h2>
        <h4>20-64 Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> Calorie needs vary based on activity level and gender:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Men: 2,200-3,000 calories per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Women: 1,800-2,400 calories per day.</p>
        <p>2. <strong>Protein:</strong> About 46-56 grams per day. Protein needs can be calculated as approximately 0.8 grams per kilogram of body weight.</p>
        <p>3. <strong>Carbohydrates:</strong> 45-65% of total daily calories. For example, if an adult needs 2,500 calories, 1,125-1,625 calories should come from carbohydrates (about 281-406 grams of carbohydrates).</p>
        <p>4. <strong>Fiber:</strong> 25-30 grams per day for women and 30-38 grams per day for men.</p>
        <p>5. <strong>Fats:</strong> 20-35% of total daily calories, with saturated fats less than 10% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 700-900 mcg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 75-90 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin D: 600 IU per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 1,000 mg per day (1,200 mg per day for women over 50).</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 8 mg per day for men and 18 mg per day for women (before menopause).</p>
    `,
    seniors: `
        <h2 style="color: #05B98A;">Seniors</h2>
        <h4>65+ Years</h4>
        <br>
        <p>1. <strong>Calories:</strong> Calorie needs vary based on activity level and gender:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Men: 2,000-2,600 calories per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Women: 1,600-2,200 calories per day.</p>
        <p>2. <strong>Protein:</strong> About 56 grams per day for men and 46 grams per day for women. Protein needs can be calculated as approximately 0.8 grams per kilogram of body weight, but older adults may benefit from slightly higher intake (1.0-1.2 grams per kilogram).</p>
        <p>3. <strong>Carbohydrates:</strong> 45-65% of total daily calories. For example, if an adult needs 2,000 calories, 900-1,300 calories should come from carbohydrates (about 225-325 grams of carbohydrates).</p>
        <p>4. <strong>Fiber:</strong> 21 grams per day for women and 30 grams per day for men.</p>
        <p>5. <strong>Fats:</strong> 20-35% of total daily calories, with saturated fats less than 10% of total calories.</p>
        <p>6. <strong>Vitamins and Minerals:</strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin A: 700-900 mcg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin C: 75-90 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin D: 800 IU per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Calcium: 1,200 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Iron: 8 mg per day.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;- Vitamin B12: 2.4 mcg per day.</p>
    `
};

const diseaseInfo = {
    diabetes: `
        <h2 style="color: #05B98A;">Diabetes</h2>
        <br>
        <h3>What</h3>
        <p>Diabetes is a chronic condition that affects the way the body processes blood sugar (glucose).</p>
        <h3>Why</h3>
        <p>It is often triggered by poor diet, lack of exercise, obesity, and genetic factors.</p>
        <h3>How</h3>
        <p>Diabetes can lead to severe health issues like heart disease, kidney failure, and nerve damage.</p>
        <h3>Solution</h3>
        <p>Maintaining a balanced diet rich in fiber, lean proteins, and healthy fats, along with regular exercise, can help manage and prevent diabetes.</p>
    `,
    anemia: `
        <h2 style="color: #05B98A;">Anemia</h2>
        <br>
        <h3>What</h3>
        <p>Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.</p>
        <h3>Why</h3>
        <p>It can be caused by a diet low in iron, vitamin B12, or folate, and chronic diseases.</p>
        <h3>How</h3>
        <p>Anemia can cause fatigue, weakness, and shortness of breath.</p>
        <h3>Solution</h3>
        <p>Eating iron-rich foods like lean meats, beans, and fortified cereals, and ensuring adequate intake of vitamin B12 and folate can help treat and prevent anemia.</p>
    `,
    osteoporosis: `
        <h2 style="color: #05B98A;">Osteoporosis</h2>
        <br>
        <h3>What</h3>
        <p>Osteoporosis is a disease that weakens bones, making them fragile and more likely to break.</p>
        <h3>Why</h3>
        <p>It is often caused by a lack of calcium and vitamin D, sedentary lifestyle, and hormonal changes.</p>
        <h3>How</h3>
        <p>Osteoporosis can lead to fractures, especially in the hip, spine, and wrist.</p>
        <h3>Solution</h3>
        <p>Consuming a diet rich in calcium and vitamin D, along with regular weight-bearing exercise, can help strengthen bones and prevent osteoporosis.</p>
    `,
    obesity: `
        <h2 style="color: #05B98A;">Obesity</h2>
        <br>
        <h3>What</h3>
        <p>Obesity is a condition characterized by excessive body fat that increases the risk of health problems.</p>
        <h3>Why</h3>
        <p>It is often caused by overeating, poor diet, lack of physical activity, and genetic factors.</p>
        <h3>How</h3>
        <p>Obesity can lead to serious health issues like heart disease, diabetes, and certain cancers.</p>
        <h3>Solution</h3>
        <p>A balanced diet, regular exercise, and lifestyle changes are essential to prevent and manage obesity.</p>
    `,
    stunting: `
        <h2 style="color: #05B98A;">Stunting</h2>
        <br>
        <h3>What</h3>
        <p>Stunting is a condition characterized by impaired growth and development in children due to chronic malnutrition.</p>
        <h3>Why</h3>
        <p>It is often caused by poor nutrition, repeated infections, and inadequate psychosocial stimulation.</p>
        <h3>How</h3>
        <p>Stunting can lead to severe health issues, including reduced cognitive and physical development, lower educational performance, and increased susceptibility to diseases.</p>
        <h3>Solution</h3>
        <p>Improving maternal nutrition, ensuring adequate infant and young child feeding practices, and promoting proper sanitation and hygiene can help prevent and reduce stunting.</p>
    `
};

function showSection(section) {
    // Hapus kelas 'active' dari semua link
    document.querySelectorAll('.menu-link').forEach(function(link) {
        link.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke link yang diklik
    if (section === 'health') {
        document.getElementById('diet-link').classList.add('active');
    } else if (section === 'disease') {
        document.getElementById('calculator-link').classList.add('active');
    }

    // Sembunyikan semua section dan tampilkan section yang dipilih
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}


function openPopup(ageGroup) {
    document.getElementById('popup-text').innerHTML = healthInfo[ageGroup];
    document.getElementById('popup').style.display = 'flex';
}

function openDiseasePopup(disease) {
    document.getElementById('popup-text').innerHTML = diseaseInfo[disease];
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Initial display
showSection('health');
