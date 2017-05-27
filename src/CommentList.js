class CommentList {
  constructor() {
    this.comments = []
  }
  getList(){
    // var list = this.comments.map(comment => comment.render()).join("")
    // return `<ul>${list}</ul>`
    return `<ul>${this.comments.map(comment => comment.render()).join("")}</ul>`
  }
  render(){
    return `${this.getList()}`
  }
  addComment(comment){
    this.comments.push( new Comment(comment) )
  }
}

/*
  1. getList() skipped assigning a list and returned the map as a string formatted with <ul>
  2. if I wanted to be consistent with comment.js's render method, I could not add the <ul>s in getList(), but not sure which concern belongs to which method
*/
