class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector(`.right-button`);
        this.imagePool = [...this.carousel.querySelectorAll('img')];
        this.index = 0;
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';

        // this.leftBtn.addEventListener('click', () => this.clicked(true));
        // this.rightBtn.addEventListener('click', () => this.clicked(false));
        // this.rightBtn.style.userSelect = 'none';
        // this.leftBtn.style.userSelect = 'none';
        this.leftBtn.style.display = 'none';
        this.rightBtn.style.display = 'none';
    }

    clicked(direction){
        // if(direction)
            this.index = this.index === 0 ? this.index = this.imagePool.length-1 : this.index -1; 
        // else
        //     this.index = this.index === this.imagePool.length-1 ? this.index = 0 : this.index + 1; 
        this.currentImage.style.display = 'none';
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
        this.currentImage.style.animation = 'photo-transition 4.5s ease-in-out';
        // direction ? this.currentImage.style.animation = 'slide-left 2s ease-in' : this.currentImage.style.animation = 'slide-right 2s ease-in';
    }
}

let carousel = new Carousel (document.querySelector(`.carousel`));

setTimeout(() => {setInterval(() => carousel.clicked(true), 4500)});

