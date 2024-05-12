$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })
})

$('#botao-cancelar').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefaNova = $('#nova-tarefa').val();
    const novoItem = $(<li></li>);
    $(`<li>${tarefaNova}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#nova-tarefa').val('');
})