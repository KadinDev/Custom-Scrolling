
let progress = document.getElementById('progressbarRight');
let total_height = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / total_height ) * 100;

    progress.style.height = progressHeight + '%';
}
