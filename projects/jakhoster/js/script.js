$(document).ready(function(){
	
	$('#packet-page ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('#packet-page ul.tabs li').removeClass('current');
		$('#packet-page .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	var rowH = $('.pct-row').height();
	$('#packet .pct-row').parent().parent().height(rowH);
	$('#packet-page .pct-row').parent().height(rowH);
	$('.pct-col').hover(
		function(){ 
			$(this).addClass('hot'); 
		},
		function(){ 
			$(this).removeClass('hot'); 
		}
	)

});

var modals = new Custombox.modal({
	content: {
		effect: 'slide',
		close: true,
		id: 'login',
		opacity: .7,
		target: '#login'
	}
});
function popup(){
	modals.open();
}