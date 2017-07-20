#!/usr/bin/env bash
BUILD_BLOG="src/build_blog.py"
path=$(python src/blog_path.py "$1" "www/blog/" "3")
mkdir -p $(dirname "$path")
python "$BUILD_BLOG" "$1" > "$path"
#description=$($MD "--description" "$1")
#echo "$destination $description" >> "$BASE_PATH$BLOG_PATH$BLOG_LINKS_DESCRIPTIONS"
#mkdir -p $(dirname "$destination")
#echo "$html" > "$destination"
