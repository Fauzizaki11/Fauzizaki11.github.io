function addRow() {
    let table = document.getElementById("isiTabel");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let Nama = document.getElementById('exampleInputNama').value;
    let Umur = document.getElementById('exampleInputUmur').value;
    cell1.innerHTML = Nama;
    cell2.innerHTML = Umur;
}

function deleteRow() {
    document.getElementById('isiTabel').deleteRow(0)
}


fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
    .then((response) => response.json())
    .then((data) => bacaDataVaksin(data))

function bacaDataVaksin(data) {
    console.log(data['data']);
    let table = document.getElementById("isiTabelCovid");

    data['data'].forEach(element => {
        if (element['kota'] == 'KOTA LANGSA') {
            let table = document.getElementById("isiTabelCovid");
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let kode = element['kode'];
            let nama_kecamatan = element['nama'];
            let nama_kabkot = element['kota'];
            let nama_provinsi = element['provinsi'];
            let status = element['status'];
            cell1.innerHTML = kode;
            cell2.innerHTML = nama_kecamatan;
            cell3.innerHTML = nama_kabkot;
            cell4.innerHTML = nama_provinsi;
            cell5.innerHTML = status;
        }
     });
}