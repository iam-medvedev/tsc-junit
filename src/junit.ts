import fs from 'fs';
import path from 'path';
import { GrammarItem, parse } from '@aivenio/tsc-output-parser';
import { getJunitXml, TestCase, TestSuiteReport } from 'junit-xml';

/**
 * Get junit-xml from stdin
 */
export function parseStdin(stdin: string): TestSuiteReport {
  try {
    const parsed: GrammarItem[] = parse(stdin);

    const testCases: TestCase[] = [];
    for (const item of parsed) {
      const filename = item.value.path.value;
      const col = item.value.cursor.value.col;
      const line = item.value.cursor.value.col;
      const errorType = item.value.tsError.value.errorString;
      const errorMessage = item.value.message.value.trim();

      testCases.push({
        name: filename,
        classname: `${filename}:${col}:${line}`,
        failures: [
          {
            type: errorType,
            message: errorMessage,
          },
        ],
      });
    }

    return {
      suites: [
        {
          name: 'Typecheck',
          timestamp: new Date(),
          testCases,
        },
      ],
    };
  } catch (e) {
    throw new Error('Cannot parse input. Are you sure this is `tsc` output?');
  }
}

/**
 * Create junit xml from stdin and write it
 */
export async function createXML(outputFileName: string, stdin: string) {
  const outputPath = path.resolve(process.cwd(), outputFileName);
  const report = parseStdin(stdin);

  const xml = getJunitXml(report);

  await fs.promises.writeFile(outputPath, xml, 'utf8');
}
