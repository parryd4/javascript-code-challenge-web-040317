// Main Focus: Separate Concerns

$(document).ready(function(){

  var challengeComments = new CommentList()

  $('#note-form').on('submit', function(e){
    e.preventDefault()

    formComment(challengeComments)
    listRender(challengeComments)
    resetForm()
  })
})

function formComment(list){
  list.addComment($('#new-comment').val())
}

function resetForm(){
  // $('#note-form').reset() ??
  $('#new-comment').val("")
}

function listRender(list){
  $('#comment-list').html(list.render())
}
/*
  1. should I declare challengeComments in the doc ready funciton? Where else could that happen?
  2. I couldn't get line 10 to work when I put it in its own function and called it
  3. how to reset a form?
*/
