#!/bin/bash
set -o errexit

js=`git status --porcelain | grep '\.js' | wc -l`
scss=`git status --porcelain | grep '\.scss' | wc -l`

if [ "$js" -gt "0" ]
then
    eslint '.'
fi

if [ "$scss" -gt "0" ]
then
    stylelint './**/*.scss'
fi
