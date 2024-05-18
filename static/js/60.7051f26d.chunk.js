"use strict";(self.webpackChunkFilmFinder_V1=self.webpackChunkFilmFinder_V1||[]).push([[60],{60:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,i,a,s,c,d,l,p=r(2791),x=r(4420),u=r(7694),g=r.n(u),m=function(n){return n.films.dayTopMovies},h=function(n){return n.films.weekTopMovies},f=function(n){return n.films.topRatedMovies},b=function(n){return n.films.error},v=r(4957),y=r(168),j=r(5867),Z=j.ZP.div(t||(t=(0,y.Z)(["\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #0d1117;\n  /* .header {\n    height: 60px;\n    display: flex;\n    align-items: center;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 10px;\n    margin-bottom: 25px;\n  }\n\n  .header-link {\n    padding: 20px;\n    text-decoration: none;\n    font-weight: 500;\n    color: black;\n    &:hover {\n      color: red;\n    }\n    &.active {\n      color: red;\n    }\n  } */\n\n  /* .back-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n    text-align: center;\n    text-decoration: none;\n    color: black;\n    width: 100px;\n    height: 40px;\n    border: 1px solid black;\n    border-radius: 10px;\n    &:hover {\n      color: red;\n      border: 1px solid red;\n    }\n  }\n  .movie-info-cover {\n    display: flex;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    border-radius: 10px;\n    margin-bottom: 25px;\n  }\n  .poster-image {\n    margin-right: 20px;\n    border-radius: 10px;\n  }\n\n  .details-link {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n    text-align: center;\n    text-decoration: none;\n    color: black;\n    width: 80px;\n    height: 40px;\n    border: 1px solid black;\n    border-radius: 10px;\n\n    &.active {\n      color: red;\n      border: 1px solid red;\n    }\n    &:hover {\n      color: red;\n      border: 1px solid red;\n    }\n  }\n\n  .bold {\n    font-weight: 700;\n  } */\n"]))),k=r(9439),w=r(7689),F=r(1087),P=r(7274),C=j.ZP.li(o||(o=(0,y.Z)(["\n  width: 184px;\n\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 8px;\n\n  .movie-title {\n    color: white;\n  }\n\n  .cover {\n    height: 100%;\n  }\n"]))),T=j.ZP.img(i||(i=(0,y.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 8px;\n  border-radius: 4px;\n"]))),M=j.ZP.span(a||(a=(0,y.Z)(["\n  font-size: 12px;\n  color: #ad9236;\n"]))),_=r(184),z=function(n){var e,r=n.movie,t=(0,w.TH)(),o=r.id,i=r.poster_path,a=r.title,s=r.release_date,c=r.genre_ids,d=c.map((function(n){switch(n){case 28:return"\u0411\u043e\u0439\u043e\u0432\u0438\u043a";case 12:return"\u041f\u0440\u0438\u0433\u043e\u0434\u0438";case 16:return"\u041c\u0443\u043b\u044c\u0442\u0444\u0456\u043b\u044c\u043c";case 35:return"\u041a\u043e\u043c\u0435\u0434\u0456\u044f";case 80:return"\u041a\u0440\u0438\u043c\u0456\u043d\u0430\u043b";case 99:return"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439";case 18:return"\u0414\u0440\u0430\u043c\u0430";case 10751:return"\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439";case 14:return"\u0424\u0435\u043d\u0442\u0435\u0437\u0456";case 36:return"\u0406\u0441\u0442\u043e\u0440\u0438\u0447\u043d\u0438\u0439";case 27:return"\u0416\u0430\u0445\u0438";case 10402:return"\u041c\u0443\u0437\u0438\u043a\u0430";case 9648:return"\u0414\u0435\u0442\u0435\u043a\u0442\u0438\u0432";case 10749:return"\u041c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430";case 878:return"\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430";case 10770:return"\u0422\u0435\u043b\u0435\u0444\u0456\u043b\u044c\u043c";case 53:return"\u0422\u0440\u0438\u043b\u0435\u0440";case 10752:return"\u0412\u0456\u0439\u0441\u044c\u043a\u043e\u0432\u0438\u0439";case 37:return"\u0412\u0435\u0441\u0442\u0435\u0440\u043d";default:return"\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0416\u0430\u043d\u0440"}}));return(0,_.jsx)(C,{children:(0,_.jsx)(F.rU,{state:{from:t},to:"/movies/".concat(o),className:"movie-title",children:(0,_.jsxs)("div",{className:"cover",children:[(0,_.jsx)(T,{src:P.fh+i,alt:a+" poster"}),(0,_.jsx)("p",{children:a}),(0,_.jsxs)("p",{children:[(0,_.jsxs)(M,{children:[(e=s,e.split("-")[0]),","]})," ",d.slice(0,2).map((function(n,e){return(0,_.jsxs)(M,{children:[n,e<d.length-1?",":""," "]},e)}))]})]})})},o)},N=j.ZP.ul(s||(s=(0,y.Z)(["\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),R=function(n){var e=n.topDayMovie;return(0,_.jsx)(N,{children:e.map((function(n){return(0,_.jsx)(z,{movie:n},n.id)}))})},V=j.ZP.div(c||(c=(0,y.Z)(["\n  padding-bottom: 34px;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n\n  border-bottom: 1px solid grey;\n"]))),D=j.ZP.p(d||(d=(0,y.Z)(["\n  font-size: 24px;\n  margin-bottom: 18px;\n"]))),E=j.ZP.button(l||(l=(0,y.Z)(["\n  display: block;\n  height: 35px;\n  margin-left: auto;\n\n  font-size: 16px;\n  color: gray;\n  background-color: transparent;\n\n  border: 2px solid #ad9236;\n  border-radius: 10px;\n\n  &:hover {\n    border: 2px solid yellow;\n    color: #ad9236;\n  }\n"]))),S=function(n){var e=n.moviesFromCategory,r=n.categoryTitle,t=(0,p.useState)(5),o=(0,k.Z)(t,2),i=o[0],a=o[1],s=(0,p.useState)(!1),c=(0,k.Z)(s,2),d=c[0],l=c[1];return(0,_.jsxs)(V,{children:[(0,_.jsx)(D,{children:r}),(0,_.jsx)(R,{topDayMovie:e.slice(0,i)}),(0,_.jsx)(E,{onClick:function(){a(d?5:e.length),l(!d)},children:d?"\u041f\u0440\u0438\u0445\u043e\u0432\u0430\u0442\u0438":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435"})]})},H=function(){var n=(0,x.v9)(m),e=(0,x.v9)(h),r=(0,x.v9)(f),t=(0,x.v9)(b),o=(0,x.I0)();return(0,p.useEffect)((function(){o((0,v.V8)()),o((0,v.dE)()),o((0,v.RR)())}),[o]),(0,_.jsx)("section",{children:(0,_.jsxs)(Z,{children:[t&&g().Notify.failure(t),(0,_.jsx)(S,{moviesFromCategory:n,categoryTitle:"\u0422\u043e\u043f \u0414\u043d\u044f"}),(0,_.jsx)(S,{moviesFromCategory:e,categoryTitle:"\u0422\u043e\u043f \u0422\u0438\u0436\u043d\u044f"}),(0,_.jsx)(S,{moviesFromCategory:r,categoryTitle:"\u041d\u0430\u0439\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0448\u0456"})]})})}}}]);
//# sourceMappingURL=60.7051f26d.chunk.js.map