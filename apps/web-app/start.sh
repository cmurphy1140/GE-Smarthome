#!/usr/bin/env bash
set -e

echo "🚀 Starting GE Smarthome app..."

# Check if .next directory exists
if [ ! -d ".next" ]; then
    echo "📦 No build found. Running build first..."
    npm run build
fi

echo "🌐 Starting production server..."
npm run start