#!/bin/bash


fill_err(){
    echo ' ERROR |||||||||||||||||||||||||||||||||||||||||||||||'
}

echo '# Import behavior matrix'
echo 'What is available as a result of `import * as namespace from "x.cjs"`'

node cases/named-exports-cjs/index.mjs columns

echo -n '| node | ' 
node cases/named-exports-cjs/index.mjs || fill_err
echo -n '| endo | ' 
node cases/named-exports-cjs/endo.mjs || fill_err
echo -n '| webpack | ' 
node cases/named-exports-cjs/dist/webpack.js || fill_err
echo -n '| rollup | ' 
node cases/named-exports-cjs/dist/rollup.js || fill_err
echo -n '| parcel | ' 
node cases/named-exports-cjs/dist/parcel.js || fill_err

echo '# Cases'
for f in cases/named-exports-cjs/*.cjs; do 
    basename $f
    echo '```js'
    cat $f
    echo 
    echo '```'
done
