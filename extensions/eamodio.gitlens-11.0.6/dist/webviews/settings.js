(()=>{var t={530:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",o="hour",r="day",s="week",i="month",a="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var o=String(t);return!o||o.length>=e?t:""+Array(e+1-o.length).join(n)+t},f={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),o=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(o,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var o=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(o,i),s=n-r<0,a=e.clone().add(o+(s?-1:1),i);return+(-(o+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:i,y:u,w:s,d:r,D:c,h:o,m:n,s:e,ms:t,Q:a}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",m={};m[g]=h;var v=function(t){return t instanceof S},y=function(t,e,n){var o;if(!t)return g;if("string"==typeof t)m[t]&&(o=t),e&&(m[t]=e,o=t);else{var r=t.name;m[r]=t,o=r}return!n&&o&&(g=o),o||!n&&g},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},$=f;$.l=y,$.i=v,$.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function h(t){this.$L=y(t.locale,null,!0),this.parse(t)}var p=h.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var o=e.match(l);if(o){var r=o[2]-1||0,s=(o[7]||"0").substring(0,3);return n?new Date(Date.UTC(o[1],r,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)):new Date(o[1],r,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return $},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,a){var l=this,d=!!$.u(a)||a,h=$.p(t),p=function(t,e){var n=$.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?n:n.endOf(r)},f=function(t,e){return $.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case u:return d?p(1,0):p(31,11);case i:return d?p(1,m):p(0,m+1);case s:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return p(d?v-S:v+(6-S),m);case r:case c:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case n:return f(y+"Seconds",2);case e:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(s,a){var l,d=$.p(s),h="set"+(this.$u?"UTC":""),p=(l={},l[r]=h+"Date",l[c]=h+"Date",l[i]=h+"Month",l[u]=h+"FullYear",l[o]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],f=d===r?this.$D+(a-this.$W):a;if(d===i||d===u){var g=this.clone().set(c,1);g.$d[p](f),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[$.p(t)]()},p.add=function(t,a){var c,l=this;t=Number(t);var d=$.p(a),h=function(e){var n=b(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(d===i)return this.set(i,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===r)return h(1);if(d===s)return h(7);var p=(c={},c[n]=6e4,c[o]=36e5,c[e]=1e3,c)[d]||1,f=this.$d.getTime()+t*p;return $.w(f,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",o=$.z(this),r=this.$locale(),s=this.$H,i=this.$m,a=this.$M,u=r.weekdays,c=r.months,l=function(t,o,r,s){return t&&(t[o]||t(e,n))||r[o].substr(0,s)},h=function(t){return $.s(s%12||12,t,"0")},p=r.meridiem||function(t,e,n){var o=t<12?"AM":"PM";return n?o.toLowerCase():o},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:l(r.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:$.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,i,!0),A:p(s,i,!1),m:String(i),mm:$.s(i,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:o};return n.replace(d,(function(t,e){return e||f[t]||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,c,l){var d,h=$.p(c),p=b(t),f=6e4*(p.utcOffset()-this.utcOffset()),g=this-p,m=$.m(this,p);return m=(d={},d[u]=m/12,d[i]=m,d[a]=m/3,d[s]=(g-f)/6048e5,d[r]=(g-f)/864e5,d[o]=g/36e5,d[n]=g/6e4,d[e]=g/1e3,d)[h]||g,l?m:$.a(m)},p.daysInMonth=function(){return this.endOf(i).$D},p.$locale=function(){return m[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),o=y(t,e,!0);return o&&(n.$L=o),n},p.clone=function(){return $.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},h}(),w=S.prototype;return b.prototype=w,[["$ms",t],["$s",e],["$m",n],["$H",o],["$W",r],["$M",i],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t(e,S,b),b},b.locale=y,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=m[g],b.Ls=m,b.p={},b}()},664:function(t){t.exports=function(){"use strict";return function(t,e,n){var o=e.prototype,r=o.format;n.en.ordinal=function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"},o.format=function(t){var e=this,n=this.$locale(),o=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|zzz|z|gggg|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return o.s(e.week(),"w"===t?1:2,"0");case"k":case"kk":return o.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return r.bind(this)(s)}}}()},703:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var o=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=r;var s=function(e,o,s,i){for(var a,u,c,l=s.$locale().relativeTime||r,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,p=0;p<h;p+=1){var f=d[p];f.d&&(a=i?n(e).diff(s,f.d,!0):s.diff(e,f.d,!0));var g=(t.rounding||Math.round)(Math.abs(a));if(c=a>0,g<=f.r||!f.r){g<=1&&p>0&&(f=d[p-1]);var m=l[f.l];u="string"==typeof m?m.replace("%d",g):m(g,o,f.l,c);break}}return o?u:(c?l.future:l.past).replace("%s",u)};o.to=function(t,e){return s(t,e,this,!0)},o.from=function(t,e){return s(t,e,this)};var i=function(t){return t.$u?n.utc():n()};o.toNow=function(t){return this.to(i(this),t)},o.fromNow=function(t){return this.from(i(this),t)}}}()}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";class t{constructor(t){this.method=t}}class e{constructor(t){this.method=t}}function o(t,e,n){n(e.params)}const r=new t("configuration/didChange"),s=new e("webview/ready"),i=new e("configuration/update"),a=new e("configuration/preview"),u=new t("configuration/didPreview"),c=new t("settings/jumpTo"),l=(new t("rebase/change"),new e("rebase/start"),new e("rebase/abort"),new e("rebase/disable"),new e("rebase/change/entry"),new e("rebase/move/entry"),/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i);function d(t,e){const n=t+e,o=e<0?n<0?0:n:n>255?255:n;return Math.round(o)}function h(t,e){return p(t,-e)}function p(t,e){const n=g(t);if(null==n)return t;const[o,r,s,i]=n,a=255*e/100;return`rgba(${d(o,a)}, ${d(r,a)}, ${d(s,a)}, ${i})`}function f(t,e){const n=g(t);if(null==n)return t;const[o,r,s,i]=n;return`rgba(${o}, ${r}, ${s}, ${i*(e/100)})`}function g(t){t=t.trim();const e=l.exec(t);if(null==e)return null;if("#"===e[1]){const t=e[2];switch(t.length){case 3:return[parseInt(t[0]+t[0],16),parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),1];case 6:return[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16),1]}return null}switch(e[3]){case"rgb":return[parseInt(e[4],10),parseInt(e[5],10),parseInt(e[6],10),1];case"rgba":return[parseInt(e[4],10),parseInt(e[5],10),parseInt(e[6],10),parseFloat(e[7])];default:return null}}let m=0;var v;!function(t){t.on=function(t,e,n,o,r){let s=!1;if("string"==typeof t){const i=(null!=r?r:document).querySelectorAll(t);for(const t of i)t.addEventListener(e,n,null!=o&&o);return{dispose:()=>{if(!s){s=!0;for(const t of i)t.removeEventListener(e,n,null!=o&&o)}}}}return t.addEventListener(e,n,null!=o&&o),{dispose:()=>{s||(s=!0,t.removeEventListener(e,n,null!=o&&o))}}}}(v||(v={}));var y=n(530),b=n.n(y),$=n(664),S=n.n($),w=n(703),k=n.n(w);b().extend(S()),b().extend(k());const _=(M=new Date("Wed Jul 25 2018 19:18:00 GMT-0400"),b()(M));var M;let P=0;function D(t){return"true"===t||"false"!==t&&t}function x(t,e,n){const o=e.split("."),r=o.length,s=r-1;let i=-1,a=t;for(;null!=a&&++i<r;){const t=o[i];let e=n;if(i!==s){const n=a[t];e="object"==typeof n?n:{}}a[t]=e,a=a[t]}return t}function I(t){const[e,n,o]=t.trim().split(/([=+!])/);return[e.trim(),void 0!==n?n.trim():"=",void 0!==o?o.trim():o]}function C(t,e){const n={};for(const o in t){const r=t[o];Array.isArray(r)||("object"==typeof r?Object.assign(n,C(r,void 0===e?o:`${e}.${o}`)):n[void 0===e?o:`${e}.${o}`]=r)}return n}function O(t){switch(t){case"on":return!0;case"null":return null;case"undefined":return;default:return t}}new class extends class extends class{constructor(t,e){this.appName=t,this.log(`${this.appName}.ctor`),this._api=acquireVsCodeApi(),function(){const t=()=>{const t=document.body,e=window.getComputedStyle(t),n=t.style,o=e.getPropertyValue("--vscode-font-family").trim();o?(n.setProperty("--font-family",o),n.setProperty("--font-size",e.getPropertyValue("--vscode-font-size").trim()),n.setProperty("--font-weight",e.getPropertyValue("--vscode-font-weight").trim())):(n.setProperty("--font-family",e.getPropertyValue("--vscode-editor-font-family").trim()),n.setProperty("--font-size",e.getPropertyValue("--vscode-editor-font-size").trim()),n.setProperty("--font-weight",e.getPropertyValue("--vscode-editor-font-weight").trim()));let r=e.getPropertyValue("--vscode-editor-background").trim();n.setProperty("--color-background",r),n.setProperty("--color-background--lighten-05",p(r,5)),n.setProperty("--color-background--darken-05",h(r,5)),n.setProperty("--color-background--lighten-075",p(r,7.5)),n.setProperty("--color-background--darken-075",h(r,7.5)),n.setProperty("--color-background--lighten-15",p(r,15)),n.setProperty("--color-background--darken-15",h(r,15)),n.setProperty("--color-background--lighten-30",p(r,30)),n.setProperty("--color-background--darken-30",h(r,30)),n.setProperty("--color-background--lighten-50",p(r,50)),n.setProperty("--color-background--darken-50",h(r,50)),r=e.getPropertyValue("--vscode-button-background").trim(),n.setProperty("--color-button-background",r),n.setProperty("--color-button-background--darken-30",h(r,30)),r=e.getPropertyValue("--vscode-button-secondaryBackground").trim(),n.setProperty("--color-button-secondary-background",r),n.setProperty("--color-button-secondary-background--darken-30",h(r,30)),r=e.getPropertyValue("--vscode-button-background").trim(),n.setProperty("--color-highlight",r),n.setProperty("--color-highlight--75",f(r,75)),n.setProperty("--color-highlight--50",f(r,50)),n.setProperty("--color-highlight--25",f(r,25)),r=e.getPropertyValue("--vscode-button-foreground").trim(),n.setProperty("--color-button-foreground",r),r=e.getPropertyValue("--vscode-editor-foreground").trim(),r||(r=e.getPropertyValue("--vscode-foreground").trim()),n.setProperty("--color-foreground",r),n.setProperty("--color-foreground--85",f(r,85)),n.setProperty("--color-foreground--75",f(r,75)),n.setProperty("--color-foreground--65",f(r,65)),n.setProperty("--color-foreground--50",f(r,50)),r=e.getPropertyValue("--vscode-focusBorder").trim(),n.setProperty("--color-focus-border",r),r=e.getPropertyValue("--vscode-textLink-foreground").trim(),n.setProperty("--color-link-foreground",r),n.setProperty("--color-link-foreground--darken-20",h(r,20)),n.setProperty("--color-link-foreground--lighten-20",p(r,20))};new MutationObserver(t).observe(document.body,{attributes:!0,attributeFilter:["class"]}),t()}(),this.state=e,setTimeout((()=>{var t,e;this.log(`${this.appName}.initializing`),null===(t=this.onInitialize)||void 0===t||t.call(this),this.bind(),null!=this.onMessageReceived&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(s,{}),null===(e=this.onInitialized)||void 0===e||e.call(this),setTimeout((()=>{document.body.classList.remove("preload")}),500)}),0)}bind(){var t,e;null===(t=this.bindDisposables)||void 0===t||t.forEach((t=>t.dispose())),this.bindDisposables=null===(e=this.onBind)||void 0===e?void 0:e.call(this)}log(t){console.log(t)}getState(){return this._api.getState()}sendCommand(t,e){return this.postMessage({id:(m===Number.MAX_SAFE_INTEGER?m=1:m++,`webview:${m}`),method:t.method,params:e})}setState(t){this.state=t,this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}{constructor(t,e){super(t,e),this._changes=Object.create(null),this._updating=!1}onInitialized(){this.updateState()}onBind(){var t,e;const n=null!==(e=null===(t=super.onBind)||void 0===t?void 0:t.call(this))&&void 0!==e?e:[],o=this;return n.push(v.on("input[type=checkbox][data-setting]","change",(function(){return o.onInputChecked(this)})),v.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(function(){return o.onInputBlurred(this)})),v.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(function(){return o.onInputFocused(this)})),v.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(function(){return o.onInputChanged(this)})),v.on("select[data-setting]","change",(function(){return o.onInputSelected(this)})),v.on(".popup","mousedown",(function(t){return o.onPopupMouseDown(this,t)}))),n}onMessageReceived(t){const e=t.data;switch(e.method){case r.method:o(0,e,(t=>{this.state.config=t.config,this.state.customSettings=t.customSettings,this.updateState()}));break;default:void 0!==super.onMessageReceived&&super.onMessageReceived(t)}}applyChanges(){this.sendCommand(i,{changes:{...this._changes},removes:Object.keys(this._changes).filter((t=>void 0===this._changes[t])),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return"user"}onInputBlurred(t){this.log(`${this.appName}.onInputBlurred: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);null!=e&&e.classList.add("hidden");let n=t.value;null!=n&&0!==n.length||(n=t.dataset.defaultValue,void 0===n&&(n=null)),this._changes[t.name]="number"===t.type&&null!=n?Number(n):n,this.applyChanges()}onInputChanged(t){if(!this._updating)for(const e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){var e,n;if(!this._updating){switch(this.log(`${this.appName}.onInputChecked: name=${t.name}, checked=${t.checked}, value=${t.value}`),t.dataset.settingType){case"object":{const n=t.name.split("."),o=n.splice(0,1)[0],r=null!==(e=this.getSettingValue(o))&&void 0!==e?e:Object.create(null);t.checked?x(r,n.join("."),O(t.value)):x(r,n.join("."),!1),this._changes[o]=r;break}case"array":{const e=null!==(n=this.getSettingValue(t.name))&&void 0!==n?n:[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{const n=e.indexOf(t.value);-1!==n&&e.splice(n,1)}this._changes[t.name]=e}break}case"custom":this._changes[t.name]=t.checked;break;default:t.checked?this._changes[t.name]=O(t.value):this._changes[t.name]=null!=t.dataset.valueOff&&t.dataset.valueOff}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`${this.appName}.onInputFocused: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);if(null!=e){if(0===e.childElementCount){const t=document.querySelector("#token-popup"),n=document.importNode(t.content,!0);e.appendChild(n)}e.classList.remove("hidden")}}onInputSelected(t){if(this._updating)return;const e=t.options[t.selectedIndex].value;this.log(`${this.appName}.onInputSelected: name=${t.name}, value=${e}`),this._changes[t.name]=D(e),this.applyChanges()}onPopupMouseDown(t,e){e.preventDefault();const n=e.target;(null==n?void 0:n.matches("[data-token]"))&&this.onTokenMouseDown(n,e)}onTokenMouseDown(t,e){var n;if(this._updating)return;this.log(`${this.appName}.onTokenClicked: id=${t.id}`);const o=t.closest(".setting");if(null==o)return;const r=o.querySelector("input[type=text], input:not([type])");if(null==r)return;const s=`\${${t.dataset.token}}`;let i=r.selectionStart;null!=i?(r.value=`${r.value.substring(0,i)}${s}${r.value.substr(null!==(n=r.selectionEnd)&&void 0!==n?n:i)}`,i+=s.length):i=r.value.length,r.focus(),r.setSelectionRange(i,i),i===r.value.length&&(r.scrollLeft=r.scrollWidth),setTimeout((()=>this.onInputChanged(r)),0),setTimeout((()=>r.focus()),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}evaluateStateExpression(t,e){var n,o;let r=!1;for(const s of t.trim().split("&")){const[t,i,a]=I(s);switch(i){case"=":{let o=e[t];void 0===o&&(o=null!==(n=this.getSettingValue(t))&&void 0!==n&&n),r=void 0!==a?a===String(o):Boolean(o);break}case"!":{let n=e[t];void 0===n&&(n=null!==(o=this.getSettingValue(t))&&void 0!==o&&o),r=void 0!==a?a!==String(n):!n;break}case"+":if(void 0!==a){const e=this.getSettingValue(t);r=void 0!==e&&e.includes(a.toString())}}if(!r)break}return r}getCustomSettingValue(t){var e;return null===(e=this.state.customSettings)||void 0===e?void 0:e[t]}getSettingValue(t){const e=this.getCustomSettingValue(t);return null!=e?e:function(t,e){return e.split(".").reduce(((t={},e)=>null==t?void 0:t[e]),t)}(this.state.config,t)}updateState(){var t,e,n,o;this._updating=!0;try{for(const o of document.querySelectorAll("input[type=checkbox][data-setting]"))if("custom"===o.dataset.settingType)o.checked=null!==(t=this.getCustomSettingValue(o.name))&&void 0!==t&&t;else if("array"===o.dataset.settingType)o.checked=(null!==(e=this.getSettingValue(o.name))&&void 0!==e?e:[]).includes(o.value);else if(null!=o.dataset.valueOff){const t=this.getSettingValue(o.name);o.checked=o.dataset.valueOff!==t}else o.checked=null!==(n=this.getSettingValue(o.name))&&void 0!==n&&n;for(const t of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))t.value=null!==(o=this.getSettingValue(t.name))&&void 0!==o?o:"";for(const t of document.querySelectorAll("select[data-setting]")){const e=this.getSettingValue(t.name),n=t.querySelector(`option[value='${e}']`);null!=n&&(n.selected=!0)}for(const t of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(t)}finally{this._updating=!1}const r=C(this.state.config);this.setVisibility(r),this.setEnablement(r)}setAdditionalSettings(t){if(!t)return;const e=function(t){return t.trim().split(",").map((t=>{const[e,n]=t.split("=");return[e,D(n)]}))}(t);for(const[t,n]of e)this._changes[t]=n}setEnablement(t){for(const e of document.querySelectorAll("[data-enablement]")){const n=!this.evaluateStateExpression(e.dataset.enablement,t);if(n?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=n;else{const t=e.querySelector("input,select");if(null==t)continue;t.disabled=n}}}setVisibility(t){for(const e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){switch(t.dataset.settingPreviewType){case"date":void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),null!=e&&0!==e.length||(e=t.dataset.settingPreviewDefault),t.innerText=null==e?"":_.format(e);break;case"commit":{if(void 0===e&&(e=this.getSettingValue(t.dataset.settingPreview)),null!=e&&0!==e.length||(e=t.dataset.settingPreviewDefault),null==e)return void(t.innerText="");const n=(P===Number.MAX_SAFE_INTEGER?P=1:P++,`${P}`),r=v.on(window,"message",(e=>{const s=e.data;s.method===u.method&&s.params.id===n&&(r.dispose(),o(0,s,(e=>{var n;t.innerText=null!==(n=e.preview)&&void 0!==n?n:""})))}));this.sendCommand(a,{key:t.dataset.settingPreview,type:"commit",id:n,format:e});break}}}}{constructor(){super("SettingsApp",window.bootstrap),this._scopes=null,this._activeSection="general",this._sections=new Map,window.bootstrap=void 0}onInitialize(){const t=document.getElementById("scopes");if(null!=t&&this.state.scopes.length>1){for(const[e,n]of this.state.scopes){const o=document.createElement("option");o.value=e,o.innerHTML=n,this.state.scope===e&&(o.selected=!0),t.appendChild(o)}t.parentElement.parentElement.classList.remove("hidden"),this._scopes=t}let e=83;const n=document.querySelector(".hero__area--sticky");null!=n&&(e=n.clientHeight),this._observer=new IntersectionObserver(this.onObserver.bind(this),{rootMargin:`-${e}px 0px 0px 0px`});for(const t of document.querySelectorAll("section[id]>.section__header"))this._sections.set(t.parentElement.id,!1),this._observer.observe(t)}onBind(){var t,e;const n=null!==(e=null===(t=super.onBind)||void 0===t?void 0:t.call(this))&&void 0!==e?e:[],o=this;return n.push(v.on(".section--collapsible>.section__header","click",(function(t){return o.onSectionHeaderClicked(this,t)})),v.on(".setting--expandable .setting__expander","click",(function(t){return o.onSettingExpanderCicked(this,t)})),v.on('a[data-action="jump"]',"mousedown",(t=>{t.stopPropagation(),t.preventDefault()})),v.on('a[data-action="jump"]',"click",(function(t){return o.onJumpToLinkClicked(this,t)})),v.on("[data-action]","mousedown",(t=>{t.stopPropagation(),t.preventDefault()})),v.on("[data-action]","click",(function(t){return o.onActionLinkClicked(this,t)}))),n}onMessageReceived(t){const e=t.data;switch(e.method){case c.method:o(0,e,(t=>{this.scrollToAnchor(t.anchor)}));break;default:void 0!==super.onMessageReceived&&super.onMessageReceived(t)}}onObserver(t,e){for(const e of t)this._sections.set(e.target.parentElement.id,e.isIntersecting);let n;for(const[t,e]of this._sections.entries())if(e){n=t;break}if(void 0===n){if(1!==t.length)return;const e=t[0];if(null==e.boundingClientRect||null==e.rootBounds)return;if(n=e.target.parentElement.id,e.boundingClientRect.top>=e.rootBounds.bottom){const t=[...this._sections.keys()],e=t.indexOf(n);if(e<=0)return;n=t[e-1]}}this._activeSection!==n&&(void 0!==this._activeSection&&this.toggleJumpLink(this._activeSection,!1),this._activeSection=n,this.toggleJumpLink(this._activeSection,!0))}getSettingsScope(){return null!=this._scopes?this._scopes.options[this._scopes.selectedIndex].value:"user"}onActionLinkClicked(t,e){switch(t.dataset.action){case"collapse":for(const t of document.querySelectorAll(".section--collapsible"))t.classList.add("collapsed");document.querySelector('[data-action="collapse"]').classList.add("hidden"),document.querySelector('[data-action="expand"]').classList.remove("hidden");break;case"expand":for(const t of document.querySelectorAll(".section--collapsible"))t.classList.remove("collapsed");document.querySelector('[data-action="collapse"]').classList.remove("hidden"),document.querySelector('[data-action="expand"]').classList.add("hidden")}e.preventDefault(),e.stopPropagation()}onInputSelected(t){t!==this._scopes&&super.onInputSelected(t)}onJumpToLinkClicked(t,e){const n=t.getAttribute("href");if(null==n)return;const o=n.substr(1);this.scrollToAnchor(o),e.stopPropagation(),e.preventDefault()}onSectionHeaderClicked(t,e){e.target.matches("a, input, label, i.icon__info")||t.parentElement.classList.toggle("collapsed")}onSettingExpanderCicked(t,e){t.parentElement.parentElement.classList.toggle("expanded")}scrollToAnchor(t){const e=document.getElementById(t);if(null==e)return;let n=83;const o=document.querySelector(".hero__area--sticky");null!=o&&(n=o.clientHeight);const r=e.getBoundingClientRect().top-document.body.getBoundingClientRect().top-n;window.scrollTo({top:r,behavior:"smooth"})}toggleJumpLink(t,e){const n=document.querySelector(`a.sidebar__jump-link[href="#${t}"]`);null!=n&&n.classList.toggle("active",e)}}})()})();
//# sourceMappingURL=settings.js.map