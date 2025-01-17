const buttonPrev = document.querySelector(".prev-image");
const buttonNext = document.querySelector(".next-image");
const imageEl = document.querySelector(".image");
const navPanelPrev = document.querySelector('.nav-left');
const navPanelNext = document.querySelector('.nav-right');

navPanelPrev.addEventListener('mouseover', function (e) {
    this.style.opacity = 1;
});

navPanelPrev.addEventListener('mouseout', function (e) {
    this.style.opacity = 0.3;
});

navPanelNext.addEventListener('mouseover', function (e) {
    this.style.opacity = 1;
});

navPanelNext.addEventListener('mouseout', function (e) {
    this.style.opacity = 0.3;
});


const createCounter = (base) => {
    let counter = 0;
    return (step) => {
        counter += step;
        counter = counter % base;
        let answer = counter >= 0? counter: base + counter;
        return answer;
    };
};

fetch("horses.JSON")
    .then((response) => response.json())
    .then((jsonData) => {
        let number = 0;
        jsonData.forEach((el) => {
            el.id = number;
            number++;
        });
        imageEl.src = jsonData[0].src;
        imageEl.alt = jsonData[0].alt;

        const counter = createCounter(number);

        buttonNext.addEventListener("click", function (e) {
            // body
            const next = counter(1)
            imageEl.src = jsonData[next].src;
            imageEl.alt = jsonData[next].alt;
        });

        navPanelNext.addEventListener("mousedown", function (e) {
            // body
            const next = counter(1)
            imageEl.src = jsonData[next].src;
            imageEl.alt = jsonData[next].alt;
        });

        buttonPrev.addEventListener("click", function (e) {
            // body
            const prev = counter(-1);
            imageEl.src = jsonData[prev].src;
            imageEl.alt = jsonData[prev].alt;
        });

        navPanelPrev.addEventListener('mousedown', function (e) {
            // body
            const prev = counter(-1);
            imageEl.src = jsonData[prev].src;
            imageEl.alt = jsonData[prev].alt;
        });

        document.addEventListener('keydown', function(event) {
            if (event.code == 'ArrowLeft') {
               // body
            const prev = counter(-1);
            imageEl.src = jsonData[prev].src;
            imageEl.alt = jsonData[prev].alt;
            }

            if (event.code == 'ArrowRight') {
                // body
                const next = counter(1)
                imageEl.src = jsonData[next].src;
                imageEl.alt = jsonData[next].alt;
             }

          });

        //
    });
