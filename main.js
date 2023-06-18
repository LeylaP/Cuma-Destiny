// buttona tiklandigi anda nav alanina toggle isimli class ekler veya cikarir

const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click',() =>{
    nav.classList.toggle('toggle');
});

// videolari ekrana geldigi anda oynatmak icin kod

document.addEventListener('DOMContentLoaded', function () {
    const videos=document.querySelectorAll('video');
    const observer=new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    });
    videos.forEach((video) => {
        observer.observe(video);
    });
});