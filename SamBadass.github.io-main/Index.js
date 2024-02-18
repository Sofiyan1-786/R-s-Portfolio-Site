function menueToggle(){
    const toggleMenue = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenue.classList.toggle('active');
    section.classList.toggle('active');
}

var typed = new Typed(".typing", {
    strings: ["Yotuber", "Hacker", "Progammer", "VIRGIN", "Teacher", "Nobody", "Vlogger", "Person", "Dark Theme Person"
                ,"Porn Watcher", "Stud", "Pro", "F***K YOU", "Pythoner", "Java Something", "English Carrymintai", "Roaster",
                "Chintu progammer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

window.addEventListener('load', ()=>{
        const preload = document.querySelector('.load');
        preload.classList.add('load-fin');
        preload.style.display = "none";
});