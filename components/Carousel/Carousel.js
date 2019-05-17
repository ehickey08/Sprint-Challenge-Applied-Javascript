class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector(`.right-button`);
        this.imagePool = [...this.carousel.querySelectorAll('img')];
        // const images = this.imagePool.forEach(image => new CarouselImage(image))
        this.index = 0;
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
        this.leftBtn.addEventListener('click', () => this.clicked(true));
        this.rightBtn.addEventListener('click', () => this.clicked(false));
        this.rightBtn.style.userSelect = 'none';
        this.leftBtn.style.userSelect = 'none';
    }

    clicked(direction){
        console.log(direction)
        this.currentImage.style.display = 'none';
        if(direction)
            this.index = this.index === 0 ? this.index = this.imagePool.length-1 : this.index -1; 
        else
            this.index = this.index === this.imagePool.length-1 ? this.index = 0 : this.index + 1; 

        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }
}

let carousel = new Carousel (document.querySelector(`.carousel`));


