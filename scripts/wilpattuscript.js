document.addEventListener('DOMContentLoaded', function () {
    fetch('wilpattudata.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            data.sections.forEach(section => {
                const sectionElement = document.createElement('section');

                const heading1 = document.createElement('h1');
                heading1.className = section.className;
                heading1.id = section.id;
                heading1.textContent = section.heading1;
                sectionElement.appendChild(heading1);

                section.paragraphs.forEach(paragraph => {
                    const p = document.createElement('p');
                    p.className = paragraph.className;
                    p.id = paragraph.id;
                    p.textContent = paragraph.text;
                    sectionElement.appendChild(p);
                });

                if (section.image) {
                    const img = document.createElement('img');
                    img.src = section.image.src;
                    img.alt = section.image.alt;
                    img.className = section.image.className;
                    sectionElement.appendChild(img);
                }

                contentDiv.appendChild(sectionElement);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

