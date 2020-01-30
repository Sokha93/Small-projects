$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed')
})
$('ul').on('click', 'span', function(e){
	$(this).parent().fadeOut(500);
	e.stopPropagation()
})

$("input[type='text'").keypress(function(p){
if(p.which === 13) {
	let textOn = $(this).val();
	$(this).val('')
	$('ul').append("<li><span><i id='bb' class='fa fa-trash'></i></span> " + textOn + '</li>')
}
	
  })
  $('.fa-plus').click(function(){
	$("input[type='text'").fadeToggle(1000);
})