const swiper = new Swiper('.swiper', {
    autoHeight: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

    
});

const btns = document.querySelectorAll('.downloadBtn');
btns.forEach((e) => {
    e.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = './DarkTO.zip';
        link.download = 'DarkTO.zip';
        link.click();
    })
})