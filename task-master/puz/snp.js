
$(document).ready(function(){   
    var $containment = $('.puZContainer');
    var $puzzleContainer_pile = $('#puZMain');
    var $snappuzzlePiece = $('.snappuzzle-piece');
    var puzzle_grid = 3;
    var puzzle_startTime, puzzle_endTime;//make global  
    
    $puzzleContainer_pile.height($('.puZImg').height());
    start_puzzleX999(puzzle_grid);

    //reset puzzle
    // $('.restart_puzzleX999').on('click', function(){
    //   $('.puzzleX999_img').snapPuzzle('destroy');
    //   start_puzzleX999(puzzle_grid);
    // });
    // //update puzzle on resize 
    // $(window).resize($.debounce(250, updatePuzzleImageHeight));
    // //set puzzle_startTime once puzzlePiece dragged
    // $(document).one('drag', $snappuzzlePiece, function(){
    //   console.log('puzzle piece was clicked!');
    //   puzzle_startTime = Date.parse(new Date());
    //   console.log(puzzle_startTime);
    // });  
     
    //functs
    // function updatePuzzleImageHeight(){
    //     $puzzleContainer_pile.height($('.puzzleX999_img').height());
    //     $('.puzzleX999_img').snapPuzzle('refresh');    
    // }
    function start_puzzleX999(x, y){
            if(!y){
                y = x;
            }
            $('.puZImg').snapPuzzle({
                rows: x, 
                columns: y,
                pile: $puzzleContainer_pile,//where our puzzle while be contained, MUST be defined in the dom
                containment: $containment,
                // onComplete: function(){
                //     console.log('puzzle completed!');
                //     puzzle_endTime = Date.parse(new Date());
                //     getKompletionTime_str(puzzle_startTime, puzzle_endTime);                    
                // }
            });
    }
    // function getKompletionTime_str(puzzle_startTime, puzzle_endTime){
    //         var timeTaken = puzzle_endTime - puzzle_startTime,
    //             seconds = Math.floor((timeTaken/1000)%60),
    //             minutes = Math.floor((timeTaken/1000/60)%60),
    //             hours = Math.floor((timeTaken/(1000*60*60))%60),
    //             kompletionTime_str = '';
    //             console.log(puzzle_endTime);
    //             kompletionTime_str = 'Wow! You completed the puzzle in ' + setHours_str(hours) +  setMinutes_str(minutes) + seconds + ' seconds!!!'
    //             console.log(kompletionTime_str);
    //             setTimeout(function(){
    //                 alert(kompletionTime_str)
    //             },999);
    //         //utilities
    //         function setHours_str(hours){return hours < 1 ? '': hours + ' hrs. ';}
    //         function setMinutes_str(minutes){return minutes < 1 ? '': minutes + ' mins. ';}   
    //     }

});
