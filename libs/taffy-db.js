var TAFFY;(function(){if(!TAFFY){var i="2.5.1",m=1,a="000000",n=1000,c={};var k=function(p){if(TAFFY.isArray(p)||TAFFY.isObject(p)){return p}else{return JSON.parse(p)}};var l=function(s,q,t){if(s&&((f.isArray(s)&&s.length==1)||(!f.isArray(s)))){q((f.isArray(s))?s[0]:s,0)}else{for(var w,v,p=0,s=(f.isArray(s))?s:[s],z=s.length;p<z;p++){var v=s[p];if(!f.isUndefined(v)||(t||false)){w=q(v,p);if(w===f.EXIT){break}}}}};var b=function(u,q){var p=0,t;for(var s in u){if(u.hasOwnProperty(s)){t=q(u[s],s,p++)}if(t===f.EXIT){break}}};c.extend=function(p,q){c[p]=function(){return q.apply(this,arguments)}};var h=function(q){if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){return true}if(f.isObject(q)&&q.___id&&q.___s){return true}if(f.isArray(q)){var p=true;l(q,function(s){if(!h(s)){p=false;return TAFFY.EXIT}});return p}return false};var e=function(q){var p=[];if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){q={___id:q}}if(f.isArray(q)){l(q,function(s){p.push(e(s))});var q=function(){var s=this;var r=false;l(p,function(t){if(g(s,t)){r=true}});return r};return q}if(f.isObject(q)){if(f.isObject(q)&&q.___id&&q.___s){q={___id:q.___id}}b(q,function(r,s){if(!f.isObject(r)){r={is:r}}b(r,function(t,u){var w=[];var v=(u==="hasAll")?function(x,y){y(x)}:l;v(t,function(y){var x=true,z=false;var A=function(){var G=this[s],D="==",F="!=",B="===",C="!==";if((u.indexOf("!")===0)&&u!==F&&u!==C){x=false;u=u.substring(1,u.length)}var E=((u==="regex")?(y.test(G)):(u==="lt")?(G<y):(u==="gt")?(G>y):(u==="lte")?(G<=y):(u==="gte")?(G>=y):(u==="left")?(G.indexOf(y)===0):(u==="leftnocase")?(G.toLowerCase().indexOf(y.toLowerCase())===0):(u==="right")?(G.substring((G.length-y.length))===y):(u==="rightnocase")?(G.toLowerCase().substring((G.length-y.length))===y.toLowerCase()):(u==="like")?(G.indexOf(y)>=0):(u==="likenocase")?(G.toLowerCase().indexOf(y.toLowerCase())>=0):(u==="is")?(G===y):(u===B)?(G===y):(u===D)?(G==y):(u===C)?(G!==y):(u===F)?(G!=y):(u==="isnocase")?(G.toLowerCase?G.toLowerCase()==y.toLowerCase():G==y):(u==="has")?(f.has(G,y)):(u==="hasall")?(f.hasAll(G,y)):(u.indexOf("is")===-1&&!TAFFY.isNull(G)&&!TAFFY.isUndefined(G)&&!TAFFY.isObject(y)&&!TAFFY.isArray(y))?(y===G[u]):(f[u]&&f.isFunction(f[u])&&u.indexOf("is")===0)?f[u](G)===y:(f[u]&&f.isFunction(f[u]))?f[u](G,y):(false));E=(E&&!x)?false:(!E&&!x)?true:E;return E};w.push(A)});if(w.length===1){p.push(w[0])}else{p.push(function(){var y=this;var x=false;l(w,function(z){if(z.apply(y)){x=true}});return x})}})});var q=function(){var s=this;var r=true;r=(p.length==1&&!p[0].apply(s))?false:(p.length==2&&(!p[0].apply(s)||!p[1].apply(s)))?false:(p.length==3&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)))?false:(p.length==4&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)||!p[3].apply(s)))?false:true;if(p.length>4){l(p,function(t){if(!g(s,t)){r=false}})}return r};return q}if(f.isFunction(q)){return q}};var j=function(p,q){var r=function(t,s){var u=0;f.each(q,function(x){var z=x.split(" ");var w=z[0];var v=(z.length===1)?"logical":z[1];if(v==="logical"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]<y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]>y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="logicaldesc"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]>y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]<y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="asec"&&t[w]<s[w]){u=-1;return f.EXIT}else{if(v==="asec"&&t[w]>s[w]){u=1;return f.EXIT}else{if(v==="desc"&&t[w]>s[w]){u=-1;return f.EXIT}else{if(v==="desc"&&t[w]<s[w]){u=1;return f.EXIT}}}}}}if(u===0&&v==="logical"&&A.length<y.length){u=-1}else{if(u===0&&v==="logical"&&A.length>y.length){u=1}else{if(u===0&&v==="logicaldesc"&&A.length>y.length){u=-1}else{if(u===0&&v==="logicaldesc"&&A.length<y.length){u=1}}}}if(u!=0){return f.EXIT}});return u};return p.sort(r)};var o=null;(function(){var p={};var q=0;o=function(r){if(q>n){p={};q=0}return p["_"+r]||(function(){var v=String(r),u=[],z="_",t="";for(var s=0,w=v.length;s<w;s++){var y=v.charCodeAt(s);if((y>=48&&y<=57)||y===46){if(t!="n"){t="n";u.push(z.toLowerCase());z=""}z=z+v.charAt(s)}else{if(t!="s"){t="s";u.push(parseFloat(z));z=""}z=z+v.charAt(s)}}u.push((t==="n")?parseFloat(z):z.toLowerCase());u.shift();p["_"+r]=u;q++;return u})()}})();var d=function(){this.context({results:this.getDBI().query(this.context())})};c.extend("filter",function(){var q=TAFFY.mergeObj(this.context(),{run:null});var p=[];l(q.q,function(r){p.push(r)});q.q=p;l(arguments,function(r){q.q.push(e(r));q.filterRaw.push(r)});return this.getroot(q)});c.extend("order",function(q){var q=q.split(",");var p=[];l(q,function(s){p.push(s.replace(/^\s*/,"").replace(/\s*$/,""))});var r=TAFFY.mergeObj(this.context(),{sort:null});r.order=p;return this.getroot(r)});c.extend("limit",function(r){var q=TAFFY.mergeObj(this.context(),{});q.limit=r;if(q.run&&q.sort){var p=[];l(q.results,function(t,s){if((s+1)>r){return TAFFY.EXIT}p.push(t)});q.results=p}return this.getroot(q)});c.extend("start",function(r){var q=TAFFY.mergeObj(this.context(),{});q.start=r;if(q.run&&q.sort&&!q.limit){var p=[];l(q.results,function(t,s){if((s+1)>r){p.push(t)}});q.results=p}else{q=TAFFY.mergeObj(this.context(),{run:null,start:r})}return this.getroot(q)});c.extend("update",function(){var q=true,s={},p=arguments;if(TAFFY.isString(arguments[0])&&(arguments.length==2||arguments.length==3)){s[arguments[0]]=arguments[1];if(arguments.length==3){q=arguments[2]}}else{s=p[0];if(p.length==2){q=p[0]}}var r=this;d.call(this);l(this.context().results,function(t){var u=s;if(TAFFY.isFunction(u)){u=u.apply(TAFFY.mergeObj(t,{}))}else{if(f.isFunction(u)){u=u(TAFFY.mergeObj(t,{}))}}if(TAFFY.isObject(u)){r.getDBI().update(t.___id,u,q)}});if(this.context().results.length){this.context({run:null})}return this});c.extend("remove",function(p){var q=this;var r=0;d.call(this);l(this.context().results,function(s){q.getDBI().remove(s.___id);r++});if(this.context().results.length){this.context({run:null});q.getDBI().removeCommit(p)}return r});c.extend("count",function(){d.call(this);return this.context().results.length});c.extend("callback",function(r,p){if(r){var q=this;setTimeout(function(){d.call(q);r.call(q.getroot(q.context()))},(p)?p:0)}return null});c.extend("get",function(){d.call(this);return this.context().results});c.extend("stringify",function(){return JSON.stringify(this.get())});c.extend("first",function(){d.call(this);return this.context().results[0]||false});c.extend("last",function(){d.call(this);return this.context().results[this.context().results.length-1]||false});c.extend("sum",function(){var q=0;d.call(this);var p=this;l(arguments,function(r){l(p.context().results,function(s){q=q+s[r]})});return q});c.extend("min",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]<p){p=s[q]}});return p});c.extend("max",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]>p){p=s[q]}});return p});c.extend("select",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(s){q.push(s[p[0]])})}else{l(this.context().results,function(s){var t=[];l(p,function(r){t.push(s[r])});q.push(t)})}return q});c.extend("distinct",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(t){var s=t[p[0]];var u=false;l(q,function(r){if(s===r){u=true;return TAFFY.EXIT}});if(!u){q.push(s)}})}else{l(this.context().results,function(s){var u=[];l(p,function(r){u.push(s[r])});var t=false;l(q,function(v){var r=true;l(p,function(x,w){if(u[w]!=v[w]){r=false;return TAFFY.EXIT}});if(r){t=true;return TAFFY.EXIT}});if(!t){q.push(u)}})}return q});c.extend("supplant",function(q,p){var r=[];d.call(this);l(this.context().results,function(s){r.push(q.replace(/{([^{}]*)}/g,function(u,t){var w=s[t];return typeof w==="string"||typeof w==="number"?w:u}))});return(!p)?r.join(""):r});c.extend("each",function(p){d.call(this);l(this.context().results,p);return this});c.extend("map",function(p){var q=[];d.call(this);l(this.context().results,function(s){q.push(p(s))});return q});var g=function(s,q){var p=true;l(q,function(r){switch(f.typeOf(r)){case"function":if(!r.apply(s)){p=false;return TAFFY.EXIT}break;case"array":p=(r.length==1)?(g(s,r[0])):(r.length==2)?(g(s,r[0])||g(s,r[1])):(r.length==3)?(g(s,r[0])||g(s,r[1])||g(s,r[2])):(r.length==4)?(g(s,r[0])||g(s,r[1])||g(s,r[2])||g(s,r[3])):false;if(r.length>4){l(r,function(t){if(g(s,t)){p=true}})}break}});return p};var f=function(x){var u=[],y={},v=1,r={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100},t=new Date(),s=0,q=0,A={};var p=function(D){if(D.length==0){return u}var C=[];var B=false;l(D,function(E){if(f.isString(E)&&/[t][0-9]*[r][0-9]*/i.test(E)&&u[y[E]]){C.push(u[y[E]]);B=true}if(f.isObject(E)&&E.___id&&E.___s&&u[y[E.___id]]){C.push(u[y[E.___id]]);B=true}if(f.isArray(E)){l(E,function(F){l(p(F),function(G){C.push(G)})})}});if(B&&C.length>1){C=[]}return C};var w={dm:function(B){if(B){t=B;A={};s=0;q=0}if(r.onDBChange){setTimeout(function(){r.onDBChange.call(u)},0)}if(r.storageName){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}return t},insert:function(E,F){var D=[],C=[],B=k(E);l(B,function(H,I){if(f.isArray(H)&&I===0){l(H,function(K){D.push((r.forcePropertyCase==="lower")?K.toLowerCase():(r.forcePropertyCase==="upper")?K.toUpperCase():K)});return true}else{if(f.isArray(H)){var G={};l(H,function(L,K){G[D[K]]=L});H=G}else{if(f.isObject(H)&&r.forcePropertyCase){var J={};b(H,function(L,K){J[(r.forcePropertyCase==="lower")?K.toLowerCase():(r.forcePropertyCase==="upper")?K.toUpperCase():K]=H[K]});H=J}}}v++;H.___id="T"+String(a+m).slice(-6)+"R"+String(a+v).slice(-6);H.___s=true;C.push(H.___id);if(r.template){H=f.mergeObj(r.template,H)}u.push(H);y[H.___id]=u.length-1;if(r.onInsert&&(F||TAFFY.isUndefined(F))){r.onInsert.call(H)}w.dm(new Date())});return z(C)},sort:function(B){u=j(u,B.split(","));y={};l(u,function(D,C){y[D.___id]=C});w.dm(new Date());return true},update:function(I,E,D){var H={};if(r.forcePropertyCase){b(E,function(J,K){H[(r.forcePropertyCase==="lower")?K.toLowerCase():(r.forcePropertyCase==="upper")?K.toUpperCase():K]=J});E=H}var G=u[y[I]];var F=f.mergeObj(G,E);var B={};var C=false;b(F,function(J,K){if(TAFFY.isUndefined(G[K])||G[K]!==J){B[K]=J;C=true}});if(C){if(r.onUpdate&&(D||TAFFY.isUndefined(D))){r.onUpdate.call(F,u[y[I]],B)}u[y[I]]=F;w.dm(new Date())}},remove:function(B){u[y[B]].___s=false},removeCommit:function(C){for(var B=u.length-1;B>-1;B--){if(!u[B].___s){if(r.onRemove&&(C||TAFFY.isUndefined(C))){r.onRemove.call(u[B])}y[u[B].___id]=undefined;u.splice(B,1)}}y={};l(u,function(E,D){y[E.___id]=D});w.dm(new Date())},query:function(C){var F;if(r.cacheSize){var G="";l(C.filterRaw,function(H){if(f.isFunction(H)){G="nocache";return TAFFY.EXIT}});if(G==""){G=JSON.stringify(f.mergeObj(C,{q:false,run:false,sort:false}))}}if(!C.results||!C.run||(C.run&&w.dm()>C.run)){var B=[];if(r.cacheSize&&A[G]){A[G].i=s++;return A[G].results}else{if(C.q.length==0&&C.index.length==0){l(u,function(H){B.push(H)});F=B}else{var E=p(C.index);l(E,function(H){if(C.q.length==0||g(H,C.q)){B.push(H)}});F=B}}}else{F=C.results}if(C.order.length>0&&(!C.run||!C.sort)){F=j(F,C.order)}if(F.length&&((C.limit&&C.limit<F.length)||C.start)){var D=[];l(F,function(J,I){if(!C.start||(C.start&&(I+1)>=C.start)){if(C.limit){var H=(C.start)?(I+1)-C.start:I;if(H<C.limit){D.push(J)}else{if(H>C.limit){return TAFFY.EXIT}}}else{D.push(J)}}});F=D}if(r.cacheSize&&G!="nocache"){q++;setTimeout(function(){if(q>=r.cacheSize*2){q=0;var H=s-r.cacheSize;var I={};b(function(K,J){if(K.i>=H){I[J]=K}});A=I}},0);A[G]={i:s++,results:F}}return F}};var z=function(){var C=TAFFY.mergeObj(TAFFY.mergeObj(c,{insert:undefined}),{getDBI:function(){return w},getroot:function(D){return z.call(D)},context:function(D){if(D){B=TAFFY.mergeObj(B,("results" in D)?TAFFY.mergeObj(D,{run:new Date(),sort:new Date()}):D)}return B},extend:undefined});var B=(this&&this.q)?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null};l(arguments,function(D){if(h(D)){B.index.push(D)}else{B.q.push(e(D))}B.filterRaw.push(D)});return C};m++;if(x){w.insert(x)}z.insert=w.insert;z.merge=function(E,D,F){var D=(D||"id");var F=(F||false);var C={};var B=[];l(E,function(I){C[D]=I[D];B.push(I[D]);var H=z(C).first();if(H){w.update(H.___id,I,F)}else{w.insert(I,F)}});var G={};G[D]=B;return z(G)};z.TAFFY=true;z.sort=w.sort;z.settings=function(B){if(B){r=TAFFY.mergeObj(r,B);if(B.template){z().update(B.template)}}return r};z.store=function(D){var C=false;if(localStorage){if(D){var B=localStorage.getItem("taffy_"+D);if(B&&B.length>0){z.insert(B);C=true}if(u.length>0){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}}z.settings({storageName:D})}return z};return z};TAFFY=f;f.each=l;f.eachin=b;f.extend=c.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(r,p){var q={};b(r,function(s,t){q[t]=r[t]});b(p,function(s,t){q[t]=p[t]});return q};TAFFY.has=function(r,q){var p=true;if((r.TAFFY)){p=r(q);if(p.length>0){return true}else{return false}}else{switch(f.typeOf(r)){case"object":if(f.isObject(q)){b(q,function(t,u){if(p===true&&!f.isUndefined(r[u])&&r.hasOwnProperty(u)){p=f.has(r[u],q[u])}else{p=false;return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(t,u){p=f.has(r,q[u]);if(p){return TAFFY.EXIT}})}else{if(f.isString(q)){if(!TAFFY.isUndefined(r[q])){return true}else{return false}}}}return p;break;case"array":if(f.isObject(q)){l(r,function(t,u){p=f.has(r[u],q);if(p===true){return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(u,t){l(r,function(w,v){p=f.has(r[v],q[t]);if(p===true){return TAFFY.EXIT}});if(p===true){return TAFFY.EXIT}})}else{if(f.isString(q)||f.isNumber(q)){for(var s=0;s<r.length;s++){p=f.has(r[s],q);if(p){return true}}}}}return p;break;case"string":if(f.isString(q)&&q===r){return true}break;default:if(f.typeOf(r)===f.typeOf(q)&&r===q){return true}break}}return false};TAFFY.hasAll=function(s,r){var q=TAFFY;if(q.isArray(r)){var p=true;l(r,function(t){p=q.has(s,t);if(p===false){return TAFFY.EXIT}});return p}else{return q.has(s,r)}};TAFFY.typeOf=function(p){var q=typeof p;if(q==="object"){if(p){if(typeof p.length==="number"&&!(p.propertyIsEnumerable("length"))){q="array"}}else{q="null"}}return q};TAFFY.getObjectKeys=function(p){var q=[];b(p,function(s,r){q.push(r)});q.sort();return q};TAFFY.isSameArray=function(q,p){return(TAFFY.isArray(q)&&TAFFY.isArray(p)&&q.join(",")===p.join(","))?true:false};TAFFY.isSameObject=function(s,q){var p=TAFFY,r=true;if(p.isObject(s)&&p.isObject(q)){if(p.isSameArray(p.getObjectKeys(s),p.getObjectKeys(q))){b(s,function(t,u){if((p.isObject(s[u])&&p.isObject(q[u])&&p.isSameObject(s[u],q[u]))||(p.isArray(s[u])&&p.isArray(q[u])&&p.isSameArray(s[u],q[u]))||(s[u]===q[u])){}else{r=false;return TAFFY.EXIT}})}else{r=false}}else{r=false}return r};(function(p){for(var q=0;q<p.length;q++){(function(r){TAFFY["is"+r]=function(s){return TAFFY.typeOf(s)===r.toLowerCase()?true:false}}(p[q]))}}(["String","Number","Object","Array","Boolean","Null","Function","Undefined"]))}})();if(typeof(exports)==="object"){exports.taffy=TAFFY}var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());