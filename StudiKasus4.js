const stok = [ 12, 0, 5, 8, 0, 20];
let barangHabis = 0;

stok.forEach ((item, index) => {
    if (item === 0) {
        console.log(`Barang ke-${index + 1} habis`);
        barangHabis++;
    } else {
        console.log(`Barang ke-${index + 1} tersedia`);
    
    }
});
console.log(`Jumlah Barang Habis: ${barangHabis}`);
