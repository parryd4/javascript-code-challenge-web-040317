$(document).ready(function(){
  // your code here!
  var challengeComments = new CommentList()

  $('#note-form').on('submit', function(e){
    e.preventDefault()
//    debugger
//    challengeComments.addComment(document.getElementsByTagName('input')[0].value)
    challengeComments.addComment($('#new-comment').val())
  //  debugger
    $('#comment-list').html(challengeComments.render())
    //didnt clear form but ok
  })
})
