FROM ghcr.io/linuxserver/code-server

# 滾動式翻新
COPY extensions /config/extensions
RUN chmod -R 777 /config/extensions

# 增加環境所需預設套件
#RUN code-server --install-extension 42crunch.vscode-openapi && \
#    code-server --install-extension donjayamanne.githistory && \
#    code-server --install-extension sonarsource.sonarlint-vscode

#USER root

# 關於extension的設定與安裝
# https://stackoverflow.com/questions/35929746/automatically-install-extensions-in-vs-code
# COPY ./extensions.json /config/extensions.json
