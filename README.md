# Hylog

[![](https://img.shields.io/github/license/quzhen12/hylog)](LICENSE)

> This is a simple beautiful log

This log is convenient to use, it will provide the information about the log type, recording time, log position and log message. You can distinguish different log types easily according different grade colors. It's clear to get the error message and find the log position from the log message when something wrong.

This is the log message effect:

![](https://github.com/quzhen12/hylog/raw/master/docs/img/print_log.png)

## Install

```
npm install hylog --save
```

## Usage

```
let log = require("hylog")

log.debug("debug")
log.info("info")
log.warn("warn")
log.error("error")
log.fatal("fatal")
```

## License

[MIT © Quzhen.](./LICENSE)