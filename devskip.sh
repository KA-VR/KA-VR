#!/bin/bash
RED='\033[0;31m'
NC='\033[0m'
clear
printf "${RED}WARNING: Skipping Linting!! \n"
printf "You better have a good reason for this...\n"
printf "If I see unlinted code... (┛ ◉ Д ◉ )┛ 彡 ┻━┻\n${NC}"
sleep 2
npm run watch-client & npm run dev-server & npm run watch-server
