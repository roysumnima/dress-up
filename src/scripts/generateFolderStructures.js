import {fs} from 'fs';
import {path} from 'path';

for (const folder of ['body', 'face']) {
  const dirPath = path.join(path.__dirname, `../src/assets/customisation/${folder}`);
  const outputPath = path.join(path.__dirname, `../src/assets/customisation/${folder}/folders.json`);

  const folders = fs.readdirSync(dirPath).filter(file =>
  fs.statSync(path.join(dirPath, file)).isDirectory()
  );
  
  fs.writeFileSync(outputPath, JSON.stringify(folders, null, 2));
  console.log(`${folder} folders:`, folders);

}
