if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
	  navigator.serviceWorker
		.register("/service-worker.js")
		.then(function() {
		  console.log("Pendaftaran ServiceWorker berhasil");
		  requestPermission();
		})
		.catch(function(error) {
		  console.log(error);
		});
	});
} else {
	console.log("ServiceWorker belum didukung browser ini.");
}
