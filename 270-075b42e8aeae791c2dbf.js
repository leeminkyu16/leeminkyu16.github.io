(self.webpackChunkportfolio_website_frontend=self.webpackChunkportfolio_website_frontend||[]).push([[270],{806:function(e,t,n){"use strict";n.d(t,{w:function(){return a}}),e=n.hmd(e);var o=function(){this._tweens={},this._tweensAddedDuringUpdate={}};o.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(e=void 0!==e?e:a.now();0<n.length;){this._tweensAddedDuringUpdate={};for(var o=0;o<n.length;o++){var r=this._tweens[n[o]];r&&!1===r.update(e)&&(r._isPlaying=!1,t||delete this._tweens[n[o]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var r,i,a=new o;a.Group=o,a._nextId=0,a.nextId=function(){return a._nextId++},"undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?a.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?a.now=self.performance.now.bind(self.performance):void 0!==Date.now?a.now=Date.now:a.now=function(){return(new Date).getTime()},a.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=a.Easing.Linear.None,this._interpolationFunction=a.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||a,this._id=a.nextId()},a.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=Object.create(e),void 0!==t&&(this._duration=t),this},duration:function(e){return this._duration=e,this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==e?"string"==typeof e?a.now()+parseFloat(e):e:a.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}void 0!==this._object[t]&&(this._valuesStart[t]=this._object[t],this._valuesStart[t]instanceof Array==0&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,o;if(e<this._startTime)return!0;for(t in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=0===this._duration||1<n?1:n,o=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[t]){var r=this._valuesStart[t]||0,i=this._valuesEnd[t];i instanceof Array?this._object[t]=this._interpolationFunction(i,o):("string"==typeof i&&(i="+"===i.charAt(0)||"-"===i.charAt(0)?r+parseFloat(i):parseFloat(i)),"number"==typeof i&&(this._object[t]=r+(i-r)*o))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1!==n)return!0;if(0<this._repeat){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var a=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=a}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var l=0,s=this._chainedTweens.length;l<s;l++)this._chainedTweens[l].start(this._startTime+this._duration);return!1}},a.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((1+t)*e-t)*.5:.5*((e-=2)*e*((1+t)*e+t)+2)}},Bounce:{In:function(e){return 1-a.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*a.Easing.Bounce.In(2*e):.5*a.Easing.Bounce.Out(2*e-1)+.5}}},a.Interpolation={Linear:function(e,t){var n=e.length-1,o=n*t,r=Math.floor(o),i=a.Interpolation.Utils.Linear;return t<0?i(e[0],e[1],o):1<t?i(e[n],e[n-1],n-o):i(e[r],e[n<r+1?n:r+1],o-r)},Bezier:function(e,t){for(var n=0,o=e.length-1,r=Math.pow,i=a.Interpolation.Utils.Bernstein,l=0;l<=o;l++)n+=r(1-t,o-l)*r(t,l)*e[l]*i(o,l);return n},CatmullRom:function(e,t){var n=e.length-1,o=n*t,r=Math.floor(o),i=a.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(r=Math.floor(o=n*(1+t))),i(e[(r-1+n)%n],e[r],e[(r+1)%n],e[(r+2)%n],o-r)):t<0?e[0]-(i(e[0],e[0],e[1],e[1],-o)-e[0]):1<t?e[n]-(i(e[n],e[n],e[n-1],e[n-1],o-n)-e[n]):i(e[r?r-1:0],e[r],e[n<r+1?n:r+1],e[n<r+2?n:r+2],o-r)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=a.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(i=[1],function(e){var t=1;if(i[e])return i[e];for(var n=e;1<n;n--)t*=n;return i[e]=t}),CatmullRom:function(e,t,n,o,r){var i=.5*(n-e),a=.5*(o-t),l=r*r;return(2*t-2*n+i+a)*(r*l)+(-3*t+3*n-2*i-a)*l+i*r+t}}},r=void 0,"function"==typeof define&&n.amdO?define([],(function(){return a})):"object"==typeof exports?e.exports=a:void 0!==r&&(r.TWEEN=a)},9483:function(e,t,n){var o=n(4411),r=n(6330),i=TypeError;e.exports=function(e){if(o(e))return e;throw i(r(e)+" is not a constructor")}},8523:function(e,t,n){"use strict";var o=n(9662),r=TypeError,i=function(e){var t,n;this.promise=new e((function(e,o){if(void 0!==t||void 0!==n)throw r("Bad Promise constructor");t=e,n=o})),this.resolve=o(t),this.reject=o(n)};e.exports.f=function(e){return new i(e)}},2492:function(e,t,n){var o=n(7854);e.exports=o.Promise},9478:function(e,t,n){var o=n(9670),r=n(111),i=n(8523);e.exports=function(e,t){if(o(e),r(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},6707:function(e,t,n){var o=n(9670),r=n(9483),i=n(8554),a=n(5112)("species");e.exports=function(e,t){var n,l=o(e).constructor;return void 0===l||i(n=o(l)[a])?t:r(n)}},7727:function(e,t,n){"use strict";var o=n(2109),r=n(1913),i=n(2492),a=n(7293),l=n(5005),s=n(614),u=n(6707),c=n(9478),d=n(8052),p=i&&i.prototype;if(o({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,l("Promise")),n=s(e);return this.then(n?function(n){return c(t,e()).then((function(){return n}))}:e,n?function(n){return c(t,e()).then((function(){throw n}))}:e)}}),!r&&s(i)){var h=l("Promise").prototype.finally;p.finally!==h&&d(p,"finally",h,{unsafe:!0})}},2644:function(e){e.exports=[["C",'printf("Hello World");'],["C++",'std::cout << "Hello World";'],["COBOL",'DISPLAY "Hello World".    .'],["Scala",'printIn("Hello World")'],["MATLAB","disp('Hello World');"],["C#",'System.Console.WriteLine(\n  "Hello World"\n);'],["CoffeeScript","console.lof 'Hello World'"],["Delphi","WriteLn('Hello World');"],["Dart","print('Hello World');"],["Haskell",'main = putStrLn "Hello World"'],["Pascal","writeln ('Hello, world.');"],["Ruby","puts 'Hello World'"],["Python",'print("Hello World")'],["Assembly","db    'Hello World', 10, 0"],["R","cat('Hello World')"],["Swift","println('Hello World');"],["Kotlin",'println("Hello World")'],["PHP",'echo "Hello World";'],["Java",'System.out.println(\n  "Hello World"\n);'],["Go","println('Hello World\");"],["F#",'printfn "Hello World"'],["Lisp",'(print "Hello World")'],["JavaScript",'console.log("Hello World");'],["Algol",'BEGIN DISPLAY(\n  "Hello World"\n) \nEND.'],["Perl",'print "Hello World\\n";'],["TCL",'puts "Hello World"'],["TypeScript","console.log 'Hello World'"],["Fortran",'print *, "Hello World"'],["Bash",'echo "Hello World"'],["HTML","<h1>Hello World<h1>"],["1C-Enterprise",'Message("Hello, World!");'],["4D",'ALERT("Hello World!")'],["4Test",'print("Hello World!")'],["ABAP4","WRITE: 'Hello world'."],["ABC",'WRITE "Hello, World!" /'],["ACPI Source Language",'Store ("Hello World", Debug)'],["ACS",'print(s:"Hello World!");'],["Action!",'PrintE("Hello World!")'],["Actionscript (Flash 5)",'trace ("Hello World");'],["Ada",'Text_IO.Put_Line(\n  "Hello World!"\n);'],["Agda",'main = run\n  (putStrLn "Hello, World!")'],["Algol-60","OUTPUT(\n  4,'(''('Hello World!')',/')'\n)"],["Algol-68",'print(\n  ("Hello World!",newline)\n)'],["AMOS",'Print "Hello world!"'],["Andl","'Hello world!'"],["APC",'log ("Hello, world!\n");'],["AppleScript",'display dialog "Hello World"'],["Arena",'print("Hello World!");'],["LaTeX","\\begin{document}\nHello World!\n\\end{document}"],["Node.js","var sys = require('sys');\nsys.puts('Hello World');"]]},6462:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var o=n(7294),r=n(9405),i=n(3456),a=n(3144),l=n(5671),s=n(7326),u=n(136),c=n(6215),d=n(1120);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,d.Z)(e);if(t){var r=(0,d.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.Z)(this,n)}}var h={type:"change"},f={type:"start"},m={type:"end"},v=function(e){(0,u.Z)(n,e);var t=p(n);function n(e,o){var r,a,u,c,d,p,v;(0,l.Z)(this,n),r=t.call(this),void 0===o&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),o===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),r.object=e,r.domElement=o,r.domElement.style.touchAction="none",r.enabled=!0,r.target=new i.Pa4,r.minDistance=0,r.maxDistance=1/0,r.minZoom=0,r.maxZoom=1/0,r.minPolarAngle=0,r.maxPolarAngle=Math.PI,r.minAzimuthAngle=-1/0,r.maxAzimuthAngle=1/0,r.enableDamping=!1,r.dampingFactor=.05,r.enableZoom=!0,r.zoomSpeed=1,r.enableRotate=!0,r.rotateSpeed=1,r.enablePan=!0,r.panSpeed=1,r.screenSpacePanning=!0,r.keyPanSpeed=7,r.autoRotate=!1,r.autoRotateSpeed=2,r.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},r.mouseButtons={LEFT:i.RsA.ROTATE,MIDDLE:i.RsA.DOLLY,RIGHT:i.RsA.PAN},r.touches={ONE:i.QmN.ROTATE,TWO:i.QmN.DOLLY_PAN},r.target0=r.target.clone(),r.position0=r.object.position.clone(),r.zoom0=r.object.zoom,r._domElementKeyEvents=null,r.getPolarAngle=function(){return _.phi},r.getAzimuthalAngle=function(){return _.theta},r.getDistance=function(){return this.object.position.distanceTo(this.target)},r.listenToKeyEvents=function(e){e.addEventListener("keydown",ie),this._domElementKeyEvents=e},r.saveState=function(){y.target0.copy(y.target),y.position0.copy(y.object.position),y.zoom0=y.object.zoom},r.reset=function(){y.target.copy(y.target0),y.object.position.copy(y.position0),y.object.zoom=y.zoom0,y.object.updateProjectionMatrix(),y.dispatchEvent(h),y.update(),g=b.NONE},r.update=(a=new i.Pa4,u=(new i._fP).setFromUnitVectors(e.up,new i.Pa4(0,1,0)),c=u.clone().invert(),d=new i.Pa4,p=new i._fP,v=2*Math.PI,function(){var e=y.object.position;a.copy(e).sub(y.target),a.applyQuaternion(u),_.setFromVector3(a),y.autoRotate&&g===b.NONE&&W(2*Math.PI/60/60*y.autoRotateSpeed),y.enableDamping?(_.theta+=E.theta*y.dampingFactor,_.phi+=E.phi*y.dampingFactor):(_.theta+=E.theta,_.phi+=E.phi);var t=y.minAzimuthAngle,n=y.maxAzimuthAngle;return isFinite(t)&&isFinite(n)&&(t<-Math.PI?t+=v:t>Math.PI&&(t-=v),n<-Math.PI?n+=v:n>Math.PI&&(n-=v),_.theta=t<=n?Math.max(t,Math.min(n,_.theta)):_.theta>(t+n)/2?Math.max(t,_.theta):Math.min(n,_.theta)),_.phi=Math.max(y.minPolarAngle,Math.min(y.maxPolarAngle,_.phi)),_.makeSafe(),_.radius*=P,_.radius=Math.max(y.minDistance,Math.min(y.maxDistance,_.radius)),!0===y.enableDamping?y.target.addScaledVector(O,y.dampingFactor):y.target.add(O),a.setFromSpherical(_),a.applyQuaternion(c),e.copy(y.target).add(a),y.object.lookAt(y.target),!0===y.enableDamping?(E.theta*=1-y.dampingFactor,E.phi*=1-y.dampingFactor,O.multiplyScalar(1-y.dampingFactor)):(E.set(0,0,0),O.set(0,0,0)),P=1,!!(T||d.distanceToSquared(y.object.position)>w||8*(1-p.dot(y.object.quaternion))>w)&&(y.dispatchEvent(h),d.copy(y.object.position),p.copy(y.object.quaternion),T=!1,!0)}),r.dispose=function(){y.domElement.removeEventListener("contextmenu",ae),y.domElement.removeEventListener("pointerdown",ee),y.domElement.removeEventListener("pointercancel",oe),y.domElement.removeEventListener("wheel",re),y.domElement.removeEventListener("pointermove",te),y.domElement.removeEventListener("pointerup",ne),null!==y._domElementKeyEvents&&y._domElementKeyEvents.removeEventListener("keydown",ie)};var y=(0,s.Z)(r),b={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},g=b.NONE,w=1e-6,_=new i.$V,E=new i.$V,P=1,O=new i.Pa4,T=!1,S=new i.FM8,A=new i.FM8,M=new i.FM8,C=new i.FM8,I=new i.FM8,R=new i.FM8,x=new i.FM8,H=new i.FM8,j=new i.FM8,k=[],L={};function N(){return Math.pow(.95,y.zoomSpeed)}function W(e){E.theta-=e}function D(e){E.phi-=e}var Z,F=(Z=new i.Pa4,function(e,t){Z.setFromMatrixColumn(t,0),Z.multiplyScalar(-e),O.add(Z)}),Y=function(){var e=new i.Pa4;return function(t,n){!0===y.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(y.object.up,e)),e.multiplyScalar(t),O.add(e)}}(),z=function(){var e=new i.Pa4;return function(t,n){var o=y.domElement;if(y.object.isPerspectiveCamera){var r=y.object.position;e.copy(r).sub(y.target);var i=e.length();i*=Math.tan(y.object.fov/2*Math.PI/180),F(2*t*i/o.clientHeight,y.object.matrix),Y(2*n*i/o.clientHeight,y.object.matrix)}else y.object.isOrthographicCamera?(F(t*(y.object.right-y.object.left)/y.object.zoom/o.clientWidth,y.object.matrix),Y(n*(y.object.top-y.object.bottom)/y.object.zoom/o.clientHeight,y.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),y.enablePan=!1)}}();function U(e){y.object.isPerspectiveCamera?P/=e:y.object.isOrthographicCamera?(y.object.zoom=Math.max(y.minZoom,Math.min(y.maxZoom,y.object.zoom*e)),y.object.updateProjectionMatrix(),T=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),y.enableZoom=!1)}function B(e){y.object.isPerspectiveCamera?P*=e:y.object.isOrthographicCamera?(y.object.zoom=Math.max(y.minZoom,Math.min(y.maxZoom,y.object.zoom/e)),y.object.updateProjectionMatrix(),T=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),y.enableZoom=!1)}function X(e){S.set(e.clientX,e.clientY)}function G(e){C.set(e.clientX,e.clientY)}function q(){if(1===k.length)S.set(k[0].pageX,k[0].pageY);else{var e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);S.set(e,t)}}function K(){if(1===k.length)C.set(k[0].pageX,k[0].pageY);else{var e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);C.set(e,t)}}function Q(){var e=k[0].pageX-k[1].pageX,t=k[0].pageY-k[1].pageY,n=Math.sqrt(e*e+t*t);x.set(0,n)}function V(e){if(1==k.length)A.set(e.pageX,e.pageY);else{var t=ue(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);A.set(n,o)}M.subVectors(A,S).multiplyScalar(y.rotateSpeed);var r=y.domElement;W(2*Math.PI*M.x/r.clientHeight),D(2*Math.PI*M.y/r.clientHeight),S.copy(A)}function J(e){if(1===k.length)I.set(e.pageX,e.pageY);else{var t=ue(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);I.set(n,o)}R.subVectors(I,C).multiplyScalar(y.panSpeed),z(R.x,R.y),C.copy(I)}function $(e){var t=ue(e),n=e.pageX-t.x,o=e.pageY-t.y,r=Math.sqrt(n*n+o*o);H.set(0,r),j.set(0,Math.pow(H.y/x.y,y.zoomSpeed)),U(j.y),x.copy(H)}function ee(e){!1!==y.enabled&&(0===k.length&&(y.domElement.setPointerCapture(e.pointerId),y.domElement.addEventListener("pointermove",te),y.domElement.addEventListener("pointerup",ne)),function(e){k.push(e)}(e),"touch"===e.pointerType?function(e){switch(se(e),k.length){case 1:switch(y.touches.ONE){case i.QmN.ROTATE:if(!1===y.enableRotate)return;q(),g=b.TOUCH_ROTATE;break;case i.QmN.PAN:if(!1===y.enablePan)return;K(),g=b.TOUCH_PAN;break;default:g=b.NONE}break;case 2:switch(y.touches.TWO){case i.QmN.DOLLY_PAN:if(!1===y.enableZoom&&!1===y.enablePan)return;y.enableZoom&&Q(),y.enablePan&&K(),g=b.TOUCH_DOLLY_PAN;break;case i.QmN.DOLLY_ROTATE:if(!1===y.enableZoom&&!1===y.enableRotate)return;y.enableZoom&&Q(),y.enableRotate&&q(),g=b.TOUCH_DOLLY_ROTATE;break;default:g=b.NONE}break;default:g=b.NONE}g!==b.NONE&&y.dispatchEvent(f)}(e):function(e){var t;switch(e.button){case 0:t=y.mouseButtons.LEFT;break;case 1:t=y.mouseButtons.MIDDLE;break;case 2:t=y.mouseButtons.RIGHT;break;default:t=-1}switch(t){case i.RsA.DOLLY:if(!1===y.enableZoom)return;!function(e){x.set(e.clientX,e.clientY)}(e),g=b.DOLLY;break;case i.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===y.enablePan)return;G(e),g=b.PAN}else{if(!1===y.enableRotate)return;X(e),g=b.ROTATE}break;case i.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===y.enableRotate)return;X(e),g=b.ROTATE}else{if(!1===y.enablePan)return;G(e),g=b.PAN}break;default:g=b.NONE}g!==b.NONE&&y.dispatchEvent(f)}(e))}function te(e){!1!==y.enabled&&("touch"===e.pointerType?function(e){switch(se(e),g){case b.TOUCH_ROTATE:if(!1===y.enableRotate)return;V(e),y.update();break;case b.TOUCH_PAN:if(!1===y.enablePan)return;J(e),y.update();break;case b.TOUCH_DOLLY_PAN:if(!1===y.enableZoom&&!1===y.enablePan)return;!function(e){y.enableZoom&&$(e),y.enablePan&&J(e)}(e),y.update();break;case b.TOUCH_DOLLY_ROTATE:if(!1===y.enableZoom&&!1===y.enableRotate)return;!function(e){y.enableZoom&&$(e),y.enableRotate&&V(e)}(e),y.update();break;default:g=b.NONE}}(e):function(e){if(!1===y.enabled)return;switch(g){case b.ROTATE:if(!1===y.enableRotate)return;!function(e){A.set(e.clientX,e.clientY),M.subVectors(A,S).multiplyScalar(y.rotateSpeed);var t=y.domElement;W(2*Math.PI*M.x/t.clientHeight),D(2*Math.PI*M.y/t.clientHeight),S.copy(A),y.update()}(e);break;case b.DOLLY:if(!1===y.enableZoom)return;!function(e){H.set(e.clientX,e.clientY),j.subVectors(H,x),j.y>0?U(N()):j.y<0&&B(N()),x.copy(H),y.update()}(e);break;case b.PAN:if(!1===y.enablePan)return;!function(e){I.set(e.clientX,e.clientY),R.subVectors(I,C).multiplyScalar(y.panSpeed),z(R.x,R.y),C.copy(I),y.update()}(e)}}(e))}function ne(e){le(e),0===k.length&&(y.domElement.releasePointerCapture(e.pointerId),y.domElement.removeEventListener("pointermove",te),y.domElement.removeEventListener("pointerup",ne)),y.dispatchEvent(m),g=b.NONE}function oe(e){le(e)}function re(e){!1!==y.enabled&&!1!==y.enableZoom&&g===b.NONE&&(e.preventDefault(),y.dispatchEvent(f),function(e){e.deltaY<0?B(N()):e.deltaY>0&&U(N()),y.update()}(e),y.dispatchEvent(m))}function ie(e){!1!==y.enabled&&!1!==y.enablePan&&function(e){var t=!1;switch(e.code){case y.keys.UP:z(0,y.keyPanSpeed),t=!0;break;case y.keys.BOTTOM:z(0,-y.keyPanSpeed),t=!0;break;case y.keys.LEFT:z(y.keyPanSpeed,0),t=!0;break;case y.keys.RIGHT:z(-y.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),y.update())}(e)}function ae(e){!1!==y.enabled&&e.preventDefault()}function le(e){delete L[e.pointerId];for(var t=0;t<k.length;t++)if(k[t].pointerId==e.pointerId)return void k.splice(t,1)}function se(e){var t=L[e.pointerId];void 0===t&&(t=new i.FM8,L[e.pointerId]=t),t.set(e.pageX,e.pageY)}function ue(e){var t=e.pointerId===k[0].pointerId?k[1]:k[0];return L[t.pointerId]}return y.domElement.addEventListener("contextmenu",ae),y.domElement.addEventListener("pointerdown",ee),y.domElement.addEventListener("pointercancel",oe),y.domElement.addEventListener("wheel",re,{passive:!1}),r.update(),r}return(0,a.Z)(n)}(i.pBf),y=n(806),b=n(1752);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,d.Z)(e);if(t){var r=(0,d.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,c.Z)(this,n)}}var w=new i.Pa4,_=new i._fP,E=new i.Pa4,P=function(e){(0,u.Z)(n,e);var t=g(n);function n(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("div");return(0,l.Z)(this,n),(e=t.call(this)).element=o,e.element.style.position="absolute",e.element.style.pointerEvents="auto",e.element.style.userSelect="none",e.element.setAttribute("draggable",!1),e.addEventListener("removed",(function(){this.traverse((function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)}))})),e}return(0,a.Z)(n,[{key:"copy",value:function(e,t){return(0,b.Z)((0,d.Z)(n.prototype),"copy",this).call(this,e,t),this.element=e.element.cloneNode(!0),this}}]),n}(i.Tme);P.prototype.isCSS3DObject=!0,function(e){(0,u.Z)(n,e);var t=g(n);function n(e){var o;return(0,l.Z)(this,n),(o=t.call(this,e)).rotation2D=0,o}return(0,a.Z)(n,[{key:"copy",value:function(e,t){return(0,b.Z)((0,d.Z)(n.prototype),"copy",this).call(this,e,t),this.rotation2D=e.rotation2D,this}}]),n}(P).prototype.isCSS3DSprite=!0;var O=new i.yGw,T=new i.yGw,S=(0,a.Z)((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l.Z)(this,e);var n,o,r,i,a=this,s={camera:{fov:0,style:""},objects:new WeakMap},u=void 0!==t.element?t.element:document.createElement("div");u.style.overflow="hidden",this.domElement=u;var c=document.createElement("div");function d(e){return Math.abs(e)<1e-10?0:e}function p(e){var t=e.elements;return"matrix3d("+d(t[0])+","+d(-t[1])+","+d(t[2])+","+d(t[3])+","+d(t[4])+","+d(-t[5])+","+d(t[6])+","+d(t[7])+","+d(t[8])+","+d(-t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(-t[13])+","+d(t[14])+","+d(t[15])+")"}function h(e){var t=e.elements;return"translate(-50%,-50%)"+("matrix3d("+d(t[0])+","+d(t[1])+","+d(t[2])+","+d(t[3])+","+d(-t[4])+","+d(-t[5])+","+d(-t[6])+","+d(-t[7])+","+d(t[8])+","+d(t[9])+","+d(t[10])+","+d(t[11])+","+d(t[12])+","+d(t[13])+","+d(t[14])+","+d(t[15])+")")}function f(e,t,n,o){if(e.isCSS3DObject){var r=e.visible&&e.layers.test(n.layers);if(e.element.style.display=r?"":"none",r){var i;e.onBeforeRender(a,t,n),e.isCSS3DSprite?(O.copy(n.matrixWorldInverse),O.transpose(),0!==e.rotation2D&&O.multiply(T.makeRotationZ(e.rotation2D)),e.matrixWorld.decompose(w,_,E),O.setPosition(w),O.scale(E),O.elements[3]=0,O.elements[7]=0,O.elements[11]=0,O.elements[15]=1,i=h(O)):i=h(e.matrixWorld);var l=e.element,u=s.objects.get(e);if(void 0===u||u.style!==i){l.style.transform=i;var d={style:i};s.objects.set(e,d)}l.parentNode!==c&&c.appendChild(l),e.onAfterRender(a,t,n)}}for(var p=0,m=e.children.length;p<m;p++)f(e.children[p],t,n,o)}c.style.transformStyle="preserve-3d",c.style.pointerEvents="none",u.appendChild(c),this.getSize=function(){return{width:n,height:o}},this.render=function(e,t){var n,o,a=t.projectionMatrix.elements[5]*i;s.camera.fov!==a&&(u.style.perspective=t.isPerspectiveCamera?a+"px":"",s.camera.fov=a),!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),t.isOrthographicCamera&&(n=-(t.right+t.left)/2,o=(t.top+t.bottom)/2);var l=t.isOrthographicCamera?"scale("+a+")translate("+d(n)+"px,"+d(o)+"px)"+p(t.matrixWorldInverse):"translateZ("+a+"px)"+p(t.matrixWorldInverse),h=l+"translate("+r+"px,"+i+"px)";s.camera.style!==h&&(c.style.transform=h,s.camera.style=h),f(e,e,t,l)},this.setSize=function(e,t){r=(n=e)/2,i=(o=t)/2,u.style.width=e+"px",u.style.height=t+"px",c.style.width=e+"px",c.style.height=t+"px"}})),A=n(2644),M=n.n(A),C=n(1200),I=function(){var e=(0,o.useRef)(null),t=(0,r.oR)();return(0,o.useEffect)((function(){var n,o,r,a,l,s,u=e.current,c=[],d=((n={})[C.Z.SPHERE]=[],n[C.Z.HELIX]=[],n[C.Z.GRID]=[],n);function p(e,t){y.w.removeAll();for(var n=0;n<c.length;n++){var o=c[n],r=e[n];new y.w.Tween(o.position).to({x:r.position.x,y:r.position.y,z:r.position.z},Math.random()*t+t).easing(y.w.Easing.Exponential.InOut).start(),new y.w.Tween(o.rotation).to({x:r.rotation.x,y:r.rotation.y,z:r.rotation.z},Math.random()*t+t).easing(y.w.Easing.Exponential.InOut).start()}new y.w.Tween(this).to({},2*t).onUpdate(m).start()}function h(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),m()}function f(){requestAnimationFrame(f),y.w.update(),l.update()}function m(){a.render(o,r)}return function(){o=new i.xsS,(r=new i.cPb(60,window.innerWidth/window.innerHeight,1,1e3)).position.z=2e3;for(var e=0;e<M().length;e+=1){var n=document.createElement("div");n.className="background-card",n.style.backgroundColor="rgba(65,105,225,"+(.5*Math.random()+.25)+")";var y=document.createElement("div");y.className="lang",y.textContent=M()[e][0],n.appendChild(y);var b=document.createElement("pre"),g=document.createElement("code");b.className="code",g.textContent=M()[e][1],b.appendChild(g),n.appendChild(b);var w=new P(n);w.position.x=4e3*Math.random()-2e3,w.position.y=4e3*Math.random()-2e3,w.position.z=4e3*Math.random()-2e3,o.add(w),c.push(w)}for(var _=new i.Pa4,E=0,O=c.length;E<O;E++){var T=Math.acos(2*E/O-1),A=Math.sqrt(O*Math.PI)*T,I=new i.Tme;I.position.setFromSphericalCoords(800,T,A),_.copy(I.position).multiplyScalar(2),I.lookAt(_),d[C.Z.SPHERE].push(I)}for(var R=0,x=c.length;R<x;R++){var H=.35*R+Math.PI,j=-12*R+300,k=new i.Tme;k.position.setFromCylindricalCoords(900,H,j),_.x=2*k.position.x,_.y=k.position.y,_.z=2*k.position.z,k.lookAt(_),d[C.Z.HELIX].push(k)}for(var L=0;L<c.length;L++){var N=new i.Tme;N.position.x=L%5*400-800,N.position.y=-Math.floor(L/5)%5*400+800,N.position.z=1e3*Math.floor(L/25),d[C.Z.GRID].push(N)}(a=new S).setSize(window.innerWidth,window.innerHeight),null!==u&&u.appendChild(a.domElement),window.addEventListener("resize",h,!1),(l=new v(r,a.domElement)).minDistance=500,l.maxDistance=6e3,l.enablePan=!1,l.autoRotate=!0,l.addEventListener("change",m),p(d.sphere,2e3);var W=C.Z.SPHERE;s=t.subscribe((function(){var e=t.getState();e.settingsReducer.backgroundShape!==W&&(W=e.settingsReducer.backgroundShape,p(d[W],2e3)),l.autoRotate=e.settingsReducer.backgroundAutoRotate})),f()}(),s}),[t]),o.createElement(o.Fragment,null,o.createElement("div",{className:"background-div",ref:e}))}},5861:function(e,t,n){"use strict";function o(e,t,n,o,r,i,a){try{var l=e[i](a),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function l(e){o(a,r,i,l,s,"next",e)}function s(e){o(a,r,i,l,s,"throw",e)}l(void 0)}))}}n.d(t,{Z:function(){return r}})},5671:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return o}})},3144:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return r}})},4942:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return o}})},1752:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1120);function r(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=(0,o.Z)(e)););return e}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=r(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},i.apply(this,arguments)}},1120:function(e,t,n){"use strict";function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}n.d(t,{Z:function(){return o}})},136:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(9611);function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,o.Z)(e,t)}},6215:function(e,t,n){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n.d(t,{Z:function(){return i}});var r=n(7326);function i(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}},885:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var o=n(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(s){l=!0,r=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=270-075b42e8aeae791c2dbf.js.map