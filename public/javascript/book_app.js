let bookRecommendationSelector = {
  init() {
    this.bindEvents();
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
    $('#book').html(data)
  }
}

$(function() {
  bookRecommendationSelector.init();
})