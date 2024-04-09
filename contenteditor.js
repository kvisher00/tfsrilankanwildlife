function initializeContentEditing() {
    var editBtn = document.getElementById('editBtn');
    var contentEditor = document.getElementById('contentEditor');
    var editorPopup = document.getElementById('editorPopup');
    var saveBtn = document.getElementById('saveBtn');
    var exitBtn = document.getElementById('exitBtn');

    var originalContent;

    editBtn.addEventListener('click', function() {
        var content = document.querySelector('main').innerHTML;
        originalContent = content;
        contentEditor.value = originalContent;
        editorPopup.style.display = 'block';
    });

    saveBtn.addEventListener('click', function() {
        var editedContent = contentEditor.value;
        document.querySelector('main').innerHTML = editedContent;
        editorPopup.style.display = 'none';
        initializeContentEditing();
    });

    exitBtn.addEventListener('click', function() {
        editorPopup.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', initializeContentEditing);