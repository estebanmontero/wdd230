document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('chamberBanner');
    const closeBtn = document.getElementById('closeBannerBtn');

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Show the banner only on Monday, Tuesday, or Wednesday
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    // Close button functionality
    closeBtn.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
