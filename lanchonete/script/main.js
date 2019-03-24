$(function(){
	// Iniciar somatória	
	lanche = 0;
	adicional = 0;

	$('.finalizar').on('click', function(){

		$('.check').each(function(){    
		    if($(this).is(':checked')){
		    	value = $(this).val();

		    	// Json com as informações do lanche
				var ingredientes = [
					{
		            	"title"		: "alface",
		                "preco"		: "0.40",
		                'xbacon'	: false,
		                'xburguer' 	: false,
		                'xegg'		: false,
		                'xeggbacon' : false,
					},
					{
		            	"title"		: "bacon", 
		                "preco"		: "2.00",
		                'xbacon'	: true,
		                'xburguer' 	: false,
		                'xegg'		: false,
		                'xeggbacon' : true,
		            },
		            {
		            	"title"		: "hamburguer",
		                "preco"		: "3.00",
		                'xbacon'	: true,
		                'xburguer' 	: true,
		                'xegg'		: true,
		                'xeggbacon' : true,
		            },
		            {
		            	"title"		: "ovo",
		                "preco"		: "0.80",
		                'xbacon'	: false,
		                'xburguer' 	: false,
		                'xegg'		: true,
		                'xeggbacon' : true,
		            },
		            {
		            	"title"		: "queijo",
		                "preco"		: "1.50",
		                'xbacon'	: true,
		                'xburguer' 	: true,
		                'xegg'		: true,
		                'xeggbacon' : true,
					}
				];


				// Leitura do jSon
		    	$.each(ingredientes, function(i, v) {

		    		// Faz a somatória do preço dos lanches
		           	if((value == 'xbacon') && v['xbacon'] == true || (value == 'xburguer') && v['xburguer'] == true || (value == 'xegg') && v['xegg'] == true || (value == 'xeggbacon') && v['xeggbacon'] == true){
		           		lanche += parseFloat(v['preco']);
		           	}

		           	// Faz a somatória do preço dos adicionais.
		           	if(value == 'alface' && v['title'] == 'alface' || value == 'bacon' && v['title'] == 'bacon' || value == 'hamburguer' && v['title'] == 'hamburguer'|| value == 'ovo' && v['title'] == 'ovo'|| value == 'queijo' && v['title'] == 'queijo'){
		           		adicional += parseFloat(v['preco']);
		           	}            	
			    });

		    	// Total do pedido
			    preco = lanche + adicional;

			    // Colocar o preço na div .total formatado
			    $('.total').text(preco).number( true, 2 );

			    // Desabilitar o botão e habilitar
			    if ($('.check').is( ":checked" )){
			    	$('.novo').attr('disabled', false);
			    	$('.finalizar').attr('disabled', true);
			    }else{
			    	$('.novo').attr('disabled', true);
			    	$('.finalizar').attr('disabled', false);
			    }
			    
		    }
		});

	});

	// Clicar em novo para limpar os campos e habilitar e dabilitar botões
	$('.novo').on('click', function(){
		$('.check').prop('checked', false);
		$('.finalizar').attr('disabled', false);
		$('.novo').attr('disabled', true);

		lanche = 0;
		adicional = 0;
		$('.total').text('');

	});


});