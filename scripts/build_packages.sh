echo "--- Build packages ---"

#Building packages
yarn workspace models run build
yarn workspace database run build


#Install packages
yarn install
#update yarn sdk
yarn dlx @yarnpkg/sdks vscode