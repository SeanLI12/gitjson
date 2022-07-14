

import { simpleGit } from 'simple-git';

const USER = 'SeanLI12';
const PASS = 'hyde12345@PH';
const REPO = 'git@github.com:SeanLI12/gitjson.git';

github.com/username/private-repo

const remote = `https://${ USER }:${ PASS }@${ REPO }`;

simpleGit()
  .clone(remote)
  .then(
    () => 
    console.log('finished')
    )
  .catch((err) => console.error('failed: ', err));