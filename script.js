window.addEventListener("keydown", function(e) {
    const keycode = e.keyCode;
    const key = document.querySelector(`.key[data-key="${keycode}"]`);
    const audio = document.querySelector(`audio[data-key="${keycode}"]`);

    if(!key || !audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    const allKeys = document.querySelectorAll(".key");
    allKeys.forEach((el) => el.addEventListener('transitionend', function(e) {
        const cssProperty = e.propertyName;

        if(cssProperty != "transform") {
            return;
        }

        el.classList.remove('playing');
    }));
});