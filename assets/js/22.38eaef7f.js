(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{452:function(t,v,_){"use strict";_.r(v);var a=_(23),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" HTTPS")]),t._v(" "),_("h2",{attrs:{id:"https加解密过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#https加解密过程"}},[t._v("#")]),t._v(" HTTPS加解密过程")]),t._v(" "),_("p",[t._v("HTTPS = HTTP + SSL（安全套接字协议）")]),t._v(" "),_("ol",[_("li",[t._v("HTTPS需要一套CA数字证书，证书内会有一个公钥Pub，对应的私钥Private存放在服务端")]),t._v(" "),_("li",[t._v("服务端收到请求，将带有公钥Pub的证书返回给客户端")]),t._v(" "),_("li",[t._v("客户端收到证书后，校验其合法性")]),t._v(" "),_("li",[t._v("客户端生成一个随机key，通过公钥Pub加密发给服务端")]),t._v(" "),_("li",[t._v("服务器端通过对应的私钥Private进行解密，得到随机Key")]),t._v(" "),_("li",[t._v("服务端使用随机Key对响应数据进行加密")]),t._v(" "),_("li",[t._v("客户端使用随机Key对加密的响应数据进行解密")]),t._v(" "),_("li",[t._v("后续使用随机Key进行对称加解密")])]),t._v(" "),_("h2",{attrs:{id:"中间人攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),_("p",[t._v("假设由密钥对A1、A2， 中间人有密钥对B1、B2，中间人用自己生成的密钥B1替换A1，\n获取到客户端生成的随机Key以后，再用A1加密发送给服务端，再用key解密服务器返回来的数据。")]),t._v(" "),_("h2",{attrs:{id:"http2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" HTTP2")]),t._v(" "),_("p",[t._v("1.多路复用")]),t._v(" "),_("ul",[_("li",[t._v("一个域名只使用一个TCP长连接：解决开启多条TCP带来的问题")]),t._v(" "),_("li",[t._v("实现资源并行请求：解决队头阻塞问题。")])]),t._v(" "),_("p",[t._v("2.二进制分帧")]),t._v(" "),_("ul",[_("li",[t._v("数据经过二进制分帧处理后，会被转换成一个个带有请求ID编号的帧")])]),t._v(" "),_("p",[t._v("3.服务器推送")]),t._v(" "),_("p",[t._v("4.头部压缩")])])}),[],!1,null,null,null);v.default=e.exports}}]);