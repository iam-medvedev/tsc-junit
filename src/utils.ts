/**
 * Parse stdin into string
 */
export async function stdinRead() {
  if (process.stdin.isTTY) {
    return '';
  }

  const chunks: Uint8Array[] = [];

  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString('utf8');
}
