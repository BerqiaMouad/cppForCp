window.onload = () => {
    const transition_E = document.querySelector('.transition');
    setTimeout(() => {
        transition_E.classList.remove('is-active');
    }, 500);
}