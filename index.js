

import { simpleGit } from 'simple-git';

const USER = 'SeanLI12';
const PASS = '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';
const REPO = 'github.com/SeanLI12/gitjson.git';



const remote = `https://${ USER }:${ PASS }@${ REPO }`;

simpleGit()
  .clone(remote)
  .then(
    () => 
    console.log('finished')
    )
  .catch((err) => console.error('failed: ', err));