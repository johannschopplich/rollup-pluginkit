(function(){"use strict";var c={};function v(_,i,t,f,C,d,r,o,a,g){typeof r!="boolean"&&(a=o,o=r,r=!1);const n=typeof t=="function"?t.options:t;_&&_.render&&(n.render=_.render,n.staticRenderFns=_.staticRenderFns,n._compiled=!0,C&&(n.functional=!0)),f&&(n._scopeId=f);let s;if(d?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!e&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(e=__VUE_SSR_CONTEXT__),i&&i.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(d)},n._ssrRegister=s):i&&(s=r?function(e){i.call(this,g(e,this.$root.$options.shadowRoot))}:function(e){i.call(this,o(e))}),s)if(n.functional){const e=n.render;n.render=function(R,l){return s.call(l),e(R,l)}}else{const e=n.beforeCreate;n.beforeCreate=e?[].concat(e,s):[s]}return t}const p=c;var u=function(){var _=this,i=_.$createElement,t=_._self._c||i;return t("k-view",{staticClass:"k-test-view"},[t("k-header",[_._v("Example")]),_._v(`
  This is your custom view
`)],1)},h=[];u._withStripped=!0;const m=v({render:u,staticRenderFns:h},void 0,p,void 0,!1,void 0,!1,void 0,void 0,void 0);panel.plugin("getkirby/pluginkit",{views:{example:{component:m,icon:"preview",label:"Example"}}})})();
