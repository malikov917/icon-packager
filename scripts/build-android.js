const fs = require('fs');
const fxExtra = require('fs-extra');
const {convertFile} = require('svg2vectordrawable/src/svg-file-to-vectordrawable-file');
const path = require('path');
const iconsPath = '../icons-android';
const outputPath = '../android/src/main/res/drawable';
const srcDir = path.join(__dirname, iconsPath);
const outputDir = path.join(__dirname, outputPath);

/*
  * This script is used to convert all SVG icons to Android VectorDrawable XML format.
  * The script will read all SVG icons from the srcDir and convert them to VectorDrawable XML format.
 */
function buildAndroid() {
  fxExtra.mkdirpSync(outputDir, {});
  const icons = fs.readdirSync(srcDir);
  convertIcons(icons, srcDir, outputDir);
}

function convertIcons(icons, srcDir, outputDir) {
  icons.forEach(icon => {
    if (!icon.endsWith('.svg')) return;
    const iconPath = path.join(srcDir, icon);
    const iconOutputName = prepareIconName(icon);
    const iconOutputPath = path.join(outputDir, iconOutputName);
    convertFile(iconPath, iconOutputPath, {});
  });
}

function prepareIconName(icon) {
  return icon
      .toLowerCase()
      .trim()
      .replaceAll(/ /g, '_')
      .replaceAll(/-/g, '_')
      .replace('.svg', '.xml');
}

buildAndroid();
