const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = path.join(__dirname, 'public', 'VSL.mp4');
const outputFile = path.join(__dirname, 'public', 'VSL_optimized.mp4');

console.log(`Buscando video en: ${inputFile}`);
console.log('Iniciando compresión extrema y optimización Web (Fast Start)... Esto puede tardar varios minutos.');

ffmpeg(inputFile)
  .videoCodec('libx264')
  .outputOptions([
    '-crf 28',         // Compresión agresiva pero decente (0-51, 28 es bueno para web)
    '-preset fast',    // Velocidad de compresión
    '-movflags +faststart', // MOOV ATOM AL PRINCIPIO: VITAL PARA MÓVILES
    '-vf scale=-2:720' // Escalar a 720p máximo
  ])
  .audioCodec('aac')
  .audioBitrate('128k')
  .on('start', (commandLine) => {
    console.log('Ffmpeg funcionando con el comando: ' + commandLine);
  })
  .on('progress', (progress) => {
    if(progress.percent) {
      console.log(`Progreso: ${Math.round(progress.percent)}% completado`);
    }
  })
  .on('end', () => {
    console.log('\n✅ ¡Compresión terminada exitosamente!');
    console.log(`✅ Archivo guardado como: ${outputFile}`);
    console.log('Reemplazando ahora el archivo original...');
    
    // Auto reemplazar
    const fs = require('fs');
    fs.renameSync(outputFile, inputFile);
    console.log('✅ Archivo público "/VSL.mp4" reemplazado por la versión comprimida.');
  })
  .on('error', (err) => {
    console.error('Error procesando el video:', err.message);
  })
  .save(outputFile);
