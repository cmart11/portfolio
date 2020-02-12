(function () {
    const cursor = document.querySelector('.cursor');

    // const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        const pageX = `${e.pageX - 20}px`
        const pageY = `${e.pageY - 20}px`
        cursor.setAttribute("style", `top: ${pageY}; left: ${pageX};`)
    })
    document.addEventListener('mousemove', e => {
        if (e.target.classList.contains('action') && !cursor.classList.contains('expand')) {
            setTimeout(() => {
                cursor.classList.add('expand')
            }, 200)
        } else if (cursor.classList.contains('expand')) {
            setTimeout(() => {
                cursor.classList.remove('expand')
            }, 1000)
        }
    })
})()


