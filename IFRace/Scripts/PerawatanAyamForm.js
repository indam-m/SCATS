if(document.getElementById("kelembaban").innerHTML == "Tunggu sebentar..."){
	setInterval(function(){
		changeAyam();
	}, 1000);
}
else{
	setInterval(function(){
		changeAyam();
	}, 5000);
}

function changeAyam(){
	var uri = '../api/ayam';
	$.getJSON(uri).done(function(data){
		document.getElementById("kelembaban").innerHTML = "Kelembaban kandang ayam sekarang: " + data.kelembaban;
		document.getElementById("suhu").innerHTML = "Suhu kandang ayam sekarang: " + data.suhu;
	});
}

