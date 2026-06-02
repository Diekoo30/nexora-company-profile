const fs = require('fs');
const heicConvert = require('heic-convert');

(async () => {
  try {
    const inputPath = 'C:\\KULIAH\\semester 6\\nexora\\kebutuhan upload\\developer\\muhammad fachry pratama al hasani.HEIC';
    const outputPath = 'C:\\KULIAH\\semester 6\\nexora\\public\\images\\team\\fachry.jpg';
    
    console.log('Reading HEIC file...');
    const inputBuffer = fs.readFileSync(inputPath);
    
    console.log('Converting to JPG...');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 1
    });
    
    console.log('Writing JPG file...');
    fs.writeFileSync(outputPath, outputBuffer);
    console.log('Conversion successful!');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
})();
