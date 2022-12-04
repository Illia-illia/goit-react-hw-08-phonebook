"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{5390:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var o,r,a,i,d,s,c=t(168),l=t(7691),p=l.ZP.h2(o||(o=(0,c.Z)(["\n  margin-top: 20px;\n  font-family: sans-serif;\n  font-size: 30px;\n  line-height: 1.15;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n"]))),f=t(184),u=function(n){var e=n.title,t=n.children;return(0,f.jsxs)("section",{children:[(0,f.jsx)(p,{children:e}),t]})},x=l.ZP.label(r||(r=(0,c.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.15;\n"]))),h=l.ZP.input(a||(a=(0,c.Z)(["\n  all: unset;\n  display: flex;\n  border: 2px solid black;\n  margin: 10px 0;\n  padding: 15px;\n  font-size: 20px;\n  &:focus-visible {\n    border-radius: 4px;\n    border: 3px solid lightblue;\n  }\n"]))),m=t(2007),b=t.n(m),g=t(9434),y=t(4808),Z=function(){var n=(0,g.I0)();return(0,f.jsxs)(x,{children:["Find contacts by name",(0,f.jsx)(h,{type:"text",name:"filter",onChange:function(e){n((0,y.s)(e.currentTarget.value))}})]})};x.propTypes={filter:b().string};var v=l.ZP.ul(i||(i=(0,c.Z)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 550px;\n"]))),j=l.ZP.li(d||(d=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 25px;\n  line-height: 1.15;\n  padding: 10px 0;\n  letter-spacing: 0.05em;\n"]))),k=l.ZP.button(s||(s=(0,c.Z)(["\n  box-shadow: inset 0px 0px 12px 3px #ffffff;\n  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\n  background-color: #ededed;\n  border-radius: 4px;\n  border: 2px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #212121;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 16px 16px;\n  text-decoration: none;\n\n  &:hover {\n    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);\n    background-color: #212121;\n    color: #ffffff;\n  }\n"]))),w=t(3634),P=function(n){var e=n.contacts,t=(0,g.I0)();return(0,f.jsx)(v,{children:e.map((function(n){var e=n.id,o=n.name,r=n.number;return(0,f.jsxs)(j,{children:[o,": ",r,(0,f.jsx)(k,{type:"button",onClick:function(){return t((0,w.GK)(e))},children:"Delete"})]},e)}))})};v.propTypes={contacts:b().arrayOf(b().exact({id:b().string.isRequired,name:b().string.isRequired,phone:b().number.isRequired}))};var z,C,A,S,I,L,T=t(5705),_=t(2797),q=(0,l.ZP)(T.l0)(z||(z=(0,c.Z)(["\n  border: 1px solid black;\n  width: 450px;\n  display: block;\n  padding: 15px;\n  margin: 0;\n"]))),R=(0,l.ZP)(T.Bc)(C||(C=(0,c.Z)(["\n  color: tomato;\n"]))),F=l.ZP.label(A||(A=(0,c.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.15;\n"]))),G=(0,l.ZP)(T.gN)(S||(S=(0,c.Z)(["\n  all: unset;\n  display: flex;\n  border: 2px solid black;\n  margin: 10px 0;\n  padding: 15px;\n  font-size: 20px;\n  &:focus-visible {\n    border-radius: 4px;\n    border: 3px solid lightblue;\n  }\n"]))),N=l.ZP.button(I||(I=(0,c.Z)(["\n  box-shadow: inset 0px 0px 12px 3px #ffffff;\n  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\n  background-color: #ededed;\n  border-radius: 4px;\n  border: 2px solid #dcdcdc;\n  display: inline-block;\n  cursor: pointer;\n  color: #212121;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 16px 37px;\n  text-decoration: none;\n  margin: 10px 0;\n\n  &:hover {\n    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);\n    background-color: #212121;\n    color: #ffffff;\n  }\n"]))),V=RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{1,3}\\)[ \\-]*)|([0-9]{1,4})[ \\-]*)*?[0-9]{1,4}?[ \\-]*[0-9]{1,9}?$/),U=_.Ry().shape({name:_.Z_().required().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),phone:_.Z_().required().matches(V,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),B={name:"",phone:""},E=function(n){var e=n.handleSubmit;return(0,f.jsx)(T.J9,{initialValues:B,onSubmit:e,validationSchema:U,children:(0,f.jsxs)(q,{autoComplete:"off",children:[(0,f.jsxs)(F,{children:["Name",(0,f.jsx)(G,{type:"text",name:"name"}),(0,f.jsx)(R,{component:"div",name:"name"})]}),(0,f.jsxs)(F,{children:["Number",(0,f.jsx)(G,{type:"tel",name:"phone"}),(0,f.jsx)(R,{component:"div",name:"phone"})]}),(0,f.jsx)(N,{type:"submit",children:"Add contact"})]})})},J=l.ZP.div(L||(L=(0,c.Z)(["\n  margin: 16px;\n"]))),K=function(n){return n.phonebook.contacts.items},$=function(n){return n.phonebook.contacts.isLoading},D=function(n){return n.phonebook.contacts.error},M=function(n){var e=K(n),t=function(n){return n.filter}(n);return e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))},O=t(2791);function H(){var n=(0,g.I0)(),e=(0,g.v9)(K),t=(0,g.v9)($),o=(0,g.v9)(D),r=(0,g.v9)(M);return(0,O.useEffect)((function(){n((0,w.yF)())}),[n]),(0,f.jsxs)(J,{children:[(0,f.jsx)(u,{title:"Phonebook"}),(0,f.jsx)(E,{handleSubmit:function(t,o){var r,a=o.resetForm;r=t,e.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(r.name," is already in contacts")):n((0,w.uK)(r)),a()}}),(0,f.jsxs)(u,{title:"Contacts",children:[(0,f.jsx)(Z,{}),t&&(0,f.jsx)("p",{children:"Loading contacts..."}),o&&(0,f.jsx)("p",{children:o}),e.length>0&&(0,f.jsx)(P,{contacts:r})]})]})}}}]);
//# sourceMappingURL=390.4d8a0a78.chunk.js.map