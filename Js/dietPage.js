document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.right-button');
    const prevButton = document.querySelector('.left-button');
    const overlay = document.getElementById('overlay');
    const chooseDiet = document.getElementById('choose-diet');

    let currentSlide = 0;
    const slideWidth = slides[0].getBoundingClientRect().width + 24; // Lebar slide ditambah margin

    const updateSlidePosition = () => {
        track.style.transition = 'transform 0.5s ease-in-out'; // Pastikan transisi diatur di sini juga
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    };

    const moveToSlide = (slideIndex) => {
        currentSlide = slideIndex;
        updateSlidePosition();
    };

    nextButton.addEventListener('click', () => {
        if (currentSlide < slides.length - 4) {
            currentSlide++;
            updateSlidePosition();
        } else {
            currentSlide = 0; // Kembali ke awal setelah mencapai batas akhir
            updateSlidePosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlidePosition();
        } else {
            currentSlide = slides.length - 4; // Pindah ke akhir setelah mencapai awal
            updateSlidePosition();
        }
    });

    window.showDietInfo = (dietName) => {
        overlay.style.display = 'flex';
        overlay.innerHTML = ''; // Kosongkan konten yang sebelumnya ada di dalam overlay
    
        let content = '';
    
        switch (dietName) {
            case 'Keto Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Keto <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        The ketogenic diet is a high-fat, moderate-protein, and very low-carbohydrate diet. It aims to shift the body's metabolism from burning glucose (sugar) to burning fat, a state known as ketosis.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <p>Can lead to weight loss, improved blood sugar control, and increased energy levels.</p>
                        </ul>
    
                        <h2>Foods to Eat</h2>
                        <ul>
                            <li>Meat, fatty fish, eggs, butter, oils, nuts, seeds, low-carb vegetables, and high-fat dairy products.</li>
                        </ul>
    
                        <h2>Foods to Avoid</h2>
                        <ul>
                            <li>Sugary foods, grains, starchy vegetables, and most fruits.</li>
                        </ul>
                    </div>
                `;
                break;
    
            case 'Mediterranean Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Mediterranean <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        The Mediterranean diet emphasizes eating primarily plant-based foods, such as fruits and vegetables, whole grains, legumes, and nuts. It also includes healthy fats and seafood, with moderate consumption of poultry, eggs, and dairy products.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <li>Promotes heart health, weight loss, and may reduce the risk of chronic diseases.</li>
                        </ul>
    
                        <h2>Foods to Eat</h2>
                        <ul>
                            <li>Vegetables, fruits, whole grains, nuts, seeds, legumes, seafood, extra virgin olive oil.</li>
                        </ul>
    
                        <h2>Foods to Limit</h2>
                        <ul>
                            <li>Red meat and processed meat, refined grains, added sugars, and unhealthy fats.</li>
                        </ul>
                    </div>
                `;
                break;
    
            case 'Vegan Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Vegan <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        The vegan diet excludes all animal products, including meat, dairy, eggs, and honey. It primarily focuses on plant-based foods such as fruits, vegetables, grains, nuts, seeds, and legumes.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <li>May promote weight loss, improve heart health, and reduce the risk of certain cancers.</li>
                        </ul>
    
                        <h2>Foods to Eat</h2>
                        <ul>
                            <li>Fruits, vegetables, grains (quinoa, rice, oats), nuts, seeds, tofu, tempeh, plant-based milk.</li>
                        </ul>
    
                        <h2>Foods to Avoid</h2>
                        <ul>
                            <li>Animal products (meat, dairy, eggs), honey, gelatin, and some processed foods that may contain animal-derived ingredients.</li>
                        </ul>
                    </div>
                `;
                break;
    
            case 'Paleo Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Paleo <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        The paleo diet focuses on eating foods that were presumably available to our ancestors during the Paleolithic era, such as lean meats, fish, fruits, vegetables, nuts, and seeds. It excludes processed foods, grains, legumes, and dairy products.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <li>May aid in weight loss, improve blood sugar control, and reduce inflammation.</li>
                        </ul>
    
                        <h2>Foods to Eat</h2>
                        <ul>
                            <li>Lean meats, fish, fruits, vegetables, nuts, seeds, healthy fats (coconut oil, olive oil).</li>
                        </ul>
    
                        <h2>Foods to Avoid</h2>
                        <ul>
                            <li>Processed foods, grains (wheat, oats, barley), legumes (beans, lentils), dairy products, refined sugars, and vegetable oils.</li>
                        </ul>
                    </div>
                `;
                break;
            case 'Dash Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Dash <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        The Dietary Approaches to Stop Hypertension (DASH) diet is designed to combat high blood pressure. It emphasizes nutrient-rich foods and reduces sodium intake.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <li>Proven to lower blood pressure and improve heart health.</li>
                        </ul>
    
                        <h2>Foods to Eat</h2>
                        <ul>
                            <li>Fruits, vegetables, whole grains, lean proteins, and low-fat dairy.</li>
                        </ul>
    
                        <h2>Foods to Avoid</h2>
                        <ul>
                            <li>High-sodium foods, sweets, sugary beverages, and red meats.</li>
                        </ul>
                    </div>
                `;
            break;
            case 'Intermittent Diet':
                content = `
                    <div class="overlay-content">
                        <h1>Intermittent <span>Diet</span></h1>
                        <p><strong>Overview</strong><br>
                        Intermittent fasting is an eating pattern that cycles between periods of fasting and eating. It doesn’t specify which foods to eat but rather when to eat them.</p>
    
                        <h2>Benefits</h2>
                        <ul>
                            <li>Can aid in weight loss, improve metabolic health, and promote longevity.</li>
                        </ul>
    
                        <h2>Popular Method</h2>
                        <ul>
                            <li>The 16/8 method (fasting for 16 hours and eating within an 8-hour window), and the 5:2 diet (eating normally for 5 days and restricting calories for 2 days).</li>
                        </ul>
                    </div>
                `;
            break;
            default:
                content = `
                    <div class="overlay-content">
                        <h1>${dietName}</h1>
                        <p>Information not available.</p>
                    </div>
                `;
                break;
        }
    
        overlay.insertAdjacentHTML('beforeend', content);
    };

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    

});


document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.createElement('div');
    const closeBtn = document.getElementById('close-btn');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = `
        <ul>
            <li><a href="#">Basic Nutrition</a></li>
            <li><a href="#">Health Condition</a></li>
            <li><a href="#">Diet Health</a></li>
        </ul>
    `;
    document.body.appendChild(sidebar);

    burgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        burgerMenu.classList.toggle('toggle');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        burgerMenu.classList.remove('toggle');
    });

    document.addEventListener('click', (e) => {
        if (e.target !== burgerMenu && !burgerMenu.contains(e.target) && !sidebar.contains(e.target)) {
            sidebar.classList.remove('active');
            burgerMenu.classList.remove('toggle');
        }
    });

    const dietLink = document.getElementById('diet-link');
    const calculatorLink = document.getElementById('calculator-link');
    const dietInformation = document.getElementById('diet-information');
    const calculatorContent = document.getElementById('calculator-content');
    var dietMenuRemove = document.querySelectorAll('.diet-menu a');

    

    dietLink.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default tautan
        dietInformation.style.display = 'block';
        calculatorContent.style.display = 'none';

        // Tambahkan kelas aktif ke tombol yang benar
        dietLink.classList.add('active');
        calculatorLink.classList.remove('active');
        
    });

    calculatorLink.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default tautan
        dietInformation.style.display = 'none';
        calculatorContent.style.display = 'block';

        // Tambahkan kelas aktif ke tombol yang benar
        calculatorLink.classList.add('active');
        dietLink.classList.remove('active');

        dietMenuRemove.forEach(function(link) {
            // Remove the .diet-menu class from the parent element
            link.parentElement.classList.remove('diet-menu');
        });
    });
});
