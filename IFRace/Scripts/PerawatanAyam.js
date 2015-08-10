if(document.getElementById("jendela").innerHTML == "Tunggu sebentar..."){
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
	var uri = 'api/ayam';
	$.getJSON(uri).done(function(data){
		document.getElementById("jendela").innerHTML = printJendela(data.jendela);
		document.getElementById("kelembaban").innerHTML = data.kelembaban;
		document.getElementById("kipas_angin").innerHTML = printKipasLampu(data.kipas_angin);
		document.getElementById("lampu").innerHTML = printKipasLampu(data.lampu);
		document.getElementById("minum").innerHTML = printMinumPakan(data.minum);
		document.getElementById("pakan").innerHTML = printMinumPakan(data.pakan);
		document.getElementById("suhu").innerHTML = data.suhu;
	});
}

function printMinumPakan (s)
{
	if (s)
		return "Terisi";
	else
		return "Habis";
}

function printKipasLampu (s)
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