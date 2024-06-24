document.addEventListener('DOMContentLoaded', () => {
    const gameBtn = document.getElementById('gamebtn');
    const nutritionBtn = document.getElementById('nutritionbtn');
    const gameSection = document.getElementById('gameSection');
    const nutritionSection = document.getElementById('nutritionSection');

    console.log('DOMContentLoaded event fired');
    console.log('gameBtn:', gameBtn);
    console.log('nutritionBtn:', nutritionBtn);
    console.log('gameSection:', gameSection);
    console.log('nutritionSection:', nutritionSection);

    gameBtn.addEventListener('click', () => {
        gameBtn.classList.add('active');
        nutritionBtn.classList.remove('active');
        gameSection.style.display = 'block';
        nutritionSection.style.display = 'none';
    });

    nutritionBtn.addEventListener('click', () => {
        nutritionBtn.classList.add('active');
        gameBtn.classList.remove('active');
        nutritionSection.style.display = 'block';
        gameSection.style.display = 'none';
    });
});