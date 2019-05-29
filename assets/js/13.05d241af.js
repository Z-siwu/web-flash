(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"日志管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日志管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志管理")]),t._v(" "),n("p",[t._v("日志管理包括两方面：\n一个是后台用户登录日志的查看\n一个是业务日志查看，业务日志内容主要包含两方面：系统产生的异常和用户操作日志。")]),t._v(" "),n("h2",{attrs:{id:"登录日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#登录日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 登录日志")]),t._v(" "),n("p",[t._v("用户登录系统和退出系统的时候会调用LogTaskFactory记录相关日志，并在“登录日志”页面进行展示。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(69),alt:"loginLog"}})]),t._v(" "),n("h2",{attrs:{id:"业务日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#业务日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 业务日志")]),t._v(" "),n("p",[t._v("业务日志包含异常日志和业务操作日志两大类日志收集、保存和展示。")]),t._v(" "),n("h3",{attrs:{id:"异常日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常日志")]),t._v(" "),n("p",[t._v("系统提供了异常处理类：GlobalExceptionHandler 来对系统各种异常进行统一收集保存。\n该类提供了九个方法来分别对9中常见的异常类型进行收集保存，如果开发者自己有特殊需求需要对其他异常类型处理。，可以通过新增处理方式来对新的异常进行收集。")]),t._v(" "),n("h3",{attrs:{id:"业务操作日志"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#业务操作日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 业务操作日志")]),t._v(" "),n("p",[t._v("系统提供了通过注解的形式可以方便的添加业务操作日志，比如在新增部门的是增加业务日志通过如下方式：")]),t._v(" "),n("p",[t._v("在DeptController的新增部门方法增加注解：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POST"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@BussinessLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"编辑部门"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simplename"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dict "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeptDict")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ModelAttribute")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dept")]),t._v(" dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JSON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSONString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ToolUtil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOneEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSimplename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GunsException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BizExceptionEnum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_NULL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完善pids,根据pid拿到pid的pids")]),t._v("\n        deptService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("deptSetPids")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        deptRepository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("具体的实现逻辑感兴趣的同学可以自行通过注解类：BussinessLog进行跟进查看。")])])}],e=a(0),p=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=p.exports},69:function(t,s,a){t.exports=a.p+"assets/img/loginLog.1020994d.jpg"}}]);