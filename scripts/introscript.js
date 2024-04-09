// Load JSON data
fetch('introdata.json')
    .then(response => response.json())
    .then(data => {
        // Set greeting
        document.getElementById('greeting').textContent = data.greeting;

        // Get content container
        const contentContainer = document.getElementById('content');

        // Loop through sections and create HTML dynamically
        data.sections.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('introfb');
            sectionElement.id = section.id;

            if (section.heading) {
                const heading = document.createElement('h1');
                heading.textContent = section.heading;
                sectionElement.appendChild(heading);
            }

            if (section.image) {
                const image = document.createElement('img');
                image.src = section.image;
                image.alt = "section image";
                sectionElement.appendChild(image);
            }

            if (section.map) {
                const map = document.createElement('iframe');
                map.src = section.map;
                map.width = "400";
                map.height = "300";
                map.style.border = "0";
                map.allowFullscreen = true;
                map.loading = "lazy";
                map.referrerpolicy = "no-referrer-when-downgrade";
                sectionElement.appendChild(map);
            }

            if (section.content) {
                const content = document.createElement('p');
                content.innerHTML = section.content;
                sectionElement.appendChild(content);
            }

            if (section.species) {
                const speciesList = document.createElement('ul');
                section.species.forEach(species => {
                    const listItem = document.createElement('li');
                    listItem.textContent = species;
                    speciesList.appendChild(listItem);
                });
                sectionElement.appendChild(speciesList);
            }

            if (section.parks) {
                const table = document.createElement('table');
                const tableHeader = document.createElement('tr');
                tableHeader.innerHTML = `
                    <th>National park</th>
                    <th>Image</th>
                    <th>Location</th>
                    <th>Established</th>
                    <th>Area km<sup>2</sup></th>
                `;
                table.appendChild(tableHeader);

                section.parks.forEach(park => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${park.name}</td>
                        <td><img src="${park.image}" alt="${park.name}"></td>
                        <td>${park.location}</td>
                        <td>${park.established}</td>
                        <td>${park.area}</td>
                    `;
                    table.appendChild(row);
                });

                sectionElement.appendChild(table);
            }

            contentContainer.appendChild(sectionElement);
        });
    })
    .catch(error => console.error('Error loading data:', error));
