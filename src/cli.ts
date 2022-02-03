import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createXML } from './junit';
import { stdinRead } from './utils';

export async function start() {
  const { output } = await yargs(hideBin(process.argv))
    .locale('en')
    .option('output', {
      alias: 'o',
      type: 'string',
      description: 'Output file path',
      default: 'tsc-junit.xml',
    })
    .usage('tsc-junit\nUsage: tsc --noEmit | tsc-junit')
    .parse();

  const stdin = await stdinRead();
  if (stdin) {
    try {
      await createXML(output, stdin);
    } catch (e) {
      console.error(`x [${e.name}]: ${e.message}`);
    }
  } else {
    yargs.showHelp();
  }
}
