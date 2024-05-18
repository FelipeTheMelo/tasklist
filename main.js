$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('#inputTarefa').on('submit', function(e) {
        e.preventDefault();
        let novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa.trim() !== '') {
            let itemLista = $('<li></li>').text(novaTarefa);
            $('#listaTarefas').append(itemLista);
            $('#nova-tarefa').val('');
        } else {
            alert('Por favor, insira uma tarefa válida!');
        }

        $('#listaTarefas').click(function() {
            $('li').textDecoration(line-through)
        })

    });
});