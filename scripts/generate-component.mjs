import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';

import { cancel, intro, isCancel, multiselect, outro, spinner, text } from '@clack/prompts';
import color from 'picocolors';

import {
  generateComponentFile,
  generateCssFile,
  generateIndexFile,
  generateMockFile,
  generateStoriesFile,
  generateTestFile,
  generateTypesFile,
} from './templates/component.mjs';

const PASCAL_CASE_REGEX = /^[A-Z][a-zA-Z]*$/;

const getOptionalFileTypes = componentName => [
  { value: 'mock', label: `${componentName}.mock.tsx` },
  { value: 'test', label: `${componentName}.test.tsx` },
  { value: 'types', label: `${componentName}.types.tsx` },
  { value: 'stories', label: `${componentName}.stories.tsx` },
];

async function main() {
  console.clear();

  intro(`Generate @mws/mds component`);

  const componentName = await text({
    message: 'What is your component name?',
    placeholder: 'ComponentName',
    validate(value) {
      if (!PASCAL_CASE_REGEX.test(value)) {
        return 'Component name should follow PascalCase';
      }
    },
  });

  if (isCancel(componentName)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  const optionalFilesOptions = getOptionalFileTypes(componentName);
  const optionalFiles = await multiselect({
    message: 'Choose which optional file types do you want:',
    options: optionalFilesOptions,
  });

  if (isCancel(optionalFiles)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  const componentsRootFolder = path.resolve(process.cwd(), 'src/components');
  const loader = spinner();
  loader.start('Creating component');
  if (existsSync(`${componentsRootFolder}/${componentName}`)) {
    cancel('Folder already exist! Delete folder or try again with another component name.');
    process.exit(1);
  }

  const isTypesRequired = optionalFiles.includes("types");
  await fs.mkdir(`${componentsRootFolder}/${componentName}`);
  await fs.writeFile(
    `${componentsRootFolder}/${componentName}/index.ts`,
    generateIndexFile(componentName, isTypesRequired),
  );
  await fs.writeFile(
    `${componentsRootFolder}/${componentName}/${componentName}.tsx`,
    generateComponentFile(componentName, isTypesRequired),
  );
  await fs.writeFile(
    `${componentsRootFolder}/${componentName}/${componentName}.css.ts`,
    generateCssFile(),
  );
  if (optionalFiles.includes('mock')) {
    await fs.writeFile(
      `${componentsRootFolder}/${componentName}/${componentName}.mock.ts`,
      generateMockFile(),
    );
  }
  if (optionalFiles.includes('types')) {
    await fs.writeFile(
      `${componentsRootFolder}/${componentName}/${componentName}.types.ts`,
      generateTypesFile(componentName),
    );
  }
  if (optionalFiles.includes('stories')) {
    await fs.writeFile(
      `${componentsRootFolder}/${componentName}/${componentName}.stories.tsx`,
      generateStoriesFile(componentName),
    );
  }
  if (optionalFiles.includes('test')) {
    await fs.writeFile(
      `${componentsRootFolder}/${componentName}/${componentName}.test.tsx`,
      generateTestFile(componentName),
    );
  }
  loader.stop(`${componentName} ${color.green('created')}`);
  outro(`${color.yellow('Have fun :)')}`);
}

main();
