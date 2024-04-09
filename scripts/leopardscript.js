document.addEventListener("DOMContentLoaded", function() {
    fetch("leoparddata.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".leopard0").textContent = data.title;
            const locationsList = document.querySelector(".bucket-c");
            data.locations.forEach(location => {
                const li = document.createElement("li");
                li.textContent = location;
                locationsList.appendChild(li);
            });
            data.threats.forEach((threat, index) => {
                const section = document.querySelector(".leod");
                const h3 = document.createElement("h3");
                h3.textContent = threat.title;
                const img = document.createElement("img");
                img.src = threat.image;
                img.alt = threat.title;
                const p1 = document.createElement("p");
                p1.textContent = threat.description;
                const p2 = document.createElement("p");
                p2.innerHTML = `For more information, please visit the <a href="${threat.link}">Department of Wildlife Conservation</a>.`;
                section.appendChild(h3);
                section.appendChild(img);
                section.appendChild(p1);
                section.appendChild(p2);
            });
            const measuresList = document.getElementById("measuresList");
            data.measures.forEach((measure, index) => {
                const li = document.createElement("li");
                li.innerHTML = measure;
                li.id = index + 1;
                measuresList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
