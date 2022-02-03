import fs from 'fs';

type Result = {
  test: string;
};

type Options = {
  test: string;
};

function run(opts: Options): Result {
  await fs.writeFileSync(opts.test);
}

const r = run();
console.log(r.test);
