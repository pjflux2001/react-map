(this["webpackJsonpreact-map"]=this["webpackJsonpreact-map"]||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(8),r=a.n(i),s=a(14),c=a(165),l=a(163),o=a(30),d=a.n(o),u=a(62),p=a(63),j=a.n(p),b=function(){var e=Object(u.a)(d.a.mark((function e(t,a,n){var i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://travel-advisor.p.rapidapi.com/".concat(t,"/list-in-boundary"),{params:{bl_latitude:a.lat,bl_longitude:a.lng,tr_longitude:n.lng,tr_latitude:n.lat},headers:{"x-rapidapi-key":"4a9c0e2f61mshd23619a69592ee9p1995a4jsncd10fdad13da","x-rapidapi-host":"travel-advisor.p.rapidapi.com"}});case 3:return i=e.sent,r=i.data.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t||!a){e.next=7;break}return e.next=4,j.a.get("https://community-open-weather-map.p.rapidapi.com/find",{params:{lat:t,lon:a},headers:{"x-rapidapi-key":"4a9c0e2f61mshd23619a69592ee9p1995a4jsncd10fdad13da","x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}});case 4:return n=e.sent,i=n.data,e.abrupt("return",i);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),m=a(84),g=a(153),f=a(154),x=a(155),O=a(167),y=a(168),v=a(79),w=a.n(v),C=a(16),k=a(151),T=a(13),N=Object(k.a)((function(e){return{title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),toolbar:{display:"flex",justifyContent:"space-between"}}})),S=a(5),I=function(e){var t=e.onPlaceChanged,a=e.onLoad,n=N();return Object(S.jsx)(g.a,{position:"static",children:Object(S.jsxs)(f.a,{className:n.toolbar,children:[Object(S.jsx)(x.a,{variant:"h5",className:n.title,children:"Travel Advisor"}),Object(S.jsxs)(O.a,{display:"flex",children:[Object(S.jsx)(x.a,{variant:"h6",className:n.title,children:"Explore new places"}),Object(S.jsx)(m.a,{onLoad:a,onPlaceChanged:t,children:Object(S.jsxs)("div",{className:n.search,children:[Object(S.jsx)("div",{className:n.searchIcon,children:Object(S.jsx)(w.a,{})}),Object(S.jsx)(y.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})]})})]})]})})},R=a(161),_=a(162),B=a(171),P=a(166),z=a(172),A=a(156),L=a(157),E=a(158),D=a(170),F=a(159),J=a(160),K=a(80),U=a.n(K),W=a(81),Z=a.n(W),G=a(169),H=Object(k.a)((function(){return{chip:{margin:"5px 5px 5px 0"},subtitle:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"10px"},spacing:{display:"flex",alignItems:"center",justifyContent:"space-between"}}})),M=function(e){var t,a,n,i=e.place,r=e.selected,s=e.refProp;r&&(null===s||void 0===s||null===(t=s.current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"start"}));var c=H();return Object(S.jsxs)(A.a,{elevation:6,children:[Object(S.jsx)(L.a,{style:{height:350},image:i.photo?i.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg",title:i.name}),Object(S.jsxs)(E.a,{children:[Object(S.jsx)(x.a,{gutterBottom:!0,variant:"h5",children:i.name}),Object(S.jsxs)(O.a,{display:"flex",justifyContent:"space-between",my:2,children:[Object(S.jsx)(G.a,{name:"read-only",value:Number(i.rating),readOnly:!0}),Object(S.jsxs)(x.a,{component:"legend",children:[i.num_reviews," review",i.num_reviews>1&&"s"]})]}),Object(S.jsxs)(O.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(x.a,{component:"legend",children:"Price"}),Object(S.jsx)(x.a,{gutterBottom:!0,variant:"subtitle1",children:i.price_level})]}),Object(S.jsxs)(O.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(x.a,{component:"legend",children:"Ranking"}),Object(S.jsx)(x.a,{gutterBottom:!0,variant:"subtitle1",children:i.ranking})]}),null===i||void 0===i||null===(a=i.awards)||void 0===a?void 0:a.map((function(e){return Object(S.jsxs)(O.a,{display:"flex",justifyContent:"space-between",my:1,alignItems:"center",children:[Object(S.jsx)("img",{src:e.images.small,alt:""}),Object(S.jsx)(x.a,{variant:"subtitle2",color:"textSecondary",children:e.display_name})]})})),null===i||void 0===i||null===(n=i.cuisine)||void 0===n?void 0:n.map((function(e){var t=e.name;return Object(S.jsx)(D.a,{size:"small",label:t,className:c.chip},t)})),i.address&&Object(S.jsxs)(x.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",className:c.subtitle,children:[Object(S.jsx)(U.a,{}),i.address]}),i.phone&&Object(S.jsxs)(x.a,{variant:"body2",color:"textSecondary",className:c.spacing,children:[Object(S.jsx)(Z.a,{})," ",i.phone]})]}),Object(S.jsxs)(F.a,{children:[Object(S.jsx)(J.a,{size:"small",color:"primary",onClick:function(){return window.open(i.web_url,"_blank")},children:"Trip Advisor"}),Object(S.jsx)(J.a,{size:"small",color:"primary",onClick:function(){return window.open(i.website,"_blank")},children:"Website"})]})]})},Q=Object(k.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,marginBottom:"30px"},selectEmpty:{marginTop:e.spacing(2)},loading:{height:"600px",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"25px"},marginBottom:{marginBottom:"30px"},list:{height:"75vh",overflow:"auto"}}})),V=function(e){var t=e.places,a=e.type,i=e.setType,r=e.rating,c=e.setRating,o=e.childClicked,d=e.isLoading,u=Object(n.useState)([]),p=Object(s.a)(u,2),j=p[0],b=p[1],h=Q();return Object(n.useEffect)((function(){b((function(e){return Array(t.length).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[t]),Object(S.jsxs)("div",{className:h.container,children:[Object(S.jsx)(x.a,{variant:"h4",children:"Food & Dining around you"}),d?Object(S.jsx)("div",{className:h.loading,children:Object(S.jsx)(R.a,{size:"5rem"})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(_.a,{className:h.formControl,children:[Object(S.jsx)(B.a,{id:"type",children:"Type"}),Object(S.jsxs)(P.a,{id:"type",value:a,onChange:function(e){return i(e.target.value)},children:[Object(S.jsx)(z.a,{value:"restaurants",children:"Restaurants"}),Object(S.jsx)(z.a,{value:"hotels",children:"Hotels"}),Object(S.jsx)(z.a,{value:"attractions",children:"Attractions"})]})]}),Object(S.jsxs)(_.a,{className:h.formControl,children:[Object(S.jsx)(B.a,{id:"rating",children:"Rating"}),Object(S.jsxs)(P.a,{id:"rating",value:r,onChange:function(e){return c(e.target.value)},children:[Object(S.jsx)(z.a,{value:"",children:"All"}),Object(S.jsx)(z.a,{value:"3",children:"Above 3.0"}),Object(S.jsx)(z.a,{value:"4",children:"Above 4.0"}),Object(S.jsx)(z.a,{value:"4.5",children:"Above 4.5"})]})]}),Object(S.jsx)(l.a,{container:!0,spacing:3,className:h.list,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(S.jsx)(l.a,{ref:j[t],item:!0,xs:12,children:Object(S.jsx)(M,{selected:Number(o)===t,refProp:j[t],place:e})},t)}))})]})]})},X=a(85),q=a(164),Y=a(87),$=a(83),ee=a.n($),te=[{featureType:"all",elementType:"all",stylers:[{saturation:"32"},{lightness:"-3"},{visibility:"on"},{weight:"1.18"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{saturation:"-70"},{lightness:"14"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{saturation:"100"},{lightness:"-14"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"},{lightness:"12"}]}],ae=Object(k.a)((function(){return{paper:{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",width:"100px"},mapContainer:{height:"85vh",width:"100%"},markerContainer:{position:"absolute",transform:"translate(-50%, -50%)",zIndex:1,"&:hover":{zIndex:2}},pointer:{cursor:"pointer"}}})),ne=function(e){var t,a=e.coords,n=e.places,i=e.setCoords,r=e.setBounds,s=e.setChildClicked,c=e.weatherData,l=Object(q.a)("(min-width:600px)"),o=ae();return Object(S.jsx)("div",{className:o.mapContainer,children:Object(S.jsxs)(X.a,{bootstrapURLKeys:{key:"AIzaSyAK9p6twrgP2sZGxlQCXDKd_J5zAOdcMFU"},defaultCenter:a,center:a,defaultZoom:14,margin:[50,50,50,50],options:{disableDefaultUI:!0,zoomControl:!0,styles:te},onChange:function(e){i({lat:e.center.lat,lng:e.center.lng}),r({ne:e.marginBounds.ne,sw:e.marginBounds.sw})},onChildClick:function(e){return s(e)},children:[n.length&&n.map((function(e,t){return Object(S.jsx)("div",{className:o.markerContainer,lat:Number(e.latitude),lng:Number(e.longitude),children:l?Object(S.jsxs)(Y.a,{elevation:3,className:o.paper,children:[Object(S.jsxs)(x.a,{className:o.typography,variant:"subtitle2",gutterBottom:!0,children:[" ",e.name]}),Object(S.jsx)("img",{alt:"",className:o.pointer,src:e.photo?e.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}),Object(S.jsx)(G.a,{name:"read-only",size:"small",value:Number(e.rating),readOnly:!0})]}):Object(S.jsx)(ee.a,{color:"primary",fontSize:"large"})},t)})),(null===c||void 0===c||null===(t=c.list)||void 0===t?void 0:t.length)&&c.list.map((function(e,t){return Object(S.jsx)("div",{lat:e.coord.lat,lng:e.coord.lon,children:Object(S.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),height:"70px",alt:""})},t)}))]})})},ie=function(){var e=Object(n.useState)("restaurants"),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),j=Object(s.a)(p,2),m=j[0],g=j[1],f=Object(n.useState)(null),x=Object(s.a)(f,2),O=x[0],y=x[1],v=Object(n.useState)([]),w=Object(s.a)(v,2),C=w[0],k=w[1],T=Object(n.useState)([]),N=Object(s.a)(T,2),R=N[0],_=N[1],B=Object(n.useState)([]),P=Object(s.a)(B,2),z=P[0],A=P[1],L=Object(n.useState)(null),E=Object(s.a)(L,2),D=E[0],F=E[1],J=Object(n.useState)(null),K=Object(s.a)(J,2),U=K[0],W=K[1],Z=Object(n.useState)(!1),G=Object(s.a)(Z,2),H=G[0],M=G[1];Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;g({lat:a,lng:n})}))}),[]),Object(n.useEffect)((function(){var e=z.filter((function(e){return Number(e.rating)>d}));_(e)}),[d,z]),Object(n.useEffect)((function(){O&&(M(!0),h(m.lat,m.lng).then((function(e){return k(e)})),b(a,O.sw,O.ne).then((function(e){A(e.filter((function(e){return e.name&&e.num_reviews>0}))),_([]),u(""),M(!1)})))}),[O,a,m.lat,m.lng]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(c.a,{}),Object(S.jsx)(I,{onPlaceChanged:function(){var e=D.getPlace().geometry.location.lat(),t=D.getPlace().geometry.location.lng();g({lat:e,lng:t})},onLoad:function(e){return F(e)}}),Object(S.jsxs)(l.a,{container:!0,spacing:3,style:{width:"100%"},children:[Object(S.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(S.jsx)(V,{isLoading:H,childClicked:U,places:R.length?R:z,type:a,setType:i,rating:d,setRating:u})}),Object(S.jsx)(l.a,{item:!0,xs:12,md:8,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(ne,{setChildClicked:W,setBounds:y,setCoords:g,coords:m,places:R.length?R:z,weatherData:C})})]})]})};r.a.render(Object(S.jsx)(ie,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.e0c44ae9.chunk.js.map