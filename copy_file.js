const fs = require('fs');
try {
    fs.copyFileSync('C:\\Users\\Rental\\Downloads\\Untitled design (8).png', 'c:\\Users\\Rental\\Desktop\\AI trade off\\ai-risk-categories.png');
    fs.writeFileSync('c:\\Users\\Rental\\Desktop\\AI trade off\\copy_report.txt', 'Success');
} catch (err) {
    fs.writeFileSync('c:\\Users\\Rental\\Desktop\\AI trade off\\copy_report.txt', err.message);
}
