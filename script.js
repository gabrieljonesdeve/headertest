// Funzione per caricare l'header da un file HTML
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Errore nel caricamento dell\'header:', error));
}

// Carica l'header al caricamento della pagina
document.addEventListener('DOMContentLoaded', loadHeader);
