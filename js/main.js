// Open good Modal
$(document).ready(function(){

    $(".navbar-nav > li > a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

	$('.see--all').click(function(){
		var parent_is = $(this).parent();
		parent_is.find('.block--img--see').fadeIn('slow');
	});

		$('.fade--bg').click(function(){
		 $(this).parent().fadeOut('slow');
	});


		$('.close-my').click(function(){
		 $(this).parent().parent().fadeOut('slow');
	});


	$('.open--modal--good').click(function(){
		var text_input_name = $('#Name-CallBack').val();
		var text_input_phone = $('#Phone-CallBack').val();
		var Error_form = 0;
		if (text_input_name == "") {
			Error_form++;
			$('#Name-CallBack').css({'border':'1px solid #721c24'});
			$('.form--callback--danger').text("Напишите свое имя.").fadeIn('slow');
		}else{
			if (Error_form != 0) {Error_form--;}
			$('#Name-CallBack').css({'border':'1px solid #155724'});
		}

		if (text_input_phone == ""){
			Error_form++;
			$('#Phone-CallBack').css({'border':'1px solid #721c24'});
			$('.form--callback--danger').text("Напишите свой номер.").fadeIn('slow');
		}else{
			if (Error_form != 0) {Error_form--;}
			$('#Phone-CallBack').css({'border':'1px solid #155724'});
		}

		if (text_input_phone.length < 11) {
			Error_form++;
			$('#Phone-CallBack').css({'border':'1px solid #721c24'});
			$('.form--callback--danger').text("Неправильный номер.").fadeIn('slow');
		}else{
			if (Error_form != 0) {Error_form--;}
			$('#Phone-CallBack').css({'border':'1px solid #155724'});
		}

		if (Error_form == 0) {
			$('.form--callback--danger').removeClass('alert-danger');
			$('.form--callback--danger').addClass('alert-success');
			$('#CallBack .modal-body form').slideUp('50').html(" ");
			$('.form--callback--danger').text('Спасибо за заявку , скоро менеджер свяжеться с вами!');
			$('.form--callback--danger').fadeIn('slow');
			$('#CallBack .modal-body').append('<div class="text-center"><button type="button" class="btn btn-success" data-dismiss="modal">Закрыть</button></div>');
		}
		console.log(Error_form);
	});
});


