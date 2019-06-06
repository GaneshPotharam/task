var imagePuzzle = {
    startGame: function (gridSize) {
        this.setImage(gridSize);
        $("button").click(function(){
            
            $("#collage #sortable li").show();
            $('#sortable').randomize();
        });
     },
    
    setImage: function (gridSize) {
        gridSize = 3;
        var percentage = 100 / (gridSize - 1);
        var image = 'images/lotus-temple.jpg';
        $('#actualImage').attr('src', image);
        $('#sortable').empty();
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';
            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image + ')',
                'background-size': (gridSize * 100) + '%',
                'background-position': xpos + ' ' + ypos,
                'width': 400 / gridSize,
                'height': 400 / gridSize
            });
            $('#sortable').append(li);
        }
        $('#sortable').randomize();
    }
};

$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();
    $parents.each(function () {
        $(this).children(selector).sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    return this;
};