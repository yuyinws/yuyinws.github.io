/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/03/linux/mysql/mysqldump/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/12/17/frontend/frontend_notes/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/12/21/linux/nginx/install_ngnx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/12/24/backend/502_bad_gateway/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2020/12/24/linux/mysql/install_mysql_with_rpm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/01/13/backend/install_node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/01/22/backend/curl/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2021/01/27/frontend/encodeuri/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2021/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/前端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/后端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/index.css","7d96ce597bbc4c6a43fccb3be428b28d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/static/img/avatar.jpg","f36fe5623d989a42c70a6888d60f4c06"],["/static/img/cover/curl.png","628e6a56eaa01e0704ed8d95e68aec25"],["/static/img/cover/encodeuri.png","6bf409ede96195b426042a9cc2702e4a"],["/static/img/cover/frontend.jpg","23b4b97e449151deed7ed97a61d015b3"],["/static/img/pwaicons/192.png","6bbeb4c5d5bd8bc88b4766ce33dc7ace"],["/static/img/pwaicons/512.png","ba175c6dffed47b112aca6111360ae2a"],["/static/siteicon/android-chrome-144x144.png","47203f177060dea4ec3e6e1999ea7efd"],["/static/siteicon/android-chrome-192x192.png","8c3fb9aa88c9e744a8d40ceeab3d3890"],["/static/siteicon/android-chrome-256x256.png","f9fe259d9c4ff9a1b946125a3df0784e"],["/static/siteicon/android-chrome-36x36.png","25dbf0fb38d56dea102fa694e4877794"],["/static/siteicon/android-chrome-384x384.png","9226c45a094644b1f0b0cba78b360acc"],["/static/siteicon/android-chrome-48x48.png","94d64cc293e7ef25e81343df7e08d05e"],["/static/siteicon/android-chrome-512x512.png","71d8c0dc021aa5b63840ca8568ea8ba6"],["/static/siteicon/android-chrome-72x72.png","80f4ac20667ba1924e7a9a09ae02c733"],["/static/siteicon/android-chrome-96x96.png","46bbf1e58743fbf21c9fac2283c523a3"],["/static/siteicon/apple-touch-icon.png","167d99e3c057173a5e93cd551b41bc91"],["/static/siteicon/browserconfig.xml","ee8797a50f751dcea1e2b05c3a5cc688"],["/static/siteicon/favicon-16x16.png","9f87608255c23711c639f1104d3b3718"],["/static/siteicon/favicon-32x32.png","e45c67940312045faee1449b607a05f9"],["/static/siteicon/mstile-150x150.png","4cf8ad8d5f4c1d8f2f10466615f536cf"],["/sw-register.js","4490b770af9679dfc469266c92e1b0f9"],["/tags/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/MySQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Node/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/PHP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/SHELL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/backend/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/frontend/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
