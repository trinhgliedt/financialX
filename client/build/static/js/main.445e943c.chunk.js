(this.webpackJsonpfinancial_x=this.webpackJsonpfinancial_x||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(13),i=n.n(r),o=(n(23),n(6)),l=n(5),d=n(3),j=(n(24),n(2)),h=n(4),b={navbarBg:"linear-gradient(rgba(133, 145, 175, 0.637), rgba(159, 179, 235, 0.644), rgba(133, 145, 175, 0.637))",dropdownMenuBg:"linear-gradient(rgb(133, 145, 175), rgb(159, 179, 235), rgba(133, 145, 175))",containerBg:"radial-gradient(rgb(133, 145, 175), rgba(131, 146, 187, 0.781), rgb(133, 145, 175))",gold:"linear-gradient(rgb(158, 134, 80), rgb(228, 216, 189), rgb(158, 134, 80))"},x=n.p+"static/media/EquityX_Logo.d5ac25ea.png",m=function(e){var t=e.destination,n=e.displayContactForm,c=function(){n(!0)};return Object(a.jsxs)(a.Fragment,{children:["navBar"===t&&Object(a.jsx)("div",{className:"demoNavBar",onClick:function(){return c()},children:"Request a Demo"}),"homePage"===t&&Object(a.jsx)("div",{className:"demoHome",onClick:function(){return c()},children:"Request a Demo"})]})};function u(){var e=Object(d.a)(["\n    width: 40em;\n    margin-left: 24%;\n    position: absolute;\n    font-size: 1em;\n    border-top: 1px solid grey;\n    opacity: 1;\n    animation: fade 0.8s linear;\n    border-radius: 0 0 0.5em 0.5em;\n    background-image: ",";\n    box-shadow: 0 1em 1em 0 rgba(0,0,0,0.2);\n    z-index: 1;\n    \n    @media only screen and (max-width: 768px) {\n        margin-left: 0.1em;\n        width: 82%;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        margin-left: 0.3em;\n        width: 90%;\n    }\n"]);return u=function(){return e},e}function O(){var e=Object(d.a)(["\n    height: 100%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    font-size: 1.1em;\n    cursor: pointer;\n    @media only screen and (max-width: 768px) {\n        font-size: 0.6em;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        font-size: 0.7em;\n    }\n"]);return O=function(){return e},e}function p(){var e=Object(d.a)(["\n    height: 100%;\n    display: flex;\n    align-items: flex-end;\n    padding: 1% 2.5%;\n    justify-content: center;\n    margin: 0 0.5%;\n"]);return p=function(){return e},e}function v(){var e=Object(d.a)(["\n    height: 100%;\n    width: 68%;\n    display: flex;\n    align-self: flex-end;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    \n    \n    @media only screen and (max-width: 768px) {\n        width: 60%;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        width: 60%;\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n    width: 97.36%;\n    display: flex;\n    justify-content: space-between;\n    background-image: ",";\n    padding: 0.5em 1em 0 1em;\n    @media only screen and (max-width: 768px) {\n        padding: 0.1em 0.5em 0 0.5em;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        padding: 0.1em 0.5em 0 0.5em;\n    }\n"]);return g=function(){return e},e}var w=h.a.div(g(),b.navbarBg),f=h.a.div(v()),y=h.a.div(p()),N=h.a.div(O()),C=h.a.div(u(),b.dropdownMenuBg),F=function(e){var t=e.displayContactForm,n=Object(c.useState)(!1),s=Object(l.a)(n,2),r=s[0],i=s[1],d=Object(c.useState)(!1),h=Object(l.a)(d,2),b=h[0],u=h[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),v=p[0],g=p[1],F=Object(c.useState)(!1),M=Object(l.a)(F,2),S=M[0],D=M[1],E={destination:"navBar",displayContactForm:t},P=function(e){"products"===e?i(!0):"resources"===e?u(!0):"partners"===e?g(!0):"aboutUs"===e&&D(!0)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"products"===e&&null===t?i(!1):"products"===e&&"productDropDownContent"===t?i(!0):"resources"===e&&null===t?u(!1):"resources"===e&&"resourceDropDownContent"===t?u(!0):"partners"===e&&null===t?g(!1):"partners"===e&&"partnerDropDownContent"===t?g(!0):"aboutUs"===e&&null===t?D(!1):"aboutUs"===e&&"aboutUsDropDownContent"===t&&D(!0)};return Object(a.jsxs)("div",{className:"sticky",children:[Object(a.jsxs)(w,{children:[Object(a.jsx)("div",{id:"logoContainer",children:Object(a.jsx)("img",{src:x,alt:"logo",height:"100%"})}),Object(a.jsxs)(f,{children:[Object(a.jsx)(y,{id:"products",onMouseEnter:function(){return P("products")},onMouseLeave:function(){return B("products")},children:Object(a.jsx)(N,{className:"tabLabel",children:"Products & Solutions"})}),Object(a.jsx)(y,{onMouseEnter:function(){return P("resources")},onMouseLeave:function(){return B("resources")},children:Object(a.jsx)(N,{className:"tabLabel",children:"Resources"})}),Object(a.jsx)(y,{onMouseEnter:function(){return P("partners")},onMouseLeave:function(){return B("partners")},children:Object(a.jsx)(N,{className:"tabLabel",children:"Partners"})}),Object(a.jsx)(y,{onMouseEnter:function(){return P("aboutUs")},onMouseLeave:function(){return B("aboutUs")},children:Object(a.jsx)(N,{className:"tabLabel",children:"About us"})})]}),Object(a.jsx)(m,Object(o.a)({},E))]}),r&&Object(a.jsx)(C,{id:"productDropdown",onMouseEnter:function(){return B("products","productDropDownContent")},onMouseLeave:function(){return B("products")},children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Private Companies"})}),Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Investors"})}),Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Public Companies"})})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Overview"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Overview"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Overview"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Cap Table Management"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Fund Administration"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"ESPP"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Scenario Modeling"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Capital Call Line of Credit"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Transfer Agent"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Private Company Liquidity"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Portfolio Insights"})}),Object(a.jsx)("td",{})]})]})]})}),b&&Object(a.jsx)(C,{id:"resourceDropdown",onMouseEnter:function(){return B("resources","resourceDropDownContent")},onMouseLeave:function(){return B("resources")},children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"EquityX Resources"})}),Object(a.jsx)("th",{})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcac Customer Testimonials"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\u270d Blog"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcc5 Events & Webinars"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\u2b50 Partner Stories"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udece\ufe0f Supports"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcd6 Product Education"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcb1 Product Release Notes"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udd0d How We Work"})})]})]})]})}),v&&Object(a.jsx)(C,{id:"partnerDropdown",onMouseEnter:function(){return B("partners","partnerDropDownContent")},onMouseLeave:function(){return B("partners")},children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"Partner Resources"})}),Object(a.jsx)("th",{})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\u2696 Law Partners"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\u2370 Why partner with EquityX"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ufe6a VC Partners"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83e\udd1d Become a partner"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcc3 Private Equity Partners"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udd11 Partner Resource Center"})})]})]})]})}),S&&Object(a.jsx)(C,{id:"aboutUsDropdown",onMouseEnter:function(){return B("aboutUs","aboutUsDropDownContent")},onMouseLeave:function(){return B("aboutUs")},children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(j.a,{to:"/sample",children:"About EquityX"})}),Object(a.jsx)("th",{})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc Company Info"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcf0 Press"})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\udcec Contact EquityX"})}),Object(a.jsx)("td",{children:Object(a.jsx)(j.a,{to:"/sample",children:"\ud83d\ude0e Careers"})})]})]})]})})]})},M=n.p+"static/media/pi_chart.451ef5aa.png",S=n.p+"static/media/privateCo.a3c44729.png",D=n.p+"static/media/publicCo.6d10425c.png",E=n.p+"static/media/investors.cb39ff53.png";function P(){var e=Object(d.a)(["\n    @media only screen and (max-width: 768px) {\n        min-height: 6em;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        min-height: 8em;\n    }\n    \n"]);return P=function(){return e},e}function B(){var e=Object(d.a)(["\n    padding: 0 2% 2% 2%;\n    width: 30%;\n    align-self: flex-start;\n    margin: 0 1em;\n    border: 1px solid silver;\n    @media only screen and (max-width: 768px) {\n        font-size: 1em;\n        margin: 0 0.2em;\n        padding: 0 0.6% 1% 0.6%;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        font-size: 1em;\n        margin: 0 0.3em;\n    }\n"]);return B=function(){return e},e}function I(){var e=Object(d.a)(["\n    padding: 0 4%;\n    width: 30%;\n    align-self: flex-start;\n    @media only screen and (max-width: 768px) {\n        width: 25%;\n        align-self: center;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        width: 18%;\n        align-self: center;\n    }\n"]);return I=function(){return e},e}function L(){var e=Object(d.a)(["\n    padding: 0;\n    width: 65%;\n    align-self: flex-start;\n    @media only screen and (max-width: 768px) {\n        width: 70%;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n        width: 78%;\n    }\n"]);return L=function(){return e},e}var k=h.a.div(L()),A=h.a.div(I()),H=h.a.div(B()),q=h.a.div(P()),T=function(e){var t={destination:"homePage",displayContactForm:e.displayContactForm};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"rowFlex rowSpaceBetweenContent p2 my2x0 darkBg",children:[Object(a.jsxs)(k,{children:[Object(a.jsx)("h2",{className:"lightGreenFont",children:"Why EquityX?"}),Object(a.jsx)("h1",{children:"Equity. Simplified."}),Object(a.jsx)("p",{children:"EquityX helps companies and investors manage their cap tables, valuation, investments, and equity plans."}),Object(a.jsx)(m,Object(o.a)({},t))]}),Object(a.jsx)(A,{children:Object(a.jsx)("img",{src:M,width:"100%",alt:"pie chart"})})]}),Object(a.jsxs)("div",{className:"rowFlex rowSpaceBetweenContent py2 px1 my2x0 goldBg",children:[Object(a.jsxs)(H,{children:[Object(a.jsxs)(q,{children:[Object(a.jsx)(j.a,{to:"/sample",children:Object(a.jsx)("h3",{className:"yellowFont",children:"Private Companies"})}),Object(a.jsx)("p",{className:"bold",children:"Streamline how you manage equity from founding to IPO"}),Object(a.jsx)("p",{children:"Cap table software, secondaries & 409 valuations"})]}),Object(a.jsx)("div",{className:"centerDiv",children:Object(a.jsx)("img",{className:"sectorImg",src:S,alt:"private companies"})})]}),Object(a.jsxs)(H,{children:[Object(a.jsxs)(q,{children:[Object(a.jsx)(j.a,{to:"/sample",children:Object(a.jsx)("h3",{className:"lightGreenFont",children:"Public Companies"})}),Object(a.jsx)("p",{className:"bold",children:"Streamline how you manage equity after IPO"}),Object(a.jsx)("p",{children:"Maintain your cap table and running quarterly 409A valuations"})]}),Object(a.jsx)("div",{className:"centerDiv",children:Object(a.jsx)("img",{className:"sectorImg",src:D,alt:"private companies"})})]}),Object(a.jsxs)(H,{children:[Object(a.jsxs)(q,{children:[Object(a.jsx)(j.a,{to:"/sample",children:Object(a.jsx)("h3",{className:"darkRedFont",children:"Investors"})}),Object(a.jsx)("p",{className:"bold",children:"Modernize how you manage your portfolio and back office"}),Object(a.jsx)("p",{children:"Fund admin, valuation, scenario modeling & portfolio insights"})]}),Object(a.jsx)("div",{className:"centerDiv",children:Object(a.jsx)("img",{className:"sectorImg",src:E,alt:"private companies"})})]})]}),Object(a.jsxs)("div",{className:"p1 greenBg",children:[Object(a.jsx)("h3",{className:"lightBlueFont centerText m0",children:"Join EquityX"}),Object(a.jsx)("h2",{className:"centerText",children:"Get in touch to discuss plans and pricing"}),Object(a.jsx)("div",{className:"rowFlex rowSpaceBetweenContent rowCenterContent greenBg",children:Object(a.jsx)(m,Object(o.a)({},t))})]}),Object(a.jsxs)("div",{className:"rowFlex rowSpaceBetweenContent p2 darkBg",children:[Object(a.jsxs)("div",{className:"col20",children:[Object(a.jsx)("h3",{className:"lightBlueFont",children:"COMPANIES"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightBlueHover",to:"/sample",children:"Plans & pricing"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightBlueHover",to:"/sample",children:"Board consents"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightBlueHover",to:"/sample",children:"Liquidity"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightBlueHover",to:"/sample",children:"Products for public companies"})]}),Object(a.jsxs)("div",{className:"col20",children:[Object(a.jsx)("h3",{className:"purpleFont",children:"INVESTORS"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont purpleHover",to:"/sample",children:"Plans for investors"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont purpleHover",to:"/sample",children:"Fund administration"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont purpleHover",to:"/sample",children:"ASC 820"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont purpleHover",to:"/sample",children:"Capital call line of credit"})]}),Object(a.jsxs)("div",{className:"col20",children:[Object(a.jsx)("h3",{className:"lightGreenFont",children:"RESOURCES"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightGreenHover",to:"/sample",children:"Video tour"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightGreenHover",to:"/sample",children:"Support"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightGreenHover",to:"/sample",children:"Employee resources"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightGreenHover",to:"/sample",children:"Product release notes"})]}),Object(a.jsxs)("div",{className:"col20",children:[Object(a.jsx)("h3",{className:"lightRedFont",children:"PARTNERS"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightRedHover",to:"/sample",children:"Law firm partners"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightRedHover",to:"/sample",children:"VC partners"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont lightRedHover",to:"/sample",children:"Private Equity partners"})]}),Object(a.jsxs)("div",{className:"col20",children:[Object(a.jsx)("h3",{className:"orangeFont",children:"ABOUT US"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont orangeHover",to:"/sample",children:"Company"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont orangeHover",to:"/sample",children:"Careers"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont orangeHover",to:"/sample",children:"Press"}),Object(a.jsx)(j.a,{className:"smallFont row whiteFont orangeHover",to:"/sample",children:"Contact us"})]})]})]})},R=function(e){var t=e.displayContactForm,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)(""),d=Object(l.a)(o,2),j=d[0],h=d[1],b=Object(c.useState)(""),x=Object(l.a)(b,2),m=x[0],u=x[1],O=Object(c.useState)({}),p=Object(l.a)(O,2),v=p[0],g=p[1],w=Object(c.useState)(!1),f=Object(l.a)(w,2),y=f[0],N=f[1];return console.log("error: ",v),Object(a.jsx)("div",{className:"rowFlex rowCenterContent",children:Object(a.jsxs)("form",{className:"row",children:[Object(a.jsx)("div",{className:"rowFlex",children:Object(a.jsx)("input",{placeholder:"Company email",type:"email",name:"companyEmail",required:!0,error:v.companyEmail,onChange:function(e){i(e.target.value)}})}),v.companyEmail&&Object(a.jsx)("div",{className:"errorMsg redFont",children:v.companyEmail}),Object(a.jsx)("div",{className:"rowFlex",children:Object(a.jsx)("input",{placeholder:"Type of organization",type:"text",name:"organizationType",error:v.typeOfOrg,onChange:function(e){h(e.target.value)}})}),v.typeOfOrg&&Object(a.jsx)("div",{className:"errorMsg redFont",children:v.typeOfOrg}),Object(a.jsxs)("div",{className:"rowFlex rowSpaceBetweenContent",children:[Object(a.jsx)("label",{children:"Organization location: "}),Object(a.jsxs)("select",{name:"states",required:!0,error:v.orgLocation,defaultValue:0,onChange:function(e){u(e.target.value)},children:[Object(a.jsx)("option",{value:"0",disabled:!0,children:"Please select"}),Object(a.jsx)("option",{value:"AL",children:"Alabama"}),Object(a.jsx)("option",{value:"AK",children:"Alaska"}),Object(a.jsx)("option",{value:"AZ",children:"Arizona"}),Object(a.jsx)("option",{value:"AR",children:"Arkansas"}),Object(a.jsx)("option",{value:"CA",children:"California"}),Object(a.jsx)("option",{value:"CO",children:"Colorado"}),Object(a.jsx)("option",{value:"CT",children:"Connecticut"}),Object(a.jsx)("option",{value:"DE",children:"Delaware"}),Object(a.jsx)("option",{value:"DC",children:"District Of Columbia"}),Object(a.jsx)("option",{value:"FL",children:"Florida"}),Object(a.jsx)("option",{value:"GA",children:"Georgia"}),Object(a.jsx)("option",{value:"HI",children:"Hawaii"}),Object(a.jsx)("option",{value:"ID",children:"Idaho"}),Object(a.jsx)("option",{value:"IL",children:"Illinois"}),Object(a.jsx)("option",{value:"IN",children:"Indiana"}),Object(a.jsx)("option",{value:"IA",children:"Iowa"}),Object(a.jsx)("option",{value:"KS",children:"Kansas"}),Object(a.jsx)("option",{value:"KY",children:"Kentucky"}),Object(a.jsx)("option",{value:"LA",children:"Louisiana"}),Object(a.jsx)("option",{value:"ME",children:"Maine"}),Object(a.jsx)("option",{value:"MD",children:"Maryland"}),Object(a.jsx)("option",{value:"MA",children:"Massachusetts"}),Object(a.jsx)("option",{value:"MI",children:"Michigan"}),Object(a.jsx)("option",{value:"MN",children:"Minnesota"}),Object(a.jsx)("option",{value:"MS",children:"Mississippi"}),Object(a.jsx)("option",{value:"MO",children:"Missouri"}),Object(a.jsx)("option",{value:"MT",children:"Montana"}),Object(a.jsx)("option",{value:"NE",children:"Nebraska"}),Object(a.jsx)("option",{value:"NV",children:"Nevada"}),Object(a.jsx)("option",{value:"NH",children:"New Hampshire"}),Object(a.jsx)("option",{value:"NJ",children:"New Jersey"}),Object(a.jsx)("option",{value:"NM",children:"New Mexico"}),Object(a.jsx)("option",{value:"NY",children:"New York"}),Object(a.jsx)("option",{value:"NC",children:"North Carolina"}),Object(a.jsx)("option",{value:"ND",children:"North Dakota"}),Object(a.jsx)("option",{value:"OH",children:"Ohio"}),Object(a.jsx)("option",{value:"OK",children:"Oklahoma"}),Object(a.jsx)("option",{value:"OR",children:"Oregon"}),Object(a.jsx)("option",{value:"PA",children:"Pennsylvania"}),Object(a.jsx)("option",{value:"RI",children:"Rhode Island"}),Object(a.jsx)("option",{value:"SC",children:"South Carolina"}),Object(a.jsx)("option",{value:"SD",children:"South Dakota"}),Object(a.jsx)("option",{value:"TN",children:"Tennessee"}),Object(a.jsx)("option",{value:"TX",children:"Texas"}),Object(a.jsx)("option",{value:"UT",children:"Utah"}),Object(a.jsx)("option",{value:"VT",children:"Vermont"}),Object(a.jsx)("option",{value:"VA",children:"Virginia"}),Object(a.jsx)("option",{value:"WA",children:"Washington"}),Object(a.jsx)("option",{value:"WV",children:"West Virginia"}),Object(a.jsx)("option",{value:"WI",children:"Wisconsin"}),Object(a.jsx)("option",{value:"WY",children:"Wyoming"})]})]}),v.orgLocation&&Object(a.jsx)("div",{className:"errorMsg redFont",children:v.orgLocation}),Object(a.jsxs)("div",{className:"rowFlex rowCenterContent",children:[Object(a.jsx)("button",{className:"demoButton",onClick:function(e){return function(e){e.preventDefault();var n={},a="This field is required",c="Please make a selection";0===r.length&&(n.companyEmail=a),0===j.length&&(n.typeOfOrg=a),0===m.length&&(n.orgLocation=c),g(n),0===Object.keys(n).length&&(N(!0),setTimeout((function(){t(!1)}),2500))}(e)},children:"Request a Demo"}),Object(a.jsx)("button",{type:"reset",onClick:function(){t(!1)},className:"cancelButton",children:"Cancel"})]}),y&&Object(a.jsx)("div",{className:"successMsg",children:"Thanks for your request! A member of our team will reach out to you soon!"})]})})},U=n.p+"static/media/coderImg.0b268af8.png",W=function(){return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),Object(a.jsxs)("div",{className:"sampleContainer p2 pb10",children:[Object(a.jsx)("div",{className:"rowFlex rowCenterContent",children:Object(a.jsx)("img",{id:"coderImg",src:U,height:"100%",alt:"Coder"})}),Object(a.jsx)("div",{className:"rowFlex rowCenterContent",children:Object(a.jsx)("p",{className:"centerText smallFont",children:"All the links in the home page are for demonstration purpose only and detail pages are not yet built. It can be done per your request."})}),Object(a.jsx)("div",{className:"rowFlex rowCenterContent",children:Object(a.jsx)(j.a,{to:"/",className:"smallFont blueFont bold",children:"Back to home page"})})]})};function z(){var e=Object(d.a)(["\n    margin: 0 auto;\n    max-width: 1200px;\n    padding: 0 0em 0em 0em;\n    background-image: ",";\n    @media only screen and (max-width: 768px) {\n      padding: 0;\n    }\n    @media only screen and (min-width: 769px) and (max-width: 900px) {\n      padding: 0;\n    }\n"]);return z=function(){return e},e}var V=h.a.div(z(),b.containerBg);var G=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=function(e){!0===e&!1===n?s(!0):!1===e&!0===n&&s(!1)};console.log("isShown_ContactForm: ",n);var i={displayContactForm:r},d={displayContactForm:r},h={displayContactForm:r};return Object(a.jsx)("div",{className:"externalBg pb10",children:Object(a.jsxs)(V,{className:"App",children:[Object(a.jsx)(F,Object(o.a)({},d)),Object(a.jsxs)(j.b,{children:[Object(a.jsx)(T,Object(o.a)(Object(o.a)({},i),{},{path:"/"})),Object(a.jsx)(W,{path:"/sample"})]}),n&&Object(a.jsx)(R,Object(o.a)({},h))]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),X()}},[[33,1,2]]]);
//# sourceMappingURL=main.445e943c.chunk.js.map