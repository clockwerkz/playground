const btn = document.querySelector('.btn--cta');

btn.addEventListener('click', function(){
    TweenMax.to('.panel', 1.5, {scaleY:1, height: '100vh', ease: Circ.easeOut});
    TweenMax.to('#light', 1, {opacity: 1, y:'0px', delay: 1, ease:Back.easeOut.config(1.7)});
    TweenMax.to('p', 1, { opacity:1, y:'20px', delay: 1.4 });
    TweenMax.to('.box', 3 , {opacity: 1, scale: 1, ease:Elastic.easeOut.config(1, 0.3)})
});