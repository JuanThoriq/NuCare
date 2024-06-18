document.addEventListener('DOMContentLoaded', function () {
    // Pilih elemen yang diperlukan
    const calorieButton = document.getElementById('calculate-calorie');
    const bmiButton = document.getElementById('calculate-bmi');
    const genderButtonsCalorie = document.querySelectorAll('#calorie-form .gender-button');
    const genderButtonsBMI = document.querySelectorAll('#bmi-form .gender-button');
    const resultOverlay = document.getElementById('overlay-result');
    const resultContent = document.querySelector('.result-content');

    const overlayCalcu = document.getElementById('overlay-calcu');
    const overlayResult = document.getElementById('overlay-result');
    const overlayCalorieContent = document.getElementById('overlay-calorie-content');
    const overlayBmiContent = document.getElementById('overlay-bmi-content');

    document.getElementById('see-more-calorie').addEventListener('click', () => {
        overlayCalcu.style.display = 'flex';
        overlayCalorieContent.style.display = 'block';
        overlayBmiContent.style.display = 'none';
    });

    document.getElementById('see-more-bmi').addEventListener('click', () => {
        overlayCalcu.style.display = 'flex';
        overlayCalorieContent.style.display = 'none';
        overlayBmiContent.style.display = 'block';
    });

    // Fungsi untuk menampilkan overlay hasil
    function showResult(content) {
        resultContent.innerHTML = content;
        resultOverlay.style.display = 'flex';
    }

    // Fungsi untuk menghitung kalori
    function calculateCalories() {
        const gender = document.querySelector('#calorie-form .gender-button.active')?.dataset.gender;
        const weight = parseFloat(document.getElementById('weight-calorie').value);
        const height = parseFloat(document.getElementById('height-calorie').value);
        const age = parseInt(document.getElementById('age-calorie').value);

        if (!gender || !weight || !height || !age) {
            alert("Please fill all fields");
            return;
        }

        // Menghitung kalori berdasarkan rumus BMR (Basal Metabolic Rate)
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        showResult(`<h3>Calorie Calculator Result</h3><p>Your daily calorie needs are approximately <b>${Math.round(bmr)}</b> calories.</p>`);
    }

    // Fungsi untuk menghitung BMI
    function calculateBmi() {
        const gender = document.querySelector('#bmi-form .gender-button.active')?.dataset.gender;
        const weight = parseFloat(document.getElementById('weight-bmi').value);
        const height = parseFloat(document.getElementById('height-bmi').value) / 100; // convert cm to m

        if (!gender || !weight || !height) {
            alert("Please fill all fields");
            return;
        }

        // Menghitung BMI
        const bmi = weight / (height * height);
        let category, advice;
        if (bmi < 18.5) {
            category = 'Underweight';
            advice = "You are underweight. Ensure you are consuming enough calories and nutrients.";
        } else if (bmi < 24.9) {
            category = 'Normal weight';
            advice = "You have a normal BMI. Maintain a balanced diet and active lifestyle.";
        } else if (bmi < 29.9) {
            category = 'Overweight';
            advice = "You are overweight. Consider a balanced diet and regular exercise.";
        } else {
            category = 'Obesity';
            advice = "You are obese. Consult with a healthcare provider for weight management.";
        }

        showResult(`<h3>BMI Calculator Result</h3><p>Your BMI is <b>${bmi.toFixed(1)}</b>, which is considered ${category}. ${advice}</p>`);
    }

    // Tambahkan event listener ke tombol "Calculate" untuk kalori
    calorieButton.addEventListener('click', calculateCalories);

    // Tambahkan event listener ke tombol "Calculate" untuk BMI
    bmiButton.addEventListener('click', calculateBmi);

    // Event listener untuk gender buttons pada kalkulator kalori
    genderButtonsCalorie.forEach(button => {
        button.addEventListener('click', function () {
            genderButtonsCalorie.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Event listener untuk gender buttons pada kalkulator BMI
    genderButtonsBMI.forEach(button => {
        button.addEventListener('click', function () {
            genderButtonsBMI.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
