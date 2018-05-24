window.onload = function(){
   gradient3d();
}

function gradient3d() {
    document.querySelectorAll('div.card').forEach(function(elem) {
        elem.addEventListener("mouseenter",function(){
            if(window.getComputedStyle(this, null).getPropertyValue("background").includes("linear-gradient")){
                input = window.getComputedStyle(this, null).getPropertyValue("background").split(' ');
                this.setAttribute('data-radcolor1', ''+input[5]+''+input[6]+''+input[7]);
                this.setAttribute('data-radcolor2', ''+input[9]+''+input[10]+''+input[11]);
            };
        });

        elem.addEventListener("mousemove",function(e){
            var w = this.offsetWidth;
            var h = this.offsetHeight;

            var relativeX = (e.pageX - this.getBoundingClientRect().left);
            var relativeY = (e.pageY - this.getBoundingClientRect().top);

            yPercent = relativeY/h * 100;
            xPercent = relativeX/w * 100;

            var xDeg = -(0.2*xPercent)+10;
            var yDeg = (0.2*yPercent)-10;

            var updateTransform = "perspective(300px) rotateX("+yDeg.toFixed(2)+"deg) rotateY("+xDeg.toFixed(2)+"deg) scale3d(1, 1, 1)"

            this.style.transform = updateTransform;
            this.style.msTransform = updateTransform;
            this.style.WebkitTransform = updateTransform;
            this.style.backgroundImage = "radial-gradient(150% 150% at "+xPercent+"% "+yPercent+"%, "+this.dataset.radcolor2+", "+this.dataset.radcolor1+")";
        });

        elem.addEventListener("mouseleave",function(){
            var leaveTransform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
            this.style.transform = leaveTransform;
            this.style.msTransform = leaveTransform;
            this.style.WebkitTransform = leaveTransform;
        });
    });
};