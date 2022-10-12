!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"renderEvent",(function(){return d})),a.d(t,"today",(function(){return s})),a.d(t,"renderDay",(function(){return c})),a.d(t,"renderView",(function(){return u})),a.d(t,"eventRepositioned",(function(){return f})),a.d(t,"eventDateChange",(function(){return p})),a.d(t,"eventDurationChange",(function(){return m})),a.d(t,"eventClick",(function(){return v})),a.d(t,"getDayViewLink",(function(){return h})),a.d(t,"getEvents",(function(){return y})),a.d(t,"closeAllQTips",(function(){return b})),a.d(t,"enableQTips",(function(){return C})),a.d(t,"getSpinner",(function(){return g}));var n=a(1);function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var o=$("#solspace-calendar"),l=null,d=function(e,t){if(e.allDay&&t.addClass("fc-event-all-day"),e.end){if(e.multiDay||e.allDay)t.addClass("fc-event-multi-day");else{t.addClass("fc-event-single-day");var a=$("<span />").addClass("fc-color-icon").css("background-color",e.backgroundColor).css("border-color",e.borderColor);$(".fc-content",t).prepend(a)}e.enabled||t.addClass("fc-event-disabled"),t.addClass("fc-color-"+e.textColor);var r=o.data(),i=r.timeFormat,l=r.isMultiSite;Object(n.buildEventPopup)(e,t,i,void 0!==l)}},s=new moment,c=function(e,t){var a=t.parents(".fc-bg:first").siblings(".fc-content-skeleton").find("thead > tr > td:eq("+t.index()+")"),n=h(e),r=$("<a />").attr("href",n).html(a.html());a.html(r)},u=function(e,t){var a=t.parents("#solspace-calendar"),n=new moment(a.data("current-day"));"agendaWeek"===e.name&&$(".fc-day-header.fc-widget-header",t).each((function(){var e=$(this).html(),t=e.split(" ");e=t[0]+" <span>"+t[1]+"</span>";var a=new moment($(this).data("date")),r=h(a),i=$("<a />").attr("href",r).html(e);n.format("YYYYMMDD")===a.format("YYYYMMDD")&&i.addClass("fc-title-today"),$(this).html(i)}));$(".fc-localeButton-button",o).addClass("menubtn btn"),"agendaDay"===e.name&&$("thead.fc-head",t).remove()},f=function(e,t,a,n){var r,i,o;$.ajax({url:Craft.getCpUrl("calendar/events/api/modify-"+e),type:"post",dataType:"json",data:(r={eventId:t.id,siteId:t.site.id,isAllDay:t.allDay,startDate:t.start.toISOString(),endDate:t.end?t.end.toISOString():null,deltaSeconds:a.as("seconds")},i=Craft.csrfTokenName,o=Craft.csrfTokenValue,i in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,r),success:function(e){e.error?n():t.repeats&&$calendar.fullCalendar("refetchEvents")},error:function(){n()}})},p=function(e,t,a){f("date",e,t,a)},m=function(e,t,a){f("duration",e,t,a)},v=function(e){window.location.href=Craft.getCpUrl("calendar/events/"+e.id+"/"+e.site.handle)},h=function(e){if(e.isValid()){var t=e.format("YYYY"),a=e.format("MM"),n=e.format("DD");return Craft.getCpUrl("calendar/view/day/"+t+"/"+a+"/"+n)}return""},y=function(e,t,a,n){g().fadeIn("fast");var i=$("#solspace-calendar").data().currentSiteId,o=$("form.calendar-filters"),l=[].concat(r(o.serializeArray()),[{name:"rangeStart",value:e.toISOString()},{name:"rangeEnd",value:t.toISOString()},{name:"siteId",value:i}]);$.ajax({url:Craft.getCpUrl("calendar/month"),data:$.param(l),type:"post",dataType:"json",success:function(e){for(var t=0;t<e.length;t++){var a=e[t];a.allDay&&(e[t].end=moment(a.end).add(2,"s").utc().format())}n(e),g().fadeOut("fast")}})},b=function(){window.qTipsEnabled=!1,$("div.qtip:visible").qtip("hide")},C=function(){window.qTipsEnabled=!0},g=function(){return l||(o.find(".fc-right").prepend('<div id="solspace-calendar-spinner" class="spinner" style="display: none;"></div>'),l=$("#solspace-calendar-spinner")),l}},function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t),a.d(t,"showEventCreator",(function(){return o})),a.d(t,"buildEventPopup",(function(){return l})),a.d(t,"createDateAsUTC",(function(){return d}));var r=!1,i=$("#solspace-calendar"),o=function(e,t){r||(r=!0,$("<div />").qtip({content:{text:$("#event-creator"),title:Craft.t("calendar","New Event")},position:{my:"center",at:"center",target:$(window)},show:{ready:!0,modal:{on:!0,blur:!0}},hide:!1,style:{classes:"qtip-bootstrap dialogue",width:500},events:{render:function(a,r){var o=r.elements.content,l=i.data().currentSiteId;$("ul.errors",o).empty();var s=e.utc().format("HHmmss"),c=t.utc().format("HHmmss"),u=!1;s===c&&"000000"===c&&(t.subtract(1,"seconds"),u=!0);var f=d(e.toDate()),p=d(t.toDate()),m=$("#event-creator"),v=$('input[name="startDate[date]"]',m),h=$('input[name="startDate[time]"]',m),y=$('input[name="endDate[date]"]',m),b=$('input[name="endDate[time]"]',m);m.addClass("shown"),v.datepicker("setDate",f),y.datepicker("setDate",p),h.timepicker("setTime",f),b.timepicker("setTime",p);var C=$("input[name=allDay]"),g=C.parents(".lightswitch:first");$("input",g).val(u?1:""),u?(g.data("lightswitch").turnOn(),$(".timewrapper",m).hide()):(g.data("lightswitch").turnOff(),$(".timewrapper",m).show()),setTimeout((function(){$("input[name=title]:first",o).val("").focus().bind("keypress",(function(e){13===(e.which?e.which:e.keyCode)&&$("button.submit",o).trigger("click")}))}),100);var w=h.timepicker("option","timeFormat").replace("h","hh").replace("H","HH").replace("G","H").replace("g","h").replace("A","a").replace("i","mm");$("button.submit",o).unbind("click").click((function(e){var t=$(this),a=$("input[name=title]",o).val(),i=$("select[name=calendarId]",o).val(),d=moment(v.datepicker("getDate")),s=moment(h.val().replace(/(a|p)\.(m)\./gi,"$1$2"),w),c=moment(y.datepicker("getDate")),u=moment(b.val().replace(/(a|p)\.(m)\./gi,"$1$2"),w);t.prop("disabled",!0).addClass("disabled"),t.text(Craft.t("app","Saving...")),$.ajax({url:Craft.getCpUrl("calendar/events/api/create"),type:"post",dataType:"json",data:n({siteId:l,startDate:d.format("YYYY-MM-DD")+" "+s.format("HH:mm:ss"),endDate:c.format("YYYY-MM-DD")+" "+u.format("HH:mm:ss"),allDay:C.val(),event:{title:a,calendarId:i}},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(t){if(t.error)$("ul.errors",o).empty().append($("<li />",{text:t.error}));else if(t.event){var a=t.event;a.allDay&&(a.end=moment(a.end).add(2,"s").utc().format()),$("*[data-calendar-instance]").fullCalendar("renderEvent",a),$("*[data-calendar-instance]").fullCalendar("unselect"),r.hide(e)}},error:function(e){var t=e.responseJSON;Craft.cp.displayNotification("error",t.error)},complete:function(){t.prop("disabled",!1).removeClass("disabled"),t.text(Craft.t("app","Save"))}})})),$("button.delete",o).unbind("click").click((function(){r.hide()}))},hide:function(e,t){$("#event-creator").removeClass("shown").insertAfter($("#solspace-calendar")),$("*[data-calendar-instance]").fullCalendar("unselect"),r=!1,t.destroy()}}}))},l=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(e.calendar){var i=$("<div>",{class:"buttons"}),o=$("<div>"),l=$("<div>",{class:"calendar-data",html:'<span class="color-indicator" style="background-color: '+e.backgroundColor+';"></span> '+e.calendar.name}),d=moment(e.start),s=moment(e.end),c="dddd, MMMM D, YYYY";e.allDay?s.subtract(1,"days"):c=c+" [at] "+a;var u=$("<div>",{class:"event-date-range separator",html:'<div style="white-space: nowrap;"><label>'+Craft.t("calendar","Starts")+":</label> "+d.format(c)+'</div><div style="white-space: nowrap;"><label>'+Craft.t("calendar","Ends")+":</label> "+s.format(c)+"</div>"}),f="";e.repeats&&(f=$("<div>",{class:"event-repeats separator",html:'<div id="solspace-calendar-spinner" class="spinner"></div>'})),e.editable&&(i.append($("<a>",{class:"btn small submit",href:Craft.getCpUrl("calendar/events/"+e.id+(r?"/"+e.site.handle:"")),text:Craft.t("calendar","Edit")})),i.append($("<a>",{class:"btn small delete-event",href:Craft.getCpUrl("calendar/events/api/delete"),text:Craft.t("calendar","Delete"),data:{id:e.id}})),e.repeats&&i.append($("<a>",{class:"btn small delete-event-occurrence",href:Craft.getCpUrl("calendar/events/api/delete-occurrence"),text:Craft.t("calendar","Delete occurrence"),data:{id:e.id,date:e.start.toISOString()}}))),t.qtip({content:{title:e.title,button:!0,text:o.add(l).add(u).add(f).add(i)},style:{classes:"qtip-bootstrap qtip-event",tip:{width:30,height:15}},position:{my:"right center",at:"left center",adjust:{method:"shift flip"}},show:{solo:!0,delay:500},hide:{fixed:!0,delay:300},events:{show:function(t){window.qTipsEnabled||t.preventDefault(),e.repeats&&$.ajax({cache:!1,url:Craft.getCpUrl("calendar/events/api/first-occurrence-date"),type:"post",dataType:"json",data:n({eventId:e.id},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(e){e.success&&e.event&&e.event.hasOwnProperty("readableRepeatRule")&&$(".event-repeats").html("<label>"+Craft.t("calendar","Repeats")+":</label> "+e.event.readableRepeatRule)}})},render:function(t,a){$("a.delete-event-occurrence",a.elements.content).click((function(){var e=$(this).attr("href"),t=$(this).data("id"),r=$(this).data("date");return confirm(Craft.t("calendar","Are you sure?"))&&$.ajax({url:e,type:"post",dataType:"json",data:n({eventId:t,date:r},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(e){if(!e.error)return $("*[data-calendar-instance]").fullCalendar("refetchEvents"),void a.destroy();console.warn(e.error)}}),!1})),$("a.delete-event",a.elements.content).click((function(){var t=$(this).attr("href"),r=$(this).data("id");return confirm(Craft.t("calendar","Are you sure you want to delete this event?"))&&$.ajax({url:t,type:"post",dataType:"json",data:n({eventId:r},Craft.csrfTokenName,Craft.csrfTokenValue),success:function(t){if(!t.error)return $("*[data-calendar-instance]").fullCalendar("removeEvents",e.id),void a.destroy();console.warn(t.error)}}),!1}))}}})}},d=function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds())}}]);