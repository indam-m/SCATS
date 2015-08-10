if(document.getElementById("jendela").innerHTML == "Tunggu sebentar..."){
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
	var uri = 'api/stroberi';
	$.getJSON(uri).done(function(data){
		document.getElementById("jendela").innerHTML = printJendela(data.jendela);
		document.getElementById("kelembaban").innerHTML = data.kelembaban;
		document.getElementById("lampu").innerHTML = printLampu(data.lampu);
		document.getElementById("suhu").innerHTML = data.suhu;
	});
}

function printLampu (s)
{
	if (s)
		return "Menyala";
	else
		return "Mati";
}

function printJendela (s)
{
	if (s)
		return "Terbuka";
	else
		return "Tertutup";
}
