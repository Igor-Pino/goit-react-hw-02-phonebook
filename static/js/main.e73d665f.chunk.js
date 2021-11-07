(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={root:"ContactsList_root__2qSmw",main_container:"ContactsList_main_container__3OG2S",title:"ContactsList_title__2cWkh",contact_btn:"ContactsList_contact_btn__Rbz30",contact_list:"ContactsList_contact_list__32Ag6"}},13:function(t,e,n){t.exports={root:"ContactFilter_root__D0Six",main_container:"ContactFilter_main_container__3jXCq",title:"ContactFilter_title__3Idfq",contact_btn:"ContactFilter_contact_btn__2UPkq",filter_label:"ContactFilter_filter_label__ymWjo"}},14:function(t,e,n){t.exports={root:"base_root__36qMp",main_container:"base_main_container__3vyqu",title:"base_title__12qY5",contact_btn:"base_contact_btn__Lw2qP"}},21:function(t,e,n){},3:function(t,e,n){t.exports={root:"ContactItem_root__1LeH0",main_container:"ContactItem_main_container__Whm3h",title:"ContactItem_title__Iitfr",contact_btn:"ContactItem_contact_btn__3sCaA",contact:"ContactItem_contact__3uYjd",contact_number:"ContactItem_contact_number__2w5_f",contactItem:"ContactItem_contactItem__3-nzO"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(20),n(21),n(15)),s=n(5),l=n(6),u=n(8),_=n(7),m=n(11),b=n(2),d=n.n(b),h=n(0),j=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.reset=function(){t.setState({name:"",number:""})},t.handelChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handelSubmit,children:[Object(h.jsxs)("label",{id:this.nameInputId,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,id:this.nameInputId,onChange:this.handelChange})]}),Object(h.jsxs)("label",{id:this.numberInputId,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,id:this.numberInputId,onChange:this.handelChange})]}),Object(h.jsx)("button",{type:"submit",children:"add contact"})]})}}]),n}(a.Component),f=j,C=n(3),p=n.n(C),O=function(t){var e=t.contact,n=t.onDeleteContact;return Object(h.jsxs)("li",{className:p.a.contactItem,children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("span",{className:p.a.contact_name,children:e.name}),Object(h.jsx)("span",{className:p.a.contact_number,children:e.number})]}),Object(h.jsx)("button",{onClick:function(){return n(e.id)},className:p.a.contact_btn,children:"X"})]},e.id)},x=n(12),v=n.n(x),I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:v.a.contact_list,children:e.map((function(t){return Object(h.jsx)(O,{contact:t,onDeleteContact:n})}))})},g=n(13),S=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{className:S.a.filter_label,children:"Contact filter"}),Object(h.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},w=n(14),N=n.n(w),q=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handlerContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:d.a.generate(),name:n,number:a};c.find((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))||c.find((function(t){return t.number===r.number}))?alert("".concat(r.name," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.contactFilter=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.contactFilter();return Object(h.jsxs)("div",{className:N.a.main_container,children:[Object(h.jsx)("h1",{className:"title",children:"Phonebook"}),Object(h.jsx)(f,{onSubmit:this.handlerContact}),Object(h.jsx)("h2",{className:"title",children:"Contacts"}),Object(h.jsx)(y,{onChange:this.changeFilter,value:t}),Object(h.jsx)(I,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),L=q;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e73d665f.chunk.js.map