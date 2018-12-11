 function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
				 $('#image_upload_preview').toggle();
                $('#image_upload_preview').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#inputFile").change(function () {
        readURL(this);
    });
	$("input[name=bin]").click(function(e) {  
		if($("input[name=bin]:checked").val() == "bin") {
			$('#bin-inp').removeAttr("disabled");  
		}else{
			$('#bin-inp').attr("disabled", "disbled");  
		}
	});
	$('#picker').dateTimePicker({
		dateFormat: "DD-MM-YYYY HH:mm",
		locale: 'id',
		showTime: true,
		selectData: "now",
		positionShift: { top: 20, left: 0},
		title: "Pilih tanggal dan waktu",
		buttonTitle: "Pilih"
	});