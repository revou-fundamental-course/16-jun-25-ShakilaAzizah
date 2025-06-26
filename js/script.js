function openTab(tabId) {
    document.getElementById('luas').style.display = 'none';
    document.getElementById('keliling').style.display = 'none';
    document.getElementById(tabId).style.display = 'block';
}

function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerText = `L = 1/2 x ${alas} x ${tinggi}\nL = ${luas}`;
}

function resetLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilLuas').innerText = '';
}

function hitungKeliling() {
    const s1 = parseFloat(document.getElementById('sisi1').value);
    const s2 = parseFloat(document.getElementById('sisi2').value);
    const s3 = parseFloat(document.getElementById('sisi3').value);
    const keliling = s1 + s2 + s3;
    document.getElementById('hasilKeliling').innerText = `K = ${s1} + ${s2} + ${s3}\nK = ${keliling}`;
}

function resetKeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasilKeliling').innerText = '';
}