var form = ' <div id="form-container"> \
<div>\
    <label for="student-name">Nama : </label> \
    <input type="text" name="" id="student-name"> \
</div> \
<div> \
    <label for="title">Tajuk : </label> \
    <input type="text" name="" id="title"> \
</div> \
</div>';

canvas.insertAdjacentHTML('afterbegin', form);

formHTML = document.getElementById('form-container');

// formHTML.style.padding = '1rem';
// formHTML.style.width = '200px';
// formHTML.style.display = 'flex';
// formHTML.style.flexDirection = 'column';
