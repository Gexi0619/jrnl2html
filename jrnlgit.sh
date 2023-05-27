#!/bin/bash

# Run jrnl command to format journal as JSON and save to file
jrnl_command="jrnl --format json --file path\to\myjournal.json"
eval "$jrnl_command"
echo "jrnl command executed successfully."

# Switch to the specified Git repository directory
cd path\to\file
echo "Changed directory successfully."

# Execute git add command
git add .
echo "Git add completed."

# Execute git commit
commit_message="Journal update $(date +'%Y-%m-%d %H:%M')"
git commit -m "$commit_message"
echo "Git commit completed with message: $commit_message"

# git push
git push
echo "Git push completed successfully."
