import fs from 'node:fs';
const src = 'C:/Users/Rental/Downloads/Botswana logo.jpg';
const dest = './botswana-logo.jpg';
try {
    fs.copyFileSync(src, dest);
    fs.writeFileSync('./copy_status.txt', 'COMPLETED');
} catch (err) {
    fs.writeFileSync('./copy_status.txt', 'ERROR: ' + err.message);
}
