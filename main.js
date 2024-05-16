$(document).ready(function() {
    $('#inputTarefa').on('submit', function(e) {
        e.preventDefault();
        let novaTarefa = $('#inputTarefa').val();
        if (novaTarefa.trim() !== '') {
            let itemLista = $('').text(novaTarefa);
            $('#listaTarefas').append(itemLista);
            $('#inputTarefa').val('');
        } else {
            alert('Por favor, insira uma tarefa válida.');
        }
    });
});