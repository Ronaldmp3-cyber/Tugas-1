const hadir = [true, false, true, true, false, true];
let totalHadir = 0;
let totalTidakHadir = 0;

for (let i = 0; i < hadir.length; i++) {
    if (hadir[i]) {
        console.log(`Siswa ke-${i + 1} hadir`);
        totalHadir++;
    } else {
        console.log(`Siswa ke-${i + 1} tidak hadir`);
        totalTidakHadir++;
    }
}

console.log("Total Siswa Hadir: " + totalHadir);
console.log("Total Siswa Tidak Hadir: " + totalTidakHadir);