#!/bin/bash

# Easy deployment script
# Usage: ./deploy.sh "your update message"

# Check if message provided
if [ -z "$1" ]; then
    echo "❌ Please provide a commit message"
    echo "Usage: ./deploy.sh \"your update message\""
    exit 1
fi

echo "📦 Adding all changes..."
git add .

echo "💾 Committing changes..."
git commit -m "$1"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Netlify will auto-deploy in 2-3 minutes"
echo "🌐 Check status at: https://app.netlify.com"
