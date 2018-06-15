#!/bin/bash
echo "deploying to production"
firebase deploy --token $FIREBASE_TOKEN --project js-game-38c5b
exit 0