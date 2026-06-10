#!/bin/bash
cd /Users/ibrahimjamal/it-helpdesk/backend
uvicorn main:app --port 8001 --reload &
cd /Users/ibrahimjamal/it-helpdesk/frontend
npm run dev -- --port 5174 &
cd /Users/ibrahimjamal/it-helpdesk/public-portal
npm run dev
