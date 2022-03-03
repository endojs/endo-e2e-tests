#!/bin/bash


echo '# Import behavior matrix'

node cases/named-exports-cjs/index.mjs columns

echo -n '| node | ' 
node cases/named-exports-cjs/index.mjs
echo -n '| endo | ' 
node cases/named-exports-cjs/endo.mjs
echo -n '| webpack | ' 
node cases/named-exports-cjs/dist/webpack.js
echo -n '| parcel | ' 
node cases/named-exports-cjs/dist/parcel.js

echo '# Cases'
for f in cases/named-exports-cjs/*.cjs; do 
    basename $f
    echo '```js'
    cat $f
    echo 
    echo '```'
done