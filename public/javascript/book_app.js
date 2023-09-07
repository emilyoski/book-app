let bookRecommendationSelector = {
  init() {
    this.bindEvents();
    this.updateAuthorInfo();
  },

  bindEvents() {
    $('#recommend').bind('click', this.updateBookRecommendation.bind(this));
  },

  async updateBookRecommendation() {
    let requestInfo = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    let response = await fetch('/api/books', requestInfo);
    let data = await response.json()
    let book = JSON.parse(data)
    $('#book').html(book['book'])
  },

  async updateAuthorInfo() {
    let requestInfo = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    let response = await fetch('/api/books/author', requestInfo);
    let data = await response.json()
    let author = JSON.parse(data)
    $('#author').html(author['author'])
  },
}

$(function() {
  bookRecommendationSelector.init();
})