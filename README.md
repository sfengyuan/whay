# Whay
A terminal Eng-Chn dictionary.

终端英文词典

词典使用的有道, 直接使用的web接口, 这下不担心api被限的问题.

# 安装

##Linux 或 Mac

```
// npm install -g whay
或者
// yarn global add whay
```
## Windows

由于npm的这个问题https://github.com/npm/npm/issues/18380 问题, 我使用了yarn publish, 虽发布成功,
但因为yarn不会针对windows对bin生成cmd文件, 导致仍然无法在windows上运行.

解决办法: 等到npm升级, 我重新试着publish一个, 现在可以git clone本repo, 然后运行`npm install -g .`安装,这样npm会生成cmd文件,

你也可以fork本包, 自己publish, 看看能否成功.

# 使用

```
whay my-word

whay --help
```

# License

MIT
