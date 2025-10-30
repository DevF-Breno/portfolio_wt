function openTab(event, tabName) {
    // Esconde todo o conteúdo das abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active')); 

    // Remove a classe 'active' de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
     // Mostra o conteúdo da aba selecionada
     document.getElementById(tabName).classList.add('active');
     // Adiciona a classe 'active' ao botão clicado
     event.currentTarget.classList.add('active');
    }


    