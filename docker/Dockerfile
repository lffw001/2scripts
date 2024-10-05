FROM alpine

LABEL AUTHOR="Akira <e.akimoto.akira@gmail.com>" \
        VERSION=1.0.0 \
        UPDATE_CONTENT="参考了 Akira 和 lxk 的 Dockerfile"

ENV DEFAULT_LIST_FILE=crontab_list.sh \
        CUSTOM_LIST_MERGE_TYPE=append \
        REPO_URL=https://github.com/sudojia/AutoTaskScript.git

RUN set -ex \
        && apk update && apk upgrade\
        && apk add --no-cache tzdata  git  nodejs  moreutils  npm curl jq \
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone

RUN git clone ${REPO_URL} /AutoTaskScript \
        && cd /AutoTaskScript \
        && npm install \
        && git checkout script \
        && cd src \
        && mkdir logs

RUN cp /AutoTaskScript/docker/docker_entrypoint.sh /usr/local/bin \
        && chmod +x /usr/local/bin/docker_entrypoint.sh

WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]

CMD [ "crond" ]
