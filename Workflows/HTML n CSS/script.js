// JavaScript Enhancements for Lazy Loading (Video Player)

// Lazy Load YouTube iframe
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.lazy-video');

    const loadVideo = (video) => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', video.dataset.src);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        video.appendChild(iframe);
        video.classList.remove('lazy-video');
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadVideo(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    videos.forEach((video) => observer.observe(video));
});
