// Sidebar toggle
document.getElementById('toggleSidebar')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.add('open');
    document.querySelector('.overlay').style.display = 'block';
});
document.getElementById('closeSidebar')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.remove('open');
    document.querySelector('.overlay').style.display = 'none';
});
// Simulate progress bar load
setTimeout(() => {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = w; }, 100);
    });
}, 500);