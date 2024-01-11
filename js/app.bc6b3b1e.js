(function(){"use strict";var e={5427:function(e,t,o){var n=o(9242),a=o(3396);function s(e,t,o,s,i,l){const d=(0,a.up)("Navbar"),r=(0,a.up)("Notes"),c=(0,a.up)("Modal"),h=(0,a.up)("AddButton");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(d,{onSearchValue:t[0]||(t[0]=e=>i.search=e),onHeader:t[1]||(t[1]=e=>i.header=e)}),(0,a.Wm)(r,{notes:l.filterNotes,onDelNote:l.delNote,onChangeNote:l.changeNote,header:i.header},null,8,["notes","onDelNote","onChangeNote","header"]),(0,a.wy)((0,a.Wm)(c,{edit:i.edit,editNote:i.editNote,onCloseModal:l.closeModal,onAddNote:l.addNote,onEditedNote:l.editedNote},null,8,["edit","editNote","onCloseModal","onAddNote","onEditedNote"]),[[n.F8,i.modalOpen]]),(0,a.Wm)(h,{onOpenModal:l.openModal},null,8,["onOpenModal"])],64)}o(7658);var i=o(7139),l=o.p+"img/search.7bf44ec5.svg",d=o.p+"img/back.a1821e6b.svg",r=o.p+"img/clear.e9281049.svg";const c={class:"header"},h={class:"header__notes"},u={class:"header__title"},_=(0,a._)("img",{src:l,alt:""},null,-1),g=[_],p={class:"header__form"},m=(0,a._)("img",{src:d,alt:""},null,-1),f=[m],N={class:"container"},v=["placeholder"],w=(0,a._)("img",{src:r,alt:""},null,-1),b=[w];function y(e,t,o,s,l,d){return(0,a.wg)(),(0,a.iD)("header",c,[(0,a.Wm)(n.uT,{name:"header__notes"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",h,[(0,a._)("button",{class:"header__lang",onClick:t[0]||(t[0]=(...e)=>d.switchLang&&d.switchLang(...e))},(0,i.zw)(e.$i18n.locale),1),(0,a._)("h1",u,(0,i.zw)(e.$t("notes")),1),(0,a._)("button",{class:"header__search",onClick:t[1]||(t[1]=t=>(l.header=!1,e.$emit("header",l.header)))},g)],512),[[n.F8,!0===l.header]])])),_:1}),(0,a.Wm)(n.uT,{name:"header__form"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",p,[(0,a._)("button",{class:"header__back",onClick:t[2]||(t[2]=t=>(l.header=!0,l.text="",e.$emit("header",l.header)))},f),(0,a._)("div",N,[(0,a.wy)((0,a._)("input",{type:"text",class:"header__input",placeholder:e.$t("searchInput"),"onUpdate:modelValue":t[3]||(t[3]=e=>l.text=e)},null,8,v),[[n.nr,l.text]])]),(0,a._)("button",{class:"header__clear",onClick:t[4]||(t[4]=e=>l.text="")},b)],512),[[n.F8,!1===l.header]])])),_:1})])}var k={data(){return{header:!0,text:""}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{text(e){this.$emit("searchValue",e)}}},$=o(89);const C=(0,$.Z)(k,[["render",y]]);var O=C,D=o.p+"img/list.4bf38f66.svg",M=o.p+"img/grid.e2c63407.svg";const x={class:"notes"},z={class:"container"},S={class:"notes__top"},j={key:0,class:"notes__title"},T={key:1,class:"notes__title"},E={key:0,src:D,alt:""},I={key:1,src:M,alt:""};function Z(e,t,o,n,s,l){const d=(0,a.up)("NotesItem");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",z,[(0,a._)("div",S,[o.header?((0,a.wg)(),(0,a.iD)("h2",j,(0,i.zw)(0==o.notes.length?e.$t("noNotes"):e.$t("allNotes")),1)):((0,a.wg)(),(0,a.iD)("h2",T,(0,i.zw)(e.$t("search")),1)),(0,a._)("button",{class:"notes__btn",onClick:t[0]||(t[0]=e=>s.grid=!s.grid)},[s.grid?((0,a.wg)(),(0,a.iD)("img",E)):((0,a.wg)(),(0,a.iD)("img",I)),(0,a._)("span",null,(0,i.zw)(s.grid?e.$t("list"):e.$t("grid")),1)])]),(0,a._)("div",{class:(0,i.C_)(["notes__list",{active:!s.grid}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.notes,(t=>((0,a.wg)(),(0,a.j4)(d,{grid:s.grid,key:t.id,note:t,onDelNote:o=>e.$emit("delNote",t.id),onChangeNote:o=>e.$emit("changeNote",t.id)},null,8,["grid","note","onDelNote","onChangeNote"])))),128))],2)])])}var B=o.p+"img/edit.10842793.svg",L=o.p+"img/del.f2533121.svg";const A={class:"notes__item"},W={class:"notes__item-title"},V={class:"notes__item-date"},q={class:"notes__item-desc"},F={class:"notes__item-btns"},H=(0,a._)("img",{src:B,alt:""},null,-1),J=(0,a._)("img",{src:L,alt:""},null,-1);function Q(e,t,o,n,s,l){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",{class:(0,i.C_)(["notes__item-top",{between:!o.grid}])},[(0,a._)("h3",W,(0,i.zw)(o.note.title),1),(0,a._)("p",V,(0,i.zw)(o.note.date),1)],2),(0,a._)("p",q,(0,i.zw)(o.note.desc),1),(0,a._)("div",F,[(0,a._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",o.note.id))},[H,(0,a._)("span",null,(0,i.zw)(e.$t("edit")),1)]),(0,a._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",o.note.id))},[J,(0,a._)("span",null,(0,i.zw)(e.$t("del")),1)])])])}var R={props:{grid:Boolean,note:Object}};const U=(0,$.Z)(R,[["render",Q]]);var P=U,Y={components:{NotesItem:P},props:{notes:{typeof:Array,required:!0},header:{typeof:Boolean}},data(){return{grid:!0}}};const G=(0,$.Z)(Y,[["render",Z]]);var K=G;const X={class:"modal__title"},ee={class:"modal__inputs"},te=(0,a._)("span",null,"Title",-1),oe=(0,a._)("span",null,"Content",-1),ne={class:"modal__btns"};function ae(e,t,o,s,l,d){return(0,a.wg)(),(0,a.j4)(n.uT,{name:"modal"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>d.closeModal&&d.closeModal(...e))},[(0,a._)("div",{class:"modal__block",onClick:t[5]||(t[5]=(0,n.iM)((()=>{}),["stop"]))},[(0,a._)("h2",X,(0,i.zw)(o.edit?e.$t("changeNote"):e.$t("addNote")),1),(0,a._)("div",ee,[(0,a._)("label",null,[te,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[n.nr,l.title]])]),(0,a._)("label",null,[oe,(0,a.wy)((0,a._)("textarea",{type:"text",placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[n.nr,l.desc]])])]),(0,a._)("div",ne,[(0,a._)("button",{class:"modal__btn cancel",onClick:t[2]||(t[2]=(...e)=>d.closeModal&&d.closeModal(...e))},(0,i.zw)(e.$t("cancel")),1),o.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"modal__btn add",onClick:t[4]||(t[4]=(...e)=>d.changeNote&&d.changeNote(...e))},(0,i.zw)(e.$t("change")),1)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"modal__btn add",onClick:t[3]||(t[3]=(...e)=>d.addNote&&d.addNote(...e))},(0,i.zw)(e.$t("add")),1))])])])])),_:1})}var se=o(3029),ie={props:{edit:Boolean,editNote:Object},data(){return{title:"",desc:""}},methods:{changeNote(){if(""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal()}},closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){let e={id:(0,se.Z)(),title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc=""}}}};const le=(0,$.Z)(ie,[["render",ae]]);var de=le;const re=(0,a._)("img",{src:B,alt:""},null,-1),ce=[re];function he(e,t,o,n,s,i){return(0,a.wg)(),(0,a.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},ce)}var ue={};const _e=(0,$.Z)(ue,[["render",he]]);var ge=_e,pe={components:{Navbar:O,Notes:K,Modal:de,AddButton:ge},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},data(){return{header:!0,search:"",modalOpen:!1,notes:[],edit:!1,editNote:{}}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},created(){this.getNotes()},methods:{editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},changeNote(e){this.modalOpen=this.edit=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t},openModal(){this.modalOpen=!0},closeModal(e){this.modalOpen=e,setTimeout((()=>{this.edit=!1}),300)},addNote(e){this.notes.push(e),this.modalOpen=!1},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},getNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e))}}};const me=(0,$.Z)(pe,[["render",s]]);var fe=me,Ne=JSON.parse('{"notes":"Eslatmalar","allNotes":"Barcha eslatmalar","noNotes":"Eslatmalar yoq","list":"Roʻyxat","grid":"Setka","edit":"O\'ZGARTIRISH","del":"o\'chirish","addNote":"Eslatma qo’shish","add":"Qo’shish","cancel":"Bekor qilish","changeNote":"Elsatmani tahrirlash","change":"o\'zgartirish","search":"Qidirish","searchInput":"Qidirish..."}'),ve=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Заметок нет","list":"Список","grid":"Сетка","edit":"РЕДАКТИРОВАТЬ","del":"Удалить","addNote":"Добавить заметку","add":"Добавить","cancel":"Отмена","changeNote":"Изменить заметку","change":"изменить","search":"Поиск","searchInput":"Поиск..."}');const we={uz:Ne,ru:ve};var be=o(5658);const ye=localStorage.lang,ke=(0,be.o)({legacy:!0,locale:ye||"ru",messages:we});(0,n.ri)(fe).use(ke).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var r=a();void 0!==r&&(t=r)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/vue-todolist/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,i=n[0],l=n[1],d=n[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(d)var c=d(o)}for(t&&t(n);r<i.length;r++)s=i[r],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self["webpackChunkvue_todolist"]=self["webpackChunkvue_todolist"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5427)}));n=o.O(n)})();
//# sourceMappingURL=app.bc6b3b1e.js.map