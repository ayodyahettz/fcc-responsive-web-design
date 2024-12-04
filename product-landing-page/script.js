const carousel = document.getElementsById('carousel');

function scrollCarousel(direction){
    const scrollAmount = 220; //adjust based on card width and gap
    carousel.scrollBy({
        left:direction * scrollAmount,
        behavior: 'smooth'
    });

}