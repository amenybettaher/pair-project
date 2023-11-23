document.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.getElementById('search');

    searchButton.addEventListener('click', function () {
        var checker = 0;
        var inputValue = document.getElementById('inp').value.toUpperCase();

        for (var i = 0; i < 12; i++) {
            var card = document.getElementsByClassName('shadow')[i];
            var title = document.getElementsByClassName('tt')[i].innerText.toUpperCase();

            if (title.indexOf(inputValue) > -1) {
                card.style.display = 'block';
                checker++;
            } else {
                card.style.display = 'none';
            }
        }

        var notFoundMessage = document.getElementById('not_find_any_thing');

        if (checker > 0) {
            notFoundMessage.innerText = '';
        } else {
            notFoundMessage.innerText = 'No Result Found';
            notFoundMessage.style.display = 'block';
        }
    });
})