const hadir = [true, false, true, true, false, true];
let jumlahHadir = 0;

hadir.forEach((item, index) => {
    if (item === true) {
        console.log(`Peserta ke-${index + 1} hadir`);
        jumlahHadir++;
    } else {
        console.log(`Peserta ke-${index + 1} tidak hadir`);
    }
});
console.log(`Jumlah Peserta Hadir: ${jumlahHadir}`);