// Main Focus: Separate Concerns

$(document).ready(function(){

  var challengeComments = new CommentList()

  $('#note-form').on('submit', function(e){
    e.preventDefault()

    challengeComments.addComment($('#new-comment').val())

    $('#comment-list').html(challengeComments.render())
  //  $('#note-form').reset()
  })
})

/*
  1. should I declare challengeComments in the doc ready funciton? Where else could that happen?
  2. I couldn't get line 10 to work when I put it in its own function and called it
  3. how to reset a form?
*/
