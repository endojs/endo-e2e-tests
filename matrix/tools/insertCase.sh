#!/bin/bash

BASE=$(dirname $0)/../cases/named-exports-cjs
echo $BASE
START=$(($1 + 0))
if [ $START -gt 0 ]; then
    for ((i = 100; i >= $START; i--)); do
        echo "-> $i"
        if [ -f $BASE/$i.cjs ]; then
            B=$(($i + 1))
            mv $BASE/$i.cjs $BASE/$B.cjs
        fi
    done
else
    echo usage ./insertCase.sh num
fi
