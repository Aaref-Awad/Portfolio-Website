const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // this will make it so where we can't add light-mode if the theme variabe is truthy
    // On mount
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
            // this line will add the light-mode class to the body element if the class is not there, if the class is there then this line of code will delete the light-mode class from the element
            document.body.classList.toggle('light-mode');
            // checks if body has class light-mode if yes then it adds or remove the theme dpending on the theme
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }
    };

    // Event
    themeToggleBtns.forEach((themeBtn) => {
        themeBtn.addEventListener('click', handleThemeToggle);
    });
};

export default darkMode;