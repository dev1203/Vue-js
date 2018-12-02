document.getElementById('app').addEventListener('click', function(e){
    var xPosition = e.clientX + document.body.scrollLeft;
    console.log(xPosition);
});