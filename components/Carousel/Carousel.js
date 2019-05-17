class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector(`.right-button`);
        this.leftBtn.style.display = 'none';
        this.rightBtn.style.display = 'none';

        this.imagePool = [...this.carousel.querySelectorAll('img')];
        this.index = 0;
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }

    scroll(){
        this.index = this.index === 0 ? this.index = this.imagePool.length-1 : this.index -1; 
        this.currentImage.style.display = 'none';
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }
}

let carousel = new Carousel (document.querySelector(`.carousel`));

setInterval(() => carousel.scroll(), 4500)

//code removed as I changed the carousel from a click to an auto scroll:

    // this.leftBtn.addEventListener('click', () => this.clicked(true));
    // this.rightBtn.addEventListener('click', () => this.clicked(false));
    // this.rightBtn.style.userSelect = 'none';
    // this.leftBtn.style.userSelect = 'none';

    // if(direction)
        // this.index = this.index === 0 ? this.index = this.imagePool.length-1 : this.index -1; 
    // else
    //     this.index = this.index === this.imagePool.length-1 ? this.index = 0 : this.index + 1; 
    // direction ? this.currentImage.style.animation = 'slide-left 2s ease-in' : this.currentImage.style.animation = 'slide-right 2s ease-in';