document.addEventListener('DOMContentLoaded', function() {
    // Função de Pesquisa
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const sections = document.querySelectorAll('.category-section');

        sections.forEach(function(section) {
            const sectionContent = section.textContent.toLowerCase();
            if (sectionContent.includes(searchValue)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Função de Filtragem por Categoria
    document.querySelectorAll('.filter-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            const sections = document.querySelectorAll('.category-section');

            sections.forEach(function(section) {
                if (section.id === category) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    // Opção adicional para destacar a seção selecionada
                    section.style.backgroundColor = '#f0f0f0'; // Cor de fundo ao selecionar
                    setTimeout(() => section.style.backgroundColor = '', 2000); // Remove o destaque após 2 segundos
                }
            });
        });
    });
});
