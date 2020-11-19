#!/bin/sh

make_thumbnail() {
    pic=$1
    thumb=$(dirname "$1")/thumb/$(basename "$1")
    mkdir -p $(dirname "$1")/thumb
    #convert -resize 1000x -strip "$pic" "$thumb"
    convert -define jpeg:size=220x330 $1 -thumbnail 220x330^ -gravity center -extent 220x330 $thumb
    echo Generating thumbnail for "$pic"...
}

for pic in */1.jpg
do
    make_thumbnail "$pic"
done