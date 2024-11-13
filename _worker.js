// _worker.src.js
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _cloudflareSockets = require("cloudflare:sockets");

var password = 'auto';
var proxyIP = '';
// The user name and password do not contain special characters
// Setting the address will ignore proxyIP
// Example:  user:pass@host:port  or  host:port
var socks5Address = '';

var addresses = [
	//当sub为空时启用本地优选域名/优选IP，若不带端口号 TLS默认端口为443，#号后为备注别名
	/*
 'Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#加入我的频道t.me/CMLiussss解锁更多优选节点',
 'visa.cn:443',
 'www.visa.com:8443',
 'cis.visa.com:2053',
 'africa.visa.com:2083',
 'www.visa.com.sg:2087',
 'www.visaeurope.at:2096',
 'www.visa.com.mt:8443',
 'qa.visamiddleeast.com',
 'time.is',
 'www.wto.org:8443',
 'chatgpt.com:2087',
 'icook.hk',
 '104.17.0.0#IPv4',
 '[2606:4700::]#IPv6'
 */
];

var sub = '';
var subconverter = 'SUBAPI.fxxk.dedyn.io'; // clash订阅转换后端，目前使用CM的订阅转换功能。自带虚假节点信息防泄露
var subconfig = "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"; //订阅配置文件
var subProtocol = 'https';
var RproxyIP = 'false';

var addressesapi = [];
var addressescsv = [];
var DLS = 8;

var FileName = 'epeius';
var BotToken = '';
var ChatID = '';
var proxyhosts = []; //本地代理域名池
var proxyhostsURL = 'https://raw.githubusercontent.com/cmliu/CFcdnVmess2sub/main/proxyhosts'; //在线代理域名池URL
var go2Socks5s = ['*ttvnw.net', '*tapecontent.net', '*cloudatacdn.com', '*.loadshare.org'];

var fakeUserID = undefined;
var fakeHostName = undefined;
var proxyIPs = undefined;
var socks5s = undefined;
var sha224Password = undefined;
var expire = 4102329600; //2099-12-31
var regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[.*\]):?(\d+)?#?(.*)?$/;

/*
if (!isValidSHA224(sha224Password)) {
    throw new Error('sha224Password is not valid');
}
*/
var EPEIUS_KV = undefined;
var parsedSocks5Address = {};
var enableSocks = false;
var httpsPorts = ["2053", "2083", "2087", "2096", "8443"];
exports['default'] = {
	fetch: function fetch(request, env, ctx) {
		var UA, userAgent, currentDate, timestamp, fakeUserIDMD5, e, upgradeHeader, url, fakeConfig, trojanConfig, now, today, UD, pagesSum, workersSum, total, email, key, accountIndex, accountId, _now, startDate, endDate, Sum, userPassword, base64Regex;

		return regeneratorRuntime.async(function fetch$(context$1$0) {
			while (1) switch (context$1$0.prev = context$1$0.next) {
				case 0:
					context$1$0.prev = 0;

					EPEIUS_KV = env.EPEIUS_KV;
					UA = request.headers.get('User-Agent') || 'null';
					userAgent = UA.toLowerCase();

					password = env.PASSWORD || password;
					sha224Password = env.SHA224 || env.SHA224PASS || sha256.sha224(password);
					//console.log(sha224Password);

					currentDate = new Date();

					currentDate.setHours(0, 0, 0, 0); // 设置时间为当天
					timestamp = Math.ceil(currentDate.getTime() / 1000);
					context$1$0.next = 11;
					return regeneratorRuntime.awrap(MD5MD5('' + password + timestamp));

				case 11:
					fakeUserIDMD5 = context$1$0.sent;

					fakeUserID = fakeUserIDMD5.slice(0, 8) + "-" + fakeUserIDMD5.slice(8, 12) + "-" + fakeUserIDMD5.slice(12, 16) + "-" + fakeUserIDMD5.slice(16, 20) + "-" + fakeUserIDMD5.slice(20);
					fakeHostName = fakeUserIDMD5.slice(6, 9) + "." + fakeUserIDMD5.slice(13, 19);
					//console.log(fakeUserID); // 打印fakeID

					proxyIP = env.PROXYIP || proxyIP;
					context$1$0.next = 17;
					return regeneratorRuntime.awrap(ADD(proxyIP));

				case 17:
					proxyIPs = context$1$0.sent;

					proxyIP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
					socks5Address = env.SOCKS5 || socks5Address;
					context$1$0.next = 22;
					return regeneratorRuntime.awrap(ADD(socks5Address));

				case 22:
					socks5s = context$1$0.sent;

					socks5Address = socks5s[Math.floor(Math.random() * socks5s.length)];
					socks5Address = socks5Address.split('//')[1] || socks5Address;

					if (!env.CFPORTS) {
						context$1$0.next = 29;
						break;
					}

					context$1$0.next = 28;
					return regeneratorRuntime.awrap(ADD(env.CFPORTS));

				case 28:
					httpsPorts = context$1$0.sent;

				case 29:
					sub = env.SUB || sub;
					subconverter = env.SUBAPI || subconverter;
					if (subconverter.includes("http://")) {
						subconverter = subconverter.split("//")[1];
						subProtocol = 'http';
					} else {
						subconverter = subconverter.split("//")[1] || subconverter;
					}
					subconfig = env.SUBCONFIG || subconfig;
					if (socks5Address) {
						try {
							parsedSocks5Address = socks5AddressParser(socks5Address);
							RproxyIP = env.RPROXYIP || 'false';
							enableSocks = true;
						} catch (err) {
							e = err;

							console.log(e.toString());
							RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
							enableSocks = false;
						}
					} else {
						RproxyIP = env.RPROXYIP || !proxyIP ? 'true' : 'false';
					}

					if (!env.ADD) {
						context$1$0.next = 38;
						break;
					}

					context$1$0.next = 37;
					return regeneratorRuntime.awrap(ADD(env.ADD));

				case 37:
					addresses = context$1$0.sent;

				case 38:
					if (!env.ADDAPI) {
						context$1$0.next = 42;
						break;
					}

					context$1$0.next = 41;
					return regeneratorRuntime.awrap(ADD(env.ADDAPI));

				case 41:
					addressesapi = context$1$0.sent;

				case 42:
					if (!env.ADDCSV) {
						context$1$0.next = 46;
						break;
					}

					context$1$0.next = 45;
					return regeneratorRuntime.awrap(ADD(env.ADDCSV));

				case 45:
					addressescsv = context$1$0.sent;

				case 46:
					DLS = env.DLS || DLS;
					BotToken = env.TGTOKEN || BotToken;
					ChatID = env.TGID || ChatID;

					if (!env.GO2SOCKS5) {
						context$1$0.next = 53;
						break;
					}

					context$1$0.next = 52;
					return regeneratorRuntime.awrap(ADD(env.GO2SOCKS5));

				case 52:
					go2Socks5s = context$1$0.sent;

				case 53:
					upgradeHeader = request.headers.get("Upgrade");
					url = new URL(request.url);

					if (url.searchParams.has('sub') && url.searchParams.get('sub') !== '') sub = url.searchParams.get('sub');
					FileName = env.SUBNAME || FileName;

					if (!(!upgradeHeader || upgradeHeader !== "websocket")) {
						context$1$0.next = 124;
						break;
					}

					context$1$0.t0 = url.pathname;
					context$1$0.next = context$1$0.t0 === '/' ? 61 : context$1$0.t0 === '/' + fakeUserID ? 72 : context$1$0.t0 === '/' + password ? 76 : 111;
					break;

				case 61:
					if (!env.URL302) {
						context$1$0.next = 65;
						break;
					}

					return context$1$0.abrupt('return', Response.redirect(env.URL302, 302));

				case 65:
					if (!env.URL) {
						context$1$0.next = 71;
						break;
					}

					context$1$0.next = 68;
					return regeneratorRuntime.awrap(proxyURL(env.URL, url));

				case 68:
					return context$1$0.abrupt('return', context$1$0.sent);

				case 71:
					return context$1$0.abrupt('return', new Response(JSON.stringify(request.cf, null, 4), {
						status: 200,
						headers: {
							'content-type': 'application/json'
						}
					}));

				case 72:
					context$1$0.next = 74;
					return regeneratorRuntime.awrap(getTrojanConfig(password, request.headers.get('Host'), sub, 'CF-Workers-SUB', RproxyIP, url));

				case 74:
					fakeConfig = context$1$0.sent;
					return context$1$0.abrupt('return', new Response('' + fakeConfig, { status: 200 }));

				case 76:
					context$1$0.next = 78;
					return regeneratorRuntime.awrap(sendMessage('#获取订阅 ' + FileName, request.headers.get('CF-Connecting-IP'), 'UA: ' + UA + '</tg-spoiler>\n域名: ' + url.hostname + '\n<tg-spoiler>入口: ' + (url.pathname + url.search) + '</tg-spoiler>'));

				case 78:
					context$1$0.next = 80;
					return regeneratorRuntime.awrap(getTrojanConfig(password, request.headers.get('Host'), sub, UA, RproxyIP, url));

				case 80:
					trojanConfig = context$1$0.sent;
					now = Date.now();
					today = new Date(now);

					today.setHours(0, 0, 0, 0);
					UD = Math.floor((now - today.getTime()) / 86400000 * 24 * 1099511627776 / 2);
					pagesSum = UD;
					workersSum = UD;
					total = 24 * 1099511627776;

					if (!(env.CFEMAIL && env.CFKEY)) {
						context$1$0.next = 106;
						break;
					}

					email = env.CFEMAIL;
					key = env.CFKEY;
					accountIndex = env.CFID || 0;
					context$1$0.next = 94;
					return regeneratorRuntime.awrap(getAccountId(email, key));

				case 94:
					accountId = context$1$0.sent;

					if (!accountId) {
						context$1$0.next = 106;
						break;
					}

					_now = new Date();

					_now.setUTCHours(0, 0, 0, 0);
					startDate = _now.toISOString();
					endDate = new Date().toISOString();
					context$1$0.next = 102;
					return regeneratorRuntime.awrap(getSum(accountId, accountIndex, email, key, startDate, endDate));

				case 102:
					Sum = context$1$0.sent;

					pagesSum = Sum[0];
					workersSum = Sum[1];
					total = 102400;

				case 106:
					if (!(userAgent && (userAgent.includes('mozilla') || userAgent.includes('subconverter')))) {
						context$1$0.next = 110;
						break;
					}

					return context$1$0.abrupt('return', new Response('' + trojanConfig, {
						status: 200,
						headers: {
							"Content-Type": "text/plain;charset=utf-8",
							"Profile-Update-Interval": "6",
							"Subscription-Userinfo": 'upload=' + pagesSum + '; download=' + workersSum + '; total=' + total + '; expire=' + expire
						}
					}));

				case 110:
					return context$1$0.abrupt('return', new Response('' + trojanConfig, {
						status: 200,
						headers: {
							"Content-Disposition": 'attachment; filename=' + FileName + '; filename*=utf-8\'\'' + encodeURIComponent(FileName),
							"Content-Type": "text/plain;charset=utf-8",
							"Profile-Update-Interval": "6",
							"Subscription-Userinfo": 'upload=' + pagesSum + '; download=' + workersSum + '; total=' + total + '; expire=' + expire
						}
					}));

				case 111:
					if (!env.URL302) {
						context$1$0.next = 115;
						break;
					}

					return context$1$0.abrupt('return', Response.redirect(env.URL302, 302));

				case 115:
					if (!env.URL) {
						context$1$0.next = 121;
						break;
					}

					context$1$0.next = 118;
					return regeneratorRuntime.awrap(proxyURL(env.URL, url));

				case 118:
					return context$1$0.abrupt('return', context$1$0.sent);

				case 121:
					return context$1$0.abrupt('return', new Response('不用怀疑！你PASSWORD就是错的！！！', { status: 404 }));

				case 122:
					context$1$0.next = 132;
					break;

				case 124:
					proxyIP = url.searchParams.get('proxyip') || proxyIP;
					if (new RegExp('/proxyip=', 'i').test(url.pathname)) proxyIP = url.pathname.toLowerCase().split('/proxyip=')[1];else if (new RegExp('/proxyip.', 'i').test(url.pathname)) proxyIP = 'proxyip.' + url.pathname.toLowerCase().split("/proxyip.")[1];

					socks5Address = url.searchParams.get('socks5') || socks5Address;
					if (new RegExp('/socks5=', 'i').test(url.pathname)) socks5Address = url.pathname.split('5=')[1];else if (new RegExp('/socks://', 'i').test(url.pathname) || new RegExp('/socks5://', 'i').test(url.pathname)) {
						socks5Address = url.pathname.split('://')[1].split('#')[0];
						if (socks5Address.includes('@')) {
							userPassword = socks5Address.split('@')[0];
							base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;

							if (base64Regex.test(userPassword) && !userPassword.includes(':')) userPassword = atob(userPassword);
							socks5Address = userPassword + '@' + socks5Address.split('@')[1];
						}
					}
					if (socks5Address) {
						try {
							parsedSocks5Address = socks5AddressParser(socks5Address);
							enableSocks = true;
						} catch (err) {
							e = err;

							console.log(e.toString());
							enableSocks = false;
						}
					} else {
						enableSocks = false;
					}
					context$1$0.next = 131;
					return regeneratorRuntime.awrap(trojanOverWSHandler(request));

				case 131:
					return context$1$0.abrupt('return', context$1$0.sent);

				case 132:
					context$1$0.next = 138;
					break;

				case 134:
					context$1$0.prev = 134;
					context$1$0.t1 = context$1$0['catch'](0);
					e = context$1$0.t1;
					return context$1$0.abrupt('return', new Response(e.toString()));

				case 138:
				case 'end':
					return context$1$0.stop();
			}
		}, null, this, [[0, 134]]);
	}
};

function trojanOverWSHandler(request) {
	var webSocketPair, _Object$values, _Object$values2, client, webSocket, address, portWithRandomLog, log, earlyDataHeader, readableWebSocketStream, remoteSocketWapper, udpStreamWrite;

	return regeneratorRuntime.async(function trojanOverWSHandler$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				webSocketPair = new WebSocketPair();
				_Object$values = Object.values(webSocketPair);
				_Object$values2 = _slicedToArray(_Object$values, 2);
				client = _Object$values2[0];
				webSocket = _Object$values2[1];

				webSocket.accept();
				address = "";
				portWithRandomLog = "";

				log = function log(info, event) {
					console.log('[' + address + ':' + portWithRandomLog + '] ' + info, event || "");
				};

				earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
				readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
				remoteSocketWapper = {
					value: null
				};
				udpStreamWrite = null;

				readableWebSocketStream.pipeTo(new WritableStream({
					write: function write(chunk, controller) {
						var writer, _ref, hasError, message, _ref$portRemote, portRemote, _ref$addressRemote, addressRemote, rawClientData, addressType;

						return regeneratorRuntime.async(function write$(context$2$0) {
							while (1) switch (context$2$0.prev = context$2$0.next) {
								case 0:
									if (!udpStreamWrite) {
										context$2$0.next = 2;
										break;
									}

									return context$2$0.abrupt('return', udpStreamWrite(chunk));

								case 2:
									if (!remoteSocketWapper.value) {
										context$2$0.next = 8;
										break;
									}

									writer = remoteSocketWapper.value.writable.getWriter();
									context$2$0.next = 6;
									return regeneratorRuntime.awrap(writer.write(chunk));

								case 6:
									writer.releaseLock();
									return context$2$0.abrupt('return');

								case 8:
									context$2$0.next = 10;
									return regeneratorRuntime.awrap(parseTrojanHeader(chunk));

								case 10:
									_ref = context$2$0.sent;
									hasError = _ref.hasError;
									message = _ref.message;
									_ref$portRemote = _ref.portRemote;
									portRemote = _ref$portRemote === undefined ? 443 : _ref$portRemote;
									_ref$addressRemote = _ref.addressRemote;
									addressRemote = _ref$addressRemote === undefined ? "" : _ref$addressRemote;
									rawClientData = _ref.rawClientData;
									addressType = _ref.addressType;

									address = addressRemote;
									portWithRandomLog = portRemote + '--' + Math.random() + ' tcp';

									if (!hasError) {
										context$2$0.next = 24;
										break;
									}

									throw new Error(message);

								case 24:
									handleTCPOutBound(remoteSocketWapper, addressRemote, portRemote, rawClientData, webSocket, log, addressType);

								case 25:
								case 'end':
									return context$2$0.stop();
							}
						}, null, this);
					},
					close: function close() {
						log('readableWebSocketStream is closed');
					},
					abort: function abort(reason) {
						log('readableWebSocketStream is aborted', JSON.stringify(reason));
					}
				}))['catch'](function (err) {
					log("readableWebSocketStream pipeTo error", err);
				});
				return context$1$0.abrupt('return', new Response(null, {
					status: 101,
					// @ts-ignore
					webSocket: client
				}));

			case 15:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function parseTrojanHeader(buffer) {
	var crLfIndex, password, socks5DataBuffer, view, cmd, atype, addressLength, addressIndex, address, dataView, ipv6, i, portIndex, portBuffer, portRemote;
	return regeneratorRuntime.async(function parseTrojanHeader$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(buffer.byteLength < 56)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: "invalid data"
				});

			case 2:
				crLfIndex = 56;

				if (!(new Uint8Array(buffer.slice(56, 57))[0] !== 0x0d || new Uint8Array(buffer.slice(57, 58))[0] !== 0x0a)) {
					context$1$0.next = 5;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: "invalid header format (missing CR LF)"
				});

			case 5:
				password = new TextDecoder().decode(buffer.slice(0, crLfIndex));

				if (!(password !== sha224Password)) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: "invalid password"
				});

			case 8:
				socks5DataBuffer = buffer.slice(crLfIndex + 2);

				if (!(socks5DataBuffer.byteLength < 6)) {
					context$1$0.next = 11;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: "invalid SOCKS5 request data"
				});

			case 11:
				view = new DataView(socks5DataBuffer);
				cmd = view.getUint8(0);

				if (!(cmd !== 1)) {
					context$1$0.next = 15;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: "unsupported command, only TCP (CONNECT) is allowed"
				});

			case 15:
				atype = view.getUint8(1);
				addressLength = 0;
				addressIndex = 2;
				address = "";
				context$1$0.t0 = atype;
				context$1$0.next = context$1$0.t0 === 1 ? 22 : context$1$0.t0 === 3 ? 25 : context$1$0.t0 === 4 ? 29 : 35;
				break;

			case 22:
				addressLength = 4;
				address = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)).join(".");
				return context$1$0.abrupt('break', 36);

			case 25:
				addressLength = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + 1))[0];
				addressIndex += 1;
				address = new TextDecoder().decode(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
				return context$1$0.abrupt('break', 36);

			case 29:
				addressLength = 16;
				dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
				ipv6 = [];

				for (i = 0; i < 8; i++) {
					ipv6.push(dataView.getUint16(i * 2).toString(16));
				}
				address = ipv6.join(":");
				return context$1$0.abrupt('break', 36);

			case 35:
				return context$1$0.abrupt('return', {
					hasError: true,
					message: 'invalid addressType is ' + atype
				});

			case 36:
				if (address) {
					context$1$0.next = 38;
					break;
				}

				return context$1$0.abrupt('return', {
					hasError: true,
					message: 'address is empty, addressType is ' + atype
				});

			case 38:
				portIndex = addressIndex + addressLength;
				portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
				portRemote = new DataView(portBuffer).getUint16(0);
				return context$1$0.abrupt('return', {
					hasError: false,
					addressRemote: address,
					portRemote: portRemote,
					rawClientData: socks5DataBuffer.slice(portIndex + 4),
					addressType: atype
				});

			case 42:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, log, addressType) {
	var addressInKV, useSocks5Pattern, connectAndWrite, retry, useSocks, tcpSocket;
	return regeneratorRuntime.async(function handleTCPOutBound$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				retry = function retry() {
					return regeneratorRuntime.async(function retry$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								if (!enableSocks) {
									context$2$0.next = 6;
									break;
								}

								context$2$0.next = 3;
								return regeneratorRuntime.awrap(connectAndWrite(addressRemote, portRemote, true));

							case 3:
								tcpSocket = context$2$0.sent;
								context$2$0.next = 11;
								break;

							case 6:
								if (!proxyIP || proxyIP == '') {
									proxyIP = atob('cHJveHlpcC50cDEuY21saXVzc3NzLmNvbQ==');
								} else if (proxyIP.includes(']:')) {
									portRemote = proxyIP.split(']:')[1] || portRemote;
									proxyIP = proxyIP.split(']:')[0] || proxyIP;
								} else if (proxyIP.split(':').length === 2) {
									portRemote = proxyIP.split(':')[1] || portRemote;
									proxyIP = proxyIP.split(':')[0] || proxyIP;
								}
								if (proxyIP.includes('.tp')) portRemote = proxyIP.split('.tp')[1].split('.')[0] || portRemote;
								context$2$0.next = 10;
								return regeneratorRuntime.awrap(connectAndWrite(proxyIP || addressRemote, portRemote));

							case 10:
								tcpSocket = context$2$0.sent;

							case 11:
								tcpSocket.closed['catch'](function (error) {
									console.log("retry tcpSocket closed error", error);
								})['finally'](function () {
									safeCloseWebSocket(webSocket);
								});
								remoteSocketToWS(tcpSocket, webSocket, null, log);

							case 13:
							case 'end':
								return context$2$0.stop();
						}
					}, null, this);
				};

				connectAndWrite = function connectAndWrite(address, port) {
					var socks = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
					var tcpSocket, writer;
					return regeneratorRuntime.async(function connectAndWrite$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								log('connected to ' + address + ':' + port);

								if (!socks) {
									context$2$0.next = 7;
									break;
								}

								context$2$0.next = 4;
								return regeneratorRuntime.awrap(socks5Connect(addressType, address, port, log));

							case 4:
								context$2$0.t0 = context$2$0.sent;
								context$2$0.next = 8;
								break;

							case 7:
								context$2$0.t0 = (0, _cloudflareSockets.connect)({
									hostname: address,
									port: port
								});

							case 8:
								tcpSocket = context$2$0.t0;

								if (!(socks && tcpSocket && !addressInKV)) {
									context$2$0.next = 19;
									break;
								}

								context$2$0.prev = 10;
								context$2$0.next = 13;
								return regeneratorRuntime.awrap(EPEIUS_KV.put(address, 'true', { expirationTtl: 86400 }));

							case 13:
								// 24小时过期
								log('Stored socks5 config for ' + address + ' in KV');
								context$2$0.next = 19;
								break;

							case 16:
								context$2$0.prev = 16;
								context$2$0.t1 = context$2$0['catch'](10);

								log('KV write error: ' + context$2$0.t1);

							case 19:

								remoteSocket.value = tcpSocket;
								writer = tcpSocket.writable.getWriter();
								context$2$0.next = 23;
								return regeneratorRuntime.awrap(writer.write(rawClientData));

							case 23:
								writer.releaseLock();
								return context$2$0.abrupt('return', tcpSocket);

							case 25:
							case 'end':
								return context$2$0.stop();
						}
					}, null, this, [[10, 16]]);
				};

				useSocks5Pattern = function useSocks5Pattern(address) {
					var storedSocks5;
					return regeneratorRuntime.async(function useSocks5Pattern$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.prev = 0;
								context$2$0.next = 3;
								return regeneratorRuntime.awrap(EPEIUS_KV.get(address));

							case 3:
								storedSocks5 = context$2$0.sent;

								if (!storedSocks5) {
									context$2$0.next = 7;
									break;
								}

								addressInKV = true; // 设置标记
								return context$2$0.abrupt('return', true);

							case 7:
								context$2$0.next = 12;
								break;

							case 9:
								context$2$0.prev = 9;
								context$2$0.t0 = context$2$0['catch'](0);

								log('KV read error: ' + context$2$0.t0);

							case 12:
								if (!(go2Socks5s.includes(atob('YWxsIGlu')) || go2Socks5s.includes(atob('Kg==')))) {
									context$2$0.next = 14;
									break;
								}

								return context$2$0.abrupt('return', true);

							case 14:
								return context$2$0.abrupt('return', go2Socks5s.some(function (pattern) {
									var regexPattern = pattern.replace(/\*/g, '.*');
									var regex = new RegExp('^' + regexPattern + '$', 'i');
									return regex.test(address);
								}));

							case 15:
							case 'end':
								return context$2$0.stop();
						}
					}, null, this, [[0, 9]]);
				};

				addressInKV = false;
				useSocks = false;

				if (!(go2Socks5s.length > 0 && enableSocks)) {
					context$1$0.next = 9;
					break;
				}

				context$1$0.next = 8;
				return regeneratorRuntime.awrap(useSocks5Pattern(addressRemote));

			case 8:
				useSocks = context$1$0.sent;

			case 9:
				context$1$0.next = 11;
				return regeneratorRuntime.awrap(connectAndWrite(addressRemote, portRemote, useSocks));

			case 11:
				tcpSocket = context$1$0.sent;

				remoteSocketToWS(tcpSocket, webSocket, retry, log);

			case 13:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
	var readableStreamCancel = false;
	var stream = new ReadableStream({
		start: function start(controller) {
			webSocketServer.addEventListener("message", function (event) {
				if (readableStreamCancel) {
					return;
				}
				var message = event.data;
				controller.enqueue(message);
			});
			webSocketServer.addEventListener("close", function () {
				safeCloseWebSocket(webSocketServer);
				if (readableStreamCancel) {
					return;
				}
				controller.close();
			});
			webSocketServer.addEventListener("error", function (err) {
				log("webSocketServer error");
				controller.error(err);
			});

			var _base64ToArrayBuffer = base64ToArrayBuffer(earlyDataHeader);

			var earlyData = _base64ToArrayBuffer.earlyData;
			var error = _base64ToArrayBuffer.error;

			if (error) {
				controller.error(error);
			} else if (earlyData) {
				controller.enqueue(earlyData);
			}
		},
		pull: function pull(controller) {},
		cancel: function cancel(reason) {
			if (readableStreamCancel) {
				return;
			}
			log('readableStream was canceled, due to ' + reason);
			readableStreamCancel = true;
			safeCloseWebSocket(webSocketServer);
		}
	});
	return stream;
}

function remoteSocketToWS(remoteSocket, webSocket, retry, log) {
	var hasIncomingData;
	return regeneratorRuntime.async(function remoteSocketToWS$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				hasIncomingData = false;
				context$1$0.next = 3;
				return regeneratorRuntime.awrap(remoteSocket.readable.pipeTo(new WritableStream({
					start: function start() {},
					/**
      *
      * @param {Uint8Array} chunk
      * @param {*} controller
      */
					write: function write(chunk, controller) {
						return regeneratorRuntime.async(function write$(context$2$0) {
							while (1) switch (context$2$0.prev = context$2$0.next) {
								case 0:
									hasIncomingData = true;
									if (webSocket.readyState !== WS_READY_STATE_OPEN) {
										controller.error("webSocket connection is not open");
									}
									webSocket.send(chunk);

								case 3:
								case 'end':
									return context$2$0.stop();
							}
						}, null, this);
					},
					close: function close() {
						log('remoteSocket.readable is closed, hasIncomingData: ' + hasIncomingData);
					},
					abort: function abort(reason) {
						console.error("remoteSocket.readable abort", reason);
					}
				}))['catch'](function (error) {
					console.error('remoteSocketToWS error:', error.stack || error);
					safeCloseWebSocket(webSocket);
				}));

			case 3:
				if (hasIncomingData === false && retry) {
					log('retry');
					retry();
				}

			case 4:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}
/*
function isValidSHA224(hash) {
	const sha224Regex = /^[0-9a-f]{56}$/i;
	return sha224Regex.test(hash);
}
*/
function base64ToArrayBuffer(base64Str) {
	if (!base64Str) {
		return { error: null };
	}
	try {
		base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
		var decode = atob(base64Str);
		var arryBuffer = Uint8Array.from(decode, function (c) {
			return c.charCodeAt(0);
		});
		return { earlyData: arryBuffer.buffer, error: null };
	} catch (error) {
		return { error: error };
	}
}

var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;

function safeCloseWebSocket(socket) {
	try {
		if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
			socket.close();
		}
	} catch (error) {
		console.error("safeCloseWebSocket error", error);
	}
}

/*
export {
	worker_default as
	default
};
//# sourceMappingURL=worker.js.map
*/

function revertFakeInfo(content, userID, hostName, isBase64) {
	if (isBase64) content = atob(content); //Base64解码
	content = content.replace(new RegExp(fakeUserID, 'g'), userID).replace(new RegExp(fakeHostName, 'g'), hostName);
	//console.log(content);
	if (isBase64) content = btoa(content); //Base64编码

	return content;
}

function MD5MD5(text) {
	var encoder, firstPass, firstPassArray, firstHex, secondPass, secondPassArray, secondHex;
	return regeneratorRuntime.async(function MD5MD5$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				encoder = new TextEncoder();
				context$1$0.next = 3;
				return regeneratorRuntime.awrap(crypto.subtle.digest('MD5', encoder.encode(text)));

			case 3:
				firstPass = context$1$0.sent;
				firstPassArray = Array.from(new Uint8Array(firstPass));
				firstHex = firstPassArray.map(function (b) {
					return b.toString(16).padStart(2, '0');
				}).join('');
				context$1$0.next = 8;
				return regeneratorRuntime.awrap(crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27))));

			case 8:
				secondPass = context$1$0.sent;
				secondPassArray = Array.from(new Uint8Array(secondPass));
				secondHex = secondPassArray.map(function (b) {
					return b.toString(16).padStart(2, '0');
				}).join('');
				return context$1$0.abrupt('return', secondHex.toLowerCase());

			case 12:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function ADD(envadd) {
	var addtext, add;
	return regeneratorRuntime.async(function ADD$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				addtext = envadd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');
				// 双引号、单引号和换行符替换为逗号
				//console.log(addtext);
				if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
				if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
				add = addtext.split(',');
				return context$1$0.abrupt('return', add);

			case 5:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function proxyURL(proxyURL, url) {
	var URLs, fullURL, parsedURL, URLProtocol, URLHostname, URLPathname, URLSearch, newURL, response, newResponse;
	return regeneratorRuntime.async(function proxyURL$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return regeneratorRuntime.awrap(ADD(proxyURL));

			case 2:
				URLs = context$1$0.sent;
				fullURL = URLs[Math.floor(Math.random() * URLs.length)];
				parsedURL = new URL(fullURL);

				console.log(parsedURL);
				// 提取并可能修改 URL 组件
				URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
				URLHostname = parsedURL.hostname;
				URLPathname = parsedURL.pathname;
				URLSearch = parsedURL.search;

				// 处理 pathname
				if (URLPathname.charAt(URLPathname.length - 1) == '/') {
					URLPathname = URLPathname.slice(0, -1);
				}
				URLPathname += url.pathname;
				// 构建新的 URL
				newURL = URLProtocol + '://' + URLHostname + URLPathname + URLSearch;
				context$1$0.next = 15;
				return regeneratorRuntime.awrap(fetch(newURL));

			case 15:
				response = context$1$0.sent;
				newResponse = new Response(response.body, {
					status: response.status,
					statusText: response.statusText,
					headers: response.headers
				});

				// 添加自定义头部，包含 URL 信息
				//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
				//newResponse.headers.set('X-Original-URL', fullURL);
				newResponse.headers.set('X-New-URL', newURL);
				return context$1$0.abrupt('return', newResponse);

			case 19:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

function checkSUB(host) {
	if ((!sub || sub == '') && addresses.length + addressesapi.length + addressescsv.length == 0) {
		addresses = ['Join.my.Telegram.channel.CMLiussss.to.unlock.more.premium.nodes.cf.090227.xyz#加入我的频道t.me/CMLiussss解锁更多优选节点', '127.0.0.1:1234#CFnat', 'visa.cn:443', 'singapore.com:8443', 'japan.com:2053', 'brazil.com:2083', 'russia.com:2087', 'www.gov.ua:2096', 'www.gco.gov.qa:8443', 'www.gov.se', 'time.is', 'www.wto.org:8443', 'fbi.gov:2087', 'icook.hk',
		//'104.17.0.0#IPv4',
		'[2606:4700::]#IPv6'];
	}
}

function 配置信息(密码, 域名地址) {
	var 啥啥啥_写的这是啥啊 = 'dHJvamFu';
	var 协议类型 = atob(啥啥啥_写的这是啥啊);

	var 别名 = FileName;
	var 地址 = 域名地址;
	var 端口 = 443;

	var 传输层协议 = 'ws';
	var 伪装域名 = 域名地址;
	var 路径 = '/?ed=2560';

	var 传输层安全 = ['tls', true];
	var SNI = 域名地址;
	var 指纹 = 'randomized';

	var v2ray = 协议类型 + '://' + encodeURIComponent(密码) + '@' + 地址 + ':' + 端口 + '?security=' + 传输层安全[0] + '&sni=' + SNI + '&alpn=h3&fp=' + 指纹 + '&allowInsecure=1&type=' + 传输层协议 + '&host=' + 伪装域名 + '&path=' + encodeURIComponent(路径) + '#' + encodeURIComponent(别名);
	var clash = '- {name: ' + 别名 + ', server: ' + 地址 + ', port: ' + 端口 + ', udp: false, client-fingerprint: ' + 指纹 + ', type: ' + 协议类型 + ', password: ' + 密码 + ', sni: ' + SNI + ', alpn: [h3], skip-cert-verify: true, network: ' + 传输层协议 + ', ws-opts: {path: "' + 路径 + '", headers: {Host: ' + 伪装域名 + '}}}';

	return [v2ray, clash];
}

var subParams = ['sub', 'base64', 'b64', 'clash', 'singbox', 'sb', 'surge'];
function getTrojanConfig(password, hostName, sub, UA, RproxyIP, _url) {
	var userAgent, Config, v2ray, clash, proxyhost, response, text, lines, nonEmptyLines, _surge, newSocks5s, socks5List, 订阅器, url, isBase64, newAddressesapi, newAddressescsv, content;

	return regeneratorRuntime.async(function getTrojanConfig$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				checkSUB(hostName);
				userAgent = UA.toLowerCase();
				Config = 配置信息(password, hostName);
				v2ray = Config[0];
				clash = Config[1];
				proxyhost = "";

				if (!(hostName.includes(".workers.dev") || hostName.includes(".pages.dev"))) {
					context$1$0.next = 26;
					break;
				}

				if (!(proxyhostsURL && (!proxyhosts || proxyhosts.length == 0))) {
					context$1$0.next = 25;
					break;
				}

				context$1$0.prev = 8;
				context$1$0.next = 11;
				return regeneratorRuntime.awrap(fetch(proxyhostsURL));

			case 11:
				response = context$1$0.sent;

				if (response.ok) {
					context$1$0.next = 15;
					break;
				}

				console.error('获取地址时出错:', response.status, response.statusText);
				return context$1$0.abrupt('return');

			case 15:
				context$1$0.next = 17;
				return regeneratorRuntime.awrap(response.text());

			case 17:
				text = context$1$0.sent;
				lines = text.split('\n');
				nonEmptyLines = lines.filter(function (line) {
					return line.trim() !== '';
				});

				proxyhosts = proxyhosts.concat(nonEmptyLines);
				context$1$0.next = 25;
				break;

			case 23:
				context$1$0.prev = 23;
				context$1$0.t0 = context$1$0['catch'](8);

			case 25:
				//console.error('获取地址时出错:', error);

				if (proxyhosts.length != 0) proxyhost = proxyhosts[Math.floor(Math.random() * proxyhosts.length)] + "/";

			case 26:
				if (!(userAgent.includes('mozilla') && !subParams.some(function (_searchParams) {
					return _url.searchParams.has(_searchParams);
				}))) {
					context$1$0.next = 37;
					break;
				}

				_surge = 'Surge订阅地址:\nhttps://' + proxyhost + hostName + '/' + password + '?surge';

				if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev")) _surge = "Surge订阅必须绑定自定义域";
				newSocks5s = socks5s.map(function (socks5Address) {
					if (socks5Address.includes('@')) return socks5Address.split('@')[1];else if (socks5Address.includes('//')) return socks5Address.split('//')[1];else return socks5Address;
				});
				socks5List = '';

				if (go2Socks5s.length > 0 && enableSocks) {
					socks5List = '' + decodeURIComponent('SOCKS5%EF%BC%88%E7%99%BD%E5%90%8D%E5%8D%95%EF%BC%89%3A%20');
					if (go2Socks5s.includes(atob('YWxsIGlu')) || go2Socks5s.includes(atob('Kg=='))) socks5List += decodeURIComponent('%E6%89%80%E6%9C%89%E6%B5%81%E9%87%8F') + '\n';else socks5List += '\n  ' + go2Socks5s.join('\n  ') + '\n';
				}

				订阅器 = '';

				if (!sub || sub == '') {
					if (enableSocks) 订阅器 += 'CFCDN（访问方式）: Socks5\n  ' + newSocks5s.join('\n  ') + '\n' + socks5List;else if (proxyIP && proxyIP != '') 订阅器 += 'CFCDN（访问方式）: ProxyIP\n  ' + proxyIPs.join('\n  ') + '\n';else 订阅器 += 'CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！\n';
					订阅器 += '\n您的订阅内容由 内置 addresses/ADD* 参数变量提供\n';
					if (addresses.length > 0) 订阅器 += 'ADD（TLS优选域名&IP）: \n  ' + addresses.join('\n  ') + '\n';
					if (addressesapi.length > 0) 订阅器 += 'ADDAPI（TLS优选域名&IP 的 API）: \n  ' + addressesapi.join('\n  ') + '\n';
					if (addressescsv.length > 0) 订阅器 += 'ADDCSV（IPTest测速csv文件 限速 ' + DLS + ' ）: \n  ' + addressescsv.join('\n  ') + '\n';
				} else {
					if (enableSocks) 订阅器 += 'CFCDN（访问方式）: Socks5\n  ' + newSocks5s.join('\n  ') + '\n' + socks5List;else if (proxyIP && proxyIP != '') 订阅器 += 'CFCDN（访问方式）: ProxyIP\n  ' + proxyIPs.join('\n  ') + '\n';else if (RproxyIP == 'true') 订阅器 += 'CFCDN（访问方式）: 自动获取ProxyIP\n';else 订阅器 += 'CFCDN（访问方式）: 无法访问, 需要您设置 proxyIP/PROXYIP ！！！\n';
					订阅器 += '\nSUB（优选订阅生成器）: ' + sub;
				}

				return context$1$0.abrupt('return', '\n################################################################\nSubscribe / sub 订阅地址, 支持 Base64、clash-meta、sing-box 订阅格式\n---------------------------------------------------------------\n快速自适应订阅地址:\nhttps://' + proxyhost + hostName + '/' + password + '\nhttps://' + proxyhost + hostName + '/' + password + '?sub\n\nBase64订阅地址:\nhttps://' + proxyhost + hostName + '/' + password + '?b64\nhttps://' + proxyhost + hostName + '/' + password + '?base64\n\nclash订阅地址:\nhttps://' + proxyhost + hostName + '/' + password + '?clash\n\nsingbox订阅地址:\nhttps://' + proxyhost + hostName + '/' + password + '?sb\nhttps://' + proxyhost + hostName + '/' + password + '?singbox\n\n' + _surge + '\n---------------------------------------------------------------\n################################################################\n' + FileName + ' 配置信息\n---------------------------------------------------------------\nHOST: ' + hostName + '\nPASSWORD: ' + password + '\nSHA224: ' + sha224Password + '\nFAKEPASS: ' + fakeUserID + '\nUA: ' + UA + '\n\n' + 订阅器 + '\nSUBAPI（订阅转换后端）: ' + subProtocol + '://' + subconverter + '\nSUBCONFIG（订阅转换配置文件）: ' + subconfig + '\n---------------------------------------------------------------\n################################################################\nv2ray\n---------------------------------------------------------------\n' + v2ray + '\n---------------------------------------------------------------\n################################################################\nclash-meta\n---------------------------------------------------------------\n' + clash + '\n---------------------------------------------------------------\n################################################################\ntelegram 交流群 技术大佬~在线发牌!\nhttps://t.me/CMLiussss\n---------------------------------------------------------------\ngithub 项目地址 Star!Star!Star!!!\nhttps://github.com/cmliu/epeius\n---------------------------------------------------------------\n################################################################\n');

			case 37:
				if (!(typeof fetch != 'function')) {
					context$1$0.next = 39;
					break;
				}

				return context$1$0.abrupt('return', 'Error: fetch is not available in this environment.');

			case 39:
				// 如果是使用默认域名，则改成一个workers的域名，订阅器会加上代理
				if (hostName.includes(".workers.dev") || hostName.includes(".pages.dev")) {
					fakeHostName = fakeHostName + '.workers.dev';
				} else {
					fakeHostName = fakeHostName + '.xyz';
				}

				url = 'https://' + sub + '/sub?host=' + fakeHostName + '&pw=' + fakeUserID + '&password=' + fakeUserID + '&epeius=cmliu&proxyip=' + RproxyIP;
				isBase64 = true;
				newAddressesapi = [];
				newAddressescsv = [];

				if (!(!sub || sub == "")) {
					context$1$0.next = 73;
					break;
				}

				if (!(hostName.includes('workers.dev') || hostName.includes('pages.dev'))) {
					context$1$0.next = 66;
					break;
				}

				if (!(proxyhostsURL && (!proxyhosts || proxyhosts.length == 0))) {
					context$1$0.next = 65;
					break;
				}

				context$1$0.prev = 47;
				context$1$0.next = 50;
				return regeneratorRuntime.awrap(fetch(proxyhostsURL));

			case 50:
				response = context$1$0.sent;

				if (response.ok) {
					context$1$0.next = 54;
					break;
				}

				console.error('获取地址时出错:', response.status, response.statusText);
				return context$1$0.abrupt('return');

			case 54:
				context$1$0.next = 56;
				return regeneratorRuntime.awrap(response.text());

			case 56:
				text = context$1$0.sent;
				lines = text.split('\n');
				nonEmptyLines = lines.filter(function (line) {
					return line.trim() !== '';
				});

				proxyhosts = proxyhosts.concat(nonEmptyLines);
				context$1$0.next = 65;
				break;

			case 62:
				context$1$0.prev = 62;
				context$1$0.t1 = context$1$0['catch'](47);

				console.error('获取地址时出错:', context$1$0.t1);

			case 65:
				// 使用Set对象去重
				proxyhosts = [].concat(_toConsumableArray(new Set(proxyhosts)));

			case 66:
				context$1$0.next = 68;
				return regeneratorRuntime.awrap(getAddressesapi(addressesapi));

			case 68:
				newAddressesapi = context$1$0.sent;
				context$1$0.next = 71;
				return regeneratorRuntime.awrap(getAddressescsv('TRUE'));

			case 71:
				newAddressescsv = context$1$0.sent;

				url = 'https://' + hostName + '/' + fakeUserID;

			case 73:

				if (!userAgent.includes('CF-Workers-SUB'.toLowerCase())) {
					if (userAgent.includes('clash') && !userAgent.includes('nekobox') || _url.searchParams.has('clash')) {
						url = subProtocol + '://' + subconverter + '/sub?target=clash&url=' + encodeURIComponent(url) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
						isBase64 = false;
					} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || _url.searchParams.has('singbox') || _url.searchParams.has('sb')) {
						url = subProtocol + '://' + subconverter + '/sub?target=singbox&url=' + encodeURIComponent(url) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true';
						isBase64 = false;
					} else if (userAgent.includes('surge') || _url.searchParams.has('surge')) {
						url = subProtocol + '://' + subconverter + '/sub?target=surge&ver=4&url=' + encodeURIComponent(url) + '&insert=false&config=' + encodeURIComponent(subconfig) + '&emoji=true&list=false&xudp=false&udp=false&tfo=false&expand=true&scv=true&fdn=false';
						isBase64 = false;
					}
				}

				context$1$0.prev = 74;
				content = undefined;

				if (!((!sub || sub == "") && isBase64 == true)) {
					context$1$0.next = 82;
					break;
				}

				context$1$0.next = 79;
				return regeneratorRuntime.awrap(subAddresses(fakeHostName, fakeUserID, userAgent, newAddressesapi, newAddressescsv));

			case 79:
				content = context$1$0.sent;
				context$1$0.next = 88;
				break;

			case 82:
				context$1$0.next = 84;
				return regeneratorRuntime.awrap(fetch(url, {
					headers: {
						'User-Agent': 'CF-Workers-epeius/cmliu'
					} }));

			case 84:
				response = context$1$0.sent;
				context$1$0.next = 87;
				return regeneratorRuntime.awrap(response.text());

			case 87:
				content = context$1$0.sent;

			case 88:
				if (!(_url.pathname == '/' + fakeUserID)) {
					context$1$0.next = 90;
					break;
				}

				return context$1$0.abrupt('return', content);

			case 90:

				content = revertFakeInfo(content, password, hostName, isBase64);
				if (userAgent.includes('surge') || _url.searchParams.has('surge')) content = surge(content, 'https://' + hostName + '/' + password + '?surge');
				return context$1$0.abrupt('return', content);

			case 95:
				context$1$0.prev = 95;
				context$1$0.t2 = context$1$0['catch'](74);

				console.error('Error fetching content:', context$1$0.t2);
				return context$1$0.abrupt('return', 'Error fetching content: ' + context$1$0.t2.message);

			case 99:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[8, 23], [47, 62], [74, 95]]);
}

function sendMessage(type, ip) {
	var add_data = arguments.length <= 2 || arguments[2] === undefined ? "" : arguments[2];
	var msg, response, ipInfo, url;
	return regeneratorRuntime.async(function sendMessage$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(BotToken !== '' && ChatID !== '')) {
					context$1$0.next = 15;
					break;
				}

				msg = "";
				context$1$0.next = 4;
				return regeneratorRuntime.awrap(fetch('http://ip-api.com/json/' + ip + '?lang=zh-CN'));

			case 4:
				response = context$1$0.sent;

				if (!(response.status == 200)) {
					context$1$0.next = 12;
					break;
				}

				context$1$0.next = 8;
				return regeneratorRuntime.awrap(response.json());

			case 8:
				ipInfo = context$1$0.sent;

				msg = type + '\nIP: ' + ip + '\n国家: ' + ipInfo.country + '\n<tg-spoiler>城市: ' + ipInfo.city + '\n组织: ' + ipInfo.org + '\nASN: ' + ipInfo.as + '\n' + add_data;
				context$1$0.next = 13;
				break;

			case 12:
				msg = type + '\nIP: ' + ip + '\n<tg-spoiler>' + add_data;

			case 13:
				url = "https://api.telegram.org/bot" + BotToken + "/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
				return context$1$0.abrupt('return', fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'Accept-Encoding': 'gzip, deflate, br',
						'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
					}
				}));

			case 15:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}
var proxyIPPool = [];
function subAddresses(host, pw, userAgent, newAddressesapi, newAddressescsv) {
	addresses = addresses.concat(newAddressesapi);
	addresses = addresses.concat(newAddressescsv);
	// 使用Set对象去重
	var uniqueAddresses = [].concat(_toConsumableArray(new Set(addresses)));

	var responseBody = uniqueAddresses.map(function (address) {
		var port = "-1";
		var addressid = address;

		var match = addressid.match(regex);
		if (!match) {
			if (address.includes(':') && address.includes('#')) {
				var parts = address.split(':');
				address = parts[0];
				var subParts = parts[1].split('#');
				port = subParts[0];
				addressid = subParts[1];
			} else if (address.includes(':')) {
				var parts = address.split(':');
				address = parts[0];
				port = parts[1];
			} else if (address.includes('#')) {
				var parts = address.split('#');
				address = parts[0];
				addressid = parts[1];
			}

			if (addressid.includes(':')) {
				addressid = addressid.split(':')[0];
			}
		} else {
			address = match[1];
			port = match[2] || port;
			addressid = match[3] || address;
		}

		var httpsPorts = ["2053", "2083", "2087", "2096", "8443"];
		if (!isValidIPv4(address) && port == "-1") {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = httpsPorts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var httpsPort = _step.value;

					if (address.includes(httpsPort)) {
						port = httpsPort;
						break;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
		if (port == "-1") port = "443";

		var 伪装域名 = host;
		var 最终路径 = '/?ed=2560';
		var 节点备注 = '';

		if (proxyhosts.length > 0 && (伪装域名.includes('.workers.dev') || 伪装域名.includes('pages.dev'))) {
			最终路径 = '/' + 伪装域名 + 最终路径;
			伪装域名 = proxyhosts[Math.floor(Math.random() * proxyhosts.length)];
			节点备注 = ' 已启用临时域名中转服务，请尽快绑定自定义域！';
		}
		var matchingProxyIP = proxyIPPool.find(function (proxyIP) {
			return proxyIP.includes(address);
		});
		if (matchingProxyIP) 最终路径 += '&proxyip=' + matchingProxyIP;
		var 密码 = pw;
		if (!userAgent.includes('subconverter')) 密码 = encodeURIComponent(pw);

		var 啥啥啥_写的这是啥啊 = 'dHJvamFu';
		var 协议类型 = atob(啥啥啥_写的这是啥啊);
		var trojanLink = 协议类型 + '://' + 密码 + '@' + address + ':' + port + '?security=tls&sni=' + 伪装域名 + '&fp=randomized&type=ws&host=' + 伪装域名 + '&path=' + encodeURIComponent(最终路径) + '#' + encodeURIComponent(addressid + 节点备注);

		return trojanLink;
	}).join('\n');

	var base64Response = btoa(responseBody); // 重新进行 Base64 编码

	return base64Response;
}

function getAddressesapi(api) {
	var newapi, controller, timeout, responses, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, index, response, content, newAddressesapi;

	return regeneratorRuntime.async(function getAddressesapi$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(!api || api.length === 0)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt('return', []);

			case 2:
				newapi = "";
				controller = new AbortController();
				timeout = setTimeout(function () {
					controller.abort(); // 取消所有请求
				}, 2000);
				context$1$0.prev = 5;
				context$1$0.next = 8;
				return regeneratorRuntime.awrap(Promise.allSettled(api.map(function (apiUrl) {
					return fetch(apiUrl, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': 'CF-Workers-epeius/cmliu'
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(function (response) {
						return response.ok ? response.text() : Promise.reject();
					});
				})));

			case 8:
				responses = context$1$0.sent;
				_iteratorNormalCompletion2 = true;
				_didIteratorError2 = false;
				_iteratorError2 = undefined;
				context$1$0.prev = 12;
				_iterator2 = responses.entries()[Symbol.iterator]();

			case 14:
				if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
					context$1$0.next = 34;
					break;
				}

				_step2$value = _slicedToArray(_step2.value, 2);
				index = _step2$value[0];
				response = _step2$value[1];

				if (!(response.status === 'fulfilled')) {
					context$1$0.next = 31;
					break;
				}

				context$1$0.next = 21;
				return regeneratorRuntime.awrap(response.value);

			case 21:
				content = context$1$0.sent;

				if (!api[index].includes('proxyip=true')) {
					context$1$0.next = 30;
					break;
				}

				context$1$0.t0 = proxyIPPool;
				context$1$0.next = 26;
				return regeneratorRuntime.awrap(ADD(content));

			case 26:
				context$1$0.t1 = function (item) {
					var baseItem = item.split('#')[0] || item;
					if (baseItem.includes(':')) {
						var port = baseItem.split(':')[1];
						if (!httpsPorts.includes(port)) {
							return baseItem;
						}
					} else {
						return baseItem + ':443';
					}
					return null; // 不符合条件时返回 null
				};

				context$1$0.t2 = Boolean;
				context$1$0.t3 = context$1$0.sent.map(context$1$0.t1).filter(context$1$0.t2);
				proxyIPPool = context$1$0.t0.concat.call(context$1$0.t0, context$1$0.t3);

			case 30:
				// 过滤掉 null 值

				// 将内容添加到newapi中
				newapi += content + '\n';

			case 31:
				_iteratorNormalCompletion2 = true;
				context$1$0.next = 14;
				break;

			case 34:
				context$1$0.next = 40;
				break;

			case 36:
				context$1$0.prev = 36;
				context$1$0.t4 = context$1$0['catch'](12);
				_didIteratorError2 = true;
				_iteratorError2 = context$1$0.t4;

			case 40:
				context$1$0.prev = 40;
				context$1$0.prev = 41;

				if (!_iteratorNormalCompletion2 && _iterator2['return']) {
					_iterator2['return']();
				}

			case 43:
				context$1$0.prev = 43;

				if (!_didIteratorError2) {
					context$1$0.next = 46;
					break;
				}

				throw _iteratorError2;

			case 46:
				return context$1$0.finish(43);

			case 47:
				return context$1$0.finish(40);

			case 48:
				context$1$0.next = 53;
				break;

			case 50:
				context$1$0.prev = 50;
				context$1$0.t5 = context$1$0['catch'](5);

				console.error(context$1$0.t5);

			case 53:
				context$1$0.prev = 53;

				// 无论成功或失败，最后都清除设置的超时定时器
				clearTimeout(timeout);
				return context$1$0.finish(53);

			case 56:
				context$1$0.next = 58;
				return regeneratorRuntime.awrap(ADD(newapi));

			case 58:
				newAddressesapi = context$1$0.sent;
				return context$1$0.abrupt('return', newAddressesapi);

			case 60:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[5, 50, 53, 56], [12, 36, 40, 48], [41,, 43, 47]]);
}

function getAddressescsv(tls) {
	var newAddressescsv, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, csvUrl, response, text, lines, header, tlsIndex, ipAddressIndex, portIndex, dataCenterIndex, i, columns, speedIndex, ipAddress, port, dataCenter, formattedAddress;

	return regeneratorRuntime.async(function getAddressescsv$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(!addressescsv || addressescsv.length === 0)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt('return', []);

			case 2:
				newAddressescsv = [];
				_iteratorNormalCompletion3 = true;
				_didIteratorError3 = false;
				_iteratorError3 = undefined;
				context$1$0.prev = 6;
				_iterator3 = addressescsv[Symbol.iterator]();

			case 8:
				if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
					context$1$0.next = 40;
					break;
				}

				csvUrl = _step3.value;
				context$1$0.prev = 10;
				context$1$0.next = 13;
				return regeneratorRuntime.awrap(fetch(csvUrl));

			case 13:
				response = context$1$0.sent;

				if (response.ok) {
					context$1$0.next = 17;
					break;
				}

				console.error('获取CSV地址时出错:', response.status, response.statusText);
				return context$1$0.abrupt('continue', 37);

			case 17:
				context$1$0.next = 19;
				return regeneratorRuntime.awrap(response.text());

			case 19:
				text = context$1$0.sent;
				lines = undefined;

				if (text.includes('\r\n')) {
					lines = text.split('\r\n');
				} else {
					lines = text.split('\n');
				}

				// 检查CSV头部是否包含必需字段
				header = lines[0].split(',');
				tlsIndex = header.indexOf('TLS');
				ipAddressIndex = 0;
				portIndex = 1;
				dataCenterIndex = tlsIndex + 1;

				if (!(tlsIndex === -1)) {
					context$1$0.next = 30;
					break;
				}

				console.error('CSV文件缺少必需的字段');
				return context$1$0.abrupt('continue', 37);

			case 30:

				// 从第二行开始遍历CSV行
				for (i = 1; i < lines.length; i++) {
					columns = lines[i].split(',');
					speedIndex = columns.length - 1;
					// 最后一个字段
					// 检查TLS是否为"TRUE"且速度大于DLS
					if (columns[tlsIndex].toUpperCase() === tls && parseFloat(columns[speedIndex]) > DLS) {
						ipAddress = columns[ipAddressIndex];
						port = columns[portIndex];
						dataCenter = columns[dataCenterIndex];
						formattedAddress = ipAddress + ':' + port + '#' + dataCenter;

						newAddressescsv.push(formattedAddress);
						if (csvUrl.includes('proxyip=true') && columns[tlsIndex].toUpperCase() == 'true' && !httpsPorts.includes(port)) {
							// 如果URL带有'proxyip=true'，则将内容添加到proxyIPPool
							proxyIPPool.push(ipAddress + ':' + port);
						}
					}
				}
				context$1$0.next = 37;
				break;

			case 33:
				context$1$0.prev = 33;
				context$1$0.t0 = context$1$0['catch'](10);

				console.error('获取CSV地址时出错:', context$1$0.t0);
				return context$1$0.abrupt('continue', 37);

			case 37:
				_iteratorNormalCompletion3 = true;
				context$1$0.next = 8;
				break;

			case 40:
				context$1$0.next = 46;
				break;

			case 42:
				context$1$0.prev = 42;
				context$1$0.t1 = context$1$0['catch'](6);
				_didIteratorError3 = true;
				_iteratorError3 = context$1$0.t1;

			case 46:
				context$1$0.prev = 46;
				context$1$0.prev = 47;

				if (!_iteratorNormalCompletion3 && _iterator3['return']) {
					_iterator3['return']();
				}

			case 49:
				context$1$0.prev = 49;

				if (!_didIteratorError3) {
					context$1$0.next = 52;
					break;
				}

				throw _iteratorError3;

			case 52:
				return context$1$0.finish(49);

			case 53:
				return context$1$0.finish(46);

			case 54:
				return context$1$0.abrupt('return', newAddressescsv);

			case 55:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[6, 42, 46, 54], [10, 33], [47,, 49, 53]]);
}

function surge(content, url) {
	var 每行内容 = undefined;
	if (content.includes('\r\n')) {
		每行内容 = content.split('\r\n');
	} else {
		每行内容 = content.split('\n');
	}

	var 输出内容 = "";
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = 每行内容[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var x = _step4.value;

			if (x.includes('= trojan,')) {
				var host = x.split("sni=")[1].split(",")[0];
				var 备改内容 = 'skip-cert-verify=true, tfo=false, udp-relay=false';
				var 正确内容 = 'skip-cert-verify=true, ws=true, ws-path=/?ed=2560, ws-headers=Host:"' + host + '", tfo=false, udp-relay=false';
				输出内容 += x.replace(new RegExp(备改内容, 'g'), 正确内容).replace("[", "").replace("]", "") + '\n';
			} else {
				输出内容 += x + '\n';
			}
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4['return']) {
				_iterator4['return']();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}

	输出内容 = '#!MANAGED-CONFIG ' + url + ' interval=86400 strict=false' + 输出内容.substring(输出内容.indexOf('\n'));
	return 输出内容;
}

/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
	'use strict';

	var ERROR = 'input is invalid type';
	var WINDOW = typeof window === 'object';
	var root = WINDOW ? window : {};
	if (root.JS_SHA256_NO_WINDOW) {
		WINDOW = false;
	}
	var WEB_WORKER = !WINDOW && typeof self === 'object';
	var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
	if (NODE_JS) {
		root = global;
	} else if (WEB_WORKER) {
		root = self;
	}
	var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === 'object' && module.exports;
	var AMD = typeof define === 'function' && define.amd;
	var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
	var HEX_CHARS = '0123456789abcdef'.split('');
	var EXTRA = [-2147483648, 8388608, 32768, 128];
	var SHIFT = [24, 16, 8, 0];
	var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
	var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

	var blocks = [];

	if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
		Array.isArray = function (obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
	}

	if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
		ArrayBuffer.isView = function (obj) {
			return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
		};
	}

	var createOutputMethod = function createOutputMethod(outputType, is224) {
		return function (message) {
			return new Sha256(is224, true).update(message)[outputType]();
		};
	};

	var createMethod = function createMethod(is224) {
		var method = createOutputMethod('hex', is224);
		if (NODE_JS) {
			method = nodeWrap(method, is224);
		}
		method.create = function () {
			return new Sha256(is224);
		};
		method.update = function (message) {
			return method.create().update(message);
		};
		for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
			var type = OUTPUT_TYPES[i];
			method[type] = createOutputMethod(type, is224);
		}
		return method;
	};

	var nodeWrap = function nodeWrap(method, is224) {
		var crypto = require('crypto');
		var Buffer = require('buffer').Buffer;
		var algorithm = is224 ? 'sha224' : 'sha256';
		var bufferFrom;
		if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
			bufferFrom = Buffer.from;
		} else {
			bufferFrom = function (message) {
				return new Buffer(message);
			};
		}
		var nodeMethod = function nodeMethod(message) {
			if (typeof message === 'string') {
				return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
			} else {
				if (message === null || message === undefined) {
					throw new Error(ERROR);
				} else if (message.constructor === ArrayBuffer) {
					message = new Uint8Array(message);
				}
			}
			if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
				return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
			} else {
				return method(message);
			}
		};
		return nodeMethod;
	};

	var createHmacOutputMethod = function createHmacOutputMethod(outputType, is224) {
		return function (key, message) {
			return new HmacSha256(key, is224, true).update(message)[outputType]();
		};
	};

	var createHmacMethod = function createHmacMethod(is224) {
		var method = createHmacOutputMethod('hex', is224);
		method.create = function (key) {
			return new HmacSha256(key, is224);
		};
		method.update = function (key, message) {
			return method.create(key).update(message);
		};
		for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
			var type = OUTPUT_TYPES[i];
			method[type] = createHmacOutputMethod(type, is224);
		}
		return method;
	};

	function Sha256(is224, sharedMemory) {
		if (sharedMemory) {
			blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
			this.blocks = blocks;
		} else {
			this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		}

		if (is224) {
			this.h0 = 0xc1059ed8;
			this.h1 = 0x367cd507;
			this.h2 = 0x3070dd17;
			this.h3 = 0xf70e5939;
			this.h4 = 0xffc00b31;
			this.h5 = 0x68581511;
			this.h6 = 0x64f98fa7;
			this.h7 = 0xbefa4fa4;
		} else {
			// 256
			this.h0 = 0x6a09e667;
			this.h1 = 0xbb67ae85;
			this.h2 = 0x3c6ef372;
			this.h3 = 0xa54ff53a;
			this.h4 = 0x510e527f;
			this.h5 = 0x9b05688c;
			this.h6 = 0x1f83d9ab;
			this.h7 = 0x5be0cd19;
		}

		this.block = this.start = this.bytes = this.hBytes = 0;
		this.finalized = this.hashed = false;
		this.first = true;
		this.is224 = is224;
	}

	Sha256.prototype.update = function (message) {
		if (this.finalized) {
			return;
		}
		var notString,
		    type = typeof message;
		if (type !== 'string') {
			if (type === 'object') {
				if (message === null) {
					throw new Error(ERROR);
				} else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
					message = new Uint8Array(message);
				} else if (!Array.isArray(message)) {
					if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
						throw new Error(ERROR);
					}
				}
			} else {
				throw new Error(ERROR);
			}
			notString = true;
		}
		var code,
		    index = 0,
		    i,
		    length = message.length,
		    blocks = this.blocks;
		while (index < length) {
			if (this.hashed) {
				this.hashed = false;
				blocks[0] = this.block;
				this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
			}

			if (notString) {
				for (i = this.start; index < length && i < 64; ++index) {
					blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
				}
			} else {
				for (i = this.start; index < length && i < 64; ++index) {
					code = message.charCodeAt(index);
					if (code < 0x80) {
						blocks[i >>> 2] |= code << SHIFT[i++ & 3];
					} else if (code < 0x800) {
						blocks[i >>> 2] |= (0xc0 | code >>> 6) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
					} else if (code < 0xd800 || code >= 0xe000) {
						blocks[i >>> 2] |= (0xe0 | code >>> 12) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
					} else {
						code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
						blocks[i >>> 2] |= (0xf0 | code >>> 18) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code >>> 12 & 0x3f) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
						blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
					}
				}
			}

			this.lastByteIndex = i;
			this.bytes += i - this.start;
			if (i >= 64) {
				this.block = blocks[16];
				this.start = i - 64;
				this.hash();
				this.hashed = true;
			} else {
				this.start = i;
			}
		}
		if (this.bytes > 4294967295) {
			this.hBytes += this.bytes / 4294967296 << 0;
			this.bytes = this.bytes % 4294967296;
		}
		return this;
	};

	Sha256.prototype.finalize = function () {
		if (this.finalized) {
			return;
		}
		this.finalized = true;
		var blocks = this.blocks,
		    i = this.lastByteIndex;
		blocks[16] = this.block;
		blocks[i >>> 2] |= EXTRA[i & 3];
		this.block = blocks[16];
		if (i >= 56) {
			if (!this.hashed) {
				this.hash();
			}
			blocks[0] = this.block;
			blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
		}
		blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
		blocks[15] = this.bytes << 3;
		this.hash();
	};

	Sha256.prototype.hash = function () {
		var a = this.h0,
		    b = this.h1,
		    c = this.h2,
		    d = this.h3,
		    e = this.h4,
		    f = this.h5,
		    g = this.h6,
		    h = this.h7,
		    blocks = this.blocks,
		    j,
		    s0,
		    s1,
		    maj,
		    t1,
		    t2,
		    ch,
		    ab,
		    da,
		    cd,
		    bc;

		for (j = 16; j < 64; ++j) {
			// rightrotate
			t1 = blocks[j - 15];
			s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
			t1 = blocks[j - 2];
			s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
			blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
		}

		bc = b & c;
		for (j = 0; j < 64; j += 4) {
			if (this.first) {
				if (this.is224) {
					ab = 300032;
					t1 = blocks[0] - 1413257819;
					h = t1 - 150054599 << 0;
					d = t1 + 24177077 << 0;
				} else {
					ab = 704751109;
					t1 = blocks[0] - 210244248;
					h = t1 - 1521486534 << 0;
					d = t1 + 143694565 << 0;
				}
				this.first = false;
			} else {
				s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
				s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
				ab = a & b;
				maj = ab ^ a & c ^ bc;
				ch = e & f ^ ~e & g;
				t1 = h + s1 + ch + K[j] + blocks[j];
				t2 = s0 + maj;
				h = d + t1 << 0;
				d = t1 + t2 << 0;
			}
			s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
			s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
			da = d & a;
			maj = da ^ d & b ^ ab;
			ch = h & e ^ ~h & f;
			t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
			t2 = s0 + maj;
			g = c + t1 << 0;
			c = t1 + t2 << 0;
			s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
			s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
			cd = c & d;
			maj = cd ^ c & a ^ da;
			ch = g & h ^ ~g & e;
			t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
			t2 = s0 + maj;
			f = b + t1 << 0;
			b = t1 + t2 << 0;
			s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
			s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
			bc = b & c;
			maj = bc ^ b & d ^ cd;
			ch = f & g ^ ~f & h;
			t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
			t2 = s0 + maj;
			e = a + t1 << 0;
			a = t1 + t2 << 0;
			this.chromeBugWorkAround = true;
		}

		this.h0 = this.h0 + a << 0;
		this.h1 = this.h1 + b << 0;
		this.h2 = this.h2 + c << 0;
		this.h3 = this.h3 + d << 0;
		this.h4 = this.h4 + e << 0;
		this.h5 = this.h5 + f << 0;
		this.h6 = this.h6 + g << 0;
		this.h7 = this.h7 + h << 0;
	};

	Sha256.prototype.hex = function () {
		this.finalize();

		var h0 = this.h0,
		    h1 = this.h1,
		    h2 = this.h2,
		    h3 = this.h3,
		    h4 = this.h4,
		    h5 = this.h5,
		    h6 = this.h6,
		    h7 = this.h7;

		var hex = HEX_CHARS[h0 >>> 28 & 0x0F] + HEX_CHARS[h0 >>> 24 & 0x0F] + HEX_CHARS[h0 >>> 20 & 0x0F] + HEX_CHARS[h0 >>> 16 & 0x0F] + HEX_CHARS[h0 >>> 12 & 0x0F] + HEX_CHARS[h0 >>> 8 & 0x0F] + HEX_CHARS[h0 >>> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >>> 28 & 0x0F] + HEX_CHARS[h1 >>> 24 & 0x0F] + HEX_CHARS[h1 >>> 20 & 0x0F] + HEX_CHARS[h1 >>> 16 & 0x0F] + HEX_CHARS[h1 >>> 12 & 0x0F] + HEX_CHARS[h1 >>> 8 & 0x0F] + HEX_CHARS[h1 >>> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >>> 28 & 0x0F] + HEX_CHARS[h2 >>> 24 & 0x0F] + HEX_CHARS[h2 >>> 20 & 0x0F] + HEX_CHARS[h2 >>> 16 & 0x0F] + HEX_CHARS[h2 >>> 12 & 0x0F] + HEX_CHARS[h2 >>> 8 & 0x0F] + HEX_CHARS[h2 >>> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >>> 28 & 0x0F] + HEX_CHARS[h3 >>> 24 & 0x0F] + HEX_CHARS[h3 >>> 20 & 0x0F] + HEX_CHARS[h3 >>> 16 & 0x0F] + HEX_CHARS[h3 >>> 12 & 0x0F] + HEX_CHARS[h3 >>> 8 & 0x0F] + HEX_CHARS[h3 >>> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >>> 28 & 0x0F] + HEX_CHARS[h4 >>> 24 & 0x0F] + HEX_CHARS[h4 >>> 20 & 0x0F] + HEX_CHARS[h4 >>> 16 & 0x0F] + HEX_CHARS[h4 >>> 12 & 0x0F] + HEX_CHARS[h4 >>> 8 & 0x0F] + HEX_CHARS[h4 >>> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >>> 28 & 0x0F] + HEX_CHARS[h5 >>> 24 & 0x0F] + HEX_CHARS[h5 >>> 20 & 0x0F] + HEX_CHARS[h5 >>> 16 & 0x0F] + HEX_CHARS[h5 >>> 12 & 0x0F] + HEX_CHARS[h5 >>> 8 & 0x0F] + HEX_CHARS[h5 >>> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >>> 28 & 0x0F] + HEX_CHARS[h6 >>> 24 & 0x0F] + HEX_CHARS[h6 >>> 20 & 0x0F] + HEX_CHARS[h6 >>> 16 & 0x0F] + HEX_CHARS[h6 >>> 12 & 0x0F] + HEX_CHARS[h6 >>> 8 & 0x0F] + HEX_CHARS[h6 >>> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];
		if (!this.is224) {
			hex += HEX_CHARS[h7 >>> 28 & 0x0F] + HEX_CHARS[h7 >>> 24 & 0x0F] + HEX_CHARS[h7 >>> 20 & 0x0F] + HEX_CHARS[h7 >>> 16 & 0x0F] + HEX_CHARS[h7 >>> 12 & 0x0F] + HEX_CHARS[h7 >>> 8 & 0x0F] + HEX_CHARS[h7 >>> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
		}
		return hex;
	};

	Sha256.prototype.toString = Sha256.prototype.hex;

	Sha256.prototype.digest = function () {
		this.finalize();

		var h0 = this.h0,
		    h1 = this.h1,
		    h2 = this.h2,
		    h3 = this.h3,
		    h4 = this.h4,
		    h5 = this.h5,
		    h6 = this.h6,
		    h7 = this.h7;

		var arr = [h0 >>> 24 & 0xFF, h0 >>> 16 & 0xFF, h0 >>> 8 & 0xFF, h0 & 0xFF, h1 >>> 24 & 0xFF, h1 >>> 16 & 0xFF, h1 >>> 8 & 0xFF, h1 & 0xFF, h2 >>> 24 & 0xFF, h2 >>> 16 & 0xFF, h2 >>> 8 & 0xFF, h2 & 0xFF, h3 >>> 24 & 0xFF, h3 >>> 16 & 0xFF, h3 >>> 8 & 0xFF, h3 & 0xFF, h4 >>> 24 & 0xFF, h4 >>> 16 & 0xFF, h4 >>> 8 & 0xFF, h4 & 0xFF, h5 >>> 24 & 0xFF, h5 >>> 16 & 0xFF, h5 >>> 8 & 0xFF, h5 & 0xFF, h6 >>> 24 & 0xFF, h6 >>> 16 & 0xFF, h6 >>> 8 & 0xFF, h6 & 0xFF];
		if (!this.is224) {
			arr.push(h7 >>> 24 & 0xFF, h7 >>> 16 & 0xFF, h7 >>> 8 & 0xFF, h7 & 0xFF);
		}
		return arr;
	};

	Sha256.prototype.array = Sha256.prototype.digest;

	Sha256.prototype.arrayBuffer = function () {
		this.finalize();

		var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
		var dataView = new DataView(buffer);
		dataView.setUint32(0, this.h0);
		dataView.setUint32(4, this.h1);
		dataView.setUint32(8, this.h2);
		dataView.setUint32(12, this.h3);
		dataView.setUint32(16, this.h4);
		dataView.setUint32(20, this.h5);
		dataView.setUint32(24, this.h6);
		if (!this.is224) {
			dataView.setUint32(28, this.h7);
		}
		return buffer;
	};

	function HmacSha256(key, is224, sharedMemory) {
		var i,
		    type = typeof key;
		if (type === 'string') {
			var bytes = [],
			    length = key.length,
			    index = 0,
			    code;
			for (i = 0; i < length; ++i) {
				code = key.charCodeAt(i);
				if (code < 0x80) {
					bytes[index++] = code;
				} else if (code < 0x800) {
					bytes[index++] = 0xc0 | code >>> 6;
					bytes[index++] = 0x80 | code & 0x3f;
				} else if (code < 0xd800 || code >= 0xe000) {
					bytes[index++] = 0xe0 | code >>> 12;
					bytes[index++] = 0x80 | code >>> 6 & 0x3f;
					bytes[index++] = 0x80 | code & 0x3f;
				} else {
					code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
					bytes[index++] = 0xf0 | code >>> 18;
					bytes[index++] = 0x80 | code >>> 12 & 0x3f;
					bytes[index++] = 0x80 | code >>> 6 & 0x3f;
					bytes[index++] = 0x80 | code & 0x3f;
				}
			}
			key = bytes;
		} else {
			if (type === 'object') {
				if (key === null) {
					throw new Error(ERROR);
				} else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
					key = new Uint8Array(key);
				} else if (!Array.isArray(key)) {
					if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
						throw new Error(ERROR);
					}
				}
			} else {
				throw new Error(ERROR);
			}
		}

		if (key.length > 64) {
			key = new Sha256(is224, true).update(key).array();
		}

		var oKeyPad = [],
		    iKeyPad = [];
		for (i = 0; i < 64; ++i) {
			var b = key[i] || 0;
			oKeyPad[i] = 0x5c ^ b;
			iKeyPad[i] = 0x36 ^ b;
		}

		Sha256.call(this, is224, sharedMemory);

		this.update(iKeyPad);
		this.oKeyPad = oKeyPad;
		this.inner = true;
		this.sharedMemory = sharedMemory;
	}
	HmacSha256.prototype = new Sha256();

	HmacSha256.prototype.finalize = function () {
		Sha256.prototype.finalize.call(this);
		if (this.inner) {
			this.inner = false;
			var innerHash = this.array();
			Sha256.call(this, this.is224, this.sharedMemory);
			this.update(this.oKeyPad);
			this.update(innerHash);
			Sha256.prototype.finalize.call(this);
		}
	};

	var exports = createMethod();
	exports.sha256 = exports;
	exports.sha224 = createMethod(true);
	exports.sha256.hmac = createHmacMethod();
	exports.sha224.hmac = createHmacMethod(true);

	if (COMMON_JS) {
		module.exports = exports;
	} else {
		root.sha256 = exports.sha256;
		root.sha224 = exports.sha224;
		if (AMD) {
			define(function () {
				return exports;
			});
		}
	}
})();

function getAccountId(email, key) {
	var url, headers, response, data;
	return regeneratorRuntime.async(function getAccountId$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.prev = 0;
				url = 'https://api.cloudflare.com/client/v4/accounts';
				headers = new Headers({
					'X-AUTH-EMAIL': email,
					'X-AUTH-KEY': key
				});
				context$1$0.next = 5;
				return regeneratorRuntime.awrap(fetch(url, { headers: headers }));

			case 5:
				response = context$1$0.sent;
				context$1$0.next = 8;
				return regeneratorRuntime.awrap(response.json());

			case 8:
				data = context$1$0.sent;
				return context$1$0.abrupt('return', data.result[0].id);

			case 12:
				context$1$0.prev = 12;
				context$1$0.t0 = context$1$0['catch'](0);
				return context$1$0.abrupt('return', false);

			case 15:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[0, 12]]);
}

function getSum(accountId, accountIndex, email, key, startDate, endDate) {
	var startDateISO, endDateISO, query, headers, response, res, accounts, account, pagesFunctionsInvocationsAdaptiveGroups, workersInvocationsAdaptive, pagesSum, workersSum;
	return regeneratorRuntime.async(function getSum$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.prev = 0;
				startDateISO = new Date(startDate).toISOString();
				endDateISO = new Date(endDate).toISOString();
				query = JSON.stringify({
					query: 'query getBillingMetrics($accountId: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n                viewer {\n                    accounts(filter: {accountTag: $accountId}) {\n                        pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) {\n                            sum {\n                                requests\n                            }\n                        }\n                        workersInvocationsAdaptive(limit: 10000, filter: $filter) {\n                            sum {\n                                requests\n                            }\n                        }\n                    }\n                }\n            }',
					variables: {
						accountId: accountId,
						filter: { datetime_geq: startDateISO, datetime_leq: endDateISO }
					}
				});
				headers = new Headers({
					'Content-Type': 'application/json',
					'X-AUTH-EMAIL': email,
					'X-AUTH-KEY': key
				});
				context$1$0.next = 7;
				return regeneratorRuntime.awrap(fetch('https://api.cloudflare.com/client/v4/graphql', {
					method: 'POST',
					headers: headers,
					body: query
				}));

			case 7:
				response = context$1$0.sent;

				if (response.ok) {
					context$1$0.next = 10;
					break;
				}

				throw new Error('HTTP error! status: ' + response.status);

			case 10:
				context$1$0.next = 12;
				return regeneratorRuntime.awrap(response.json());

			case 12:
				res = context$1$0.sent;
				accounts = res && res.data && res.data.viewer && res.data.viewer.accounts;
				account = accounts && accounts[accountIndex];
				pagesFunctionsInvocationsAdaptiveGroups = account && account.pagesFunctionsInvocationsAdaptiveGroups;
				workersInvocationsAdaptive = account && account.workersInvocationsAdaptive;

				if (!(!pagesFunctionsInvocationsAdaptiveGroups && !workersInvocationsAdaptive)) {
					context$1$0.next = 19;
					break;
				}

				throw new Error('找不到数据');

			case 19:
				pagesSum = pagesFunctionsInvocationsAdaptiveGroups.reduce(function (a, b) {
					return a + (b && b.sum && b.sum.requests || 0);
				}, 0);
				workersSum = workersInvocationsAdaptive.reduce(function (a, b) {
					return a + (b && b.sum && b.sum.requests || 0);
				}, 0);
				return context$1$0.abrupt('return', [pagesSum, workersSum]);

			case 24:
				context$1$0.prev = 24;
				context$1$0.t0 = context$1$0['catch'](0);
				return context$1$0.abrupt('return', [0, 0]);

			case 27:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[0, 24]]);
}

/**
 * 
 * @param {number} addressType
 * @param {string} addressRemote
 * @param {number} portRemote
 * @param {function} log The logging function.
 */
// 发生错误时返回默认值
function socks5Connect(addressType, addressRemote, portRemote, log) {
	var _parsedSocks5Address, username, password, hostname, port, socket, socksGreeting, writer, reader, encoder, res, authRequest, DSTADDR, socksRequest;

	return regeneratorRuntime.async(function socks5Connect$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				_parsedSocks5Address = parsedSocks5Address;
				username = _parsedSocks5Address.username;
				password = _parsedSocks5Address.password;
				hostname = _parsedSocks5Address.hostname;
				port = _parsedSocks5Address.port;
				socket = (0, _cloudflareSockets.connect)({
					hostname: hostname,
					port: port
				});
				socksGreeting = new Uint8Array([5, 2, 0, 2]);
				writer = socket.writable.getWriter();
				context$1$0.next = 10;
				return regeneratorRuntime.awrap(writer.write(socksGreeting));

			case 10:
				log('sent socks greeting');

				reader = socket.readable.getReader();
				encoder = new TextEncoder();
				context$1$0.next = 15;
				return regeneratorRuntime.awrap(reader.read());

			case 15:
				res = context$1$0.sent.value;

				if (!(res[0] !== 0x05)) {
					context$1$0.next = 19;
					break;
				}

				log('socks server version error: ' + res[0] + ' expected: 5');
				return context$1$0.abrupt('return');

			case 19:
				if (!(res[1] === 0xff)) {
					context$1$0.next = 22;
					break;
				}

				log("no acceptable methods");
				return context$1$0.abrupt('return');

			case 22:
				if (!(res[1] === 0x02)) {
					context$1$0.next = 36;
					break;
				}

				log("socks server needs auth");

				if (!(!username || !password)) {
					context$1$0.next = 27;
					break;
				}

				log("please provide username/password");
				return context$1$0.abrupt('return');

			case 27:
				authRequest = new Uint8Array([1, username.length].concat(_toConsumableArray(encoder.encode(username)), [password.length], _toConsumableArray(encoder.encode(password))));
				context$1$0.next = 30;
				return regeneratorRuntime.awrap(writer.write(authRequest));

			case 30:
				context$1$0.next = 32;
				return regeneratorRuntime.awrap(reader.read());

			case 32:
				res = context$1$0.sent.value;

				if (!(res[0] !== 0x01 || res[1] !== 0x00)) {
					context$1$0.next = 36;
					break;
				}

				log("fail to auth socks server");
				return context$1$0.abrupt('return');

			case 36:
				DSTADDR = undefined;
				context$1$0.t0 = addressType;
				context$1$0.next = context$1$0.t0 === 1 ? 40 : context$1$0.t0 === 3 ? 42 : context$1$0.t0 === 4 ? 44 : 46;
				break;

			case 40:
				DSTADDR = new Uint8Array([1].concat(_toConsumableArray(addressRemote.split('.').map(Number))));
				return context$1$0.abrupt('break', 48);

			case 42:
				DSTADDR = new Uint8Array([3, addressRemote.length].concat(_toConsumableArray(encoder.encode(addressRemote))));
				return context$1$0.abrupt('break', 48);

			case 44:
				DSTADDR = new Uint8Array([4].concat(_toConsumableArray(addressRemote.split(':').flatMap(function (x) {
					return [parseInt(x.slice(0, 2), 16), parseInt(x.slice(2), 16)];
				}))));
				return context$1$0.abrupt('break', 48);

			case 46:
				log('invild  addressType is ' + addressType);
				return context$1$0.abrupt('return');

			case 48:
				socksRequest = new Uint8Array([5, 1, 0].concat(_toConsumableArray(DSTADDR), [portRemote >> 8, portRemote & 0xff]));
				context$1$0.next = 51;
				return regeneratorRuntime.awrap(writer.write(socksRequest));

			case 51:
				log('sent socks request');

				context$1$0.next = 54;
				return regeneratorRuntime.awrap(reader.read());

			case 54:
				res = context$1$0.sent.value;

				if (!(res[1] === 0x00)) {
					context$1$0.next = 59;
					break;
				}

				log("socks connection opened");
				context$1$0.next = 61;
				break;

			case 59:
				log("fail to open socks connection");
				return context$1$0.abrupt('return');

			case 61:
				writer.releaseLock();
				reader.releaseLock();
				return context$1$0.abrupt('return', socket);

			case 64:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

/**
 * 
 * @param {string} address
 */
function socks5AddressParser(address) {
	var _address$split$reverse = address.split("@").reverse();

	var _address$split$reverse2 = _slicedToArray(_address$split$reverse, 2);

	var latter = _address$split$reverse2[0];
	var former = _address$split$reverse2[1];

	var username = undefined,
	    password = undefined,
	    hostname = undefined,
	    port = undefined;
	if (former) {
		var formers = former.split(":");
		if (formers.length !== 2) {
			throw new Error('Invalid SOCKS address format');
		}

		var _formers = _slicedToArray(formers, 2);

		username = _formers[0];
		password = _formers[1];
	}
	var latters = latter.split(":");
	port = Number(latters.pop());
	if (isNaN(port)) {
		throw new Error('Invalid SOCKS address format');
	}
	hostname = latters.join(":");
	var regex = /^\[.*\]$/;
	if (hostname.includes(":") && !regex.test(hostname)) {
		throw new Error('Invalid SOCKS address format');
	}
	//if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(hostname)) hostname = `${atob('d3d3Lg==')}${hostname}${atob('LmlwLjA5MDIyNy54eXo=')}`;
	return {
		username: username,
		password: password,
		hostname: hostname,
		port: port
	};
}

function isValidIPv4(address) {
	var ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	return ipv4Regex.test(address);
}
module.exports = exports['default'];

/** @type {Error} */

//const url = new URL(request.url);

//const timestamp = Math.floor(now / 1000);

//console.log(`pagesSum: ${pagesSum}\nworkersSum: ${workersSum}\ntotal: ${total}`);

/** @type {Error} */

// 0x01: IPv4 address
// 0x03: Domain name
// 0x04: IPv6 address
// 新增标记，记录地址是否已在KV中

// 首先检查 KV 中是否已存储该地址的 socks5 配置

// 如果 KV 中没有，则按原有逻辑判断

// 只有当使用 socks5 连接成功且地址不在 KV 中时，才存储

//console.log(add);

// 解析目标 URL

// 反向代理请求

// 创建新的响应
// 如果有错误，直接返回

// 过滤掉空行或只包含空白字符的行
// 如果有错误，直接返回

// 过滤掉空行或只包含空白字符的行

// 创建一个AbortController对象，用于控制fetch请求的取消
// 2秒后触发

// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
// 对api数组进行遍历，对每个API地址发起fetch请求

// 遍历所有响应

// 检查响应状态是否为'fulfilled'，即请求成功完成

// 获取响应的内容

// 验证当前apiUrl是否带有'proxyip=true'

// 如果URL带有'proxyip=true'，则将内容添加到proxyIPPool

// 返回处理后的结果
// 使用正确的字符编码解析文本内容
// IP地址在 CSV 头部的位置
// 端口在 CSV 头部的位置
// 数据中心是 TLS 的后一个字段

// 假设我们需要第一个账号ID

// 使用安全的方式访问嵌套属性，替代可选链操作符

// 添加空值检查来确保安全访问属性

// Connect to the SOCKS server

// Request head format (Worker -> Socks Server):
// +----+----------+----------+
// |VER | NMETHODS | METHODS  |
// +----+----------+----------+
// | 1  |    1     | 1 to 255 |
// +----+----------+----------+

// https://en.wikipedia.org/wiki/SOCKS#SOCKS5
// For METHODS:
// 0x00 NO AUTHENTICATION REQUIRED
// 0x02 USERNAME/PASSWORD https://datatracker.ietf.org/doc/html/rfc1929

// Response format (Socks Server -> Worker):
// +----+--------+
// |VER | METHOD |
// +----+--------+
// | 1  |   1    |
// +----+--------+

// if return 0x0502

// +----+------+----------+------+----------+
// |VER | ULEN |  UNAME   | PLEN |  PASSWD  |
// +----+------+----------+------+----------+
// | 1  |  1   | 1 to 255 |  1   | 1 to 255 |
// +----+------+----------+------+----------+

// expected 0x0100

// Request data format (Worker -> Socks Server):
// +----+-----+-------+------+----------+----------+
// |VER | CMD |  RSV  | ATYP | DST.ADDR | DST.PORT |
// +----+-----+-------+------+----------+----------+
// | 1  |  1  | X'00' |  1   | Variable |    2     |
// +----+-----+-------+------+----------+----------+
// ATYP: address type of following address
// 0x01: IPv4 address
// 0x03: Domain name
// 0x04: IPv6 address
// DST.ADDR: desired destination address
// DST.PORT: desired destination port in network octet order

// addressType
// 0x01: IPv4 address
// 0x03: Domain name
// 0x04: IPv6 address
// 1--> ipv4  addressLength =4
// 2--> domain name
// 3--> ipv6  addressLength =16
// DSTADDR = ATYP + DST.ADDR

// Response format (Socks Server -> Worker):
//  +----+-----+-------+------+----------+----------+
// |VER | REP |  RSV  | ATYP | BND.ADDR | BND.PORT |
// +----+-----+-------+------+----------+----------+
// | 1  |  1  | X'00' |  1   | Variable |    2     |
// +----+-----+-------+------+----------+----------+
