class CommentList {
  constructor() {
    this.comments = []
  }
  render(){
    var list = `<ul>`
  //  debugger
    for(let i = 0; i < this.comments.length ; i++){
      list += this.comments[i].render()
    }
    list += `</ul>`
  ///  debugger
    return list
  }
  addComment(comment){
    this.comments.push(
      new Comment(comment)
    )
  }
}
