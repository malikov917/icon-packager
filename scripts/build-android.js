const fs = require('fs');
const fxExtra = require('fs-extra');
const svg2vectordrawable = require('svg2vectordrawable/src/svg-file-to-vectordrawable-file');
const path = require('path');
const iconsPath = '../icons';
const outputPath = '../packages/android-icons';

function buildAndroid() {
  const srcDir = path.join(__dirname, iconsPath);
  const outputDir = path.join(__dirname, outputPath);

  const files = fs.readdirSync(srcDir);
  fxExtra.mkdirpSync(outputDir);
  files.forEach(icon => {
    if (icon.endsWith('.svg')) {
      const iconPath = path.join(srcDir, icon);
      const iconOutputPath = path.join(outputDir, icon.replace('.svg', '.xml'));
      svg2vectordrawable.convertFile(iconPath, iconOutputPath, {});
    }
  });
}

buildAndroid();
