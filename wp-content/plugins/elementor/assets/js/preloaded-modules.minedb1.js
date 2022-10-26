/*! elementor - v3.4.4 - 13-09-2021 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[882,723,209,745,120,192,520,181,791,268,357],{8470:(e,t,s)=>{"use strict";var i=s(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(9728));class Accordion extends n.default{getDefaultSettings(){return{...super.getDefaultSettings(),showTabFn:"slideDown",hideTabFn:"slideUp"}}}t.default=Accordion},9269:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Alert extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{dismissButton:".elementor-alert-dismiss"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$dismissButton:this.$element.find(e.dismissButton)}}bindEvents(){this.elements.$dismissButton.on("click",this.onDismissButtonClick.bind(this))}onDismissButtonClick(){this.$element.fadeOut()}}t.default=Alert},9728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class baseTabs extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{tablist:'[role="tablist"]',tabTitle:".elementor-tab-title",tabContent:".elementor-tab-content"},classes:{active:"elementor-active"},showTabFn:"show",hideTabFn:"hide",toggleSelf:!0,hidePrevious:!0,autoExpand:!0,keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?1:-1,ArrowUp:-1,ArrowRight:elementorFrontendConfig.is_rtl?-1:1,ArrowDown:1}}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent)}}activateDefaultTab(){const e=this.getSettings();if(!e.autoExpand||"editor"===e.autoExpand&&!this.isEdit)return;const t=this.getEditSettings("activeItemIndex")||1,s={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(s)}handleKeyboardNavigation(e){const t=e.currentTarget,s=jQuery(t.closest(this.getSettings("selectors").tablist)),i=s.find(this.getSettings("selectors").tabTitle),n="vertical"===s.attr("aria-orientation");switch(e.key){case"ArrowLeft":case"ArrowRight":if(n)return;break;case"ArrowUp":case"ArrowDown":if(!n)return;e.preventDefault();break;case"Home":return e.preventDefault(),void i.first().focus();case"End":return e.preventDefault(),void i.last().focus();default:return}const o=t.getAttribute("data-tab")-1,a=this.getSettings("keyDirection")[e.key],r=i[o+a];r?r.focus():-1===o+a?i.last().focus():i.first().focus()}deactivateActiveTab(e){const t=this.getSettings(),s=t.classes.active,i=e?'[data-tab="'+e+'"]':"."+s,n=this.elements.$tabTitles.filter(i),o=this.elements.$tabContents.filter(i);n.add(o).removeClass(s),n.attr({tabindex:"-1","aria-selected":"false","aria-expanded":"false"}),o[t.hideTabFn](),o.attr("hidden","hidden")}activateTab(e){const t=this.getSettings(),s=t.classes.active,i=this.elements.$tabTitles.filter('[data-tab="'+e+'"]'),n=this.elements.$tabContents.filter('[data-tab="'+e+'"]'),o="show"===t.showTabFn?0:400;i.add(n).addClass(s),i.attr({tabindex:"0","aria-selected":"true","aria-expanded":"true"}),n[t.showTabFn](o,(()=>elementorFrontend.elements.$window.trigger("resize"))),n.removeAttr("hidden")}isActiveTab(e){return this.elements.$tabTitles.filter('[data-tab="'+e+'"]').hasClass(this.getSettings("classes.active"))}bindEvents(){this.elements.$tabTitles.on({keydown:e=>{jQuery(e.target).is("a")&&"Enter"===e.key&&e.preventDefault(),["End","Home","ArrowUp","ArrowDown"].includes(e.key)&&this.handleKeyboardNavigation(e)},keyup:e=>{switch(e.key){case"ArrowLeft":case"ArrowRight":this.handleKeyboardNavigation(e);break;case"Enter":case"Space":e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"))}},click:e=>{e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"))}})}onInit(...e){super.onInit(...e),this.activateDefaultTab()}onEditSettingsChange(e){"activeItemIndex"===e&&this.activateDefaultTab()}changeActiveTab(e){const t=this.isActiveTab(e),s=this.getSettings();!s.toggleSelf&&t||!s.hidePrevious||this.deactivateActiveTab(),!s.hidePrevious&&t&&this.deactivateActiveTab(e),t||this.activateTab(e)}}t.default=baseTabs},7884:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Counter extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{counterNumber:".elementor-counter-number"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$counterNumber:this.$element.find(e.counterNumber)}}onInit(){super.onInit(),elementorFrontend.waypoint(this.elements.$counterNumber,(()=>{const e=this.elements.$counterNumber.data(),t=e.toValue.toString().match(/\.(.*)/);t&&(e.rounding=t[1].length),this.elements.$counterNumber.numerator(e)}))}}t.default=Counter},5914:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class ImageCarousel extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{selectors:{carousel:".elementor-image-carousel-wrapper",slideContent:".swiper-slide"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,s=1===t,i=elementorFrontend.config.responsive.activeBreakpoints,n={mobile:1,tablet:s?1:2},o={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let a=t;Object.keys(i).reverse().forEach((t=>{const s=n[t]?n[t]:a;o.breakpoints[i[t].value]={slidesPerView:+e["slides_to_show_"+t]||s,slidesPerGroup:+e["slides_to_scroll_"+t]||1},a=+e["slides_to_show_"+t]||s})),"yes"===e.autoplay&&(o.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),s?(o.effect=e.effect,"fade"===e.effect&&(o.fadeEffect={crossFade:!0})):o.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(o.spaceBetween=e.image_spacing_custom.size);const r="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation;return r&&(o.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(o.pagination={el:".swiper-pagination",type:"bullets",clickable:!0}),o}async onInit(...e){super.onInit(...e);const t=this.getElementSettings();if(!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const s=elementorFrontend.utils.swiper;this.swiper=await new s(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper),"yes"===t.pause_on_hover&&this.togglePauseOnHover(!0)}updateSwiperOption(e){const t=this.getElementSettings()[e],s=this.swiper.params;switch(e){case"image_spacing_custom":s.spaceBetween=t.size||0;break;case"autoplay_speed":s.autoplay.delay=t;break;case"speed":s.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",image_spacing_custom:"spaceBetween"}}onElementChange(e){if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}}t.default=ImageCarousel},1351:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Progress extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{progressNumber:".elementor-progress-bar"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$progressNumber:this.$element.find(e.progressNumber)}}onInit(){super.onInit(),elementorFrontend.waypoint(this.elements.$progressNumber,(()=>{const e=this.elements.$progressNumber;e.css("width",e.data("max")+"%")}))}}t.default=Progress},9459:(e,t,s)=>{"use strict";var i=s(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(9728));class Tabs extends n.default{getDefaultSettings(){return{...super.getDefaultSettings(),toggleSelf:!1}}}t.default=Tabs},1327:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class TextEditor extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{paragraph:"p:first"},classes:{dropCap:"elementor-drop-cap",dropCapLetter:"elementor-drop-cap-letter"}}}getDefaultElements(){const e=this.getSettings("selectors"),t=this.getSettings("classes"),s=jQuery("<span>",{class:t.dropCap}),i=jQuery("<span>",{class:t.dropCapLetter});return s.append(i),{$paragraph:this.$element.find(e.paragraph),$dropCap:s,$dropCapLetter:i}}wrapDropCap(){if(!this.getElementSettings("drop_cap"))return void(this.dropCapLetter&&(this.elements.$dropCap.remove(),this.elements.$paragraph.prepend(this.dropCapLetter),this.dropCapLetter=""));const e=this.elements.$paragraph;if(!e.length)return;const t=e.html().replace(/&nbsp;/g," "),s=t.match(/^ *([^ ] ?)/);if(!s)return;const i=s[1],n=i.trim();if("<"===n)return;this.dropCapLetter=i,this.elements.$dropCapLetter.text(n);const o=t.slice(i.length).replace(/^ */,(e=>new Array(e.length+1).join("&nbsp;")));e.html(o).prepend(this.elements.$dropCap)}onInit(...e){super.onInit(...e),this.wrapDropCap()}onElementChange(e){"drop_cap"===e&&this.wrapDropCap()}}t.default=TextEditor},2:(e,t,s)=>{"use strict";var i=s(7914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(s(9728));class Toggle extends n.default{getDefaultSettings(){return{...super.getDefaultSettings(),showTabFn:"slideDown",hideTabFn:"slideUp",hidePrevious:!1,autoExpand:"editor"}}}t.default=Toggle},5363:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Video extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{imageOverlay:".elementor-custom-embed-image-overlay",video:".elementor-video",videoIframe:".elementor-video-iframe"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$imageOverlay:this.$element.find(e.imageOverlay),$video:this.$element.find(e.video),$videoIframe:this.$element.find(e.videoIframe)}}handleVideo(){this.getElementSettings("lightbox")||("youtube"===this.getElementSettings("video_type")?this.apiProvider.onApiReady((e=>{this.elements.$imageOverlay.remove(),this.prepareYTVideo(e,!0)})):(this.elements.$imageOverlay.remove(),this.playVideo()))}playVideo(){if(this.elements.$video.length)return void(this.youtubePlayer?this.youtubePlayer.playVideo():this.elements.$video[0].play());const e=this.elements.$videoIframe,t=e.data("lazy-load");t&&e.attr("src",t),e[0].src=this.apiProvider.getAutoplayURL(e[0].src)}async animateVideo(){(await elementorFrontend.utils.lightbox).setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))}async handleAspectRatio(){(await elementorFrontend.utils.lightbox).setVideoAspectRatio(this.getElementSettings("aspect_ratio"))}async hideLightbox(){(await elementorFrontend.utils.lightbox).getModal().hide()}prepareYTVideo(e,t){const s=this.getElementSettings(),i={videoId:this.videoID,events:{onReady:()=>{s.mute&&this.youtubePlayer.mute(),(s.autoplay||t)&&this.youtubePlayer.playVideo()},onStateChange:t=>{t.data===e.PlayerState.ENDED&&s.loop&&this.youtubePlayer.seekTo(s.start||0)}},playerVars:{controls:s.controls?1:0,rel:s.rel?1:0,playsinline:s.play_on_mobile?1:0,modestbranding:s.modestbranding?1:0,autoplay:s.autoplay?1:0,start:s.start,end:s.end}};s.yt_privacy&&(i.host="https://www.youtube-nocookie.com",i.origin=window.location.hostname),this.youtubePlayer=new e.Player(this.elements.$video[0],i)}bindEvents(){this.elements.$imageOverlay.on("click",this.handleVideo.bind(this))}onInit(){super.onInit();const e=this.getElementSettings();if(elementorFrontend.utils[e.video_type]?this.apiProvider=elementorFrontend.utils[e.video_type]:this.apiProvider=elementorFrontend.utils.baseVideoLoader,"youtube"===e.video_type&&(this.videoID=this.apiProvider.getVideoIDFromURL(e.youtube_url),this.videoID&&(!e.show_image_overlay||!e.image_overlay.url)))return e.lazy_load?(this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport&&(this.intersectionObserver.unobserve(this.elements.$video.parent()[0]),this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))))}}),void this.intersectionObserver.observe(this.elements.$video.parent()[0])):void(elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading?this.apiProvider.onApiReady((e=>this.prepareYTVideo(e))):setTimeout((()=>{this.apiProvider.onApiReady((e=>this.prepareYTVideo(e)))}),0))}onElementChange(e){if(0===e.indexOf("lightbox_content_animation"))return void this.animateVideo();const t=this.getElementSettings("lightbox");"lightbox"!==e||t?"aspect_ratio"===e&&t&&this.handleAspectRatio():this.hideLightbox()}}t.default=Video},1210:(e,t,s)=>{"use strict";var i=s(7914),n=i(s(8470)),o=i(s(9269)),a=i(s(7884)),r=i(s(1351)),l=i(s(9459)),d=i(s(2)),c=i(s(5363)),h=i(s(5914)),u=i(s(1327)),p=i(s(3896));elementorFrontend.elements.$window.on("elementor/frontend/init",(()=>{elementorFrontend.elementsHandler.elementsHandlers={"accordion.default":n.default,"alert.default":o.default,"counter.default":a.default,"progress.default":r.default,"tabs.default":l.default,"toggle.default":d.default,"video.default":c.default,"image-carousel.default":h.default,"text-editor.default":u.default},elementorFrontend.on("components:init",(()=>{delete elementorFrontend.utils.lightbox,elementorFrontend.utils.lightbox=new p.default}))}))},3896:(e,t,s)=>{"use strict";var i=s(7914)(s(3251));e.exports=elementorModules.ViewModule.extend({oldAspectRatio:null,oldAnimation:null,swiper:null,player:null,getDefaultSettings:function(){return{classes:{aspectRatio:"elementor-aspect-ratio-%s",item:"elementor-lightbox-item",image:"elementor-lightbox-image",videoContainer:"elementor-video-container",videoWrapper:"elementor-fit-aspect-ratio",playButton:"elementor-custom-embed-play",playButtonIcon:"fa",playing:"elementor-playing",hidden:"elementor-hidden",invisible:"elementor-invisible",preventClose:"elementor-lightbox-prevent-close",slideshow:{container:"swiper-container",slidesWrapper:"swiper-wrapper",prevButton:"elementor-swiper-button elementor-swiper-button-prev",nextButton:"elementor-swiper-button elementor-swiper-button-next",prevButtonIcon:"eicon-chevron-left",nextButtonIcon:"eicon-chevron-right",slide:"swiper-slide",header:"elementor-slideshow__header",footer:"elementor-slideshow__footer",title:"elementor-slideshow__title",description:"elementor-slideshow__description",counter:"elementor-slideshow__counter",iconExpand:"eicon-frame-expand",iconShrink:"eicon-frame-minimize",iconZoomIn:"eicon-zoom-in-bold",iconZoomOut:"eicon-zoom-out-bold",iconShare:"eicon-share-arrow",shareMenu:"elementor-slideshow__share-menu",shareLinks:"elementor-slideshow__share-links",hideUiVisibility:"elementor-slideshow--ui-hidden",shareMode:"elementor-slideshow--share-mode",fullscreenMode:"elementor-slideshow--fullscreen-mode",zoomMode:"elementor-slideshow--zoom-mode"}},selectors:{image:".elementor-lightbox-image",links:"a, [data-elementor-lightbox]",slideshow:{activeSlide:".swiper-slide-active",prevSlide:".swiper-slide-prev",nextSlide:".swiper-slide-next"}},modalOptions:{id:"elementor-lightbox",entranceAnimation:"zoomIn",videoAspectRatio:169,position:{enable:!1}}}},getModal:function(){return e.exports.modal||this.initModal(),e.exports.modal},initModal:function(){const t=e.exports.modal=elementorFrontend.getDialogsManager().createWidget("lightbox",{className:"elementor-lightbox",closeButton:!0,closeButtonOptions:{iconClass:"eicon-close",attributes:{tabindex:0,role:"button","aria-label":elementorFrontend.config.i18n.close+" (Esc)"}},selectors:{preventClose:"."+this.getSettings("classes.preventClose")},hide:{onClick:!0}});t.on("hide",(function(){t.setMessage("")}))},showModal:function(e){if(e.url&&!e.url.startsWith("http"))return;this.elements.$closeButton=this.getModal().getElements("closeButton"),this.$buttons=this.elements.$closeButton,this.focusedButton=null;const t=this,s=t.getDefaultSettings().modalOptions;t.id=e.id,t.setSettings("modalOptions",jQuery.extend(s,e.modalOptions));const n=t.getModal();switch(n.setID(t.getSettings("modalOptions.id")),n.onShow=function(){DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(n,arguments),t.setEntranceAnimation()},n.onHide=function(){DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(n,arguments),n.getElements("message").removeClass("animated"),i.default.isFullscreen&&t.deactivateFullscreen(),t.unbindHotKeys()},e.type){case"video":t.setVideoContent(e);break;case"image":const s=[{image:e.url,index:0,title:e.title,description:e.description}];e.slideshow={slides:s,swiper:{loop:!1,pagination:!1}};case"slideshow":t.setSlideshowContent(e.slideshow);break;default:t.setHTMLContent(e.html)}n.show()},createLightbox:function(e){let t={};if(e.dataset.elementorLightbox&&(t=JSON.parse(e.dataset.elementorLightbox)),t.type&&"slideshow"!==t.type)return void this.showModal(t);if(!e.dataset.elementorLightboxSlideshow){const t="single-img";return void this.showModal({type:"image",id:t,url:e.href,title:e.dataset.elementorLightboxTitle,description:e.dataset.elementorLightboxDescription,modalOptions:{id:"elementor-lightbox-slideshow-"+t}})}const s=e.dataset.elementorLightboxVideo||e.href;this.openSlideshow(e.dataset.elementorLightboxSlideshow,s)},setHTMLContent:function(e){window.elementorCommon&&elementorCommon.helpers.hardDeprecated("elementorFrontend.utils.lightbox.setHTMLContent","3.1.4"),this.getModal().setMessage(e)},setVideoContent:function(e){const t=jQuery,s=this.getSettings("classes"),i=t("<div>",{class:`${s.videoContainer} ${s.preventClose}`}),n=t("<div>",{class:s.videoWrapper}),o=this.getModal();let a;if("hosted"===e.videoType){const s=t.extend({src:e.url,autoplay:""},e.videoParams);a=t("<video>",s)}else{let s=elementorFrontend.utils.baseVideoLoader;-1!==e.url.indexOf("vimeo.com")?s=elementorFrontend.utils.vimeo:e.url.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(s=elementorFrontend.utils.youtube),a=t("<iframe>",{src:s.getAutoplayURL(e.url),allowfullscreen:1})}i.append(n),n.append(a),o.setMessage(i),this.setVideoAspectRatio();const r=o.onHide;o.onHide=function(){r(),this.$buttons=jQuery(),this.focusedButton=null,o.getElements("message").removeClass("elementor-fit-aspect-ratio")}},getShareLinks:function(){const{i18n:e}=elementorFrontend.config,t={facebook:e.shareOnFacebook,twitter:e.shareOnTwitter,pinterest:e.pinIt},s=jQuery,i=this.getSettings("classes"),n=this.getSettings("selectors"),o=s("<div>",{class:i.slideshow.shareLinks}),a=this.getSlide("active"),r=a.find(n.image),l=a.data("elementor-slideshow-video");let d;return d=l||r.attr("src"),s.each(t,((e,t)=>{const i=s("<a>",{href:this.createShareLink(e,d),target:"_blank"}).text(t);i.prepend(s("<i>",{class:"eicon-"+e})),o.append(i)})),l||o.append(s("<a>",{href:d,download:""}).text(e.downloadImage).prepend(s("<i>",{class:"eicon-download-bold","aria-label":e.download}))),o},createShareLink:function(e,t){const s={};if("pinterest"===e)s.image=encodeURIComponent(t);else{const e=elementorFrontend.utils.urlActions.createActionHash("lightbox",{id:this.id,url:t});s.url=encodeURIComponent(location.href.replace(/#.*/,""))+e}return ShareLink.getNetworkLink(e,s)},getSlideshowHeader:function(){const{i18n:e}=elementorFrontend.config,t=jQuery,s="yes"===elementorFrontend.getKitSettings("lightbox_enable_counter"),i="yes"===elementorFrontend.getKitSettings("lightbox_enable_fullscreen"),n="yes"===elementorFrontend.getKitSettings("lightbox_enable_zoom"),o="yes"===elementorFrontend.getKitSettings("lightbox_enable_share"),a=this.getSettings("classes"),r=a.slideshow,l=this.elements;if(s||i||n||o){if(l.$header=t("<header>",{class:r.header+" "+a.preventClose}),o){l.$iconShare=t("<i>",{class:r.iconShare,role:"button","aria-label":e.share,"aria-expanded":!1}).append(t("<span>"));const s=t("<div>");s.on("click",(e=>{e.stopPropagation()})),l.$shareMenu=t("<div>",{class:r.shareMenu}).append(s),l.$iconShare.add(l.$shareMenu).on("click",this.toggleShareMenu),l.$header.append(l.$iconShare,l.$shareMenu),this.$buttons=this.$buttons.add(l.$iconShare)}return n&&(l.$iconZoom=t("<i>",{class:r.iconZoomIn,role:"switch","aria-checked":!1,"aria-label":e.zoom}),l.$iconZoom.on("click",this.toggleZoomMode),l.$header.append(l.$iconZoom),this.$buttons=this.$buttons.add(l.$iconZoom)),i&&(l.$iconExpand=t("<i>",{class:r.iconExpand,role:"switch","aria-checked":!1,"aria-label":e.fullscreen}).append(t("<span>"),t("<span>")),l.$iconExpand.on("click",this.toggleFullscreen),l.$header.append(l.$iconExpand),this.$buttons=this.$buttons.add(l.$iconExpand)),s&&(l.$counter=t("<span>",{class:r.counter}),l.$header.append(l.$counter)),l.$header}},toggleFullscreen:function(){i.default.isFullscreen?this.deactivateFullscreen():i.default.isEnabled&&this.activateFullscreen()},toggleZoomMode:function(){1!==this.swiper.zoom.scale?this.deactivateZoom():this.activateZoom()},toggleShareMenu:function(){this.shareMode?this.deactivateShareMode():(this.elements.$shareMenu.html(this.getShareLinks()),this.activateShareMode())},activateShareMode:function(){const e=this.getSettings("classes");this.elements.$container.addClass(e.slideshow.shareMode),this.elements.$iconShare.attr("aria-expanded",!0),this.swiper.detachEvents(),this.$originalButtons=this.$buttons,this.$buttons=this.elements.$iconShare.add(this.elements.$shareMenu.find("a")),this.shareMode=!0},deactivateShareMode:function(){const e=this.getSettings("classes");this.elements.$container.removeClass(e.slideshow.shareMode),this.elements.$iconShare.attr("aria-expanded",!1),this.swiper.attachEvents(),this.$buttons=this.$originalButtons,this.shareMode=!1},activateFullscreen:function(){const e=this.getSettings("classes");i.default.request(this.elements.$container.parents(".dialog-widget")[0]),this.elements.$iconExpand.removeClass(e.slideshow.iconExpand).addClass(e.slideshow.iconShrink).attr("aria-checked","true"),this.elements.$container.addClass(e.slideshow.fullscreenMode)},deactivateFullscreen:function(){const e=this.getSettings("classes");i.default.exit(),this.elements.$iconExpand.removeClass(e.slideshow.iconShrink).addClass(e.slideshow.iconExpand).attr("aria-checked","false"),this.elements.$container.removeClass(e.slideshow.fullscreenMode)},activateZoom:function(){const e=this.swiper,t=this.elements,s=this.getSettings("classes");e.zoom.in(),e.allowSlideNext=!1,e.allowSlidePrev=!1,e.allowTouchMove=!1,t.$container.addClass(s.slideshow.zoomMode),t.$iconZoom.removeClass(s.slideshow.iconZoomIn).addClass(s.slideshow.iconZoomOut)},deactivateZoom:function(){const e=this.swiper,t=this.elements,s=this.getSettings("classes");e.zoom.out(),e.allowSlideNext=!0,e.allowSlidePrev=!0,e.allowTouchMove=!0,t.$container.removeClass(s.slideshow.zoomMode),t.$iconZoom.removeClass(s.slideshow.iconZoomOut).addClass(s.slideshow.iconZoomIn)},getSlideshowFooter:function(){const e=jQuery,t=this.getSettings("classes"),s=e("<footer>",{class:t.slideshow.footer+" "+t.preventClose}),i=e("<div>",{class:t.slideshow.title}),n=e("<div>",{class:t.slideshow.description});return s.append(i,n),s},setSlideshowContent:function(e){const{i18n:t}=elementorFrontend.config,s=jQuery,i=1===e.slides.length,n=""!==elementorFrontend.getKitSettings("lightbox_title_src"),o=""!==elementorFrontend.getKitSettings("lightbox_description_src"),a=n||o,r=this.getSettings("classes"),l=r.slideshow,d=s("<div>",{class:l.container}),c=s("<div>",{class:l.slidesWrapper});let h,u;e.slides.forEach((e=>{let i=l.slide+" "+r.item;e.video&&(i+=" "+r.video);const n=s("<div>",{class:i});if(e.video){n.attr("data-elementor-slideshow-video",e.video);const i=s("<div>",{class:r.playButton}).html(s("<i>",{class:r.playButtonIcon,"aria-label":t.playVideo}));n.append(i)}else{const t=s("<div>",{class:"swiper-zoom-container"}),i=s('<div class="swiper-lazy-preloader"></div>'),o={"data-src":e.image,class:r.image+" "+r.preventClose+" swiper-lazy"};e.title&&(o["data-title"]=e.title,o.alt=e.title),e.description&&(o["data-description"]=e.description,o.alt+=" - "+e.description);const a=s("<img>",o);t.append([a,i]),n.append(t)}c.append(n)})),this.elements.$container=d,this.elements.$header=this.getSlideshowHeader(),d.prepend(this.elements.$header).append(c),i||(h=s("<div>",{class:l.prevButton+" "+r.preventClose,"aria-label":t.previous}).html(s("<i>",{class:l.prevButtonIcon})),u=s("<div>",{class:l.nextButton+" "+r.preventClose,"aria-label":t.next}).html(s("<i>",{class:l.nextButtonIcon})),d.append(u,h),this.$buttons=this.$buttons.add(u).add(h)),a&&(this.elements.$footer=this.getSlideshowFooter(),d.append(this.elements.$footer)),this.setSettings("hideUiTimeout",""),d.on("click mousemove keypress",this.showLightboxUi);const p=this.getModal();p.setMessage(d);const m=p.onShow;p.onShow=async()=>{m();const t={pagination:{el:"."+l.counter,type:"fraction"},on:{slideChangeTransitionEnd:this.onSlideChange},lazy:{loadPrevNext:!0},zoom:!0,spaceBetween:100,grabCursor:!0,runCallbacksOnInit:!1,loop:!0,keyboard:!0,handleElementorBreakpoints:!0};i||(t.navigation={prevEl:h,nextEl:u}),e.swiper&&s.extend(t,e.swiper);const n=elementorFrontend.utils.swiper;this.swiper=await new n(d,t),d.data("swiper",this.swiper),this.setVideoAspectRatio(),this.playSlideVideo(),a&&this.updateFooterText(),this.bindHotKeys(),this.makeButtonsAccessible()}},makeButtonsAccessible:function(){this.$buttons.attr("tabindex",0).on("keypress",(e=>{13!==e.which&&32!==e.which||jQuery(e.currentTarget).trigger("click")}))},showLightboxUi:function(){const e=this.getSettings("classes").slideshow;this.elements.$container.removeClass(e.hideUiVisibility),clearTimeout(this.getSettings("hideUiTimeout")),this.setSettings("hideUiTimeout",setTimeout((()=>{this.shareMode||this.elements.$container.addClass(e.hideUiVisibility)}),3500))},bindHotKeys:function(){this.getModal().getElements("window").on("keydown",this.activeKeyDown)},unbindHotKeys:function(){this.getModal().getElements("window").off("keydown",this.activeKeyDown)},activeKeyDown:function(e){this.showLightboxUi();if(9===e.which){const t=this.$buttons;let s,i=!1,n=!1;t.each((e=>{const o=t[e];if(jQuery(o).is(":focus"))return s=o,i=0===e,n=t.length-1===e,!1})),e.shiftKey?i&&(e.preventDefault(),t.last().trigger("focus")):!n&&s||(e.preventDefault(),t.first().trigger("focus"))}},setVideoAspectRatio:function(e){e=e||this.getSettings("modalOptions.videoAspectRatio");const t=this.getModal().getElements("widgetContent"),s=this.oldAspectRatio,i=this.getSettings("classes.aspectRatio");this.oldAspectRatio=e,s&&t.removeClass(i.replace("%s",s)),e&&t.addClass(i.replace("%s",e))},getSlide:function(e){return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow."+e+"Slide"))},updateFooterText:function(){if(!this.elements.$footer)return;const e=this.getSettings("classes"),t=this.getSlide("active").find(".elementor-lightbox-image"),s=t.data("title"),i=t.data("description"),n=this.elements.$footer.find("."+e.slideshow.title),o=this.elements.$footer.find("."+e.slideshow.description);n.text(s||""),o.text(i||"")},playSlideVideo:function(){const e=this.getSlide("active"),t=e.data("elementor-slideshow-video");if(!t)return;const s=this.getSettings("classes"),i=jQuery("<div>",{class:s.videoContainer+" "+s.invisible}),n=jQuery("<div>",{class:s.videoWrapper}),o=e.children("."+s.playButton);let a,r;i.append(n),e.append(i),-1!==t.indexOf("vimeo.com")?(a="vimeo",r=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(a="youtube",r=elementorFrontend.utils.youtube);const l=r.getVideoIDFromURL(t);r.onApiReady((e=>{"youtube"===a?this.prepareYTVideo(e,l,i,n,o):"vimeo"===a&&this.prepareVimeoVideo(e,l,i,n,o)})),o.addClass(s.playing).removeClass(s.hidden)},prepareYTVideo:function(e,t,s,i,n){const o=this.getSettings("classes"),a=jQuery("<div>");let r=e.PlayerState.PLAYING;i.append(a),window.chrome&&(r=e.PlayerState.UNSTARTED),s.addClass("elementor-loading "+o.invisible),this.player=new e.Player(a[0],{videoId:t,events:{onReady:()=>{n.addClass(o.hidden),s.removeClass(o.invisible),this.player.playVideo()},onStateChange:e=>{e.data===r&&s.removeClass("elementor-loading "+o.invisible)}},playerVars:{controls:0,rel:0}})},prepareVimeoVideo:function(e,t,s,i,n){const o=this.getSettings("classes"),a={id:t,autoplay:!0,transparent:!1,playsinline:!1};this.player=new e.Player(i,a),this.player.ready().then((()=>{n.addClass(o.hidden),s.removeClass(o.invisible)}))},setEntranceAnimation:function(e){e=e||elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"),"entranceAnimation");const t=this.getModal().getElements("message");this.oldAnimation&&t.removeClass(this.oldAnimation),this.oldAnimation=e,e&&t.addClass("animated "+e)},openSlideshow:function(e,t){const s=jQuery(this.getSettings("selectors.links")).filter(((t,s)=>{const i=jQuery(s);return e===s.dataset.elementorLightboxSlideshow&&!i.parent(".swiper-slide-duplicate").length&&!i.parents(".slick-cloned").length})),i=[];let n=0;s.each((function(){const e=this.dataset.elementorLightboxVideo;let o=this.dataset.elementorLightboxIndex;void 0===o&&(o=s.index(this)),(t===this.href||e&&t===e)&&(n=o);const a={image:this.href,index:o,title:this.dataset.elementorLightboxTitle,description:this.dataset.elementorLightboxDescription};e&&(a.video=e),i.push(a)})),i.sort(((e,t)=>e.index-t.index)),this.showModal({type:"slideshow",id:e,modalOptions:{id:"elementor-lightbox-slideshow-"+e},slideshow:{slides:i,swiper:{initialSlide:+n}}})},onSlideChange:function(){this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("."+this.getSettings("classes.videoWrapper")).remove(),this.playSlideVideo(),this.updateFooterText()}})},3251:e=>{"use strict";var t,s,i,n,o;t="undefined"!=typeof window&&void 0!==window.document?window.document:{},s=e.exports,i=function(){for(var e,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,n=s.length,o={};i<n;i++)if((e=s[i])&&e[1]in t){var a=e.length;for(i=0;i<a;i++)o[s[0][i]]=e[i];return o}return!1}(),n={change:i.fullscreenchange,error:i.fullscreenerror},o={request:function(e){return new Promise(function(s,n){var o=function(){this.off("change",o),s()}.bind(this);this.on("change",o),e=e||t.documentElement,Promise.resolve(e[i.requestFullscreen]()).catch(n)}.bind(this))},exit:function(){return new Promise(function(e,s){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);this.on("change",n),Promise.resolve(t[i.exitFullscreen]()).catch(s)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,s){var i=n[e];i&&t.addEventListener(i,s,!1)},off:function(e,s){var i=n[e];i&&t.removeEventListener(i,s,!1)},raw:i},i?(Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),s?e.exports=o:window.screenfull=o):s?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}},e=>{"use strict";e.O(0,[819,354],(()=>{return t=1210,e(e.s=t);var t}));e.O()}]);