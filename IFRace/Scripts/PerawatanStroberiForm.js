if(document.getElementById("kelembaban").innerHTML == "Tunggu sebentar..."){
	setInterval(function(){
		changeStroberi();
	}, 1000);
}
else{
	setInterval(function(){
		changeStroberi();
	}, 5000);
}

function changeStroberi(){
	var uri = '../api/stroberi';
	$.getJSON(uri).done(function(data){
		document.getElementById("kelembaban").innerHTML = "Kelembaban lingkungan tanaman stroberi sekarang: " + data.kelembaban;
		document.getElementById("suhu").innerHTML = "Suhu lingkungan tanaman stroberi sekarang: " + data.suhu;
	});
}