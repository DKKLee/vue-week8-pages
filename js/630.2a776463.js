"use strict";(self["webpackChunkvue_week8"]=self["webpackChunkvue_week8"]||[]).push([[630],{8478:function(a,e,t){t.d(e,{Z:function(){return m}});var i=t(6252),s=t(3577),n=t(9963);const r={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center"},l=(0,i._)("span",{"aria-hidden":"true"},"«",-1),o=[l],g={key:0,class:"page-link"},p=["onClick"],d=(0,i._)("span",{"aria-hidden":"true"},"»",-1),u=[d];function _(a,e,t,l,d,_){return(0,i.wg)(),(0,i.iD)("nav",r,[(0,i._)("ul",c,[(0,i._)("li",{class:(0,s.C_)([{disabled:!t.pages.has_pre},"page-item"])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,n.iM)((a=>_.updatePage(t.pages.current_page-1)),["prevent"]))},o)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.pages.total_pages,(a=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["page-item",{active:t.pages.current_page===a}]),key:a},[a===t.pages.current_page?((0,i.wg)(),(0,i.iD)("span",g,(0,s.zw)(a),1)):((0,i.wg)(),(0,i.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,n.iM)((e=>_.updatePage(a)),["prevent"])},(0,s.zw)(a),9,p))],2)))),128)),(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:!t.pages.has_next}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,n.iM)((a=>_.updatePage(t.pages.current_page+1)),["prevent"]))},u)],2)])])}var h={props:["pages"],methods:{updatePage(a){this.$emit("emitPages",a)}}},v=t(3744);const k=(0,v.Z)(h,[["render",_]]);var m=k},3630:function(a,e,t){t.r(e),t.d(e,{default:function(){return m}});var i=t(6252),s=t(3577);const n={class:"container"},r={class:"row"},c={class:"card"},l={class:"card-body"},o={class:"card-title"},g={class:"card-text"},p=(0,i.Uk)("詳細內容..."),d={class:"my-4"};function u(a,e,t,u,_,h){const v=(0,i.up)("Loading"),k=(0,i.up)("router-link"),m=(0,i.up)("Pagination");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(v,{active:_.isLoading},null,8,["active"]),(0,i._)("div",n,[(0,i._)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.articles,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"col-sm-6",key:a.create_at},[(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("h5",o,(0,s.zw)(a.title),1),(0,i._)("p",g,(0,s.zw)(a.description),1),(0,i.Wm)(k,{to:{name:"article",params:{id:a.id}}},{default:(0,i.w5)((()=>[p])),_:2},1032,["to"])])])])))),128))]),(0,i._)("div",d,[(0,i.Wm)(m,{pages:_.pagination,onEmitPages:a.getProducts},null,8,["pages","onEmitPages"])])])],64)}var _=t(8478),h={data(){return{articles:[],pagination:{},status:{loadingItem:""},isLoading:!1,article:{},category:""}},components:{Pagination:_.Z},methods:{getArticles(a=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2/api/vuetestproducts/articles?page=${a}&category=${this.category}`;this.$http.get(e).then((a=>{this.articles=a.data.articles,this.pagination=a.data.pagination,this.isLoading=!1})).catch((a=>{console.log(a.data)}))}},mounted(){this.getArticles()},created(){}},v=t(3744);const k=(0,v.Z)(h,[["render",u]]);var m=k}}]);
//# sourceMappingURL=630.2a776463.js.map