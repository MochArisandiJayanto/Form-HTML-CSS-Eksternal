function terimainput(){
    var a=document.forms["biodata"]["nama_depan"].value;
    var b=document.forms["biodata"]["nama_belakang"].value;
    var c=document.forms["biodata"]["tempat"].value;
    var d=document.forms["biodata"]["tanggal"].value;
    var e=document.forms["biodata"]["NIK"].value;
    var f=document.forms["biodata"]["Nomor"].value;
    var g=document.forms["biodata"]["Alamat"].value;
    var h=document.forms["biodata"]["email"].value;
    var i=document.forms["biodata"]["jenis_kelamin"].value;
    var j=document.forms["biodata"]["username"].value;
    var k=document.forms["biodata"]["Password"].value;

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f;
    cell7.innerHTML = g;
    cell8.innerHTML = h;
    cell9.innerHTML = i;
    cell10.innerHTML = j;
    cell11.innerHTML = k;
}