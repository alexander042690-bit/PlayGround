(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Yo="187",Yu=0,Rl=1,Ku=2,Ur=1,Bc=2,Ls=3,Pi=0,nn=1,Me=2,ns=0,is=1,fi=2,Cl=3,Pl=4,$u=5,ts=100,Zu=101,Ju=102,Qu=103,ju=104,th=200,eh=201,nh=202,ih=203,zc=204,Gc=205,sh=206,rh=207,ah=208,oh=209,lh=210,ch=211,uh=212,hh=213,dh=214,Qa=0,ja=1,to=2,Hs=3,eo=4,no=5,io=6,so=7,Hc=0,fh=1,ph=2,Yn=0,kc=1,Vc=2,Wc=3,Ko=4,Xc=5,qc=6,Yc=7,Kc=300,os=301,ks=302,Fr=303,_a=304,Vr=1e3,qn=1001,ro=1002,Ve=1003,mh=1004,or=1005,an=1006,xa=1007,ui=1008,hn=1009,$c=1010,Zc=1011,Vs=1012,$o=1013,Fn=1014,Tn=1015,On=1016,Zo=1017,Jo=1018,ls=1020,Jc=35902,Qc=35899,jc=1021,tu=1022,In=1023,pi=1026,hi=1027,Qo=1028,jo=1029,Li=1030,tl=1031,el=1033,Or=33776,Br=33777,zr=33778,Gr=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37488,mo=37489,Wr=37490,go=37491,_o=37808,xo=37809,vo=37810,Mo=37811,So=37812,yo=37813,Eo=37814,bo=37815,wo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Lo=36492,Do=36494,Io=36495,No=36283,Uo=36284,Xr=36285,Fo=36286,gh=3200,Oo=0,_h=1,ci="",en="srgb",qr="srgb-linear",Yr="linear",le="srgb",va=7680,xh=519,vh=512,Mh=513,Sh=514,eu=515,yh=516,Eh=517,nu=518,iu=519,su=35044,Ll="300 es",An=2e3,Ws=2001;function bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){const i=Kr("canvas");return i.style.display="block",i}const Dl={};function $r(...i){const t="THREE."+i.shift();console.log(t,...i)}function ru(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=ru(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=ru(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ss(...i){const t=i.join(" ");t in Dl||(Dl[t]=!0,kt(...i))}function Th(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ah={[Qa]:Qa,[to]:io,[eo]:eo,[Hs]:no,[ja]:ja,[io]:to,[so]:so,[no]:Hs};class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const Ns=Math.PI/180,cs=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function nl(i,t){return(i%t+t)%t}function Rh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ch(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function Ph(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function Lh(i,t=1){return t-Math.abs(nl(i,t*2)-t)}function Dh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ih(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uh(i,t){return i+Math.random()*(t-i)}function Fh(i){return i*(.5-Math.random())}function Oh(i){i!==void 0&&(Il=i);let t=Il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bh(i){return i*Ns}function zh(i){return i*cs}function Gh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function au(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*u,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function na(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function il(i,t){if(t.constructor===Float32Array)return i;const e=na(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sl(i,t){if(t.constructor===Float32Array)return i;const e=na(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Bo={DEG2RAD:Ns,RAD2DEG:cs,generateUUID:gi,clamp:Zt,euclideanModulo:nl,mapLinear:Rh,inverseLerp:Ch,lerp:Us,damp:Ph,pingpong:Lh,smoothstep:Dh,smootherstep:Ih,randInt:Nh,randFloat:Uh,randFloatSpread:Fh,seededRandom:Oh,degToRad:Bh,radToDeg:zh,isPowerOfTwo:Gh,ceilPowerOfTwo:Hh,floorPowerOfTwo:au,setQuaternionFromProperEuler:kh,normalize:sl,denormalize:il},El=class El{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};El.prototype.isVector2=!0;let Rt=El;class xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==f||u!==_){let m=l*h+c*f+u*_+d*S;m<0&&(h=-h,f=-f,_=-_,S=-S,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),A=Math.sin(v);p=Math.sin(p*v)/A,o=Math.sin(o*v)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+_*o,d=d*p+S*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+_*o,d=d*p+S*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*f-c*h,t[e+1]=l*_+u*h+c*d-o*f,t[e+2]=c*_+u*f+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bl=class bl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bl.prototype.isVector3=!0;let L=bl;const Ma=new L,Nl=new xn,wl=class wl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],S=s[0],m=s[3],p=s[6],v=s[1],A=s[4],E=s[7],P=s[2],C=s[5],g=s[8];return r[0]=a*S+o*v+l*P,r[3]=a*m+o*A+l*C,r[6]=a*p+o*E+l*g,r[1]=c*S+u*v+d*P,r[4]=c*m+u*A+d*C,r[7]=c*p+u*E+d*g,r[2]=h*S+f*v+_*P,r[5]=h*m+f*A+_*C,r[8]=h*p+f*E+_*g,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,_=e*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;let Xt=wl;const Sa=new Xt,Ul=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){const i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const Qt=Vh();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class Wh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Kr("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xh=0;class rl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let qh=0;const Ea=new L;class Ze extends Ii{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=qn,s=qn,r=an,a=ui,o=In,l=hn,c=Ze.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=gi(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Kc;Ze.DEFAULT_ANISOTROPY=1;const Tl=class Tl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,E=(f+1)/2,P=(p+1)/2,C=(u+h)/4,g=(d+S)/4,y=(_+m)/4;return A>E&&A>P?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=g/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=y/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=g/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-S)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;let Se=Tl;class Yh extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ze({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new rl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ea=class ea{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,_,S,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,_,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,_=c*u,S=c*d;e[0]=h+S*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,_=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=_*c-f,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=_*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+_,e[10]=h-S*d}else if(t.order==="XZY"){const h=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Zh)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ni.crossVectors(n,ln),ni.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ni.crossVectors(n,ln)),ni.normalize(),lr.crossVectors(ln,ni),s[0]=ni.x,s[4]=lr.x,s[8]=ln.x,s[1]=ni.y,s[5]=lr.y,s[9]=ln.y,s[2]=ni.z,s[6]=lr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],S=n[6],m=n[10],p=n[14],v=n[3],A=n[7],E=n[11],P=n[15],C=s[0],g=s[4],y=s[8],U=s[12],D=s[1],B=s[5],G=s[9],X=s[13],F=s[2],H=s[6],q=s[10],k=s[14],ot=s[3],Y=s[7],et=s[11],rt=s[15];return r[0]=a*C+o*D+l*F+c*ot,r[4]=a*g+o*B+l*H+c*Y,r[8]=a*y+o*G+l*q+c*et,r[12]=a*U+o*X+l*k+c*rt,r[1]=u*C+d*D+h*F+f*ot,r[5]=u*g+d*B+h*H+f*Y,r[9]=u*y+d*G+h*q+f*et,r[13]=u*U+d*X+h*k+f*rt,r[2]=_*C+S*D+m*F+p*ot,r[6]=_*g+S*B+m*H+p*Y,r[10]=_*y+S*G+m*q+p*et,r[14]=_*U+S*X+m*k+p*rt,r[3]=v*C+A*D+E*F+P*ot,r[7]=v*g+A*B+E*H+P*Y,r[11]=v*y+A*G+E*q+P*et,r[15]=v*U+A*X+E*k+P*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],S=t[7],m=t[11],p=t[15],v=l*f-c*h,A=o*f-c*d,E=o*h-l*d,P=a*f-c*u,C=a*h-l*u,g=a*d-o*u;return e*(S*v-m*A+p*E)-n*(_*v-m*P+p*C)+s*(_*A-S*P+p*g)-r*(_*E-S*C+m*g)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],S=t[13],m=t[14],p=t[15],v=e*o-n*a,A=e*l-s*a,E=e*c-r*a,P=n*l-s*o,C=n*c-r*o,g=s*c-r*l,y=u*S-d*_,U=u*m-h*_,D=u*p-f*_,B=d*m-h*S,G=d*p-f*S,X=h*p-f*m,F=v*X-A*G+E*B+P*D-C*U+g*y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/F;return t[0]=(o*X-l*G+c*B)*H,t[1]=(s*G-n*X-r*B)*H,t[2]=(S*g-m*C+p*P)*H,t[3]=(h*C-d*g-f*P)*H,t[4]=(l*D-a*X-c*U)*H,t[5]=(e*X-s*D+r*U)*H,t[6]=(m*E-_*g-p*A)*H,t[7]=(u*g-h*E+f*A)*H,t[8]=(a*G-o*D+c*y)*H,t[9]=(n*D-e*G-r*y)*H,t[10]=(_*C-S*E+p*v)*H,t[11]=(d*E-u*C-f*v)*H,t[12]=(o*U-a*B-l*y)*H,t[13]=(e*B-n*U+s*y)*H,t[14]=(S*A-_*P-m*v)*H,t[15]=(u*P-d*A+h*v)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,_=r*d,S=a*u,m=a*d,p=o*d,v=l*c,A=l*u,E=l*d,P=n.x,C=n.y,g=n.z;return s[0]=(1-(S+p))*P,s[1]=(f+E)*P,s[2]=(_-A)*P,s[3]=0,s[4]=(f-E)*C,s[5]=(1-(h+p))*C,s[6]=(m+v)*C,s[7]=0,s[8]=(_+A)*g,s[9]=(m-v)*g,s[10]=(1-(h+S))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),l=Bi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);const c=1/a,u=1/o,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===An)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ws)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===An)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ws)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ea.prototype.isMatrix4=!0;let Jt=ea;const Bi=new L,Sn=new Jt,$h=new L(0,0,0),Zh=new L(1,1,1),ni=new L,lr=new L,ln=new L,Ol=new Jt,Bl=new xn;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jh=0;const zl=new L,zi=new xn,Hn=new Jt,cr=new L,_s=new L,Qh=new L,jh=new xn,Gl=new L(1,0,0),Hl=new L(0,1,0),kl=new L(0,0,1),Vl={type:"added"},td={type:"removed"},Gi={type:"childadded",child:null},ba={type:"childremoved",child:null};class Re extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new $n,n=new xn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Xt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(_s,cr,this.up):Hn.lookAt(cr,_s,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Hn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ce extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=nl(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ta(a,r,t+1/3),this.g=Ta(a,r,t),this.b=Ta(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Qt.workingToColorSpace(Ye.copy(this),t),Math.round(Zt(Ye.r*255,0,255))*65536+Math.round(Zt(Ye.g*255,0,255))*256+Math.round(Zt(Ye.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=en){Qt.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(ur);const n=Us(ii.h,ur.h,e),s=Us(ii.s,ur.s,e),r=Us(ii.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new qt;qt.NAMES=cu;class al{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new al(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nd extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new L,kn=new L,Aa=new L,Vn=new L,Hi=new L,ki=new L,Wl=new L,Ra=new L,Ca=new L,Pa=new L,La=new Se,Da=new Se,Ia=new Se;class vn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),kn.subVectors(n,e),Aa.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(kn),l=yn.dot(Aa),c=kn.dot(kn),u=kn.dot(Aa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return La.setScalar(0),Da.setScalar(0),Ia.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),kn.subVectors(t,e),yn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),yn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),ki.subVectors(r,n),Ra.subVectors(t,n);const l=Hi.dot(Ra),c=ki.dot(Ra);if(l<=0&&c<=0)return e.copy(n);Ca.subVectors(t,s);const u=Hi.dot(Ca),d=ki.dot(Ca);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Hi,a);Pa.subVectors(t,r);const f=Hi.dot(Pa),_=ki.dot(Pa);if(_>=0&&f<=_)return e.copy(r);const S=f*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ki,o);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Wl.subVectors(r,s),o=(d-u)/(d-u+(f-_)),e.copy(s).addScaledVector(Wl,o);const p=1/(m+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(Hi,a).addScaledVector(ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ni{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),dr.subVectors(this.max,xs),Vi.subVectors(t.a,xs),Wi.subVectors(t.b,xs),Xi.subVectors(t.c,xs),si.subVectors(Wi,Vi),ri.subVectors(Xi,Wi),yi.subVectors(Vi,Xi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-yi.z,yi.y,si.z,0,-si.x,ri.z,0,-ri.x,yi.z,0,-yi.x,-si.y,si.x,0,-ri.y,ri.x,0,-yi.y,yi.x,0];return!Na(e,Vi,Wi,Xi,dr)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Vi,Wi,Xi,dr))?!1:(fr.crossVectors(si,ri),e=[fr.x,fr.y,fr.z],Na(e,Vi,Wi,Xi,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,hr=new Ni,Vi=new L,Wi=new L,Xi=new L,si=new L,ri=new L,yi=new L,xs=new L,dr=new L,fr=new L,Ei=new L;function Na(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);const o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pe=new L,pr=new Rt;let id=0;class Un extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?na(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):il(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):sl(t,this.array)}}class uu extends Un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hu extends Un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Un{constructor(t,e,n){super(new Float32Array(t),e,n)}}const sd=new Ni,vs=new L,Ua=new L;class qs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ua)),this.expandByPoint(vs.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rd=0;const pn=new Jt,Fa=new Re,qi=new L,cn=new Ni,Ms=new Ni,Oe=new L;class De extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?hu:uu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(cn.min,Ms.min),cn.expandByPoint(Oe),Oe.addVectors(cn.max,Ms.max),cn.expandByPoint(Oe)):(cn.expandByPoint(Ms.min),cn.expandByPoint(Ms.max))}cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Oe.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Oe.add(qi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new L,l[U]=new L;const u=new L,d=new L,h=new L,f=new Rt,_=new Rt,S=new Rt,m=new L,p=new L;function v(U,D,B){c[U]=c[D]=c[B]=1,u.fromBufferAttribute(n,U),d.fromBufferAttribute(n,D),h.fromBufferAttribute(n,B),f.fromBufferAttribute(r,U),_.fromBufferAttribute(r,D),S.fromBufferAttribute(r,B),d.sub(u),h.sub(u),_.sub(f),S.sub(f);const G=1/(_.x*S.y-S.x*_.y);isFinite(G)&&(m.copy(d).multiplyScalar(S.y).addScaledVector(h,-_.y).multiplyScalar(G),p.copy(h).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(G),o[U].add(m),o[D].add(m),o[B].add(m),l[U].add(p),l[D].add(p),l[B].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,D=A.length;U<D;++U){const B=A[U],G=B.start,X=B.count;for(let F=G,H=G+X;F<H;F+=3)v(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new L,P=new L,C=new L,g=new L;function y(U){C.fromBufferAttribute(s,U),g.copy(C);const D=o[U];E.copy(D),E.sub(C.multiplyScalar(C.dot(D))).normalize(),P.crossVectors(g,D);const G=P.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,G)}for(let U=0,D=n.count;U<D;++U)c[U]&&y(U);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*u;for(let p=0;p<u;p++)h[_++]=c[f++]}return new Un(h,u,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ad{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Xl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Xl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Xl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const je=new L;class Zr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?na(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):il(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):sl(t,this.data.array)}}const Oa=new L,od=new L,ld=new Xt;class oi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oa.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Oa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let cd=0;class ds extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=is,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Gc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new oi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class as extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Ss=new L,Ki=new L,$i=new L,Zi=new Rt,ys=new Rt,du=new Jt,mr=new L,Es=new L,gr=new L,ql=new Rt,Ba=new Rt,Yl=new Rt;class Fs extends Re{constructor(t=new as){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new De;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ad(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Zr(n,3,0,!1)),Yi.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;_r(mr.set(-.5,-.5,0),$i,a,Ki,s,r),_r(Es.set(.5,-.5,0),$i,a,Ki,s,r),_r(gr.set(.5,.5,0),$i,a,Ki,s,r),ql.set(0,0),Ba.set(1,0),Yl.set(1,1);let o=t.ray.intersectTriangle(mr,Es,gr,!1,Ss);if(o===null&&(_r(Es.set(-.5,.5,0),$i,a,Ki,s,r),Ba.set(0,1),o=t.ray.intersectTriangle(mr,gr,Es,!1,Ss),o===null))return;const l=t.ray.origin.distanceTo(Ss);l<t.near||l>t.far||e.push({distance:l,point:Ss.clone(),uv:vn.getInterpolation(Ss,mr,Es,gr,ql,Ba,Yl,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function _r(i,t,e,n,s,r){Zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Zi.x-s*Zi.y,ys.y=s*Zi.x+r*Zi.y):ys.copy(Zi),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(du)}const Xn=new L,za=new L,xr=new L,vr=new L;class ud{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){za.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(za);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=vr.dot(this.direction),l=-vr.dot(xr),c=vr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(za).addScaledVector(xr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,A=n.z-a.z,E=Math.abs(l),P=Math.abs(c),C=Math.abs(u);let g,y,U,D,B,G,X,F,H,q,k,ot;if(E>=P&&E>=C?(U=l,G=d,H=_,ot=p,l>=0?(g=c,y=u,D=h,B=f,X=S,F=m,q=v,k=A):(g=u,y=c,D=f,B=h,X=m,F=S,q=A,k=v)):P>=C?(U=c,G=h,H=S,ot=v,c>=0?(g=u,y=l,D=f,B=d,X=m,F=_,q=A,k=p):(g=l,y=u,D=d,B=f,X=_,F=m,q=p,k=A)):(U=u,G=f,H=m,ot=A,u>=0?(g=l,y=c,D=d,B=h,X=_,F=S,q=p,k=v):(g=c,y=l,D=h,B=d,X=S,F=_,q=v,k=p)),U===0)return null;const Y=g/U,et=y/U,rt=1/U,bt=D-Y*G,Ft=B-et*G,K=X-Y*H,xt=F-et*H,Tt=q-Y*ot,Ut=k-et*ot,vt=Tt*xt-Ut*K,Vt=bt*Ut-Ft*Tt,_e=K*Ft-xt*bt;if(s){if(vt<0||Vt<0||_e<0)return null}else if((vt<0||Vt<0||_e<0)&&(vt>0||Vt>0||_e>0))return null;const zt=vt+Vt+_e;if(zt===0)return null;const ie=rt*(vt*G+Vt*H+_e*ot);return(zt>0?ie<0:ie>0)?null:this.at(ie/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kl=new Jt,bi=new ud,Mr=new qs,$l=new L,Sr=new L,yr=new L,Er=new L,Ga=new L,br=new L,Zl=new L,wr=new L;class mt extends Re{constructor(t=new De,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Ga.fromBufferAttribute(d,t),a?br.addScaledVector(Ga,u):br.addScaledVector(Ga.sub(e),u))}e.add(br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(Mr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Mr,$l)===null||bi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Kl.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,P=A;E<P;E+=3){const C=o.getX(E),g=o.getX(E+1),y=o.getX(E+2);s=Tr(this,p,t,n,c,u,d,C,g,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const v=o.getX(m),A=o.getX(m+1),E=o.getX(m+2);s=Tr(this,a,t,n,c,u,d,v,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],p=a[m.materialIndex],v=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,P=A;E<P;E+=3){const C=E,g=E+1,y=E+2;s=Tr(this,p,t,n,c,u,d,C,g,y),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=_,p=S;m<p;m+=3){const v=m,A=m+1,E=m+2;s=Tr(this,a,t,n,c,u,d,v,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function hd(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Pi,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Tr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,yr),i.getVertexPosition(c,Er);const u=hd(i,t,e,n,Sr,yr,Er,Zl);if(u){const d=new L;vn.getBarycoord(Zl,Sr,yr,Er,d),s&&(u.uv=vn.getInterpolatedAttribute(s,o,l,c,d,new Rt)),r&&(u.uv1=vn.getInterpolatedAttribute(r,o,l,c,d,new Rt)),a&&(u.normal=vn.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(Sr,yr,Er,h.normal),u.face=h,u.barycoord=d}return u}class fu extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,u=Ve,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jl extends Un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new Jt,Ql=new Jt,Ar=[],jl=new Ni,dd=new Jt,bs=new mt,ws=new qs;class bn extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),jl.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),ws.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),Ql.multiplyMatrices(n,Ji),bs.matrixWorld=Ql,bs.raycast(t,Ar);for(let a=0,o=Ar.length;a<o;a++){const l=Ar[a];l.instanceId=r,l.object=this,e.push(l)}Ar.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fu(new Float32Array(s*this.count),s,this.count,Qo,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wi=new qs,fd=new Rt(.5,.5),Rr=new L;class Xs{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],_=r[8],S=r[9],m=r[10],p=r[11],v=r[12],A=r[13],E=r[14],P=r[15];if(s[0].setComponents(c-a,f-u,p-_,P-v).normalize(),s[1].setComponents(c+a,f+u,p+_,P+v).normalize(),s[2].setComponents(c+o,f+d,p+S,P+A).normalize(),s[3].setComponents(c-o,f-d,p-S,P-A).normalize(),n)s[4].setComponents(l,h,m,E).normalize(),s[5].setComponents(c-l,f-h,p-m,P-E).normalize();else if(s[4].setComponents(c-l,f-h,p-m,P-E).normalize(),e===An)s[5].setComponents(c+l,f+h,p+m,P+E).normalize();else if(e===Ws)s[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);const e=fd.distanceTo(t.center);return wi.radius=.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const tc=new Jt;class ol{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];tc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Xs),n[s].setFromProjectionMatrix(tc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Xs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new ol().copy(this)}}class pu extends Ze{constructor(t=[],e=os,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qn extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends Ze{constructor(t,e,n=Fn,s,r,a,o=Ve,l=Ve,c,u=pi,d=1){if(u!==pi&&u!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class mu extends us{constructor(t,e=Fn,n=os,s,r,a=Ve,o=Ve,l,c=pi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gu extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ct extends De{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function _(S,m,p,v,A,E,P,C,g,y,U){const D=E/g,B=P/y,G=E/2,X=P/2,F=C/2,H=g+1,q=y+1;let k=0,ot=0;const Y=new L;for(let et=0;et<q;et++){const rt=et*B-X;for(let bt=0;bt<H;bt++){const Ft=bt*D-G;Y[S]=Ft*v,Y[m]=rt*A,Y[p]=F,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[p]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(bt/g),d.push(1-et/y),k+=1}}for(let et=0;et<y;et++)for(let rt=0;rt<g;rt++){const bt=h+rt+H*et,Ft=h+rt+H*(et+1),K=h+(rt+1)+H*(et+1),xt=h+(rt+1)+H*et;l.push(bt,Ft,xt),l.push(Ft,K,xt),ot+=6}o.addGroup(f,ot,U),f+=ot,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ia extends De{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,_=n*2+r,S=s+1,m=new L,p=new L;for(let v=0;v<=_;v++){let A=0,E=0,P=0,C=0;if(v<=n){const U=v/n,D=U*Math.PI/2;E=-u-t*Math.cos(D),P=t*Math.sin(D),C=-t*Math.cos(D),A=U*d}else if(v<=n+r){const U=(v-n)/r;E=-u+U*e,P=t,C=0,A=d+U*h}else{const U=(v-n-r)/n,D=U*Math.PI/2;E=u+t*Math.sin(D),P=t*Math.cos(D),C=t*Math.sin(D),A=d+h+U*d}const g=Math.max(0,Math.min(1,A/f));let y=0;v===0?y=.5/s:v===_&&(y=-.5/s);for(let U=0;U<=s;U++){const D=U/s,B=D*Math.PI*2,G=Math.sin(B),X=Math.cos(B);p.x=-P*X,p.y=E,p.z=P*G,o.push(p.x,p.y,p.z),m.set(-P*X,C,P*G),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+y,g)}if(v>0){const U=(v-1)*S;for(let D=0;D<s;D++){const B=U+D,G=U+D+1,X=v*S+D,F=v*S+D+1;a.push(B,G,X),a.push(G,F,X)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ll extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,u=new Rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ze extends De{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let _=0;const S=[],m=n/2;let p=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(f,2));function v(){const E=new L,P=new L;let C=0;const g=(e-t)/n;for(let y=0;y<=r;y++){const U=[],D=y/r,B=D*(e-t)+t;for(let G=0;G<=s;G++){const X=G/s,F=X*l+o,H=Math.sin(F),q=Math.cos(F);P.x=B*H,P.y=-D*n+m,P.z=B*q,d.push(P.x,P.y,P.z),E.set(H,g,q).normalize(),h.push(E.x,E.y,E.z),f.push(X,1-D),U.push(_++)}S.push(U)}for(let y=0;y<s;y++)for(let U=0;U<r;U++){const D=S[U][y],B=S[U+1][y],G=S[U+1][y+1],X=S[U][y+1];(t>0||U!==0)&&(u.push(D,B,X),C+=3),(e>0||U!==r-1)&&(u.push(B,G,X),C+=3)}c.addGroup(p,C,0),p+=C}function A(E){const P=_,C=new Rt,g=new L;let y=0;const U=E===!0?t:e,D=E===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*D,0),h.push(0,D,0),f.push(.5,.5),_++;const B=_;for(let G=0;G<=s;G++){const F=G/s*l+o,H=Math.cos(F),q=Math.sin(F);g.x=U*q,g.y=m*D,g.z=U*H,d.push(g.x,g.y,g.z),h.push(0,D,0),C.x=H*.5+.5,C.y=q*.5*D+.5,f.push(C.x,C.y),_++}for(let G=0;G<s;G++){const X=P+G,F=B+G;E===!0?u.push(F,F+1,X):u.push(F+1,F,X),y+=3}c.addGroup(p,y,E===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zn extends ze{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Zn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ys extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const A=new L,E=new L,P=new L;for(let C=0;C<e.length;C+=3)f(e[C+0],A),f(e[C+1],E),f(e[C+2],P),l(A,E,P,v)}function l(v,A,E,P){const C=P+1,g=[];for(let y=0;y<=C;y++){g[y]=[];const U=v.clone().lerp(E,y/C),D=A.clone().lerp(E,y/C),B=C-y;for(let G=0;G<=B;G++)G===0&&y===C?g[y][G]=U:g[y][G]=U.clone().lerp(D,G/B)}for(let y=0;y<C;y++)for(let U=0;U<2*(C-y)-1;U++){const D=Math.floor(U/2);U%2===0?(h(g[y][D+1]),h(g[y+1][D]),h(g[y][D])):(h(g[y][D+1]),h(g[y+1][D+1]),h(g[y+1][D]))}}function c(v){const A=new L;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(v),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function u(){const v=new L;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];const E=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;a.push(E,1-P)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const A=a[v+0],E=a[v+2],P=a[v+4],C=Math.max(A,E,P),g=Math.min(A,E,P);C>.9&&g<.1&&(A<.2&&(a[v+0]+=1),E<.2&&(a[v+2]+=1),P<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,A){const E=v*3;A.x=t[E+0],A.y=t[E+1],A.z=t[E+2]}function _(){const v=new L,A=new L,E=new L,P=new L,C=new Rt,g=new Rt,y=new Rt;for(let U=0,D=0;U<r.length;U+=9,D+=6){v.set(r[U+0],r[U+1],r[U+2]),A.set(r[U+3],r[U+4],r[U+5]),E.set(r[U+6],r[U+7],r[U+8]),C.set(a[D+0],a[D+1]),g.set(a[D+2],a[D+3]),y.set(a[D+4],a[D+5]),P.copy(v).add(A).add(E).divideScalar(3);const B=m(P);S(C,D+0,v,B),S(g,D+2,A,B),S(y,D+4,E,B)}}function S(v,A,E,P){P<0&&v.x===1&&(a[A]=v.x-1),E.x===0&&E.z===0&&(a[A]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.vertices,t.indices,t.radius,t.detail)}}class cl extends Ys{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new Jt;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class _u extends jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pd extends _u{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ec=new L,nc=new L,Ha=new ul,ka=new ul,Va=new ul;class sa extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(nc.subVectors(s[0],s[1]).add(s[0]),c=nc);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ec.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Ha.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,S,m),ka.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,S,m),Va.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,S,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ka.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Va.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ha.calc(l),ka.calc(l),Va.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function md(i,t){const e=1-i;return e*e*t}function gd(i,t){return 2*(1-i)*i*t}function _d(i,t){return i*i*t}function Os(i,t,e,n){return md(i,t)+gd(i,e)+_d(i,n)}function xd(i,t){const e=1-i;return e*e*e*t}function vd(i,t){const e=1-i;return 3*e*e*i*t}function Md(i,t){return 3*(1-i)*i*i*t}function Sd(i,t){return i*i*i*t}function Bs(i,t,e,n,s){return xd(i,t)+vd(i,e)+Md(i,n)+Sd(i,s)}class yd extends jn{constructor(t=new Rt,e=new Rt,n=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Rt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ed extends jn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Bs(t,s.x,r.x,a.x,o.x),Bs(t,s.y,r.y,a.y,o.y),Bs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bd extends jn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends jn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Td extends jn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends jn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Os(t,s.x,r.x,a.x),Os(t,s.y,r.y,a.y),Os(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(ic(o,l.x,c.x,u.x,d.x),ic(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}}var Rd=Object.freeze({__proto__:null,ArcCurve:pd,CatmullRomCurve3:sa,CubicBezierCurve:yd,CubicBezierCurve3:Ed,EllipseCurve:_u,LineCurve:bd,LineCurve3:wd,QuadraticBezierCurve:Td,QuadraticBezierCurve3:xu,SplineCurve:Ad});class hl extends Ys{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class ra extends Ys{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ra(t.radius,t.detail)}}class Be extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],_=[],S=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let A=0;A<c;A++){const E=A*d-r;_.push(E,-v,0),S.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const A=v+c*p,E=v+c*(p+1),P=v+1+c*(p+1),C=v+1+c*p;f.push(A,E,C),f.push(E,P,C)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.widthSegments,t.heightSegments)}}class aa extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,h=new L,f=[],_=[],S=[],m=[];for(let p=0;p<=n;p++){const v=[],A=p/n,E=a+A*o,P=t*Math.cos(E),C=Math.sqrt(t*t-P*P);let g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let y=0;y<=e;y++){const U=y/e,D=s+U*r;d.x=-C*Math.cos(D),d.y=P,d.z=C*Math.sin(D),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),m.push(U+g,1-A),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const A=u[p][v+1],E=u[p][v],P=u[p+1][v],C=u[p+1][v+1];(p!==0||a>0)&&f.push(A,E,C),(p!==n-1||l<Math.PI)&&f.push(E,P,C)}this.setIndex(f),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(S,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Di extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new L,f=new L,_=new L;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let p=0;p<=s;p++){const v=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),d.push(p/s),d.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,v=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,E=(s+1)*S+m;l.push(p,v,E),l.push(v,A,E)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class oa extends De{constructor(t=new xu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new L,l=new L,c=new Rt;let u=new L;const d=[],h=[],f=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(f,2));function S(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),v(),p()}function m(A){u=t.getPointAt(A/e,u);const E=a.normals[A],P=a.binormals[A];for(let C=0;C<=s;C++){const g=C/s*Math.PI*2,y=Math.sin(g),U=-Math.cos(g);l.x=U*E.x+y*P.x,l.y=U*E.y+y*P.y,l.z=U*E.z+y*P.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let E=1;E<=s;E++){const P=(s+1)*(A-1)+(E-1),C=(s+1)*A+(E-1),g=(s+1)*A+E,y=(s+1)*(A-1)+E;_.push(P,C,y),_.push(C,g,y)}}function v(){for(let A=0;A<=e;A++)for(let E=0;E<=s;E++)c.x=A/e,c.y=E/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new oa(new Rd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function hs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(sc(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(sc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=hs(i[e]);for(const s in n)t[s]=n[s]}return t}function sc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Pd={clone:hs,merge:tn};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Id extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bt extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zo extends Bt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Nd extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ud extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class la extends Re{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Fd extends la{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Wa=new Jt,rc=new L,ac=new L;class dl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cr=new L,Pr=new xn,Cn=new L;class Mu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cr,Pr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Cr,Pr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cr,Pr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new L,oc=new Rt,lc=new Rt;class un extends Mu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,oc,lc),e.subVectors(lc,oc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Od extends dl{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Bd extends la{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Od}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class zd extends dl{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class Gd extends la{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Su extends Mu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hd extends dl{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kd extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Hd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Qi=-90,ji=1;class Go extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Qi,ji,t,e);s.layers=this.layers,this.add(s);const r=new un(Qi,ji,t,e);r.layers=this.layers,this.add(r);const a=new un(Qi,ji,t,e);a.layers=this.layers,this.add(a);const o=new un(Qi,ji,t,e);o.layers=this.layers,this.add(o);const l=new un(Qi,ji,t,e);l.layers=this.layers,this.add(l);const c=new un(Qi,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Vd extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function cc(i,t,e,n){const s=Wd(n);switch(e){case jc:return i*t;case Qo:return i*t/s.components*s.byteLength;case jo:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case tu:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(t,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(t,8)/2;case uo:case ho:case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case Wr:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case No:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xr:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wd(i){switch(i){case hn:case $c:return{byteLength:1,components:1};case Vs:case Zc:case On:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Fn:case $o:case Tn:return{byteLength:4,components:1};case Jc:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);function yu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const S=d[f];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Kd,alphamap_pars_fragment:$d,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:jd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:hf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:yf,colorspace_pars_fragment:Ef,envmap_fragment:bf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:zf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Hf,lights_phong_pars_fragment:kf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Qf,map_fragment:jf,map_pars_fragment:tp,map_particle_fragment:ep,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphinstance_vertex:rp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:up,normal_fragment_maps:hp,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:xp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:yp,project_vertex:Ep,dithering_fragment:bp,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Ip,skinning_vertex:Np,skinnormal_vertex:Up,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:Gp,transmission_pars_fragment:Hp,uv_pars_fragment:kp,uv_pars_vertex:Vp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Kp,backgroundCube_frag:$p,cube_vert:Zp,cube_frag:Jp,depth_vert:Qp,depth_frag:jp,distance_vert:tm,distance_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:um,meshmatcap_frag:hm,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:vm,points_vert:Mm,points_frag:Sm,shadow_vert:ym,shadow_frag:Em,sprite_vert:bm,sprite_frag:wm},Et={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:tn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:tn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:tn([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:tn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:tn([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:tn([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:tn([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:tn([Et.lights,Et.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Lr={r:0,b:0,g:0},Tm=new Jt,Eu=new Xt;Eu.set(-1,0,0,0,1,0,0,0,1);function Am(i,t,e,n,s,r){const a=new qt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){const E=v.backgroundBlurriness>0;A=t.get(A,E)}return A}function _(v){let A=!1;const E=f(v);E===null?m(a,o):E&&E.isColor&&(m(E,1),A=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,A){const E=f(A);E&&E.isCubeTexture?(c===void 0&&(c=new mt(new Ct(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:hs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=Qt.getTransfer(E.colorSpace)!==le,(u!==E||d!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new mt(new Be(2,2),new Jn({name:"BackgroundMaterial",uniforms:hs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(E.colorSpace)!==le,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,A){v.getRGB(Lr,vu(i)),e.buffers.color.setClear(Lr.r,Lr.g,Lr.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:S,dispose:p}}function Rm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(B,G,X,F,H){let q=!1;const k=d(B,F,X,G);r!==k&&(r=k,c(r.object)),q=f(B,F,X,H),q&&_(B,F,X,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(B,G,X,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function d(B,G,X,F){const H=F.wireframe===!0;let q=n[G.id];q===void 0&&(q={},n[G.id]=q);const k=B.isInstancedMesh===!0?B.id:0;let ot=q[k];ot===void 0&&(ot={},q[k]=ot);let Y=ot[X.id];Y===void 0&&(Y={},ot[X.id]=Y);let et=Y[H];return et===void 0&&(et=h(l()),Y[H]=et),et}function h(B){const G=[],X=[],F=[];for(let H=0;H<e;H++)G[H]=0,X[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:F,object:B,attributes:{},index:null}}function f(B,G,X,F){const H=r.attributes,q=G.attributes;let k=0;const ot=X.getAttributes();for(const Y in ot)if(ot[Y].location>=0){const rt=H[Y];let bt=q[Y];if(bt===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(bt=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(bt=B.instanceColor)),rt===void 0||rt.attribute!==bt||bt&&rt.data!==bt.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function _(B,G,X,F){const H={},q=G.attributes;let k=0;const ot=X.getAttributes();for(const Y in ot)if(ot[Y].location>=0){let rt=q[Y];rt===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(rt=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(rt=B.instanceColor));const bt={};bt.attribute=rt,rt&&rt.data&&(bt.data=rt.data),H[Y]=bt,k++}r.attributes=H,r.attributesNum=k,r.index=F}function S(){const B=r.newAttributes;for(let G=0,X=B.length;G<X;G++)B[G]=0}function m(B){p(B,0)}function p(B,G){const X=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;X[B]=1,F[B]===0&&(i.enableVertexAttribArray(B),F[B]=1),H[B]!==G&&(i.vertexAttribDivisor(B,G),H[B]=G)}function v(){const B=r.newAttributes,G=r.enabledAttributes;for(let X=0,F=G.length;X<F;X++)G[X]!==B[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function A(B,G,X,F,H,q,k){k===!0?i.vertexAttribIPointer(B,G,X,H,q):i.vertexAttribPointer(B,G,X,F,H,q)}function E(B,G,X,F){S();const H=F.attributes,q=X.getAttributes(),k=G.defaultAttributeValues;for(const ot in q){const Y=q[ot];if(Y.location>=0){let et=H[ot];if(et===void 0&&(ot==="instanceMatrix"&&B.instanceMatrix&&(et=B.instanceMatrix),ot==="instanceColor"&&B.instanceColor&&(et=B.instanceColor)),et!==void 0){const rt=et.normalized,bt=et.itemSize,Ft=t.get(et);if(Ft===void 0)continue;const K=Ft.buffer,xt=Ft.type,Tt=Ft.bytesPerElement,Ut=xt===i.INT||xt===i.UNSIGNED_INT||et.gpuType===$o;if(et.isInterleavedBufferAttribute){const vt=et.data,Vt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,_e=et.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let zt=0;zt<Y.locationSize;zt++)p(Y.location+zt,vt.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let zt=0;zt<Y.locationSize;zt++)m(Y.location+zt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let zt=0;zt<Y.locationSize;zt++)A(Y.location+zt,bt/Y.locationSize,xt,rt,Vt*Tt,(_e+bt/Y.locationSize*zt)*Tt,Ut)}else{if(et.isInstancedBufferAttribute){for(let vt=0;vt<Y.locationSize;vt++)p(Y.location+vt,et.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<Y.locationSize;vt++)m(Y.location+vt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let vt=0;vt<Y.locationSize;vt++)A(Y.location+vt,bt/Y.locationSize,xt,rt,bt*Tt,bt/Y.locationSize*vt*Tt,Ut)}}else if(k!==void 0){const rt=k[ot];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(Y.location,rt);break;case 3:i.vertexAttrib3fv(Y.location,rt);break;case 4:i.vertexAttrib4fv(Y.location,rt);break;default:i.vertexAttrib1fv(Y.location,rt)}}}}v()}function P(){U();for(const B in n){const G=n[B];for(const X in G){const F=G[X];for(const H in F){const q=F[H];for(const k in q)u(q[k].object),delete q[k];delete F[H]}}delete n[B]}}function C(B){if(n[B.id]===void 0)return;const G=n[B.id];for(const X in G){const F=G[X];for(const H in F){const q=F[H];for(const k in q)u(q[k].object),delete q[k];delete F[H]}}delete n[B.id]}function g(B){for(const G in n){const X=n[G];for(const F in X){const H=X[F];if(H[B.id]===void 0)continue;const q=H[B.id];for(const k in q)u(q[k].object),delete q[k];delete H[B.id]}}}function y(B){for(const G in n){const X=n[G],F=B.isInstancedMesh===!0?B.id:0,H=X[F];if(H!==void 0){for(const q in H){const k=H[q];for(const ot in k)u(k[ot].object),delete k[ot];delete H[q]}delete X[F],Object.keys(X).length===0&&delete n[G]}}}function U(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function Cm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==In&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const y=g===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==hn&&g!==Tn&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:E,maxSamples:P,samples:C}}function Lm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new oi,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,A=v*4;let E=p.clippingState||null;l.value=E,E=u(_,h,A,f);for(let P=0;P!==A;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const p=f+S*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,E=f;A!==S;++A,E+=4)a.copy(d[A]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}class fl extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ns});r.uniforms.tEquirect.value=e;const a=new mt(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=an),new Go(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const uc=256,Dm=3,Im=20,bu=256,wu=16,Nm=3,Um=new L,Fm=new qt;class Jr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Go(1,10,null),this._boxMesh=new mt(new Ct(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Um}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(Fm));const m=new Go(n,s,u);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=_,t.background=S,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(uc,au(t))}_fromTexture(t,e){t.mapping===os||t.mapping===ks?this._setSize(t.image.length===0?uc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=hc(t,!1,!1),n=Math.log2(t)-Dm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===os||t.mapping===ks?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Om(),this._integrationMaterial=Bm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wu);for(let a=0;a<=n;a++){const o=Jr.lodToRoughness(a,n);if(a>n-Nm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(bu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=zm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function hc(i,t,e){return new fl(i,{minFilter:ui,generateMipmaps:t,type:On,colorSpace:qr,depthBuffer:e})}function Ks(i,t,e){return new Jn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:nn,blending:ns,depthTest:!1,depthWrite:!1})}function Om(){return Ks("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bm(){return Ks("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zm(){return Ks("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Im}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dc(){return Ks("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function fc(){return Ks("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Fr||f===_a)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new fl(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,_=f===Fr||f===_a,S=f===os||f===ks;if(_||S){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Jr(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return _&&v&&v.height>0||S&&v&&l(v)?(n===null&&(n=new Jr(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Fr?h.mapping=os:f===_a&&(h.mapping=ks),h}function l(h){let f=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ss("WebGLRenderer: "+n+" extension not supported."),s}}}function km(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(const m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function u(_){const S=_.attributes;for(const m in S)t.update(S[m],i.ARRAY_BUFFER)}function d(_){const S=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const v=S!==null?S.array.length:m.array.length/3-1,A=m.count>=65535?hu:uu,E=new A(Math.ceil(v/3)*6,1),P=E.array;if(S!==null){const g=S.array;p=S.version;for(let y=0,U=0;y<v;y+=3){const D=g[y+0],B=g[y+1],G=g[y+2];P[U++]=D,P[U++]=B,P[U++]=B,P[U++]=G,P[U++]=G,P[U++]=D}}else{p=m.version;for(let g=0,y=0;g<v;g+=3){const U=g+0,D=g+1,B=g+2;P[y++]=U,P[y++]=D,P[y++]=D,P[y++]=B,P[y++]=B,P[y++]=U}}E.version=p;const C=r.get(_);C&&t.remove(C),r.set(_,E)}function h(_){const S=r.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in s){const S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Vm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t,e){const n=new WeakMap,s=new Se;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let D=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let P=o.attributes.position.count*E,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const g=new Float32Array(P*C*4*d),y=new ou(g,P,C,d);y.type=Tn,y.needsUpdate=!0;const U=E*4;for(let B=0;B<d;B++){const G=p[B],X=v[B],F=A[B],H=P*C*4*B;for(let q=0;q<G.count;q++){const k=q*U;_===!0&&(s.fromBufferAttribute(G,q),g[H+k+0]=s.x,g[H+k+1]=s.y,g[H+k+2]=s.z,g[H+k+3]=0),S===!0&&(s.fromBufferAttribute(X,q),g[H+k+4]=s.x,g[H+k+5]=s.y,g[H+k+6]=s.z,g[H+k+7]=0),m===!0&&(s.fromBufferAttribute(F,q),g[H+k+8]=s.x,g[H+k+9]=s.y,g[H+k+10]=s.z,g[H+k+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:y,size:new Rt(P,C)},n.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function qm(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Ym={[kc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[Ko]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function Km(i,t,e,n,s,r){const a=new Nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new De;u.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new jt([0,2,0,0,2,0],2));const d=new Id({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new mt(u,d),f=new Su(-1,1,1,-1,0,1);let _=null,S=null,m=!1,p,v=null,A=[],E=!1;this.setSize=function(P,C){a.setSize(P,C),o!==null&&o.setSize(P,C),l!==null&&l.setSize(P,C);for(let g=0;g<A.length;g++){const y=A[g];y.setSize&&y.setSize(P,C)}},this.setEffects=function(P){A=P,E=A.length>0&&A[0].isRenderPass===!0;const C=a.width,g=a.height;A.length>0&&o===null&&(o=new Nn(C,g,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(C,g,{type:On,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&A.some(U=>U.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new us(C,g),r===!0&&(c.format=hi,c.type=ls)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let U=0;U<A.length;U++){const D=A[U];D.setSize&&D.setSize(C,g),y&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(P,C){if(m||P.toneMapping===Yn&&A.length===0)return!1;if(v=C,C!==null){const g=C.width,y=C.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return E===!1&&P.setRenderTarget(a),p=P.toneMapping,P.toneMapping=Yn,!0},this.hasRenderPass=function(){return E},this.end=function(P,C){P.toneMapping=p,m=!0;let g=a,y=o;for(let U=0;U<A.length;U++){const D=A[U];D.enabled!==!1&&(D.render(P,y,g,C),D.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(_!==P.outputColorSpace||S!==P.toneMapping){_=P.outputColorSpace,S=P.toneMapping,d.defines={},Qt.getTransfer(_)===le&&(d.defines.SRGB_TRANSFER="");const U=Ym[S];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,P.setRenderTarget(v),P.render(h,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const Tu=new Ze,Au=new us(1,1),Ru=new mu(1),Cu=new ou,Pu=new Kh,Lu=new pu,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),xc=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),Ne(e,n)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),Ne(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ie(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),Ne(e,n)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ua(i){return i.version===0&&(i.compareFunction=iu,i.needsUpdate=!0),i}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ua(Au):r=Tu,e.setTexture2D(t||r,s)}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pu,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ua(Ru):r=Lu,e.setTextureCube(t||r,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cu,s)}function p0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return jm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(i,t){i.uniform1fv(this.addr,t)}function g0(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function v0(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M0(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function b0(i,t){i.uniform3iv(this.addr,t)}function w0(i,t){i.uniform4iv(this.addr,t)}function T0(i,t){i.uniform1uiv(this.addr,t)}function A0(i,t){i.uniform2uiv(this.addr,t)}function R0(i,t){i.uniform3uiv(this.addr,t)}function C0(i,t){i.uniform4uiv(this.addr,t)}function P0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ua(Au):a=Tu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pu,r[a])}function D0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ua(Ru):a=Lu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function I0(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cu,r[a])}function N0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return y0;case 35667:case 35671:return E0;case 35668:case 35672:return b0;case 35669:case 35673:return w0;case 5125:return T0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}}class O0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),a=Xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(e,c===void 0?new U0(o,i,t):new F0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new O0(o),vc(e,d)),e=d}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);B0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const z0=37297;let G0=0;function H0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new Xt;function k0(i){Qt._getMatrix(Sc,Qt.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+H0(i.getShaderSource(t),o)}else return r}function V0(i,t){const e=k0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const W0={[kc]:"Linear",[Vc]:"Reinhard",[Wc]:"Cineon",[Ko]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function X0(i,t){const e=W0[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new L;function q0(){Qt.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ds(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(i){return i.replace(Z0,J0)}function J0(i,t){const e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ho(e)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(Q0,j0)}function j0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const tg={[Ur]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function eg(i){return tg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ng={[ks]:"ENVMAP_MODE_REFRACTION"};function ig(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sg={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[fh]:"ENVMAP_BLENDING_MIX",[ph]:"ENVMAP_BLENDING_ADD"};function rg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sg[i.combine]||"ENVMAP_BLENDING_NONE"}function ag(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=eg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ig(e),d=rg(e),h=Y0(e),f=K0(r),_=s.createProgram();let S,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ds).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(S=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Yn?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ds).join(`
`)),a=Ho(a),a=Ec(a,e),a=bc(a,e),o=Ho(o),o=Ec(o,e),o=bc(o,e),a=wc(a),o=wc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=p+S+a,A=p+m+o,E=Mc(s,s.VERTEX_SHADER,v),P=Mc(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(P)||"",F=B.trim(),H=G.trim(),q=X.trim();let k=!0,ot=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,P);else{const Y=yc(s,E,"vertex"),et=yc(s,P,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Y+`
`+et)}else F!==""?kt("WebGLProgram: Program Info Log:",F):(H===""||q==="")&&(ot=!1);ot&&(D.diagnostics={runnable:k,programLog:F,vertexShader:{log:H,prefix:S},fragmentShader:{log:q,prefix:m}})}s.deleteShader(E),s.deleteShader(P),g=new Hr(s,_),y=$0(s,_)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,z0)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=P,this}let og=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cg(t),e.set(t,n)),n}}class cg{constructor(t){this.id=og++,this.code=t,this.usedTimes=0}}function ug(i){return i===Li||i===Wr||i===Xr}function hg(i,t,e,n,s,r){const a=new lu,o=new lg,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,y,U,D,B,G){const X=D.fog,F=B.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=t.get(g.envMap||H,q),ot=h[g.type];let Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&kt("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));const et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=et!==void 0?et.length:0;let bt=0;F.morphAttributes.position!==void 0&&(bt=1),F.morphAttributes.normal!==void 0&&(bt=2),F.morphAttributes.color!==void 0&&(bt=3);let Ft,K,xt,Tt;if(ot){const Mt=Dn[ot];Ft=Mt.vertexShader,K=Mt.fragmentShader}else{Ft=g.vertexShader,K=g.fragmentShader;const Mt=o.getVertexShaderStage(g),te=o.getFragmentShaderStage(g);o.update(g,Mt,te),xt=Mt.id,Tt=te.id}const Ut=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,zt=!!g.map,ie=!!g.matcap,se=!!k,Yt=se&&k.isPMREMTexture===!0,we=!!g.aoMap,xe=!!g.lightMap,Le=!!g.bumpMap&&g.wireframe===!1,ge=!!g.normalMap,fn=!!g.displacementMap,Ce=!!g.emissiveMap,Ge=!!g.metalnessMap,He=!!g.roughnessMap,Ue=g.anisotropy>0,z=g.clearcoat>0,sn=g.diffuseRoughness>0,de=g.dispersion>0,he=g.retroreflectivity>0,_t=g.iridescence>0,Te=g.sheen>0,Ot=g.transmission>0,Ht=Ue&&!!g.anisotropyMap,R=z&&!!g.clearcoatMap,x=z&&!!g.clearcoatNormalMap,V=z&&!!g.clearcoatRoughnessMap,lt=sn&&!!g.diffuseRoughnessMap,it=_t&&!!g.iridescenceMap,ht=_t&&!!g.iridescenceThicknessMap,gt=Te&&!!g.sheenColorMap,Q=Te&&!!g.sheenRoughnessMap,tt=!!g.specularMap,dt=!!g.specularColorMap,N=!!g.specularIntensityMap,nt=Ot&&!!g.transmissionMap,Z=Ot&&!!g.thicknessMap,pt=!!g.gradientMap,ut=!!g.alphaMap,ft=g.alphaTest>0,Dt=!!g.alphaHash,Kt=!!g.extensions;let ct=Yn;g.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ct=i.toneMapping);const It=Yt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Gt={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:Ft,fragmentShader:K,defines:g.defines,customVertexShaderID:xt,customFragmentShaderID:Tt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:zt,matcap:ie,envMap:se,envMapMode:se&&k.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?It.length-1:null,envMapSize:Yt?It[0].width:null,aoMap:we,lightMap:xe,bumpMap:Le,normalMap:ge,displacementMap:fn,emissiveMap:Ce,normalMapObjectSpace:ge&&g.normalMapType===_h,normalMapTangentSpace:ge&&g.normalMapType===Oo,packedNormalMap:ge&&g.normalMapType===Oo&&ug(g.normalMap.format),metalnessMap:Ge,roughnessMap:He,anisotropy:Ue,anisotropyMap:Ht,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:x,clearcoatRoughnessMap:V,diffuseRoughness:sn,diffuseRoughnessMap:lt,dispersion:de,retroreflection:he,iridescence:_t,iridescenceMap:it,iridescenceThicknessMap:ht,sheen:Te,sheenColorMap:gt,sheenRoughnessMap:Q,specularMap:tt,specularColorMap:dt,specularIntensityMap:N,transmission:Ot,transmissionMap:nt,thicknessMap:Z,gradientMap:pt,opaque:g.transparent===!1&&g.blending===is&&g.alphaToCoverage===!1,alphaMap:ut,alphaTest:ft,alphaHash:Dt,combine:g.combine,mapUv:zt&&f(g.map.channel),aoMapUv:we&&f(g.aoMap.channel),lightMapUv:xe&&f(g.lightMap.channel),bumpMapUv:Le&&f(g.bumpMap.channel),normalMapUv:ge&&f(g.normalMap.channel),displacementMapUv:fn&&f(g.displacementMap.channel),emissiveMapUv:Ce&&f(g.emissiveMap.channel),metalnessMapUv:Ge&&f(g.metalnessMap.channel),roughnessMapUv:He&&f(g.roughnessMap.channel),anisotropyMapUv:Ht&&f(g.anisotropyMap.channel),clearcoatMapUv:R&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(g.sheenRoughnessMap.channel),specularMapUv:tt&&f(g.specularMap.channel),specularColorMapUv:dt&&f(g.specularColorMap.channel),specularIntensityMapUv:N&&f(g.specularIntensityMap.channel),transmissionMapUv:nt&&f(g.transmissionMap.channel),thicknessMapUv:Z&&f(g.thicknessMap.channel),alphaMapUv:ut&&f(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ge||Ue),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(zt||ut),fog:!!X,useFog:g.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&ge===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:bt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:G.filter(Mt=>Mt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:zt&&g.map.isVideoTexture===!0&&Qt.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:Ce&&g.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Me,flipSided:g.side===nn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Kt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&g.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function S(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const U in g.defines)y.push(U),y.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(m(y,g),p(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function m(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function p(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){const y=h[g.type];let U;if(y){const D=Dn[y];U=Pd.clone(D.uniforms)}else U=g.uniforms;return U}function A(g,y){let U=u.get(y);return U!==void 0?++U.usedTimes:(U=new ag(i,y,g,s),c.push(U),u.set(y,U)),U}function E(g){if(--g.usedTimes===0){const y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function P(g){o.remove(g)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:C}}function dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,S,m,p){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:p},i[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=_,v.materialVariant=a(h),v.groupOrder=S,v.renderOrder=h.renderOrder,v.z=m,v.group=p),t++,v}function l(h,f,_,S,m,p,v){v.reversedDepth===!0&&(m=-m);const A=o(h,f,_,S,m,p);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(h,f,_,S,m,p){const v=o(h,f,_,S,m,p);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||fg),n.length>1&&n.sort(f||Ac),s.length>1&&s.sort(f||Ac)}function d(){for(let h=t,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rc,i.set(n,[a])):s>=r.length?(a=new Rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new qt};break;case"SpotLight":e={position:new L,direction:new L,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _g=0;function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vg(i){const t=new mg,e=gg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Jt,a=new Jt;function o(c){let u=0,d=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,_=0,S=0,m=0,p=0,v=0,A=0,E=0,P=0,C=0,g=0,y=0,U=0,D=0;c.sort(xg);for(let G=0,X=c.length;G<X;G++){const F=c[G],H=F.color,q=F.intensity,k=F.distance;let ot=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Li?ot=F.shadow.map.texture:ot=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=H.r*q,d+=H.g*q,h+=H.b*q;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(F.sh.coefficients[Y],q);D++}else if(F.isSunLight){const Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const et=F.shadow,rt=e.get(F);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[_]=rt,n.sunShadowMap[_]=ot;const bt=et.getViewportCount();for(let Ft=0;Ft<bt;Ft++)n.sunShadowMatrix[S+Ft]=et.getMatrix(Ft),n.sunShadowCascade[S+Ft]=et._cascadeData[Ft];S+=bt,_++}n.sun[f]=Y,f++}else if(F.isDirectionalLight){const Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const et=F.shadow,rt=e.get(F);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=F.shadow.matrix,P++}n.directional[m]=Y,m++}else if(F.isSpotLight){const Y=t.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy(H).multiplyScalar(q),Y.distance=k,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,n.spot[v]=Y;const et=F.shadow;if(F.map&&(n.spotLightMap[y]=F.map,y++,et.updateMatrices(F),F.castShadow&&U++),n.spotLightMatrix[v]=et.matrix,F.castShadow){const rt=e.get(F);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.spotShadow[v]=rt,n.spotShadowMap[v]=ot,g++}v++}else if(F.isRectAreaLight){const Y=t.get(F);Y.color.copy(H).multiplyScalar(q),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=Y,A++}else if(F.isPointLight){const Y=t.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const et=F.shadow,rt=e.get(F);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=F.shadow.matrix,C++}n.point[p]=Y,p++}else if(F.isHemisphereLight){const Y=t.get(F);Y.skyColor.copy(F.color).multiplyScalar(q),Y.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[E]=Y,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const B=n.hash;(B.sunLength!==f||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==v||B.rectAreaLength!==A||B.hemiLength!==E||B.numSunShadows!==_||B.numDirectionalShadows!==P||B.numPointShadows!==C||B.numSpotShadows!==g||B.numSpotMaps!==y||B.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=p,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-U,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,B.sunLength=f,B.directionalLength=m,B.pointLength=p,B.spotLength=v,B.rectAreaLength=A,B.hemiLength=E,B.numSunShadows=_,B.numDirectionalShadows=P,B.numPointShadows=C,B.numSpotShadows=g,B.numSpotMaps=y,B.numLightProbes=D,n.version=_g++)}function l(c,u){let d=0,h=0,f=0,_=0,S=0,m=0;const p=u.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){const E=c[v];if(E.isSunLight){const P=n.sun[d];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(p),d++}else if(E.isDirectionalLight){const P=n.directional[h];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),h++}else if(E.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const P=n.rectArea[S];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const P=n.point[f];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const P=n.hemi[m];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Cc(i){const t=new vg(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Cc(i),t.set(s,[o])):r>=a.length?(o=new Cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Eg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],bg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pc=new Jt,Ts=new L,qa=new L;function wg(i,t,e){let n=new Xs;const s=new Rt,r=new Rt,a=new Se,o=new Nd,l=new Ud,c={},u=e.maxTextureSize,d={[Pi]:nn,[nn]:Pi,[Me]:Me},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Sg,fragmentShader:yg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new De;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(C,g,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Bc&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);const U=i.getRenderTarget(),D=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ns),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=p!==this.type;X&&g.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=C.length;F<H;F++){const q=C[F],k=q.shadow;if(k===void 0){kt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ot=k.getFrameExtents();s.multiply(ot),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ls){if(q.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Nn(s.x,s.y,{format:Li,type:On,minFilter:an,magFilter:an,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new us(s.x,s.y,Tn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ve,k.map.depthTexture.magFilter=Ve}else q.isPointLight?(k.map=new fl(s.x),k.map.depthTexture=new mu(s.x,Fn)):(k.map=new Nn(s.x,s.y),k.map.depthTexture=new us(s.x,s.y,Fn)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=pi,this.type===Ur?(k.map.depthTexture.compareFunction=Y?nu:eu,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ve,k.map.depthTexture.magFilter=Ve);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const et=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();q.isPointLight!==!0&&k.updateMatrices(q,y);const rt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:y.layers;for(let bt=0;bt<et;bt++){const Ft=k.getCamera(bt);if(q.isPointLight){const K=k.camera,xt=k.matrix,Tt=q.distance||K.far;Tt!==K.far&&(K.far=Tt,K.updateProjectionMatrix()),Ts.setFromMatrixPosition(q.matrixWorld),K.position.copy(Ts),qa.copy(K.position),qa.add(Eg[bt]),K.up.copy(bg[bt]),K.lookAt(qa),K.updateMatrixWorld(),xt.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Pc.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Pc,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(k.map),i.clear());const K=k.getViewport(bt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),G.viewport(a)}n=k.getFrustum(bt),E(g,y,Ft,q,rt,this.type)}k.isPointLightShadow!==!0&&this.type===Ls&&v(k,y),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(U,D,B)};function v(C,g){const y=t.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null?C.mapPass=new Nn(s.x,s.y,{format:Li,type:On}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(g,null,y,h,S,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(g,null,y,f,S,null)}function A(C,g,y,U){let D=null;const B=y.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)D=B;else if(D=y.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=D.uuid,X=g.uuid;let F=c[G];F===void 0&&(F={},c[G]=F);let H=F[X];H===void 0&&(H=D.clone(),F[X]=H,g.addEventListener("dispose",P)),D=H}if(D.visible=g.visible,D.wireframe=g.wireframe,U===Ls?D.side=g.shadowSide!==null?g.shadowSide:g.side:D.side=g.shadowSide!==null?g.shadowSide:d[g.side],D.alphaMap=g.alphaMap,D.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,D.map=g.map,D.clipShadows=g.clipShadows,D.clippingPlanes=g.clippingPlanes,D.clipIntersection=g.clipIntersection,D.displacementMap=g.displacementMap,D.displacementScale=g.displacementScale,D.displacementBias=g.displacementBias,D.wireframeLinewidth=g.wireframeLinewidth,D.linewidth=g.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const G=i.properties.get(D);G.light=y}return D}function E(C,g,y,U,D,B){if(C.visible===!1)return;if(C.layers.test(D)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===Ls)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,C.matrixWorld);const F=t.update(C),H=C.material;if(Array.isArray(H)){const q=F.groups;for(let k=0,ot=q.length;k<ot;k++){const Y=q[k],et=H[Y.materialIndex];if(et&&et.visible){const rt=A(C,et,U,B);C.onBeforeShadow(i,C,g,y,F,rt,Y),i.renderBufferDirect(y,null,F,rt,C,Y),C.onAfterShadow(i,C,g,y,F,rt,Y)}}}else if(H.visible){const q=A(C,H,U,B);C.onBeforeShadow(i,C,g,y,F,q,null),i.renderBufferDirect(y,null,F,q,C,null),C.onAfterShadow(i,C,g,y,F,q,null)}}const X=C.children;for(let F=0,H=X.length;F<H;F++)E(X[F],g,y,U,D,B)}function P(C){C.target.removeEventListener("dispose",P);for(const y in c){const U=c[y],D=C.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}function Tg(i,t){function e(){let N=!1;const nt=new Se;let Z=null;const pt=new Se(0,0,0,0);return{setMask:function(ut){Z!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),Z=ut)},setLocked:function(ut){N=ut},setClear:function(ut,ft,Dt,Kt,ct){ct===!0&&(ut*=Kt,ft*=Kt,Dt*=Kt),nt.set(ut,ft,Dt,Kt),pt.equals(nt)===!1&&(i.clearColor(ut,ft,Dt,Kt),pt.copy(nt))},reset:function(){N=!1,Z=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,nt=!1,Z=null,pt=null,ut=null;return{setReversed:function(ft){if(nt!==ft){const Dt=t.get("EXT_clip_control");ft?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),nt=ft;const Kt=ut;ut=null,this.setClear(Kt)}},getReversed:function(){return nt},setTest:function(ft){ft?vt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(ft){Z!==ft&&!N&&(i.depthMask(ft),Z=ft)},setFunc:function(ft){if(nt&&(ft=Ah[ft]),pt!==ft){switch(ft){case Qa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ft}},setLocked:function(ft){N=ft},setClear:function(ft){ut!==ft&&(ut=ft,nt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){N=!1,Z=null,pt=null,ut=null,nt=!1}}}function s(){let N=!1,nt=null,Z=null,pt=null,ut=null,ft=null,Dt=null,Kt=null,ct=null;return{setTest:function(It){N||(It?vt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(It){nt!==It&&!N&&(i.stencilMask(It),nt=It)},setFunc:function(It,Gt,Mt){(Z!==It||pt!==Gt||ut!==Mt)&&(i.stencilFunc(It,Gt,Mt),Z=It,pt=Gt,ut=Mt)},setOp:function(It,Gt,Mt){(ft!==It||Dt!==Gt||Kt!==Mt)&&(i.stencilOp(It,Gt,Mt),ft=It,Dt=Gt,Kt=Mt)},setLocked:function(It){N=It},setClear:function(It){ct!==It&&(i.clearStencil(It),ct=It)},reset:function(){N=!1,nt=null,Z=null,pt=null,ut=null,ft=null,Dt=null,Kt=null,ct=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],S=null,m=!1,p=null,v=null,A=null,E=null,P=null,C=null,g=null,y=new qt(0,0,0),U=0,D=!1,B=null,G=null,X=null,F=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ot=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=ot>=1):Y.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=ot>=2);let et=null,rt={};const bt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),K=new Se().fromArray(bt),xt=new Se().fromArray(Ft);function Tt(N,nt,Z,pt){const ut=new Uint8Array(4),ft=i.createTexture();i.bindTexture(N,ft),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<Z;Dt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(nt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ft}const Ut={};Ut[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Hs),Le(!1),ge(Rl),vt(i.CULL_FACE),we(ns);function vt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Vt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function _e(N,nt){return h[N]!==nt?(i.bindFramebuffer(N,nt),h[N]=nt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function zt(N,nt){let Z=_,pt=!1;if(N){Z=f.get(nt),Z===void 0&&(Z=[],f.set(nt,Z));const ut=N.textures;if(Z.length!==ut.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Dt=ut.length;ft<Dt;ft++)Z[ft]=i.COLOR_ATTACHMENT0+ft;Z.length=ut.length,pt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,pt=!0);pt&&i.drawBuffers(Z)}function ie(N){return S!==N?(i.useProgram(N),S=N,!0):!1}const se={[ts]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};se[Qu]=i.MIN,se[ju]=i.MAX;const Yt={[th]:i.ZERO,[eh]:i.ONE,[nh]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function we(N,nt,Z,pt,ut,ft,Dt,Kt,ct,It){if(N===ns){m===!0&&(Vt(i.BLEND),m=!1);return}if(m===!1&&(vt(i.BLEND),m=!0),N!==$u){if(N!==p||It!==D){if((v!==ts||P!==ts)&&(i.blendEquation(i.FUNC_ADD),v=ts,P=ts),It)switch(N){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}A=null,E=null,C=null,g=null,y.set(0,0,0),U=0,p=N,D=It}return}ut=ut||nt,ft=ft||Z,Dt=Dt||pt,(nt!==v||ut!==P)&&(i.blendEquationSeparate(se[nt],se[ut]),v=nt,P=ut),(Z!==A||pt!==E||ft!==C||Dt!==g)&&(i.blendFuncSeparate(Yt[Z],Yt[pt],Yt[ft],Yt[Dt]),A=Z,E=pt,C=ft,g=Dt),(Kt.equals(y)===!1||ct!==U)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ct),y.copy(Kt),U=ct),p=N,D=!1}function xe(N,nt){N.side===Me?Vt(i.CULL_FACE):vt(i.CULL_FACE);let Z=N.side===nn;nt&&(Z=!Z),Le(Z),N.blending===is&&N.transparent===!1?we(ns):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ce(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function ge(N){N!==Yu?(vt(i.CULL_FACE),N!==G&&(N===Rl?i.cullFace(i.BACK):N===Ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),G=N}function fn(N){N!==X&&(k&&i.lineWidth(N),X=N)}function Ce(N,nt,Z){N?(vt(i.POLYGON_OFFSET_FILL),(F!==nt||H!==Z)&&(F=nt,H=Z,a.getReversed()&&(nt=-nt,Z=-Z),i.polygonOffset(nt,Z))):Vt(i.POLYGON_OFFSET_FILL)}function Ge(N){N?vt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function He(N){N===void 0&&(N=i.TEXTURE0+q-1),et!==N&&(i.activeTexture(N),et=N)}function Ue(N,nt,Z){Z===void 0&&(et===null?Z=i.TEXTURE0+q-1:Z=et);let pt=rt[Z];pt===void 0&&(pt={type:void 0,texture:void 0},rt[Z]=pt),(pt.type!==N||pt.texture!==nt)&&(et!==Z&&(i.activeTexture(Z),et=Z),i.bindTexture(N,nt||Ut[N]),pt.type=N,pt.texture=nt)}function z(){const N=rt[et];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function sn(){try{i.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function he(){try{i.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function _t(){try{i.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Te(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Ht(){try{i.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function x(){try{i.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function V(){try{i.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function lt(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function it(N,nt){d[N]!==nt&&(i.pixelStorei(N,nt),d[N]=nt)}function ht(N){K.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function gt(N){xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function Q(N,nt){let Z=c.get(nt);Z===void 0&&(Z=new WeakMap,c.set(nt,Z));let pt=Z.get(N);pt===void 0&&(pt=i.getUniformBlockIndex(nt,N.name),i.uniformBlockBinding(nt,pt,pt),Z.set(N,pt))}function tt(N,nt,Z){const ut=c.get(nt).get(N);l[ut]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ut,Z),l[ut]=Z)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},et=null,rt={},h={},l={},f=new WeakMap,_=[],S=null,m=!1,p=null,v=null,A=null,E=null,P=null,C=null,g=null,y=new qt(0,0,0),U=0,D=!1,B=null,G=null,X=null,F=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Vt,bindFramebuffer:_e,drawBuffers:zt,useProgram:ie,setBlending:we,setMaterial:xe,setFlipSided:Le,setCullFace:ge,setLineWidth:fn,setPolygonOffset:Ce,setScissorTest:Ge,activeTexture:He,bindTexture:Ue,unbindTexture:z,compressedTexImage2D:sn,compressedTexImage3D:de,texImage2D:x,texImage3D:V,pixelStorei:it,getParameter:lt,updateUBOMapping:Q,uniformBlockBinding:tt,texStorage2D:Ht,texStorage3D:R,texSubImage2D:he,texSubImage3D:_t,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ot,scissor:ht,viewport:gt,reset:dt}}function Ag(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap,d=new Set;let h;const f=new WeakMap,_=new Set,S=new FinalizationRegistry(R=>_.delete(R));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,x){return m?new OffscreenCanvas(R,x):Kr("canvas")}function v(R,x,V){let lt=1;const it=Ht(R);if((it.width>V||it.height>V)&&(lt=V/Math.max(it.width,it.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ht=Math.floor(lt*it.width),gt=Math.floor(lt*it.height);h===void 0&&(h=p(ht,gt));const Q=x?p(ht,gt):h;return Q.width=ht,Q.height=gt,Q.getContext("2d").drawImage(R,0,0,ht,gt),kt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ht+"x"+gt+")."),Q}else return"data"in R&&kt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function A(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,x,V,lt,it,ht=!1){if(R!==null){if(i[R]!==void 0)return i[R];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;lt&&(gt=t.get("EXT_texture_norm16"),gt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8),V===i.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),V===i.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),x===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8),V===i.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),V===i.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),V===i.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){const tt=ht?Yr:Qt.getTransfer(it);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=tt===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),V===i.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(R,x){let V;return R?x===null||x===Fn||x===ls?V=i.DEPTH24_STENCIL8:x===Tn?V=i.DEPTH32F_STENCIL8:x===Vs&&(V=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===ls?V=i.DEPTH_COMPONENT24:x===Tn?V=i.DEPTH_COMPONENT32F:x===Vs&&(V=i.DEPTH_COMPONENT16),V}function y(R,x){return A(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ve&&R.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function U(R){const x=new WeakRef(R);n.get(R).__ref=x,_.add(x),S.register(R,x,x)}function D(R){const x=n.get(R).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function B(R){X(R.target)}function G(R){F(R.target)}function X(R){R.removeEventListener("dispose",B),D(R),q(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function F(R){R.removeEventListener("dispose",G),D(R),ot(R)}function H(){for(const R of _){const x=R.deref();x!==void 0&&(x.isRenderTarget===!0?F(x):X(x))}_.clear(),d.clear()}function q(R){const x=n.get(R);if(x.__webglInit===void 0)return;const V=R.source,lt=f.get(V);if(lt){const it=lt[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&k(R),Object.keys(lt).length===0&&f.delete(V)}n.remove(R)}function k(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const V=R.source,lt=f.get(V);delete lt[x.__cacheKey],a.memory.textures--}function ot(R){const x=n.get(R);x.__depthDisposeCallback&&x.__depthDisposeCallback();const V=R.depthTexture;if(V&&V.renderTarget===R&&X(V),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(x.__webglFramebuffer[it]))for(let ht=0;ht<x.__webglFramebuffer[it].length;ht++)i.deleteFramebuffer(x.__webglFramebuffer[it][ht]);else i.deleteFramebuffer(x.__webglFramebuffer[it]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[it])}else{if(Array.isArray(x.__webglFramebuffer))for(let it=0;it<x.__webglFramebuffer.length;it++)i.deleteFramebuffer(x.__webglFramebuffer[it]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let it=0;it<x.__webglColorRenderbuffer.length;it++)x.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[it]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const lt=R.textures;for(let it=0,ht=lt.length;it<ht;it++){const gt=n.get(lt[it]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(lt[it])}n.remove(R)}let Y=0;function et(){Y=0}function rt(){return Y}function bt(R){Y=R}function Ft(){const R=Y;return R>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function K(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.mipmapsAutoUpdate),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function xt(R,x){const V=n.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const lt=R.image;if(lt===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,R,x);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function Tt(R,x){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){xe(V,R,x);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function Ut(R,x){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){xe(V,R,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function vt(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){Le(V,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const Vt={[Vr]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},_e={[Ve]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},zt={[vh]:i.NEVER,[iu]:i.ALWAYS,[Mh]:i.LESS,[eu]:i.LEQUAL,[Sh]:i.EQUAL,[nu]:i.GEQUAL,[yh]:i.GREATER,[Eh]:i.NOTEQUAL};function ie(R,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===xa||x.magFilter===or||x.magFilter===ui||x.minFilter===an||x.minFilter===xa||x.minFilter===or||x.minFilter===ui)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Vt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Vt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Vt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_e[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,zt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ve||x.minFilter!==or&&x.minFilter!==ui||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",B),U(x));const lt=x.source;let it=f.get(lt);it===void 0&&(it={},f.set(lt,it));const ht=K(x);if(ht!==R.__cacheKey){it[ht]===void 0&&(it[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[ht].usedTimes++;const gt=it[R.__cacheKey];gt!==void 0&&(it[R.__cacheKey].usedTimes--,gt.usedTimes===0&&k(x)),R.__cacheKey=ht,R.__webglTexture=it[ht].texture}return V}function Yt(R,x,V){return Math.floor(Math.floor(R/V)/x)}function we(R,x,V,lt){const ht=R.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,lt,x.data);else{ht.sort((N,nt)=>N.start-nt.start);let gt=0;for(let N=1;N<ht.length;N++){const nt=ht[gt],Z=ht[N],pt=nt.start+nt.count,ut=Yt(Z.start,x.width,4),ft=Yt(nt.start,x.width,4);Z.start<=pt+1&&ut===ft&&Yt(Z.start+Z.count-1,x.width,4)===ut?nt.count=Math.max(nt.count,Z.start+Z.count-nt.start):(++gt,ht[gt]=Z)}ht.length=gt+1;const Q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let N=0,nt=ht.length;N<nt;N++){const Z=ht[N],pt=Math.floor(Z.start/4),ut=Math.ceil(Z.count/4),ft=pt%x.width,Dt=Math.floor(pt/x.width),Kt=ut,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Dt,Kt,ct,V,lt,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function xe(R,x,V){let lt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(lt=i.TEXTURE_3D);const it=se(R,x),ht=x.source;e.bindTexture(lt,R.__webglTexture,i.TEXTURE0+V);const gt=n.get(ht);if(ht.version!==gt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ct=Qt.getPrimaries(Qt.workingColorSpace),It=x.colorSpace===ci?null:Qt.getPrimaries(x.colorSpace),Gt=x.colorSpace===ci||ct===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=v(x.image,!1,s.maxTextureSize);tt=Ot(x,tt);const dt=r.convert(x.format,x.colorSpace),N=r.convert(x.type);let nt=C(x.internalFormat,dt,N,x.normalized,x.colorSpace,x.isVideoTexture);ie(lt,x);let Z;const pt=x.mipmaps,ut=x.isVideoTexture!==!0,ft=gt.__version===void 0||it===!0,Dt=ht.dataReady,Kt=y(x,tt);if(x.isDepthTexture)nt=g(x.format===hi,x.type),ft&&(ut?e.texStorage2D(i.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,dt,N,null));else if(x.isDataTexture)if(pt.length>0){ut&&ft&&e.texStorage2D(i.TEXTURE_2D,Kt,nt,pt[0].width,pt[0].height);for(let ct=0,It=pt.length;ct<It;ct++)Z=pt[ct],ut?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Z.width,Z.height,dt,N,Z.data):e.texImage2D(i.TEXTURE_2D,ct,nt,Z.width,Z.height,0,dt,N,Z.data);x.generateMipmaps=!1}else ut?(ft&&e.texStorage2D(i.TEXTURE_2D,Kt,nt,tt.width,tt.height),Dt&&we(x,tt,dt,N)):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,dt,N,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ut&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,nt,pt[0].width,pt[0].height,tt.depth);for(let ct=0,It=pt.length;ct<It;ct++)if(Z=pt[ct],x.format!==In)if(dt!==null)if(ut){if(Dt)if(x.layerUpdates.size>0){const Gt=cc(Z.width,Z.height,x.format,x.type);for(const Mt of x.layerUpdates){const te=Z.data.subarray(Mt*Gt/Z.data.BYTES_PER_ELEMENT,(Mt+1)*Gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Mt,Z.width,Z.height,1,dt,te)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Z.width,Z.height,tt.depth,dt,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,nt,Z.width,Z.height,tt.depth,0,Z.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Z.width,Z.height,tt.depth,dt,N,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,nt,Z.width,Z.height,tt.depth,0,dt,N,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ut&&ft&&e.texStorage2D(i.TEXTURE_2D,Kt,nt,pt[0].width,pt[0].height);for(let ct=0,It=pt.length;ct<It;ct++)Z=pt[ct],x.format!==In?dt!==null?ut?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Z.width,Z.height,dt,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,nt,Z.width,Z.height,0,Z.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Z.width,Z.height,dt,N,Z.data):e.texImage2D(i.TEXTURE_2D,ct,nt,Z.width,Z.height,0,dt,N,Z.data)}else if(x.isDataArrayTexture)if(ut){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,nt,tt.width,tt.height,tt.depth),Dt)if(x.layerUpdates.size>0){const ct=cc(tt.width,tt.height,x.format,x.type);for(const It of x.layerUpdates){const Gt=tt.data.subarray(It*ct/tt.data.BYTES_PER_ELEMENT,(It+1)*ct/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,tt.width,tt.height,1,dt,N,Gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,N,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,dt,N,tt.data);else if(x.isData3DTexture)ut?(ft&&e.texStorage3D(i.TEXTURE_3D,Kt,nt,tt.width,tt.height,tt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,N,tt.data)):e.texImage3D(i.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,dt,N,tt.data);else if(x.isFramebufferTexture){if(ft)if(ut)e.texStorage2D(i.TEXTURE_2D,Kt,nt,tt.width,tt.height);else{let ct=tt.width,It=tt.height;for(let Gt=0;Gt<Kt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,nt,ct,It,0,dt,N,null),ct>>=1,It>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),tt.parentNode!==ct){ct.appendChild(tt),d.add(x),ct.onpaint=It=>{const Gt=It.changedElements;for(const Mt of d)Gt.includes(Mt.image)&&(Mt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{const Gt=i.RGBA,Mt=i.RGBA,te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,Mt,te,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ut&&ft){const ct=Ht(pt[0]);e.texStorage2D(i.TEXTURE_2D,Kt,nt,ct.width,ct.height)}for(let ct=0,It=pt.length;ct<It;ct++)Z=pt[ct],ut?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,dt,N,Z):e.texImage2D(i.TEXTURE_2D,ct,nt,dt,N,Z);x.generateMipmaps=!1}else if(ut){if(ft){const ct=Ht(tt);e.texStorage2D(i.TEXTURE_2D,Kt,nt,ct.width,ct.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,N,tt)}else e.texImage2D(i.TEXTURE_2D,0,nt,dt,N,tt);A(x)&&x.mipmapsAutoUpdate===!0&&E(lt),gt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Le(R,x,V){if(x.image.length!==6)return;const lt=se(R,x),it=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const ht=n.get(it);if(it.version!==ht.__version||lt===!0){e.activeTexture(i.TEXTURE0+V);const gt=Qt.getPrimaries(Qt.workingColorSpace),Q=x.colorSpace===ci?null:Qt.getPrimaries(x.colorSpace),tt=x.colorSpace===ci||gt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const dt=x.isCompressedTexture||x.image[0].isCompressedTexture,N=x.image[0]&&x.image[0].isDataTexture,nt=[];for(let Mt=0;Mt<6;Mt++)!dt&&!N?nt[Mt]=v(x.image[Mt],!0,s.maxCubemapSize):nt[Mt]=N?x.image[Mt].image:x.image[Mt],nt[Mt]=Ot(x,nt[Mt]);const Z=nt[0],pt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type);let ft=C(x.internalFormat,pt,ut,x.normalized,x.colorSpace);const Dt=x.isVideoTexture!==!0,Kt=ht.__version===void 0||lt===!0,ct=it.dataReady;let It=y(x,Z);ie(i.TEXTURE_CUBE_MAP,x);let Gt;if(x.isDepthTexture){if(ft=g(x.format===hi,x.type),Kt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,Z.width,Z.height);else for(let Mt=0;Mt<6;Mt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ft,Z.width,Z.height,0,pt,ut,null)}else if(dt){Dt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ft,Z.width,Z.height);for(let Mt=0;Mt<6;Mt++){Gt=nt[Mt].mipmaps;for(let te=0;te<Gt.length;te++){const ye=Gt[te];x.format!==In?pt!==null?Dt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te,0,0,ye.width,ye.height,pt,ye.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te,ft,ye.width,ye.height,0,ye.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te,0,0,ye.width,ye.height,pt,ut,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te,ft,ye.width,ye.height,0,pt,ut,ye.data)}}}else{if(Gt=x.mipmaps,Dt&&Kt){Gt.length>0&&It++;const Mt=Ht(nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ft,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(N){Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,nt[Mt].width,nt[Mt].height,pt,ut,nt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ft,nt[Mt].width,nt[Mt].height,0,pt,ut,nt[Mt].data);for(let te=0;te<Gt.length;te++){const rn=Gt[te].image[Mt].image;Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te+1,0,0,rn.width,rn.height,pt,ut,rn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te+1,ft,rn.width,rn.height,0,pt,ut,rn.data)}}else{Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,pt,ut,nt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ft,pt,ut,nt[Mt]);for(let te=0;te<Gt.length;te++){const ye=Gt[te];Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te+1,0,0,pt,ut,ye.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,te+1,ft,pt,ut,ye.image[Mt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),ht.__version=it.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ge(R,x,V,lt,it,ht){const gt=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),tt=C(V.internalFormat,gt,Q,V.normalized,V.colorSpace),dt=n.get(x),N=n.get(V);if(N.__renderTarget=x,!dt.__hasExternalTextures){const nt=Math.max(1,x.width>>ht),Z=Math.max(1,x.height>>ht);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,ht,tt,nt,Z,x.depth,0,gt,Q,null):e.texImage2D(it,ht,tt,nt,Z,0,gt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,it,N.__webglTexture,0,he(x)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,it,N.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function fn(R,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const lt=x.depthTexture,it=lt&&lt.isDepthTexture?lt.type:null,ht=g(x.stencilBuffer,it),gt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),ht,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{const lt=x.textures;for(let it=0;it<lt.length;it++){const ht=lt[it],gt=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),tt=C(ht.internalFormat,gt,Q,ht.normalized,ht.colorSpace);_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(x),tt,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(x),tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(R,x,V){const lt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=n.get(x.depthTexture);it.__renderTarget=x;const ht=lt?x.depthTexture.image[0]:x.depthTexture.image;(!it.__webglTexture||ht.width!==x.width||ht.height!==x.height)&&(ht.width=x.width,ht.height=x.height,x.depthTexture.needsUpdate=!0),lt?vt(x.depthTexture,0):xt(x.depthTexture,0);const gt=it.__webglTexture,Q=he(x),tt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,dt=x.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===pi)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,tt,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,dt,tt,gt,0);else if(x.depthTexture.format===hi)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,tt,gt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,dt,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){const x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const lt=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),lt){const it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,lt.removeEventListener("dispose",it)};lt.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=lt}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let lt=0;lt<6;lt++)Ce(x.__webglFramebuffer[lt],R,lt);else R.texture.mipmaps.length>0?Ce(x.__webglFramebuffer[0],R,0):Ce(x.__webglFramebuffer,R,0);else if(V){x.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[lt]),x.__webglDepthbuffer[lt]===void 0)x.__webglDepthbuffer[lt]=i.createRenderbuffer(),fn(x.__webglDepthbuffer[lt],R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ht)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),fn(x.__webglDepthbuffer,R,!1);else{const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function He(R,x,V){const lt=n.get(R);x!==void 0&&ge(lt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ge(R)}function Ue(R){const x=R.texture,V=n.get(R),lt=n.get(x);R.addEventListener("dispose",G),U(R);const it=R.textures,ht=R.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=x.version,a.memory.textures++),ht){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let tt=0;tt<x.mipmaps.length;tt++)V.__webglFramebuffer[Q][tt]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Q=0,tt=it.length;Q<tt;Q++){const dt=n.get(it[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&_t(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){const tt=it[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const dt=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),nt=C(tt.internalFormat,dt,N,tt.normalized,tt.colorSpace,R.isXRRenderTarget===!0),Z=he(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,nt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),fn(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),ie(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ge(V.__webglFramebuffer[Q][tt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else ge(V.__webglFramebuffer[Q],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);A(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Q=0,tt=it.length;Q<tt;Q++){const dt=it[Q],N=n.get(dt);let nt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),ie(nt,dt),ge(V.__webglFramebuffer,R,dt,i.COLOR_ATTACHMENT0+Q,nt,0),A(dt)&&E(nt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,lt.__webglTexture),ie(Q,x),x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)ge(V.__webglFramebuffer[tt],R,x,i.COLOR_ATTACHMENT0,Q,tt);else ge(V.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,Q,0);A(x)?E(Q):x.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Ge(R)}function z(R){const x=R.textures;for(let V=0,lt=x.length;V<lt;V++){const it=x[V];if(A(it)&&it.mipmapsAutoUpdate===!0){const ht=P(R),gt=n.get(it).__webglTexture;e.bindTexture(ht,gt),E(ht),e.unbindTexture()}}}const sn=[];function de(R){if(R.samples>0){if(_t(R)===!1){const x=R.textures,V=R.width,lt=R.height;let it=i.COLOR_BUFFER_BIT;const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),Q=x.length>1;if(Q)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);const N=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,V,lt,0,0,V,lt,it,i.NEAREST),l===!0&&(sn.length=0,sn.push(i.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&sn.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,sn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[dt]);const N=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function he(R){return Math.min(s.maxSamples,R.samples)}function _t(R){const x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function Ot(R,x){const V=R.colorSpace,lt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==qr&&V!==ci&&(Qt.getTransfer(V)===le?(lt!==In||it!==hn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",V)),x}function Ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ft,this.resetTextureUnits=et,this.getTextureUnits=rt,this.setTextureUnits=bt,this.setTexture2D=xt,this.setTexture2DArray=Tt,this.setTexture3D=Ut,this.setTextureCube=vt,this.rebindTextures=He,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_t,this.dispose=H}function Rg(i,t){function e(n,s=ci){let r;const a=Qt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$c)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===tu)return i.RGB;if(n===In)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Qo)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===Gr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo||n===po||n===mo||n===Wr||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===ho)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===po)return r.COMPRESSED_R11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wr)return r.COMPRESSED_RG11_EAC;if(n===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===Eo||n===bo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Do||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Uo||n===Xr||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Lg,p={},v=e.getContextAttributes();let A=null,E=null;const P=[],C=[],g=new Rt;let y=null,U=null;const D=new un;D.viewport=new Se;const B=new un;B.viewport=new Se;const G=[D,B],X=new Vd;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xt=P[K];return xt===void 0&&(xt=new wa,P[K]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(K){let xt=P[K];return xt===void 0&&(xt=new wa,P[K]=xt),xt.getGripSpace()},this.getHand=function(K){let xt=P[K];return xt===void 0&&(xt=new wa,P[K]=xt),xt.getHandSpace()};function q(K){const xt=C.indexOf(K.inputSource);if(xt===-1)return;const Tt=P[xt];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,c||a),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ot);for(let K=0;K<P.length;K++){const xt=C[K];xt!==null&&(C[K]=null,P[K].disconnect(xt))}F=null,H=null,m.reset();for(const K in p)delete p[K];if(t.setRenderTarget(A),f=null,h=null,d=null,s=null,E=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(g.width,g.height,!1),U!==null){const K=U.camera;K.fov=U.fov,K.zoom=U.zoom,K.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ot),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ut=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?hi:pi,Ut=v.stencil?ls:Fn);const Vt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Nn(h.textureWidth,h.textureHeight,{format:In,type:hn,depthTexture:new us(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Nn(f.framebufferWidth,f.framebufferHeight,{format:In,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(K){for(let xt=0;xt<K.removed.length;xt++){const Tt=K.removed[xt],Ut=C.indexOf(Tt);Ut>=0&&(C[Ut]=null,P[Ut].disconnect(Tt))}for(let xt=0;xt<K.added.length;xt++){const Tt=K.added[xt];let Ut=C.indexOf(Tt);if(Ut===-1){for(let Vt=0;Vt<P.length;Vt++)if(Vt>=C.length){C.push(Tt),Ut=Vt;break}else if(C[Vt]===null){C[Vt]=Tt,Ut=Vt;break}if(Ut===-1)break}const vt=P[Ut];vt&&vt.connect(Tt)}}function Y(K,xt){xt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let xt=K.near,Tt=K.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),X.near=B.near=D.near=xt,X.far=B.far=D.far=Tt,(F!==X.near||H!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,H=X.far),X.layers.mask=K.layers.mask|6,D.layers.mask=X.layers.mask&-5,B.layers.mask=X.layers.mask&-3;const Ut=K.parent,vt=X.cameras;Y(X,Ut);for(let Vt=0;Vt<vt.length;Vt++)Y(vt[Vt],Ut);X.projectionMatrix.copy(D.projectionMatrix),X.projectionMatrixInverse.copy(D.projectionMatrixInverse),U===null&&K.isPerspectiveCamera&&(U={camera:K,fov:K.fov,zoom:K.zoom}),et(K,X,Ut)};function et(K,xt,Tt){Tt===null?K.matrix.copy(xt.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(xt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xt.projectionMatrix),K.projectionMatrixInverse.copy(xt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(K){return p[K]};let rt=null;function bt(K,xt){if(u=xt.getViewerPose(c||a),_=xt,u!==null){const Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Ut=!1;Tt.length!==X.cameras.length&&(X.cameras.length=0,Ut=!0);for(let zt=0;zt<Tt.length;zt++){const ie=Tt[zt];let se=null;if(f!==null)se=f.getViewport(ie);else{const we=d.getViewSubImage(h,ie);se=we.viewport,zt===0&&(t.setRenderTargetTextures(E,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(E))}let Yt=G[zt];Yt===void 0&&(Yt=new un,Yt.layers.enable(zt),Yt.viewport=new Se,G[zt]=Yt),Yt.matrix.fromArray(ie.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ie.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(se.x,se.y,se.width,se.height),zt===0&&(X.matrix.copy(Yt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ut===!0&&X.cameras.push(Yt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const zt=d.getDepthInformation(Tt[0]);zt&&zt.isValid&&zt.texture&&m.init(zt,s.renderState)}if(vt&&vt.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<Tt.length;zt++){const ie=Tt[zt].camera;if(ie){let se=p[ie];se||(se=new gu,p[ie]=se);const Yt=d.getCameraImage(ie);se.sourceTexture=Yt}}}}for(let Tt=0;Tt<P.length;Tt++){const Ut=C[Tt],vt=P[Tt];Ut!==null&&vt!==void 0&&vt.update(Ut,xt,c||a)}rt&&rt(K,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),_=null}const Ft=new yu;Ft.setAnimationLoop(bt),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}const Ig=new Jt,Du=new Xt;Du.set(-1,0,0,0,1,0,0,0,1);function Ng(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,A,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),A=v.envMap,E=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Du),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ug(i,t,e,n){let s={},r={};function a(v,A){const E=A.program;n.uniformBlockBinding(v,E,s[v.id])}function o(v,A){let E=s[v.id];E===void 0&&(_(v),E=l(v),s[v.id]=E,v.addEventListener("dispose",m));const P=A.program;n.updateUBOMapping(v,P);const C=t.render.frame;r[v.id]!==C&&(c(v),r[v.id]=C)}function l(v){const A=i.createBuffer(),E=v.__size,P=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){const A=s[v.id],E=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,g=E.length;C<g;C++){const y=E[C];if(Array.isArray(y))for(let U=0,D=y.length;U<D;U++)u(y[U],C,U,P);else u(y,C,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,A,E,P){if(h(v,A,E,P)===!0){const C=v.__offset,g=v.value;if(Array.isArray(g)){let y=0;for(let U=0;U<g.length;U++){const D=g[U],B=S(D,!0);d(D,v.__data,y),y+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,v.__data)}}function d(v,A,E){typeof v=="number"||typeof v=="boolean"?A[E]=v:v.isMatrix3?(A[E]=v.elements[0],A[E+1]=v.elements[1],A[E+2]=v.elements[2],A[E+3]=0,A[E+4]=v.elements[3],A[E+5]=v.elements[4],A[E+6]=v.elements[5],A[E+7]=0,A[E+8]=v.elements[6],A[E+9]=v.elements[7],A[E+10]=v.elements[8],A[E+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-E),E):v.toArray(A,E)}function h(v,A,E,P){const C=v.value,g=A+"_"+E;if(Array.isArray(C)){P[g]===void 0&&(P[g]=[]);const y=P[g];let U=!1;for(let D=0;D<C.length;D++)f(C[D],y,D)===!0&&(U=!0);return U}return f(C,P,g)}function f(v,A,E){if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const P=A[E];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function _(v){const A=v.uniforms;let E=0;const P=16;for(let g=0,y=A.length;g<y;g++){const U=Array.isArray(A[g])?A[g]:[A[g]];for(let D=0,B=U.length;D<B;D++){const G=U[D],X=Array.isArray(G.value)?G.value:[G.value],F=Array.isArray(A[g])||Array.isArray(G.value);let H=E;for(let k=0,ot=X.length;k<ot;k++){const Y=X[k],et=S(Y,F),rt=E%P,bt=rt%et.boundary,Ft=rt+bt;E+=bt,Ft!==0&&P-Ft<et.storage&&(E+=P-Ft),k===0&&(H=E),E+=et.storage}const q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new q((E-H)/Float32Array.BYTES_PER_ELEMENT),G.__offset=H}}const C=E%P;return C>0&&(E+=P-C),v.__size=E,v.__cache={},this}function S(v,A){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(v){const A=v.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const Fg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function Og(){return Pn===null&&(Pn=new fu(Fg,16,16,Li,On),Pn.name="DFG_LUT",Pn.minFilter=an,Pn.magFilter=an,Pn.wrapS=qn,Pn.wrapT=qn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Bg{constructor(t={}){const{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const S=f,m=new Set([el,tl,jo]),p=new Set([hn,Fn,Vs,ls,Zo,Jo]),v=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let P=null,C=null;const g=[],y=[];let U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1,G=null,X=null,F=null,H=null;this._outputColorSpace=en;let q=0,k=0,ot=null,Y=-1,et=null;const rt=new Se,bt=new Se;let Ft=null;const K=new qt(0);let xt=0,Tt=e.width,Ut=e.height,vt=1,Vt=null,_e=null;const zt=new Se(0,0,Tt,Ut),ie=new Se(0,0,Tt,Ut);let se=!1;const Yt=new Xs,we=new ol;let xe=!1,Le=!1;const ge=new Jt,fn=new L,Ce=new Se,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Ue(){return ot===null?vt:1}let z=n;function sn(M,O){return e.getContext(M,O)}let de,he,_t,Te,Ot,Ht,R,x,V,lt,it,ht,gt,Q,tt,dt,N,nt,Z,pt,ut,ft,Dt;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),z===null){const O="webgl2";if(z=sn(O,M),z===null)throw sn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(M){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ne("WebGLRenderer: "+M.message),M}function Kt(){de=new Hm(z),de.init(),ut=new Rg(z,de),he=new Pm(z,de,t,ut),_t=new Tg(z,de),he.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),X=z.createFramebuffer(),F=z.createFramebuffer(),H=z.createFramebuffer(),Te=new Wm(z),Ot=new dg,Ht=new Ag(z,de,_t,Ot,he,ut,Te),R=new Gm(D),x=new Xd(z),ft=new Rm(z,x),V=new km(z,x,Te,ft),lt=new qm(z,V,x,ft,Te),nt=new Xm(z,he,Ht),tt=new Lm(Ot),it=new hg(D,R,de,he,ft,tt),ht=new Ng(D,Ot),gt=new pg,Q=new Mg(de),N=new Am(D,R,_t,lt,_,l),dt=new wg(D,lt,he),Dt=new Ug(z,Te,he,_t),Z=new Cm(z,de,Te),pt=new Vm(z,de,Te),Te.programs=it.programs,D.capabilities=he,D.extensions=de,D.properties=Ot,D.renderLists=gt,D.shadowMap=dt,D.state=_t,D.info=Te}S!==hn&&(U=new Km(S,e.width,e.height,o,s,r));const ct=new Dg(D,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=de.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=de.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(M){M!==void 0&&(vt=M,this.setSize(Tt,Ut,!1))},this.getSize=function(M){return M.set(Tt,Ut)},this.setSize=function(M,O,b=!0){if(ct.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=M,Ut=O,e.width=Math.floor(M*vt),e.height=Math.floor(O*vt),b===!0&&(e.style.width=M+"px",e.style.height=O+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Tt*vt,Ut*vt).floor()},this.setDrawingBufferSize=function(M,O,b){Tt=M,Ut=O,vt=b,e.width=Math.floor(M*b),e.height=Math.floor(O*b),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(S===hn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(rt)},this.getViewport=function(M){return M.copy(zt)},this.setViewport=function(M,O,b,T){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,O,b,T),_t.viewport(rt.copy(zt).multiplyScalar(Ue()).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,O,b,T){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,O,b,T),_t.scissor(bt.copy(ie).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(M){_t.setScissorTest(se=M)},this.setOpaqueSort=function(M){Vt=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,b=!0){let T=0;if(M){let w=!1;if(ot!==null){const W=ot.texture.format;w=m.has(W)}if(w){const W=ot.texture.type,J=p.has(W),$=N.getClearColor(),st=N.getClearAlpha(),at=$.r,St=$.g,Nt=$.b;J?(v[0]=at,v[1]=St,v[2]=Nt,v[3]=st,z.clearBufferuiv(z.COLOR,0,v)):(A[0]=at,A[1]=St,A[2]=Nt,A[3]=st,z.clearBufferiv(z.COLOR,0,A))}else T|=z.COLOR_BUFFER_BIT}O&&(T|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),b&&(T|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T!==0&&z.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),N.dispose(),gt.dispose(),Q.dispose(),Ht.dispose(),Ot.dispose(),R.dispose(),lt.dispose(),V.dispose(),ft.dispose(),Dt.dispose(),it.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ui),ct.removeEventListener("sessionend",js),Rn.stop()};function It(M){M.preventDefault(),$r("WebGLRenderer: Context Lost."),B=!0}function Gt(){$r("WebGLRenderer: Context Restored."),B=!1;const M=Te.autoReset,O=dt.enabled,b=dt.autoUpdate,T=dt.needsUpdate,w=dt.type;Kt(),Te.autoReset=M,dt.enabled=O,dt.autoUpdate=b,dt.needsUpdate=T,dt.type=w}function Mt(M){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){const O=M.target;O.removeEventListener("dispose",te),ye(O)}function ye(M){rn(M),Ot.remove(M)}function rn(M){const O=Ot.get(M).programs;O!==void 0&&(O.forEach(function(b){it.releaseProgram(b)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,b,T,w,W){O===null&&(O=Ge);const J=w.isMesh&&w.matrixWorld.determinantAffine()<0,$=ti(M,O,b,T,w);_t.setMaterial(T,J);let st=b.index,at=1;if(T.wireframe===!0){if(st=V.getWireframeAttribute(b),st===void 0)return;at=2}const St=b.drawRange,Nt=b.attributes.position;let yt=St.start*at,Wt=(St.start+St.count)*at;W!==null&&(yt=Math.max(yt,W.start*at),Wt=Math.min(Wt,(W.start+W.count)*at)),st!==null?(yt=Math.max(yt,0),Wt=Math.min(Wt,st.count)):Nt!=null&&(yt=Math.max(yt,0),Wt=Math.min(Wt,Nt.count));const fe=Wt-yt;if(fe<0||fe===1/0)return;ft.setup(w,T,$,b,st);let oe,ae=Z;if(st!==null&&(oe=x.get(st),ae=pt,ae.setIndex(oe)),w.isMesh)T.wireframe===!0?(_t.setLineWidth(T.wireframeLinewidth*Ue()),ae.setMode(z.LINES)):ae.setMode(z.TRIANGLES);else if(w.isLine){let We=T.linewidth;We===void 0&&(We=1),_t.setLineWidth(We*Ue()),w.isLineSegments?ae.setMode(z.LINES):w.isLineLoop?ae.setMode(z.LINE_LOOP):ae.setMode(z.LINE_STRIP)}else w.isPoints?ae.setMode(z.POINTS):w.isSprite&&ae.setMode(z.TRIANGLES);if(w.isBatchedMesh)if(de.get("WEBGL_multi_draw"))ae.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const We=w._multiDrawStarts,Pt=w._multiDrawCounts,Qe=w._multiDrawCount,re=st?x.get(st).bytesPerElement:1,Mi=Ot.get(T).currentProgram.getUniforms();for(let Xe=0;Xe<Qe;Xe++)Mi.setValue(z,"_gl_DrawID",Xe),ae.render(We[Xe]/re,Pt[Xe])}else if(w.isInstancedMesh)ae.renderInstances(yt,fe,w.count);else if(b.isInstancedBufferGeometry){const We=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,Pt=Math.min(b.instanceCount,We);ae.renderInstances(yt,fe,Pt)}else ae.render(yt,fe)};function Bn(M,O,b,T){G!==null&&M.isNodeMaterial&&G.setObject(T,M),xe===!0&&tt.setState(M,b,!1),M.transparent===!0&&M.side===Me&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,vi(M,O,T),M.side=Pi,M.needsUpdate=!0,vi(M,O,T),M.side=Me):vi(M,O,T)}this.compile=function(M,O,b=null){b===null&&(b=M),G!==null&&G.renderStart(M,O,b),C=Q.get(b),C.init(O),y.push(C),b.traverseVisible(function(w){w.isLight&&w.layers.test(O.layers)&&(C.pushLight(w),w.castShadow&&C.pushShadow(w))}),M!==b&&M.traverseVisible(function(w){w.isLight&&w.layers.test(O.layers)&&(C.pushLight(w),w.castShadow&&C.pushShadow(w))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),Le=this.localClippingEnabled,xe=tt.init(this.clippingPlanes,Le),xe===!0&&tt.setGlobalState(this.clippingPlanes,O),G!==null&&dt.render(C.state.shadowsArray,b,O);const T=new Set;return M.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const W=w.material;if(W)if(Array.isArray(W))for(let J=0;J<W.length;J++){const $=W[J];Bn($,b,O,w),T.add($)}else Bn(W,b,O,w),T.add(W)}),C=y.pop(),G!==null&&G.renderEnd(),T},this.compileAsync=function(M,O,b=null){const T=this.compile(M,O,b);return new Promise(w=>{function W(){if(T.forEach(function(J){const st=Ot.get(J).currentProgram;(st===void 0||st.isReady())&&T.delete(J)}),T.size===0){w(M);return}setTimeout(W,10)}de.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Qs=null;function ma(M){Qs&&Qs(M)}function Ui(){Rn.stop()}function js(){Rn.start()}const Rn=new yu;Rn.setAnimationLoop(ma),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){Qs=M,ct.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},ct.addEventListener("sessionstart",Ui),ct.addEventListener("sessionend",js),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;G!==null&&G.renderStart(M,O);const b=ct.enabled===!0&&ct.isPresenting===!0,T=U!==null&&(ot===null||b)&&U.begin(D,ot);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,O,ot),C=Q.get(M,y.length),C.init(O),C.state.textureUnits=Ht.getTextureUnits(),y.push(C),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?we.setFromArrayCamera(O):Yt.setFromProjectionMatrix(ge,An,O.reversedDepth),Le=this.localClippingEnabled,xe=tt.init(this.clippingPlanes,Le),P=gt.get(M,g.length),P.init(),g.push(P),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){const J=D.xr.getDepthSensingMesh();J!==null&&ps(J,O,-1/0,D.sortObjects)}ps(M,O,0,D.sortObjects),P.finish(),G!==null&&G.updateLights(C.state.lightsArray),D.sortObjects===!0&&P.sort(Vt,_e),He=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,He&&N.addToRenderList(P,M),this.info.autoReset===!0&&this.info.reset(),xe===!0&&tt.beginShadows();const w=C.state.shadowsArray;if(dt.render(w,M,O),xe===!0&&tt.endShadows(),(T&&U.hasRenderPass())===!1){const J=P.opaque,$=P.transmissive;if(C.setupLights(),O.isArrayCamera){const st=O.cameras;if($.length>0)for(let at=0,St=st.length;at<St;at++){const Nt=st[at];er(J,$,M,Nt)}He&&N.render(M);for(let at=0,St=st.length;at<St;at++){const Nt=st[at];tr(P,M,Nt,Nt.viewport)}}else $.length>0&&er(J,$,M,O),He&&N.render(M),tr(P,M,O)}ot!==null&&k===0&&(Ht.updateMultisampleRenderTarget(ot),Ht.updateRenderTargetMipmap(ot)),T&&U.end(D),M.isScene===!0&&M.onAfterRender(D,M,O),ft.resetDefaultState(),Y=-1,et=null,y.pop(),y.length>0?(C=y[y.length-1],Ht.setTextureUnits(C.state.textureUnits),xe===!0&&tt.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,g.pop(),g.length>0?P=g[g.length-1]:P=null,G!==null&&G.renderEnd()};function ps(M,O,b,T){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)b=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){const J=O.isArrayCamera?we:Yt;if(!M.frustumCulled||M.intersectsFrustum(J)){T&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);const $=lt.update(M),st=M.material;st.visible&&P.push(M,$,st,b,Ce.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){const J=O.isArrayCamera?we:Yt;if(!M.frustumCulled||M.intersectsFrustum(J)){const $=lt.update(M),st=M.material;if(T&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ce.copy($.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(st)){const at=$.groups;for(let St=0,Nt=at.length;St<Nt;St++){const yt=at[St],Wt=st[yt.materialIndex];Wt&&Wt.visible&&P.push(M,$,Wt,b,Ce.z,yt,O)}}else st.visible&&P.push(M,$,st,b,Ce.z,null,O)}}}const W=M.children;for(let J=0,$=W.length;J<$;J++)ps(W[J],O,b,T)}function tr(M,O,b,T){const{opaque:w,transmissive:W,transparent:J}=M;C.setupLightsView(b),xe===!0&&tt.setGlobalState(D.clippingPlanes,b),T&&_t.viewport(rt.copy(T)),w.length>0&&zn(w,O,b),W.length>0&&zn(W,O,b),J.length>0&&zn(J,O,b),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function er(M,O,b,T){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[T.id]===void 0){const yt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[T.id]=new Nn(1,1,{generateMipmaps:!0,type:yt?On:hn,minFilter:ui,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const W=C.state.transmissionRenderTarget[T.id],J=T.viewport||rt;W.setSize(J.z*D.transmissionResolutionScale,J.w*D.transmissionResolutionScale);const $=D.getRenderTarget(),st=D.getActiveCubeFace(),at=D.getActiveMipmapLevel();D.setRenderTarget(W),D.getClearColor(K),xt=D.getClearAlpha(),xt<1&&D.setClearColor(16777215,.5),D.clear(),He&&N.render(b);const St=D.toneMapping;D.toneMapping=Yn;const Nt=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),C.setupLightsView(T),xe===!0&&tt.setGlobalState(D.clippingPlanes,T),zn(M,b,T),Ht.updateMultisampleRenderTarget(W),Ht.updateRenderTargetMipmap(W),de.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Wt=0,fe=O.length;Wt<fe;Wt++){const oe=O[Wt],{object:ae,geometry:We,material:Pt,group:Qe}=oe;if(Pt.side===Me&&ae.layers.test(T.layers)){const re=Pt.side;Pt.side=nn,Pt.needsUpdate=!0,ms(ae,b,T,We,Pt,Qe),Pt.side=re,Pt.needsUpdate=!0,yt=!0}}yt===!0&&(Ht.updateMultisampleRenderTarget(W),Ht.updateRenderTargetMipmap(W))}D.setRenderTarget($,st,at),D.setClearColor(K,xt),Nt!==void 0&&(T.viewport=Nt),D.toneMapping=St}function zn(M,O,b){const T=O.isScene===!0?O.overrideMaterial:null;for(let w=0,W=M.length;w<W;w++){const J=M[w],{object:$,geometry:st,group:at}=J;let St=J.material;St.allowOverride===!0&&T!==null&&(St=T),$.layers.test(b.layers)&&ms($,O,b,st,St,at)}}function ms(M,O,b,T,w,W){G!==null&&w.isNodeMaterial&&G.setObject(M,w),M.onBeforeRender(D,O,b,T,w,W),M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),w.onBeforeRender(D,O,b,T,M,W),w.transparent===!0&&w.side===Me&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,D.renderBufferDirect(b,O,T,w,M,W),w.side=Pi,w.needsUpdate=!0,D.renderBufferDirect(b,O,T,w,M,W),w.side=Me):D.renderBufferDirect(b,O,T,w,M,W),M.onAfterRender(D,O,b,T,w,W)}function gs(M){let O=0;for(const b of M)b.texture!==null&&O++;return O}function vi(M,O,b){O.isScene!==!0&&(O=Ge);const T=Ot.get(M),w=C.state.lights,W=C.state.shadowsArray,J=w.state.version,$=it.getParameters(M,w.state,W,O,b,C.state.lightProbeGridArray),st=it.getProgramCacheKey($);let at=T.programs;T.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,T.fog=O.fog;const St=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;T.envMap=R.get(M.envMap||T.environment,St),T.envMapRotation=T.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,at===void 0&&(M.addEventListener("dispose",te),at=new Map,T.programs=at,T.programVariants=new Map);let Nt=at.get(st);if(Nt!==void 0){if(T.currentProgram===Nt&&T.lightsStateVersion===J)return Fi(M,$),Nt}else $.uniforms=it.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,b,$),M.onBeforeCompile($,D),Nt=it.acquireProgram($,st),at.set(st,Nt),T.uniforms=$.uniforms;const yt=T.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=tt.uniform),Fi(M,$),T.needsLights=ga(M),T.lightsStateVersion=J,T.needsLights&&(yt.ambientLightColor.value=w.state.ambient,yt.lightProbe.value=w.state.probe,yt.sunLights.value=w.state.sun,yt.sunLightShadows.value=w.state.sunShadow,yt.directionalLights.value=w.state.directional,yt.directionalLightShadows.value=w.state.directionalShadow,yt.spotLights.value=w.state.spot,yt.spotLightShadows.value=w.state.spotShadow,yt.rectAreaLights.value=w.state.rectArea,yt.ltc_1.value=w.state.rectAreaLTC1,yt.ltc_2.value=w.state.rectAreaLTC2,yt.pointLights.value=w.state.point,yt.pointLightShadows.value=w.state.pointShadow,yt.hemisphereLights.value=w.state.hemi,yt.sunShadowMatrix.value=w.state.sunShadowMatrix,yt.sunShadowCascade.value=w.state.sunShadowCascade,yt.directionalShadowMatrix.value=w.state.directionalShadowMatrix,yt.spotLightMatrix.value=w.state.spotLightMatrix,yt.spotLightMap.value=w.state.spotLightMap,yt.pointShadowMatrix.value=w.state.pointShadowMatrix),T.numLightProbeGrids=gs(C.state.lightProbeGridArray),T.currentProgram=Nt,T.uniformsList=null,Nt}function nr(M,O,b,T,w){const W=Ot.get(M),J=W.currentProgram.id+","+T+","+w;let $=W.programVariants.get(J);return $===void 0?($=vi(M,O,b),W.programVariants.set(J,$)):(W.currentProgram=$,W.uniformsList=null,W.outputColorSpace=T,W.toneMapping=w),$}function ir(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Fi(M,O){const b=Ot.get(M);b.outputColorSpace=O.outputColorSpace,b.batching=O.batching,b.batchingColor=O.batchingColor,b.instancing=O.instancing,b.instancingColor=O.instancingColor,b.instancingMorph=O.instancingMorph,b.skinning=O.skinning,b.morphTargets=O.morphTargets,b.morphNormals=O.morphNormals,b.morphColors=O.morphColors,b.morphTargetsCount=O.morphTargetsCount,b.numClippingPlanes=O.numClippingPlanes,b.numIntersection=O.numClipIntersection,b.vertexAlphas=O.vertexAlphas,b.vertexTangents=O.vertexTangents,b.toneMapping=O.toneMapping}function ti(M,O,b,T,w){O.isScene!==!0&&(O=Ge),Ht.resetTextureUnits();const W=O.fog,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,$=ot===null?D.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qt.workingColorSpace,st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,at=R.get(T.envMap||J,st),St=T.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,Nt=!!b.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),yt=!!b.morphAttributes.position,Wt=!!b.morphAttributes.normal,fe=!!b.morphAttributes.color;let oe=Yn;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(oe=D.toneMapping);const ae=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,We=ae!==void 0?ae.length:0,Pt=Ot.get(T),Qe=C.state.lights;if(xe===!0&&(Le===!0||M!==et)){const ve=M===et&&T.id===Y;tt.setState(T,M,ve)}let re=!1,Mi=!1;T.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Qe.state.version||w.isBatchedMesh&&Pt.batching===!1||!w.isBatchedMesh&&Pt.batching===!0||w.isBatchedMesh&&Pt.batchingColor===!0&&w._colorsTexture===null||w.isBatchedMesh&&Pt.batchingColor===!1&&w._colorsTexture!==null||w.isInstancedMesh&&Pt.instancing===!1||!w.isInstancedMesh&&Pt.instancing===!0||w.isSkinnedMesh&&Pt.skinning===!1||!w.isSkinnedMesh&&Pt.skinning===!0||w.isInstancedMesh&&Pt.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Pt.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Pt.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Pt.instancingMorph===!1&&w.morphTexture!==null||Pt.envMap!==at||T.fog===!0&&Pt.fog!==W||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==tt.numPlanes||Pt.numIntersection!==tt.numIntersection)||Pt.vertexAlphas!==St||Pt.vertexTangents!==Nt||Pt.morphTargets!==yt||Pt.morphNormals!==Wt||Pt.morphColors!==fe||Pt.morphTargetsCount!==We||Pt.numLightProbeGrids!==gs(C.state.lightProbeGridArray)?re=!0:(Pt.outputColorSpace!==$||Pt.toneMapping!==oe)&&(Mi=!0):(re=!0,Pt.__version=T.version);let Xe=Pt.currentProgram;(re===!0||Mi===!0)&&(Xe=Mi===!0?nr(T,O,w,$,oe):vi(T,O,w),G&&T.isNodeMaterial&&G.onUpdateProgram(T,Xe,Pt));let ar=!1,ei=!1,Si=!1;const ee=Xe.getUniforms(),ke=Pt.uniforms;if(_t.useProgram(Xe.program)&&(ar=!0,ei=!0,Si=!0),T.id!==Y&&(Y=T.id,ei=!0),ar||et!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ee.setValue(z,"projectionMatrix",M.projectionMatrix),ee.setValue(z,"viewMatrix",M.matrixWorldInverse);const Fe=ee.map.cameraPosition;Fe!==void 0&&Fe.setValue(z,fn.setFromMatrixPosition(M.matrixWorld)),he.logarithmicDepthBuffer&&ee.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&ee.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),et!==M&&(et=M,ei=!0,Si=!0)}if(Pt.needsLights&&(Qe.state.sunShadowMap.length>0&&ee.setValue(z,"sunShadowMap",Qe.state.sunShadowMap,Ht),Qe.state.directionalShadowMap.length>0&&ee.setValue(z,"directionalShadowMap",Qe.state.directionalShadowMap,Ht),Qe.state.spotShadowMap.length>0&&ee.setValue(z,"spotShadowMap",Qe.state.spotShadowMap,Ht),Qe.state.pointShadowMap.length>0&&ee.setValue(z,"pointShadowMap",Qe.state.pointShadowMap,Ht)),w.isSkinnedMesh){ee.setOptional(z,w,"bindMatrix"),ee.setOptional(z,w,"bindMatrixInverse");const ve=w.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ee.setValue(z,"boneTexture",ve.boneTexture,Ht))}w.isBatchedMesh&&(ee.setOptional(z,w,"batchingTexture"),ee.setValue(z,"batchingTexture",w._matricesTexture,Ht),ee.setOptional(z,w,"batchingIdTexture"),ee.setValue(z,"batchingIdTexture",w._indirectTexture,Ht),ee.setOptional(z,w,"batchingColorTexture"),w._colorsTexture!==null&&ee.setValue(z,"batchingColorTexture",w._colorsTexture,Ht));const Mn=b.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&nt.update(w,b,Xe),(ei||Pt.receiveShadow!==w.receiveShadow)&&(Pt.receiveShadow=w.receiveShadow,ee.setValue(z,"receiveShadow",w.receiveShadow)),(T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial)&&T.envMap===null&&O.environment!==null&&(ke.envMapIntensity.value=O.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Og()),ei){if(ee.setValue(z,"toneMappingExposure",D.toneMappingExposure),Pt.needsLights&&sr(ke,Si),W&&T.fog===!0&&ht.refreshFogUniforms(ke,W),ht.refreshMaterialUniforms(ke,T,vt,Ut,C.state.transmissionRenderTarget[M.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){const ve=E;let Fe=0;for(const Gn of C.state.lightProbeGridArray)Gn.texture!==null&&(ve.textures[Fe]=Gn.texture,ve.min[Fe]=Gn.boundingBox.min,ve.max[Fe]=Gn.boundingBox.max,ve.resolution[Fe]=Gn.resolution,Fe++);for(const Gn in ve)ve[Gn].length=Fe;ke.probesSH.value=ve.textures,ke.probesMin.value=ve.min,ke.probesMax.value=ve.max,ke.probesResolution.value=ve.resolution}Hr.upload(z,ir(Pt),ke,Ht)}if(T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(Hr.upload(z,ir(Pt),ke,Ht),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&ee.setValue(z,"center",w.center),ee.setValue(z,"modelViewMatrix",w.modelViewMatrix),ee.setValue(z,"normalMatrix",w.normalMatrix),ee.setValue(z,"modelMatrix",w.matrixWorld),T.uniformsGroups!==void 0){const ve=T.uniformsGroups;for(let Fe=0,Gn=ve.length;Fe<Gn;Fe++){const Al=ve[Fe];Dt.update(Al,Xe),Dt.bind(Al,Xe)}}return Xe}function sr(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ga(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(M,O,b){const T=Ot.get(M);T.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,T.__autoAllocateDepthBuffer===!1&&(T.__useRenderToTexture=!1),Ot.get(M.texture).__webglTexture=O,Ot.get(M.depthTexture).__webglTexture=T.__autoAllocateDepthBuffer?void 0:b,T.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const b=Ot.get(M);b.__webglFramebuffer=O,b.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,b=0){ot=M,q=O,k=b;let T=null,w=!1,W=!1;if(M){const $=Ot.get(M);if($.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(z.FRAMEBUFFER,$.__webglFramebuffer),rt.copy(M.viewport),bt.copy(M.scissor),Ft=M.scissorTest,_t.viewport(rt),_t.scissor(bt),_t.setScissorTest(Ft),Y=-1;return}else if($.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if($.__hasExternalTextures)Ht.rebindTextures(M,Ot.get(M.texture).__webglTexture,Ot.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const St=M.depthTexture;if($.__boundDepthTexture!==St){if(St!==null&&Ot.has(St)&&(M.width!==St.image.width||M.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}const st=M.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(W=!0);const at=Ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(at[O])?T=at[O][b]:T=at[O],w=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?T=Ot.get(M).__webglMultisampledFramebuffer:Array.isArray(at)?T=at[b]:T=at,rt.copy(M.viewport),bt.copy(M.scissor),Ft=M.scissorTest}else rt.copy(zt).multiplyScalar(vt).floor(),bt.copy(ie).multiplyScalar(vt).floor(),Ft=se;if(b!==0&&(T=X),_t.bindFramebuffer(z.FRAMEBUFFER,T)&&_t.drawBuffers(M,T),_t.viewport(rt),_t.scissor(bt),_t.setScissorTest(Ft),w){const $=Ot.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,$.__webglTexture,b)}else if(W){const $=O;for(let st=0;st<M.textures.length;st++){const at=Ot.get(M.textures[st]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+st,at.__webglTexture,b,$)}}else if(M!==null&&b!==0){const $=Ot.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$.__webglTexture,b)}Y=-1};function rr(M){const O=Ot.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=he.textureFormatReadable(M.format),O.__typeReadable=he.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,b,T,w,W,J,$=0){if(!(M&&M.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&J!==void 0&&(st=st[J],Array.isArray(st)&&(st=st[0])),st){_t.bindFramebuffer(z.FRAMEBUFFER,st);try{const at=M.textures[$],St=at.format,Nt=at.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$);const yt=rr(at);if(yt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-T&&b>=0&&b<=M.height-w&&z.readPixels(O,b,T,w,ut.convert(St),ut.convert(Nt),W)}finally{const at=ot!==null?Ot.get(ot).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(M,O,b,T,w,W,J,$=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&J!==void 0&&(st=st[J],Array.isArray(st)&&(st=st[0])),st)if(O>=0&&O<=M.width-T&&b>=0&&b<=M.height-w){_t.bindFramebuffer(z.FRAMEBUFFER,st);const at=M.textures[$],St=at.format,Nt=at.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$);const yt=rr(at);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Wt),z.bufferData(z.PIXEL_PACK_BUFFER,W.byteLength,z.STREAM_READ),z.readPixels(O,b,T,w,ut.convert(St),ut.convert(Nt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const fe=ot!==null?Ot.get(ot).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,fe);const oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Th(z,oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Wt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,W),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Wt),z.deleteSync(oe),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,b=0){const T=Math.pow(2,-b),w=Math.floor(M.image.width*T),W=Math.floor(M.image.height*T),J=O!==null?O.x:0,$=O!==null?O.y:0;Ht.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,b,0,0,J,$,w,W),_t.unbindTexture()},this.copyTextureToTexture=function(M,O,b=null,T=null,w=0,W=0){let J,$,st,at,St,Nt,yt,Wt,fe;const oe=M.isCompressedTexture?M.mipmaps[W]:M.image;if(b!==null)J=b.max.x-b.min.x,$=b.max.y-b.min.y,st=b.isBox3?b.max.z-b.min.z:1,at=b.min.x,St=b.min.y,Nt=b.isBox3?b.min.z:0;else{const ee=Math.pow(2,-w);J=Math.floor(oe.width*ee),$=Math.floor(oe.height*ee),M.isDataArrayTexture?st=oe.depth:M.isData3DTexture?st=Math.floor(oe.depth*ee):st=1,at=0,St=0,Nt=0}T!==null?(yt=T.x,Wt=T.y,fe=T.z):(yt=0,Wt=0,fe=0);const ae=ut.convert(O.format),We=ut.convert(O.type);let Pt;O.isData3DTexture?(Ht.setTexture3D(O,0),Pt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),Pt=z.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),Pt=z.TEXTURE_2D),_t.activeTexture(z.TEXTURE0),_t.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),_t.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_t.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=_t.getParameter(z.UNPACK_ROW_LENGTH),re=_t.getParameter(z.UNPACK_IMAGE_HEIGHT),Mi=_t.getParameter(z.UNPACK_SKIP_PIXELS),Xe=_t.getParameter(z.UNPACK_SKIP_ROWS),ar=_t.getParameter(z.UNPACK_SKIP_IMAGES);_t.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,at),_t.pixelStorei(z.UNPACK_SKIP_ROWS,St),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,Nt);const ei=M.isDataArrayTexture||M.isData3DTexture,Si=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const ee=Ot.get(M),ke=Ot.get(O),Mn=Ot.get(ee.__renderTarget),ve=Ot.get(ke.__renderTarget);_t.bindFramebuffer(z.READ_FRAMEBUFFER,Mn.__webglFramebuffer),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Fe=0;Fe<st;Fe++)ei&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(M).__webglTexture,w,Nt+Fe),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.get(O).__webglTexture,W,fe+Fe)),z.blitFramebuffer(at,St,at+J,St+$,yt,Wt,yt+J,Wt+$,z.DEPTH_BUFFER_BIT,z.NEAREST);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(w!==0||M.isRenderTargetTexture||Ot.has(M)){const ee=Ot.get(M),ke=Ot.get(O);_t.bindFramebuffer(z.READ_FRAMEBUFFER,F),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,H);for(let Mn=0;Mn<st;Mn++)ei?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.__webglTexture,w,Nt+Mn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ee.__webglTexture,w),Si?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,W,fe+Mn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,W),w!==0?z.blitFramebuffer(at,St,at+J,St+$,yt,Wt,yt+J,Wt+$,z.COLOR_BUFFER_BIT,z.NEAREST):Si?z.copyTexSubImage3D(Pt,W,yt,Wt,fe+Mn,at,St,J,$):z.copyTexSubImage2D(Pt,W,yt,Wt,at,St,J,$);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Si?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(Pt,W,yt,Wt,fe,J,$,st,ae,We,oe.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,W,yt,Wt,fe,J,$,st,ae,oe.data):z.texSubImage3D(Pt,W,yt,Wt,fe,J,$,st,ae,We,oe):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,yt,Wt,J,$,ae,We,oe.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,yt,Wt,oe.width,oe.height,ae,oe.data):z.texSubImage2D(z.TEXTURE_2D,W,yt,Wt,J,$,ae,We,oe);_t.pixelStorei(z.UNPACK_ROW_LENGTH,Qe),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,Mi),_t.pixelStorei(z.UNPACK_SKIP_ROWS,Xe),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,ar),W===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Pt),_t.unbindTexture()},this.initRenderTarget=function(M){Ot.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){q=0,k=0,ot=null,_t.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}function Iu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new De;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in d.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(d.attributes[_]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(d.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let _;if(e)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,u),c+=_}}if(e){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(const u in r){const d=Lc(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let S=0;S<a[u].length;++S)f.push(a[u][S][h]);const _=Lc(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function Lc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new Un(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/e;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<e;_++){const S=u.getComponent(h,_);o.setComponent(h+d,_,S)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}const Ln=8.4,zg=2.8,Gg=[[0,180],[76,173],[137,145],[173,92],[181,22],[169,-54],[134,-119],[73,-157],[-8,-168],[-87,-151],[-149,-108],[-182,-49],[-187,27],[-167,94],[-121,144],[-61,173]],Hg=14268804,kg=7240514,Vg=15115647,Ya=Wg(82621);function Wg(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ka(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function _i(i){return i.colorSpace=en,i}function xi(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Xg(){const i=xi(512,512),t=i.getContext("2d");t.fillStyle="#54575d",t.fillRect(0,0,512,512);for(let n=0;n<18e3;n++){const s=50+Math.random()*70;t.fillStyle=`rgba(${s},${s},${s},${.15+Math.random()*.25})`;const r=Math.random()*2+.4;t.fillRect(Math.random()*512,Math.random()*512,r,r)}for(let n=0;n<28;n++)t.fillStyle=`rgba(24,24,28,${.03+Math.random()*.04})`,t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,18+Math.random()*65,6+Math.random()*20,Math.random()*Math.PI,0,Math.PI*2),t.fill();const e=new Qn(i);return e.wrapS=e.wrapT=Vr,e.anisotropy=8,_i(e)}function qg(){const i=xi(512,96),t=i.getContext("2d"),e=16,n=3;for(let s=0;s<n;s++)for(let r=0;r<e;r++)t.fillStyle=(r+s)%2?"#151515":"#f4f2e8",t.fillRect(r*(512/e),s*(96/n),512/e+1,96/n+1);return _i(new Qn(i))}function Qr({text:i,sub:t="",align:e="center",bg:n="rgba(9,13,18,.92)",fg:s="#ffffff",accent:r="#ff5b22",w:a=1024,h:o=256,border:l=!0}){const c=xi(a,o),u=c.getContext("2d");n&&(u.fillStyle=n,u.fillRect(0,0,a,o)),l&&(u.strokeStyle="rgba(255,255,255,.15)",u.lineWidth=2,u.strokeRect(1,1,a-2,o-2));const d=e==="left"?52:e==="right"?a-52:a/2;u.textAlign=e,u.textBaseline="middle",t&&(u.fillStyle=r,u.font=`600 ${Math.round(o*.105)}px Inter, sans-serif`,u.letterSpacing=`${Math.round(o*.02)}px`,u.fillText(t.toUpperCase(),d,o*.29)),u.fillStyle=s,u.font=`italic 900 ${Math.round(o*.38)}px "Barlow Condensed", sans-serif`,u.letterSpacing="3px",u.fillText(i.toUpperCase(),d,t?o*.6:o*.52);const h=new Qn(c);return h.anisotropy=8,_i(h)}function Dc(i="rgba(255,255,255,1)",t="rgba(255,120,60,0)"){const e=xi(256,256),n=e.getContext("2d"),s=n.createRadialGradient(128,128,0,128,128,128);return s.addColorStop(0,i),s.addColorStop(.16,i),s.addColorStop(.42,"rgba(255,160,80,.35)"),s.addColorStop(1,t),n.fillStyle=s,n.fillRect(0,0,256,256),_i(new Qn(e))}function Yg(){const i=xi(512,256),t=i.getContext("2d");t.clearRect(0,0,512,256);for(let e=0;e<22;e++){const n=60+Ya()*390,s=90+Ya()*90,r=25+Ya()*55,a=t.createRadialGradient(n,s,1,n,s,r);a.addColorStop(0,"rgba(255,228,210,.36)"),a.addColorStop(.7,"rgba(255,200,180,.12)"),a.addColorStop(1,"rgba(255,190,170,0)"),t.fillStyle=a,t.fillRect(n-r,s-r,r*2,r*2)}return _i(new Qn(i))}function Kg(){const i=xi(1024,512),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#07142a"),e.addColorStop(.37,"#5a6680"),e.addColorStop(.5,"#f4a06d"),e.addColorStop(.57,"#7c5b54"),e.addColorStop(.72,"#263237"),e.addColorStop(1,"#0b1117"),t.fillStyle=e,t.fillRect(0,0,1024,512);const n=t.createRadialGradient(710,260,5,710,260,180);n.addColorStop(0,"rgba(255,245,210,1)"),n.addColorStop(.06,"rgba(255,196,104,.95)"),n.addColorStop(.28,"rgba(255,105,50,.25)"),n.addColorStop(1,"rgba(255,100,40,0)"),t.fillStyle=n,t.fillRect(0,0,1024,512);const s=new Qn(i);return s.mapping=Fr,_i(s)}function $a(i,t,e,n,s=1){const r=[],a=[],o=[];let l=0;for(let d=0;d<i.length;d++){const h=i[d];d>0&&(l+=h.point.distanceTo(i[d-1].point));const f=t,_=e;r.push(h.point.x+h.normal.x*f,n,h.point.z+h.normal.z*f,h.point.x+h.normal.x*_,n,h.point.z+h.normal.z*_),a.push(0,l/8*s,1,l/8*s)}const c=i.length;for(let d=0;d<c;d++){const h=(d+1)%c,f=d*2,_=d*2+1,S=h*2,m=h*2+1;o.push(f,S,_,_,S,m)}const u=new De;return u.setAttribute("position",new jt(r,3)),u.setAttribute("uv",new jt(a,2)),u.setIndex(o),u.computeVertexNormals(),u}function $g(i){const t=i.map(({w:e,h:n,d:s,x:r,y:a,z:o,ry:l=0,rz:c=0})=>{const u=new Ct(e,n,s);return c&&u.rotateZ(c),l&&u.rotateY(l),u.translate(r,a,o),u});return Iu(t,!1)}function Zg(){return new sa(Gg.map(([i,t])=>new L(i,0,t)),!0,"centripetal",.5)}function Jg(i,t){const e=new ce;e.name="Costa del Sol",i.add(e);const n=Zg();n.arcLengthDivisions=1200;const s=n.getLength(),r=760,a=[];for(let b=0;b<r;b++){const T=b/r,w=n.getPointAt(T),W=n.getTangentAt(T).normalize(),J=new L(-W.z,0,W.x);a.push({u:T,point:w,tangent:W,normal:J})}const o=Kg();i.environment=o,i.environmentIntensity=.9,i.fog=new al(Vg,230,1250),i.background=new qt(7239302);const l=new L(.26,.16,1).normalize(),c=new Jn({side:nn,depthWrite:!1,uniforms:{uSun:{value:l}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uSun;
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y, -0.12, 1.0);
        vec3 top = vec3(0.035, 0.085, 0.19);
        vec3 mid = vec3(0.43, 0.43, 0.49);
        vec3 horizon = vec3(1.02, 0.49, 0.28);
        vec3 low = vec3(0.17, 0.08, 0.10);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.30, h));
        col = mix(col, top, smoothstep(0.25, 0.88, h));
        col = mix(low, col, smoothstep(-0.09, 0.02, h));
        float sd = max(dot(normalize(vDir), normalize(uSun)), 0.0);
        col += vec3(1.0, 0.38, 0.10) * pow(sd, 12.0) * 0.40;
        col += vec3(1.0, 0.72, 0.36) * pow(sd, 180.0) * 1.5;
        col += vec3(1.0, 0.94, 0.76) * smoothstep(0.99955, 0.9998, sd) * 4.0;
        float band = sin(vDir.y * 115.0 + vDir.x * 7.0) * 0.5 + 0.5;
        col += vec3(0.10, 0.05, 0.035) * band * smoothstep(0.02, 0.2, h) * (1.0 - smoothstep(0.2, 0.4, h)) * 0.24;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),u=new mt(new aa(2600,48,28),c);u.frustumCulled=!1,u.renderOrder=-1e3,i.add(u),Vo=Dc("rgba(255,255,255,1)","rgba(255,100,40,0)");const d=Dc("rgba(255,248,220,1)","rgba(255,90,40,0)"),h=new Fs(new as({map:d,transparent:!0,blending:fi,depthWrite:!1,depthTest:!1,opacity:.88}));h.position.copy(l).multiplyScalar(2200),h.scale.set(900,900,1),i.add(h);const f=Yg(),_=[];for(let b=0;b<12;b++){const T=new Fs(new as({map:f,transparent:!0,opacity:.3+Math.random()*.28,depthWrite:!1,color:new qt().setHSL(.045+Math.random()*.04,.45,.7)})),w=Math.random()*Math.PI*2,W=700+Math.random()*900;T.position.set(Math.cos(w)*W,90+Math.random()*220,Math.sin(w)*W),T.scale.set(320+Math.random()*380,110+Math.random()*120,1),T.userData.speed=.4+Math.random()*.8,i.add(T),_.push(T)}const S=new Fd(16763298,2569519,1.15);i.add(S);const m=new kd(16756848,3.1);m.position.set(180,190,240),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.camera.near=6,m.shadow.camera.far=420,m.shadow.camera.left=-85,m.shadow.camera.right=85,m.shadow.camera.top=85,m.shadow.camera.bottom=-85,m.shadow.bias=-7e-4,m.shadow.normalBias=.05,i.add(m),i.add(m.target);const p=(b,T,w)=>{const W=Ka(12,58,w);let $=(Math.sin(b*.018+T*.003+1.2)*2.8+Math.cos(T*.021-b*.002)*2.1+Math.sin((b+T)*.045)*.55)*W;return T>196&&($*=.08),T<-180&&($*=1.8),T>282?-5.5-(T-282)*.08:$},v=new Be(1080,900,132,112);v.rotateX(-Math.PI/2);const A=v.attributes.position,E=[];for(let b=0;b<A.count;b++){const T=A.getX(b),w=A.getZ(b)-35;let W=1/0;for(let yt=0;yt<a.length;yt+=2){const Wt=a[yt],fe=T-Wt.point.x,oe=w-Wt.point.z,ae=fe*fe+oe*oe;ae<W&&(W=ae)}const J=Math.sqrt(W),$=p(T,w,J);A.setZ(b,w),A.setY(b,$);const st=Ka(180,240,w)+Math.max(0,1-Ka(10,18,J))*.35,at=.5+.5*Math.sin(T*.12+w*.13),St=new qt(kg).lerp(new qt(10255432),at*.45);St.lerp(new qt(Hg),Math.min(1,st));const Nt=.86+Math.random()*.2;St.multiplyScalar(Nt),E.push(St.r,St.g,St.b)}v.setAttribute("color",new jt(E,3)),v.computeVertexNormals();const P=new Bt({vertexColors:!0,roughness:.98,metalness:0,envMapIntensity:.2}),C=new mt(v,P);C.receiveShadow=!0,e.add(C);const g=new mt(new Be(1050,78,1,1),new Bt({color:14136446,roughness:.92,metalness:0}));g.rotation.x=-Math.PI/2,g.position.set(0,.015,239),g.receiveShadow=!0,e.add(g);const y={uTime:{value:0},uSun:{value:l}},U=new Jn({uniforms:y,fog:!0,vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 p = position;
        float w1 = sin(p.x * 0.08 + uTime * 1.2) * 0.16;
        float w2 = cos(p.y * 0.11 - uTime * 0.9) * 0.12;
        p.z += w1 + w2;
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * vec3(
          -0.08 * 0.16 * cos(p.x * 0.08 + uTime * 1.2) - 0.11 * 0.12 * sin(p.y * 0.11 - uTime * 0.9),
          0.0, 1.0));
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 uSun;
      varying vec3 vWorld;
      varying vec3 vNormal;
      void main() {
        vec3 V = normalize(cameraPosition - vWorld);
        vec3 N = normalize(vec3(vNormal.x, 0.32, vNormal.z));
        float fres = pow(1.0 - max(dot(N, V), 0.0), 2.2);
        vec3 deep = vec3(0.016, 0.145, 0.19);
        vec3 shallow = vec3(0.11, 0.44, 0.48);
        vec3 sky = vec3(0.84, 0.49, 0.35);
        vec3 col = mix(deep, shallow, 0.35 + 0.25 * sin(vWorld.x * 0.011 + vWorld.z * 0.02));
        col = mix(col, sky, fres * 0.65);
        vec3 R = reflect(-uSun, N);
        float spec = pow(max(dot(R, V), 0.0), 90.0);
        col += vec3(1.0, 0.57, 0.26) * spec * 2.7;
        float glint = pow(max(0.0, sin(vWorld.x * 0.34 + vWorld.z * 0.19) * sin(vWorld.x * 0.07 - vWorld.z * 0.42)), 18.0);
        col += vec3(1.0, 0.66, 0.34) * glint * 0.3;
        float foam = smoothstep(268.0, 278.0, vWorld.z) * (0.25 + 0.2 * sin(vWorld.x * 0.12 + vWorld.z));
        col = mix(col, vec3(0.91, 0.84, 0.72), foam * 0.22);
        gl_FragColor = vec4(col, 1.0);
      }
    `}),D=new mt(new Be(2400,1500,100,60),U);D.rotation.x=-Math.PI/2,D.position.set(0,-1.3,900),e.add(D);const B=(()=>{const b=xi(512,32),T=b.getContext("2d"),w=T.createLinearGradient(0,0,0,32);return w.addColorStop(0,"rgba(255,255,255,0)"),w.addColorStop(.45,"rgba(255,255,255,.7)"),w.addColorStop(1,"rgba(255,255,255,0)"),T.fillStyle=w,T.fillRect(0,0,512,32),_i(new Qn(b))})();for(let b=0;b<3;b++){const T=new mt(new Be(1050,7+b*3),new ue({map:B,transparent:!0,opacity:.26-b*.05,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.set(0,.03,278+b*5),T.userData.phase=b*1.7,e.add(T),b===0&&(D.userData.foam=T)}const G=new Bt({color:6051912,roughness:1,flatShading:!0}),X=new Bt({color:7234901,roughness:1,flatShading:!0}),F=[[-620,-610,300,260],[-330,-700,360,320],[20,-760,400,290],[390,-680,320,250],[670,-600,300,280],[-760,-260,260,190],[760,-210,280,200],[-800,60,240,160],[820,20,250,180]];for(const[b,T,w,W]of F){const J=new Zn(w,W,9,5,!0),$=J.attributes.position;for(let at=0;at<$.count;at++){const St=$.getX(at),Nt=$.getY(at),yt=$.getZ(at),Wt=(Math.sin(St*.051+yt*.032)+Math.cos(St*.022-yt*.04))*.08;$.setX(at,St*(1+Wt)),$.setZ(at,yt*(1+Wt*.8)),$.setY(at,Nt+Math.sin(St*.03)*5)}J.computeVertexNormals();const st=new mt(J,T<-400?X:G);st.position.set(b,W/2-12,T),st.rotation.y=Math.random()*Math.PI,e.add(st)}const H=new Bt({map:Xg(),color:10922155,roughness:.82,metalness:.04}),q=new Bt({color:7302240,roughness:1});e.add(new mt($a(a,-11.2,Ln+zg,.035,1),q)),e.add(new mt($a(a,-Ln,Ln,.075,4),H));const k=new ue({color:16183008,transparent:!0,opacity:.66});for(const b of[-Ln+.42,Ln-.42])e.add(new mt($a(a,b-.12,b+.12,.084,1),k));const ot=new Ct(.15,.012,2.7),Y=new ue({color:16050120,transparent:!0,opacity:.5}),et=Math.floor(s/9),rt=new bn(ot,Y,et),bt=new Jt,Ft=new xn,K=new L(0,1,0);for(let b=0;b<et;b++){const T=b*9/s,w=n.getPointAt(T),W=n.getTangentAt(T);Ft.setFromAxisAngle(K,Math.atan2(W.x,W.z)),bt.compose(new L(w.x,.09,w.z),Ft,new L(1,1,1)),rt.setMatrixAt(b,bt)}e.add(rt);const xt=new Bt({color:12926250,roughness:.8}),Tt=new Bt({color:15918547,roughness:.8}),Ut=new Ct(1.3,.09,.85),vt=[],Vt=[];for(let b=2;b<a.length-2;b+=2){const T=a[b],w=a[b-2].tangent,W=a[b+2].tangent;if(!(w.angleTo(W)<.008))for(const $ of[-1,1]){const st=$*(Ln+.65),at=new Jt,St=new xn().setFromAxisAngle(K,Math.atan2(T.tangent.x,T.tangent.z));at.compose(new L(T.point.x+T.normal.x*st,.07,T.point.z+T.normal.z*st),St,new L(1,1,1)),b/2%2===0?vt.push(at.clone()):Vt.push(at.clone())}}if(vt.length){const b=new bn(Ut,xt,vt.length);vt.forEach((w,W)=>b.setMatrixAt(W,w)),e.add(b);const T=new bn(Ut,Tt,Vt.length);Vt.forEach((w,W)=>T.setMatrixAt(W,w)),e.add(T)}const _e=[];for(const b of a){const w=(b.point.dot(b.normal)>0?1:-1)*(Ln+1.5);_e.push(new L(b.point.x+b.normal.x*w,.02,b.point.z+b.normal.z*w))}const zt=new Bt({color:12171441,metalness:.85,roughness:.38}),ie=new Bt({color:5198676,metalness:.6,roughness:.55}),se=[];let Yt=[];for(let b=0;b<_e.length;b++){const T=_e[b];T.z>150&&T.x>-90&&T.x<130?Yt.length>3?(se.push(Yt),Yt=[]):Yt=[]:Yt.push(T.clone())}Yt.length>3&&se.push(Yt);for(const b of se){const T=new sa(b,!1,"centripetal",.5),w=new mt(new oa(T,Math.max(10,b.length),.09,4,!1),zt);w.position.y=.63,e.add(w);const W=new Ct(.08,.65,.08),J=new bn(W,ie,Math.floor(b.length/3));for(let $=0;$<J.count;$++){const st=$/Math.max(1,J.count-1),at=T.getPointAt(st),St=new Jt().makeTranslation(at.x,.33,at.z);J.setMatrixAt($,St)}e.add(J)}const we=78,xe=new ze(.16,.34,6.4,6,4);xe.translate(0,3.2,0);const Le=xe.attributes.position;for(let b=0;b<Le.count;b++){const T=Le.getY(b);Le.setX(b,Le.getX(b)+Math.sin(T*.55)*.22)}xe.computeVertexNormals();const ge=new Bt({color:7230518,roughness:.95,flatShading:!0}),fn=z(),Ce=new Bt({color:4023601,roughness:.85,flatShading:!0,side:Me}),Ge=new bn(xe,ge,we),He=new bn(fn,Ce,we),Ue=[];for(let b=0;b<we;b++){let T,w;if(b<38){const st=b/38*1,at=a[Math.floor(st*a.length)%a.length],Nt=(b%2?1:-1)*(12+Math.random()*16);T=at.point.x+at.normal.x*Nt,w=at.point.z+at.normal.z*Nt}else T=-330+Math.random()*670,w=202+Math.random()*62;if(Math.abs(T)<95&&w>198&&w<250)continue;const W=.72+Math.random()*.55,J=Math.random()*Math.PI*2,$=new Jt().compose(new L(T,0,w),new xn().setFromAxisAngle(new L(0,1,0),J),new L(W,W,W));Ge.setMatrixAt(Ue.length,$),He.setMatrixAt(Ue.length,$),Ue.push({x:T,z:w,scale:W})}Ge.count=Ue.length,He.count=Ue.length,Ge.castShadow=!1,He.castShadow=!0,e.add(Ge,He);function z(){const b=[];for(let w=0;w<9;w++){const J=[],$=[];for(let at=0;at<=5;at++){const St=at/5,Nt=4.1*St,yt=Math.sin(St*Math.PI)*.62+.04,fe=6.4+-1.55*St*St;J.push(Nt,fe+yt*.1,-yt),J.push(Nt,fe-.06,yt)}for(let at=0;at<5;at++){const St=at*2,Nt=St+1,yt=St+2,Wt=St+3;$.push(St,yt,Nt,Nt,yt,Wt)}const st=new De;st.setAttribute("position",new jt(J,3)),st.setIndex($),st.computeVertexNormals(),st.rotateY(w/9*Math.PI*2+(Math.random()-.5)*.2),b.push(st)}return Iu(b,!1)}const sn=new hl(1,0),de=new Bt({color:5598525,roughness:1,flatShading:!0}),he=110,_t=new bn(sn,de,he);for(let b=0;b<he;b++){let T,w,W=0;do T=-430+Math.random()*860,w=-300+Math.random()*470,W++;while(ti(T,w)<14&&W<30);const J=.6+Math.random()*1.8,$=new Jt().compose(new L(T,p(T,w,ti(T,w))+J*.45,w),new xn().setFromAxisAngle(new L(0,1,0),Math.random()*6),new L(J*1.4,J*.75,J));_t.setMatrixAt(b,$)}e.add(_t);const Te=new cl(1,0),Ot=new Bt({color:7630688,roughness:.95,flatShading:!0}),Ht=new bn(Te,Ot,55);for(let b=0;b<55;b++){let T,w,W=0;do T=-460+Math.random()*920,w=-350+Math.random()*500,W++;while(ti(T,w)<19&&W<30);const J=.4+Math.random()*1.9,$=new Jt().compose(new L(T,p(T,w,ti(T,w))+J*.25,w),new xn().setFromEuler(new $n(Math.random(),Math.random()*6,Math.random())),new L(J,J*.7,J*1.2));Ht.setMatrixAt(b,$)}e.add(Ht);const R=new ce;e.add(R);const x=e_();x.group.position.set(44,.1,225),R.add(x.group);const V=n_();V.position.set(-9,.1,222),R.add(V);const lt=[15751722,15262679,1780274,15966780];[[-68,217,.7],[20,236,.8],[85,230,.7],[104,214,.9],[-52,238,.65]].forEach(([b,T,w],W)=>{const J=i_(lt[W%lt.length]);J.position.set(b,.1,T),J.scale.setScalar(w),R.add(J)});const ht=ko("HORIZON","FESTIVAL 2026","#ff5b22");ht.position.set(-118,8.5,216),ht.scale.set(18,4.5,1),R.add(ht);const gt=new ce;for(const b of[-7,7]){const T=new mt(new Ct(.35,7,.35),new Bt({color:2238250,metalness:.7,roughness:.4}));T.position.set(b,3.5,0),gt.add(T)}gt.position.set(-118,0,215.4),R.add(gt);const Q=new ia(.14,.42,3,5),tt=new Bt({vertexColors:!1,roughness:.8}),dt=new bn(Q,tt,85),N=[16735010,16765608,4780764,16052196,2832969,13847103];for(let b=0;b<dt.count;b++){const T=-48+Math.random()*175,w=211+Math.random()*35,W=new Jt().makeTranslation(T,.35,w);dt.setMatrixAt(b,W),dt.setColorAt(b,new qt(N[b%N.length]))}R.add(dt);const nt=new ue({color:16757611,side:Me}),Z=new ce;for(let b=0;b<3;b++){const T=new L(-18+b*18,8+b,224),w=new L(32+b*7,12+b*2,226);for(let W=0;W<12;W++){const J=(W+.5)/12,$=T.clone().lerp(w,J);$.y+=Math.sin(J*Math.PI)*-1.2;const st=new mt(new Be(.55,.42),nt);st.position.copy($),st.rotation.y=Math.PI/2,Z.add(st)}}R.add(Z);const pt=[];for(let b=0;b<3;b++){const T=s_([16738866,4774086,16175755][b]);T.position.set(-90+b*100,55+b*15,80-b*100),e.add(T),pt.push(T)}const ut=new ue({color:2828840,side:Me}),ft=new ce;for(let b=0;b<8;b++){const T=new De;T.setAttribute("position",new jt([-.55,0,0,0,.05,0,0,0,0,.55,0,0,0,.05,0,0,0,0],3));const w=new mt(T,ut);w.position.set(-80+Math.random()*250,32+Math.random()*22,80+Math.random()*150),w.userData.phase=Math.random()*6,ft.add(w)}e.add(ft);const Dt=[[-244,126,.6,1.35],[-278,82,1.9,1.1],[-232,42,.2,1.5],[242,82,2.5,1.35],[284,126,.6,1.2],[228,168,1.7,1.5],[152,-222,1.2,1.2],[92,-246,.3,1.5],[-5,-235,2.8,1.1],[-108,-238,1.2,1.4],[-247,-82,.4,1.3],[-258,-162,2.2,1.15],[206,-168,1.6,1.3],[300,-52,.9,1.2]];for(const[b,T,w,W]of Dt){const J=r_(15853268,11885371);J.position.set(b,p(b,T,ti(b,T))+.02,T),J.rotation.y=w,J.scale.setScalar(W),e.add(J)}const Kt=a_();Kt.position.set(212,.02,207),Kt.rotation.y=-.4,e.add(Kt);const ct=o_();ct.position.set(-312,0,242),e.add(ct);const It=[[-170,255],[-120,260],[130,258],[178,254],[208,262],[-32,264]];for(const[b,T]of It){const w=l_(Math.random()>.5?15967547:15354418);w.position.set(b,.02,T),e.add(w)}const Gt=n.getPointAt(0),Mt=n.getTangentAt(0),te=Math.atan2(Mt.x,Mt.z),ye=Qg(te);ye.position.set(Gt.x,.1,Gt.z),e.add(ye);const rn=t_();rn.position.set(Gt.x,11.6,Gt.z),e.add(rn);const Bn=[];[.19,.39,.59,.79].forEach((b,T)=>{const w=n.getPointAt(b),W=n.getTangentAt(b),J=Math.atan2(W.x,W.z),$=jg(T,J);$.group.position.set(w.x,.08,w.z),$.group.visible=!1,e.add($.group),Bn.push({...$,u:b,point:w.clone(),heading:J})});const ma=[[.08,-14],[.18,16],[.3,-17],[.44,18],[.57,-15],[.68,16],[.82,-17],[.92,18],[.37,38],[.63,42]],Ui=[],js=new Bt({color:16756293,emissive:16739098,emissiveIntensity:2.2,metalness:.5,roughness:.2});for(const[b,T]of ma){const w=n.getPointAt(b),W=new L(-n.getTangentAt(b).z,0,n.getTangentAt(b).x),J=w.x+W.x*T,$=w.z+W.z*T,st=new ce,at=new mt(new ra(.75,0),js);at.rotation.z=Math.PI/4,st.add(at);const St=new mt(new Di(1.25,.035,5,32),new ue({color:16765596,transparent:!0,opacity:.75}));St.rotation.x=Math.PI/2,st.add(St);const Nt=new Fs(new as({map:Vo,transparent:!0,blending:fi,depthWrite:!1,opacity:.55}));Nt.scale.set(4,4,1),st.add(Nt),st.position.set(J,1.4,$),st.userData.phase=Math.random()*8,st.userData.spin=.8+Math.random()*.8,e.add(st),Ui.push(st)}const Rn=new ze(.075,.11,5.8,6);Rn.translate(0,2.9,0);const ps=new Bt({color:3488573,metalness:.7,roughness:.4}),tr=new Ct(.42,.12,.18),er=new ue({color:16767397}),zn=38,ms=new bn(Rn,ps,zn),gs=new bn(tr,er,zn);for(let b=0;b<zn;b++){const T=(b/zn+.013)%1,w=Fi(T),J=(b%2?1:-1)*(Ln+3.7),$=w.point.x+w.normal.x*J,st=w.point.z+w.normal.z*J,at=new Jt().makeTranslation($,0,st);ms.setMatrixAt(b,at);const St=new Jt().compose(new L($,5.85,st),new xn().setFromAxisAngle(new L(0,1,0),Math.atan2(w.tangent.x,w.tangent.z)),new L(1,1,1));gs.setMatrixAt(b,St)}e.add(ms,gs);const vi=[[.06,13,"HORIZON","FESTIVAL AHEAD","#ff5b22"],[.31,-13,"COSTA","DEL SOL","#48f2dc"],[.66,14,"SUMMIT","1.2 KM","#ffb36b"]];for(const[b,T,w,W,J]of vi){const $=Fi(b),st=ko(w,W,J);st.position.set($.point.x+$.normal.x*T,3.6,$.point.z+$.normal.z*T),st.scale.set(7.2,1.8,1),e.add(st)}const nr=[];for(const[b,T,w]of[[-190,360,.4],[120,430,-1.1],[320,500,.8]]){const W=c_();W.position.set(b,-1.05,T),W.rotation.y=w,e.add(W),nr.push(W)}const ir=new ue({color:16735010,side:Me});for(let b=0;b<12;b++){const T=new mt(new Be(.65,1.2),ir);T.position.set(Gt.x-12+b*2.1,4+Math.sin(b)*.2,Gt.z+9),T.rotation.y=te,e.add(T)}function Fi(b){const T=(b%1+1)%1,w=Math.floor(T*r)%r;return a[w]}function ti(b,T){let w=1/0;for(let W=0;W<a.length;W+=2){const J=a[W],$=b-J.point.x,st=T-J.point.z,at=$*$+st*st;at<w&&(w=at)}return Math.sqrt(w)}function sr(b,T){let w=1/0,W=0;for(let $=0;$<a.length;$++){const st=a[$],at=b-st.point.x,St=T-st.point.z,Nt=at*at+St*St;Nt<w&&(w=Nt,W=$)}return{...a[W],dist:Math.sqrt(w),index:W}}function ga(b,T){const w=sr(b,T),W=w.dist<=Ln+.1;return{y:W?.09:p(b,T,w.dist),dist:w.dist,u:w.u,normal:w.normal,tangent:w.tangent,point:w.point,road:W}}function rr(b){m.position.set(b.x+150,195,b.z+205),m.target.position.set(b.x,0,b.z),m.target.updateMatrixWorld()}let M=0;function O(b,T){M+=b,y.uTime.value=M;for(const w of e.children)w.userData.phase!==void 0&&w.material?.map===B&&(w.position.z=278+w.userData.phase*3+Math.sin(T*.35+w.userData.phase)*1.8);x.update(b);for(const w of pt)w.userData.update(T);for(const w of _)w.position.x+=w.userData.speed*b,w.position.x>1700&&(w.position.x=-1700);for(const w of nr)w.position.y=-1.05+Math.sin(T*.8+w.position.x)*.08,w.rotation.z=Math.sin(T*.6+w.position.z)*.025;rn.rotation.y=T*.7,rn.position.y=11.6+Math.sin(T*1.4)*.28;for(const w of Ui)w.visible&&(w.rotation.y=T*w.userData.spin,w.position.y=1.4+Math.sin(T*1.8+w.userData.phase)*.18);for(const w of Bn)w.group.visible&&w.group.children.forEach(W=>{if(W.material&&W.material.userData.baseOpacity!==void 0){const J=w.active?.72+Math.sin(T*4.2)*.24:1;W.material.opacity=W.material.userData.baseOpacity*J}});for(const w of ft)w.position.x+=b*2.5,w.position.x>250&&(w.position.x=-150),w.position.y+=Math.sin(T*2+w.userData.phase)*.002,w.rotation.z=Math.sin(T*7+w.userData.phase)*.14;D.userData.foam&&(D.userData.foam.material.opacity=.2+Math.sin(T*.5)*.05)}return{group:e,curve:n,samples:a,trackLength:s,roadHalfWidth:Ln,startPoint:Gt,startHeading:te,startGate:ye,eventMarker:rn,checkpointGates:Bn,collectibles:Ui,sun:m,update:O,sampleAt:Fi,nearestTrack:sr,groundAt:ga,distanceToTrack:ti,setSunFor:rr,setCheckpointActive(b){Bn.forEach((T,w)=>{T.active=w===b;const W=w===b?16739114:w<b?4780764:7372937;T.group.traverse(J=>{J.material&&J.material.userData.gate&&(J.material.color.setHex(W),J.material.userData.baseOpacity=w===b?.95:w<b?.3:.44,J.material.opacity=J.material.userData.baseOpacity)})})},hideCheckpoints(){Bn.forEach(b=>{b.group.visible=!1})},showCheckpoints(){Bn.forEach(b=>{b.group.visible=!0})}}}function ko(i,t,e){const n=xi(1024,256),s=n.getContext("2d");s.clearRect(0,0,1024,256),s.fillStyle="rgba(7,11,16,.84)",s.beginPath(),s.moveTo(12,0),s.lineTo(1012,0),s.lineTo(1024,12),s.lineTo(1024,244),s.lineTo(1012,256),s.lineTo(12,256),s.lineTo(0,244),s.lineTo(0,12),s.closePath(),s.fill(),s.strokeStyle=e,s.lineWidth=6,s.beginPath(),s.moveTo(0,244),s.lineTo(0,12),s.lineTo(12,0),s.lineTo(420,0),s.stroke(),s.fillStyle=e,s.font="600 37px Inter, sans-serif",s.letterSpacing="8px",s.textAlign="left",s.fillText(t.toUpperCase(),62,82),s.fillStyle="#fff",s.font='italic 900 110px "Barlow Condensed", sans-serif',s.letterSpacing="5px",s.fillText(i.toUpperCase(),56,176);const r=_i(new Qn(n));return new Fs(new as({map:r,transparent:!0,depthWrite:!1,depthTest:!0,sizeAttenuation:!0}))}function Qg(i){const t=new ce;t.rotation.y=i;const e=new Bt({color:2435630,metalness:.8,roughness:.35});new Bt({color:16735010,metalness:.3,roughness:.55});const n=[];for(const d of[-10.7,10.7]){n.push({w:.42,h:7.2,d:.42,x:d,y:3.6,z:0});for(let h=0;h<4;h++)n.push({w:1.4,h:.12,d:.12,x:d+(d>0?-.5:.5),y:1.4+h*1.6,z:.18})}n.push({w:22,h:.55,d:.55,x:0,y:7.1,z:0}),n.push({w:22,h:.24,d:.24,x:0,y:6.25,z:0}),t.add(new mt($g(n),e));const s=new ue({map:Qr({text:"HORIZON",sub:"START / FINISH",accent:"#ff5b22",w:1024,h:220}),transparent:!1,side:Me}),r=new mt(new Be(17.2,3.2),s);r.position.set(0,8.6,0),t.add(r);const a=new mt(new Be(15.8,1.3),new ue({map:Qr({text:"COSTA DEL SOL",sub:"",accent:"#ff5b22",w:1024,h:128,bg:"rgba(8,12,17,.95)"}),side:Me}));a.position.set(0,6.75,0),t.add(a);const o=new ue({color:2755848}),l=[];for(let d=0;d<5;d++){const h=new mt(new ll(.2,12),o.clone());h.position.set(-1.6+d*.8,5.65,.3),t.add(h),l.push(h)}const c=new ue({color:16735010,side:Me});for(let d=0;d<8;d++){const h=new mt(new Be(.65,1.15),c);h.position.set(-8.4+d*2.4,8.1,.4),t.add(h)}const u=new mt(new Be(17.2,3.2),new ue({map:qg()}));return u.rotation.x=-Math.PI/2,u.position.set(0,.1,0),t.add(u),t.userData.lights=l,t}function jg(i,t){const e=new ce;e.rotation.y=t;const n=[],s=new ue({color:4780764,transparent:!0,opacity:.55,depthWrite:!1,blending:fi,side:Me});s.userData.gate=!0,s.userData.baseOpacity=.55,n.push(s);const r=new sa([new L(-9.4,0,0),new L(-9.4,5.1,0),new L(-4.8,6.2,0),new L(0,6.5,0),new L(4.8,6.2,0),new L(9.4,5.1,0),new L(9.4,0,0)]),a=new mt(new oa(r,40,.12,5,!1),s);e.add(a);const o=new mt(new Be(18.8,6.5),new ue({color:4780764,transparent:!0,opacity:.035,side:Me,blending:fi,depthWrite:!1}));o.position.y=3.25,e.add(o),n.push(o.material);const l=Qr({text:"CHECKPOINT",sub:`${String(i+1).padStart(2,"0")} / 04`,accent:"#48f2dc",w:1024,h:170,bg:"rgba(5,12,15,.65)",border:!1}),c=new mt(new Be(5.4,.9),new ue({map:l,transparent:!0,side:Me,depthWrite:!1}));return c.position.y=7.1,e.add(c),e.traverse(u=>{u.material&&(u.material.userData.gate=!0,u.material.userData.baseOpacity=u.material.opacity)}),{group:e,materials:n}}function t_(){const i=new ce,t=new ue({color:16739114,transparent:!0,opacity:.9}),e=new mt(new ra(1.2,0),t);i.add(e);const n=new mt(new Di(2.2,.055,6,40),new ue({color:16766903,transparent:!0,opacity:.8}));n.rotation.x=Math.PI/2,i.add(n);const s=new Fs(new as({map:Vo,transparent:!0,depthWrite:!1,blending:fi,opacity:.7}));return s.scale.set(10,10,1),i.add(s),i}let Vo;function e_(){const i=new ce,t=new ce;t.position.y=21,i.add(t);const e=new Bt({color:15196888,metalness:.6,roughness:.45}),n=new ue({color:16742965}),s=new mt(new Di(16,.28,6,64),e);t.add(s);const r=new mt(new Di(15.1,.07,4,64),n);t.add(r);for(let d=0;d<16;d++){const h=new ze(.055,.055,32,4);h.rotateZ(Math.PI/2);const f=new mt(h,e);f.rotation.z=d/16*Math.PI,t.add(f)}const a=[],o=[16739125,4774086,15852747,2505292];for(let d=0;d<12;d++){const h=d/12*Math.PI*2,f=new ce;f.position.set(Math.cos(h)*16,Math.sin(h)*16,0);const _=new ce,S=new mt(new Ct(1.45,1.1,1.4),new Bt({color:o[d%4],roughness:.6,metalness:.2}));S.position.y=-.75,_.add(S);const m=new mt(new Ct(1.1,.42,1.05),new Bt({color:1518131,metalness:.3,roughness:.1}));m.position.y=-.73,_.add(m),f.add(_),t.add(f),a.push(_)}for(const d of[-1,1]){const h=new ze(.32,.5,22,5);h.translate(0,10.8,0);const f=new mt(h,e);f.position.set(d*5,0,0),f.rotation.z=d*.29,i.add(f)}const l=new mt(new Ct(15,.8,7),new Bt({color:3290938,roughness:.8}));l.position.y=.4,i.add(l);const c=new mt(new ze(1.1,1.1,3.4,12),e);c.rotation.x=Math.PI/2,c.position.y=21,i.add(c);let u=0;return{group:i,update(d){u+=d*.17,t.rotation.z=u,a.forEach(h=>{h.rotation.z=-u})}}}function n_(){const i=new ce,t=new Bt({color:1909803,metalness:.4,roughness:.55}),e=new ue({color:16735010}),n=new mt(new Ct(28,1.2,13),t);n.position.y=.6,i.add(n);const s=new mt(new Be(22,8),new ue({map:Qr({text:"HORIZON",sub:"LIVE ON THE COAST",accent:"#ff5b22",w:1024,h:384,bg:"rgba(10,15,22,.92)"}),side:Me}));s.position.set(0,6.5,-5.2),i.add(s);const r=new mt(new Ct(28,.6,13),t);r.position.set(0,11,0),i.add(r);for(const o of[-13,13])for(const l of[-5.5,5.5]){const c=new mt(new Ct(.45,10.4,.45),t);c.position.set(o,5.4,l),i.add(c)}for(let o=0;o<7;o++){const l=new mt(new Ct(9+o*1.3,.12,.12),e);l.position.set(0,10.8,-6.55),i.add(l)}for(const o of[-9,-4.5,0,4.5,9]){const l=new mt(new Ct(2,3.5,1.3),t);l.position.set(o,2.4,5.8),i.add(l)}for(const o of[-1,1]){const l=new mt(new Ct(.25,12,.25),t);l.position.set(o*14,6,0),i.add(l)}const a=new Gd(16738858,80,70,2);return a.position.set(0,5,8),i.add(a),i}function i_(i){const t=new ce,e=new Bt({color:i,roughness:.85,side:Me}),n=new mt(new Zn(7,4.4,4,1),e);n.rotation.y=Math.PI/4,n.position.y=5,t.add(n);const s=new Bt({color:5264984,metalness:.5,roughness:.5});for(const a of[-4.9,4.9])for(const o of[-4.9,4.9]){const l=new mt(new Ct(.12,3.4,.12),s);l.position.set(a,1.7,o),t.add(l)}const r=new mt(new Ct(4.2,.2,1.3),new Bt({color:7031860,roughness:.9}));return r.position.set(0,1.2,1.5),t.add(r),t}function s_(i){const t=new ce,e=new mt(new aa(7,12,10),new Bt({color:i,roughness:.55,metalness:.08,side:Me}));e.scale.set(1,1.12,1),e.position.y=12,t.add(e);const n=new mt(new Di(7.02,.16,4,24),new Bt({color:16246988,roughness:.7}));n.rotation.x=Math.PI/2,n.position.y=12,t.add(n);const s=new mt(new Ct(2.2,1.6,2.2),new Bt({color:7623219,roughness:.9}));s.position.y=2.3,t.add(s);for(const a of[-.8,.8])for(const o of[-.8,.8]){const l=new mt(new ze(.02,.02,5.2,3),new ue({color:3157289}));l.position.set(a,5.5,o),t.add(l)}const r=t.position.y;return t.userData.update=a=>{t.position.y=r+Math.sin(a*.35+i)*2.5,t.rotation.y=Math.sin(a*.08)*.3},t}function r_(i,t){const e=new ce,n=new Bt({color:i,roughness:.9}),s=new Bt({color:t,roughness:.9,flatShading:!0}),r=new Bt({color:1912887,metalness:.2,roughness:.25}),a=new mt(new Ct(9,4.4,7),n);a.position.y=2.2,e.add(a);const o=new mt(new Ct(6.5,2.5,5.4),n);o.position.set(-1,5.55,0),e.add(o);const l=new mt(new Zn(6.5,2.3,4),s);l.rotation.y=Math.PI/4,l.position.set(-1,7.95,0),e.add(l);const c=new mt(new Zn(4.7,1.4,4),s);c.rotation.y=Math.PI/4,c.position.set(2.8,5,1),e.add(c);for(let d=0;d<3;d++){const h=new mt(new Ct(1.2,1.2,.08),r);h.position.set(-1+d*1.8,5.4,2.72),e.add(h)}for(let d=0;d<2;d++){const h=new mt(new Ct(1.1,1.5,.08),r);h.position.set(-2.2+d*2.1,2.6,3.53),e.add(h)}const u=new mt(new Ct(1.1,2.1,.08),new Bt({color:7557947,roughness:.8}));return u.position.set(2.9,1.05,3.53),e.add(u),e}function a_(){const i=new ce,t=new Bt({color:15261129,roughness:.82}),e=new zo({color:1716280,metalness:.4,roughness:.1,clearcoat:1}),n=new mt(new Ct(17,22,10),t);n.position.y=11,i.add(n);for(let a=1;a<7;a++){const o=new mt(new Ct(18.4,.28,11.2),t);o.position.y=a*3,i.add(o);for(let l=0;l<5;l++){const c=new mt(new Ct(1.9,1.8,.12),e);c.position.set(-6.2+l*3.1,a*3+1.35,5.06),i.add(c)}}const s=new mt(new Ct(18,.7,11),new Bt({color:8216389,roughness:.9}));s.position.y=22.5,i.add(s);const r=ko("MAR AZUL","HOTEL & SPA","#48f2dc");return r.position.set(0,19,6.1),r.scale.set(10,2.5,1),i.add(r),i}function o_(){const i=new ce,t=new Bt({color:15853784,roughness:.8}),e=new Bt({color:13059890,roughness:.8}),n=new mt(new ze(2.1,3.1,15,12),t);n.position.y=7.5,i.add(n);const s=new mt(new ze(2.3,2.5,3.2,12),e);s.position.y=10,i.add(s);const r=new mt(new ze(2.25,2.25,1.2,12),new Bt({color:2503740,metalness:.6,roughness:.3}));r.position.y=15.4,i.add(r);const a=new mt(new ze(1.5,1.5,1.8,12),new ue({color:16766880}));a.position.y=16.8,i.add(a);const o=new mt(new Zn(1.9,1.4,12),e);return o.position.y=18.3,i.add(o),i}function l_(i){const t=new ce,e=new mt(new ze(.06,.06,3.2,5),new Bt({color:9274484,metalness:.3,roughness:.6}));e.position.y=1.6,t.add(e);const n=new mt(new Zn(2.3,.8,10),new Bt({color:i,roughness:.8,side:Me}));return n.position.y=3.15,t.add(n),t}function c_(){const i=new ce,t=new mt(new ia(1.2,5,4,8),new Bt({color:15789282,roughness:.45,metalness:.15}));t.rotation.z=Math.PI/2,t.scale.set(.6,1,1),t.position.y=.8,i.add(t);const e=new mt(new Ct(2.4,1.1,1.7),new Bt({color:2175806,roughness:.3,metalness:.3}));e.position.set(0,1.8,0),i.add(e);const n=new mt(new ze(.04,.04,7,4),new Bt({color:14604491}));return n.position.set(0,5.4,0),i.add(n),i}const As=new L;function mn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;As.copy(t),As[n]=0,As.normalize();const c=.5*a/(a+o),u=1-As.angleTo(i)/l;return Math.sign(As[e])===1?u*c:o/(a+o)+c+c*(1-u)}class li extends Ct{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new L,c=new L,u=new L(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,S=new L,m=.5/a;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/_)){case 0:S.set(1,0,0),f[v+0]=mn(S,c,"z","y",r,n),f[v+1]=1-mn(S,c,"y","z",r,e);break;case 1:S.set(-1,0,0),f[v+0]=1-mn(S,c,"z","y",r,n),f[v+1]=1-mn(S,c,"y","z",r,e);break;case 2:S.set(0,1,0),f[v+0]=1-mn(S,c,"x","z",r,t),f[v+1]=mn(S,c,"z","x",r,n);break;case 3:S.set(0,-1,0),f[v+0]=1-mn(S,c,"x","z",r,t),f[v+1]=1-mn(S,c,"z","x",r,n);break;case 4:S.set(0,0,1),f[v+0]=1-mn(S,c,"x","y",r,t),f[v+1]=1-mn(S,c,"y","x",r,e);break;case 5:S.set(0,0,-1),f[v+0]=mn(S,c,"x","y",r,t),f[v+1]=1-mn(S,c,"y","x",r,e);break}}static fromJSON(t){return new li(t.width,t.height,t.depth,t.segments,t.radius)}}function u_(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,10,128,128,128);e.addColorStop(0,"rgba(0,0,0,.78)"),e.addColorStop(.35,"rgba(0,0,0,.52)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new Qn(i);return n.colorSpace=en,n}let Ic=null;function Nc({color:i=16731416,accent:t=1053207,player:e=!1}={}){const n=new ce,s=new ce;n.add(s);const r=new zo({color:i,metalness:.42,roughness:.26,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.5}),a=new Bt({color:1119e3,metalness:.55,roughness:.4}),o=new zo({color:593944,metalness:.25,roughness:.08,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.94});new Bt({color:t,metalness:.28,roughness:.72});const l=new Bt({color:12370632,metalness:1,roughness:.2}),c=new Bt({color:789776,roughness:.9,metalness:.05}),u=new Bt({color:2434860,metalness:.95,roughness:.23}),d=new Bt({color:16774874,emissive:16771261,emissiveIntensity:4.5,roughness:.2}),h=new Bt({color:16718346,emissive:16717320,emissiveIntensity:3.5,roughness:.25});function f(H,q,k,ot,Y,et=0,rt=0,bt=0,Ft=e){const K=new mt(H,q);return K.position.set(k,ot,Y),K.rotation.set(et,rt,bt),K.castShadow=Ft,K.receiveShadow=!1,s.add(K),K}f(new li(1.97,.4,4.24,4,.14),r,0,.58,0).scale.set(1,1,1),f(new li(1.9,.32,3.55,4,.12),r,0,.84,-.06),f(new li(1.64,.11,1.55,3,.05),r,0,1.31,-.42),f(new li(1.49,.48,1.7,4,.16),o,0,1.11,-.26),f(new Ct(1.4,.03,.7),o,0,1.35,.42,-.46),f(new Ct(1.18,.32,.03),o,0,1.1,.63,0,0,0),f(new li(1.86,.2,.75,3,.08),r,0,.75,1.82),f(new Ct(1.92,.065,.34),a,0,.38,2.04),f(new Ct(1.18,.19,.08),a,0,.46,2.17),f(new Ct(.56,.14,.1),a,.58,.46,2.16),f(new Ct(.56,.14,.1),a,-.58,.46,2.16),f(new Ct(.5,.16,.04),d,.58,.8,2.19),f(new Ct(.5,.16,.04),d,-.58,.8,2.19),f(new Ct(.58,.035,.06),l,.58,.9,2.18),f(new Ct(.58,.035,.06),l,-.58,.9,2.18),f(new Ct(.14,.17,1),a,1,.68,.46),f(new Ct(.14,.17,1),a,-1,.68,.46),f(new Ct(.11,.1,2.85),a,1,.4,0),f(new Ct(.11,.1,2.85),a,-1,.4,0),f(new Ct(.16,.1,.29),a,1.05,1,.6),f(new Ct(.16,.1,.29),a,-1.05,1,.6),f(new Ct(.03,.075,.2),r,1.12,1.02,.6),f(new Ct(.03,.075,.2),r,-1.12,1.02,.6),f(new li(1.88,.25,.75,3,.08),r,0,.78,-1.82),f(new Ct(1.92,.1,.3),a,0,.36,-2.04),f(new Ct(1.26,.09,.04),h,0,.89,-2.2),f(new Ct(.32,.08,.04),h,.76,.89,-2.2),f(new Ct(.32,.08,.04),h,-.76,.89,-2.2),f(new Ct(.09,.35,.13),a,.63,.96,-1.92),f(new Ct(.09,.35,.13),a,-.63,.96,-1.92),f(new Ct(1.76,.075,.36),a,0,1.14,-1.96),f(new Ct(1.76,.025,.36),r,0,1.18,-1.96),f(new Ct(.9,.05,.2),a,0,1.2,-2.02);const S=new ue({color:16757101});f(new Ct(.02,.03,2.4),S,1.005,.52,.1),f(new Ct(.02,.03,2.4),S,-1.005,.52,.1);const m=new ze(.39,.39,.34,18,1);m.rotateZ(Math.PI/2);const p=new ze(.245,.245,.35,12,1);p.rotateZ(Math.PI/2);const v=new ze(.17,.17,.36,12,1);v.rotateZ(Math.PI/2);const A=[];for(let H=0;H<5;H++){const q=new Ct(.05,.38,.06);h_(q,H),A.push(q)}const E=[[-1,.4,1.38,!0],[1,.4,1.38,!0],[-1,.4,-1.4,!1],[1,.4,-1.4,!1]],P=[],C=[];for(const[H,q,k,ot]of E){const Y=new ce;Y.position.set(H,q,k);const et=new ce;Y.add(et);const rt=new mt(m,c);rt.castShadow=e,et.add(rt);const bt=new mt(p,u);et.add(bt);const Ft=new mt(v,l);et.add(Ft);for(const K of A){const xt=new mt(K,u);et.add(xt)}n.add(Y),P.push(et),ot&&C.push(Y)}const g=new ue({color:16730641,transparent:!0,opacity:0});if(e){const H=new mt(new Be(6.2,7.2),new ue({map:Ic||(Ic=u_()),transparent:!0,opacity:.72,depthWrite:!1,blending:is}));H.rotation.x=-Math.PI/2,H.position.y=.02,H.renderOrder=2,n.add(H)}const y=[];if(e)for(const H of[-.58,.58]){const q=new Bd(16769720,220,72,.36,.7,1.4);q.position.set(H,.86,2);const k=new Re;k.position.set(H*.35,.1,28),n.add(q,k),q.target=k,y.push(q)}const U=new ue({color:9435647,transparent:!0,opacity:0,blending:fi,depthWrite:!1}),D=[];for(const H of[-.46,.46]){const q=new mt(new Zn(.12,.85,7,1,!0),U);q.position.set(H,.4,-2.2),q.rotation.x=-Math.PI/2,n.add(q),D.push(q)}let B=0,G=0,X=0,F=0;return{group:n,body:s,paint:r,wheels:P,frontWheels:C,tailMat:h,headMat:d,lights:y,update(H,q=0,k=0,ot=0,Y=0,et=!1,rt=!1){B-=q*H/.39;for(const K of P)K.rotation.x=B;for(const K of C)K.rotation.y=-k*.39;const bt=Bo.clamp(-k*Math.min(q/38,1)*.115-ot*.06,-.14,.14),Ft=Bo.clamp(-Y*.008,-.045,.055);G+=(bt-G)*Math.min(1,H*6),X+=(Ft-X)*Math.min(1,H*5),s.rotation.z=G,s.rotation.x=X,s.position.y=Math.sin(B*.1)*.004,F+=((et?1:0)-F)*Math.min(1,H*12),U.opacity=F*(.55+Math.random()*.25);for(const K of D)K.scale.set(1,.65+Math.random()*.8,1),K.visible=F>.05;h.emissiveIntensity=rt?8:3.2,g.opacity=0},setPaint(H){r.color.setHex(H)},dispose(){n.traverse(H=>{H.geometry&&H.geometry.dispose()})}}}function h_(i,t){const e=t/5*Math.PI*2;i.rotateX(e),i.translate(0,0,0)}class d_{constructor(){this.ctx=null,this.started=!1,this.muted=!1,this.master=null,this.engineGain=null,this.engineFilter=null,this.engineA=null,this.engineB=null,this.windGain=null,this.screechGain=null,this.boosting=!1,this.gear=1}init(){if(this.started){this.ctx?.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.started=!0;const n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=22,n.ratio.value=5,n.attack.value=.004,n.release.value=.2,n.connect(e.destination),this.master=e.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(n),this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=620,this.engineFilter.Q.value=3.2,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.master),this.engineA=e.createOscillator(),this.engineA.type="sawtooth",this.engineA.frequency.value=55,this.engineA.connect(this.engineFilter),this.engineA.start(),this.engineB=e.createOscillator(),this.engineB.type="square",this.engineB.frequency.value=27.5;const s=e.createGain();s.gain.value=.32,this.engineB.connect(s),s.connect(this.engineFilter),this.engineB.start();const r=e.createBuffer(1,e.sampleRate*2,e.sampleRate),a=r.getChannelData(0);for(let d=0;d<a.length;d++)a[d]=Math.random()*2-1;this.noiseBuffer=r;const o=e.createBufferSource();o.buffer=r,o.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=800,l.Q.value=.55,this.windGain=e.createGain(),this.windGain.gain.value=0,o.connect(l),l.connect(this.windGain),this.windGain.connect(this.master),o.start();const c=e.createBufferSource();c.buffer=r,c.loop=!0;const u=e.createBiquadFilter();u.type="bandpass",u.frequency.value=2100,u.Q.value=6,this.screechGain=e.createGain(),this.screechGain.gain.value=0,c.connect(u),u.connect(this.screechGain),this.screechGain.connect(this.master),c.start()}setMuted(t){this.muted=t,this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.linearRampToValueAtTime(t?0:.72,this.ctx.currentTime+.12))}update({speed:t=0,throttle:e=0,drifting:n=0,boosting:s=!1,offroad:r=!1,playing:a=!1}){if(!this.started)return;const o=this.ctx.currentTime,l=Math.abs(t)*3.6,c=Math.max(1,Math.min(7,Math.ceil(l/42)));this.gear=c;const u=(l%42/42+c*.4)/7,d=32+u*125+(s?22:0);this.engineA.frequency.setTargetAtTime(d,o,.035),this.engineB.frequency.setTargetAtTime(d*.501,o,.035),this.engineFilter.frequency.setTargetAtTime(380+u*1050+e*520,o,.05);const h=a?.012+Math.min(l/290,1)*.045+e*.012:.004;this.engineGain.gain.setTargetAtTime(h,o,.08),this.windGain.gain.setTargetAtTime(a?Math.min(l/300,1)**1.7*.032+(r?.012:0):0,o,.1),this.screechGain.gain.setTargetAtTime(a?Math.min(n*.035,.03):0,o,.045)}blip(t=440,e=.08,n="square",s=.05){if(!this.started||this.muted)return;const r=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type=n,a.frequency.value=t,o.gain.setValueAtTime(s,r),o.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(this.master),a.start(r),a.stop(r+e+.02)}countdown(t){t<=0?(this.blip(880,.32,"sawtooth",.07),this.blip(1320,.28,"sine",.045)):this.blip(330+(3-t)*30,.12,"square",.045)}collect(){this.blip(740,.1,"sine",.06),setTimeout(()=>this.blip(1110,.16,"sine",.05),70),setTimeout(()=>this.blip(1480,.2,"sine",.035),150)}checkpoint(){this.blip(660,.09,"sine",.045),setTimeout(()=>this.blip(990,.12,"sine",.04),60)}finish(){[523,659,784,1047].forEach((e,n)=>setTimeout(()=>this.blip(e,.4,"sawtooth",.045),n*110))}ui(){this.blip(520,.045,"sine",.025)}impact(){if(!this.started||this.muted)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=420;const s=this.ctx.createGain();s.gain.setValueAtTime(.14,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.22),e.connect(n),n.connect(s),s.connect(this.master),e.start(t),e.stop(t+.24)}}const gn=i=>document.getElementById(i),pl=Bo.clamp,Ti=Math.PI*2,$e=[{id:"sprint",name:"HORIZON SPRINT",sub:"Costa del Sol · 1 Lap",laps:1,aiBase:42,reward:4500,xp:650},{id:"circuit",name:"COASTAL CIRCUIT",sub:"Costa del Sol · 2 Laps",laps:2,aiBase:48,reward:9e3,xp:1100},{id:"showdown",name:"SUNSET SHOWDOWN",sub:"Costa del Sol · 2 Laps",laps:2,aiBase:54,reward:16e3,xp:1800}],Nu="horizon6-costa-del-sol-v1",Za={credits:12500,completed:[],best:{},boards:[],xp:0,muted:!1};let pe=f_();function f_(){try{const i=localStorage.getItem(Nu);return i?{...Za,...JSON.parse(i)}:{...Za}}catch{return{...Za}}}function ha(){try{localStorage.setItem(Nu,JSON.stringify(pe))}catch{}}const ml=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;ml&&document.body.classList.add("is-touch");const Ke=new Set,wn={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,drift:!1},Ee={throttle:0,brake:0,steer:0,handbrake:!1,nitro:!1},me=new d_;me.muted=pe.muted;let _n,Is,Ae,At,be,Lt="loading",gl="free",on=0,wt=null,kr=0,jr=4,zs=0,di=0,$s=null,Gs=-2.08,dn=0,Uc=null,Fc=null,Ai=1,ta=!1,es=0;const I={pos:new L,heading:0,speed:0,steer:0,slip:0,boost:100,boosting:!1,drifting:!1,driftTime:0,driftScore:0,driftMultiplier:1,distance:0,offroad:!1,topSpeed:0,gear:1,waterTimer:0},mi=[],Oc=[4774088,15846504,5535704,15262165,11093817],j={};function p_(){const i=["hud","title-screen","race-strip","lap-value","time-value","pos-value","objective-kicker","objective-title","objective-meta","credits-value","sound-btn","pause-btn","checkpoint-callout","checkpoint-arrow","checkpoint-distance","drift-readout","drift-value","drift-multiplier","minimap","toast","toast-icon","toast-text","speed-value","rpm-path","gear-value","nitro-fill","surface-label","drive-mode","event-prompt","prompt-title","prompt-meta","prompt-kicker","countdown","countdown-label","announcement","announcement-kicker","announcement-title","results","results-kicker","results-position","results-title","results-subtitle","results-stars","result-time","result-lap","result-speed","result-reward","result-xp","continue-btn","retry-btn","pause","resume-btn","pause-roam-btn","pause-title-btn","loading","loading-bar","loading-number","transition-flash","race-btn","roam-btn","touch-controls"];for(const t of i)j[t.replaceAll("-","_")]=gn(t);j.mapCtx=j.minimap.getContext("2d"),j.rpm_path.setAttribute("pathLength","100")}async function m_(){p_(),j.loading_bar.style.width="8%",j.loading_number.textContent="08",await Ja(),await Promise.race([document.fonts.ready,new Promise(e=>setTimeout(e,2400))]);const i=gn("scene");_n=new Bg({canvas:i,antialias:!0,powerPreference:"high-performance"});const t=Math.min(window.devicePixelRatio||1,ml?1.25:1.7);_n.setPixelRatio(t),_n.setSize(window.innerWidth,window.innerHeight),_n.outputColorSpace=en,_n.toneMapping=Ko,_n.toneMappingExposure=1.12,_n.shadowMap.enabled=!0,_n.shadowMap.type=Bc,Is=new nd,Ae=new un(56,window.innerWidth/window.innerHeight,.1,3600),j.loading_bar.style.width="30%",j.loading_number.textContent="30",await Ja(),At=Jg(Is),j.loading_bar.style.width="68%",j.loading_number.textContent="68",await Ja(),be=Nc({color:16730904,accent:1185050,player:!0}),Is.add(be.group);for(let e=0;e<Oc.length;e++){const n=Nc({color:Oc[e],accent:1382429,player:!1});Is.add(n.group),mi.push({car:n,index:e,distance:e*45,speed:12,baseLane:[-4.4,4.4,-1.7,1.7,-4.8][e],lane:0,phase:Math.random()*10,finished:!1,finishHold:0,cruise:15+e*1.5,target:20})}y_(),Zs(),__(),_l(pe.muted,!1),j.loading_bar.style.width="100%",j.loading_number.textContent="100",await g_(450),j.loading.classList.add("is-done"),Fu(),Lt="title",Gs=-2.08,Sl(),requestAnimationFrame(qu)}function Ja(){return new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)))}function g_(i){return new Promise(t=>setTimeout(t,i))}function __(){gn("race-btn").addEventListener("click",()=>{me.init(),Bu()}),gn("roam-btn").addEventListener("click",()=>{me.init(),fa(!0)}),gn("continue-btn").addEventListener("click",()=>Wu()),gn("retry-btn").addEventListener("click",()=>da(on)),gn("resume-btn").addEventListener("click",()=>vl()),gn("pause-roam-btn").addEventListener("click",()=>P_()),gn("pause-title-btn").addEventListener("click",()=>L_()),gn("pause-btn").addEventListener("click",()=>Xo()),gn("sound-btn").addEventListener("click",()=>_l(!me.muted)),document.querySelectorAll("[data-control]").forEach(i=>{const t=i.dataset.control,e=s=>{s.preventDefault(),i.classList.add("is-down"),wn[t]=!0},n=s=>{s.preventDefault(),i.classList.remove("is-down"),wn[t]=!1};i.addEventListener("pointerdown",e),i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),i.addEventListener("pointerleave",s=>{s.buttons===0&&n(s)}),i.addEventListener("contextmenu",s=>s.preventDefault())}),window.addEventListener("keydown",x_),window.addEventListener("keyup",v_),window.addEventListener("blur",()=>{Ke.clear(),Uu()}),window.addEventListener("resize",M_),document.addEventListener("visibilitychange",()=>{document.hidden&&(Lt==="free"||Lt==="race"||Lt==="countdown")&&Xo()})}function Uu(){for(const i of Object.keys(wn))wn[i]=!1;document.querySelectorAll("[data-control]").forEach(i=>i.classList.remove("is-down"))}function x_(i){const t=i.code;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t)&&i.preventDefault(),!Ke.has(t)){if(Ke.add(t),t==="KeyM"){_l(!me.muted);return}if(Lt==="title"){t==="Enter"||t==="Space"?(me.init(),Bu()):t==="KeyF"&&(me.init(),fa(!0));return}if(Lt==="results"){t==="Enter"?Wu():t==="KeyR"&&da(on);return}if(Lt==="paused"){t==="Escape"&&vl();return}if(t==="Escape"||t==="KeyP"){Xo();return}Lt==="free"&&t==="KeyE"&&w_(),t==="KeyR"&&qo(),t==="KeyC"&&(dn=(dn+1)%3,Je("CAMERA",["CHASE","HOOD","WIDE"][dn]))}}function v_(i){Ke.delete(i.code)}function M_(){!_n||!Ae||(Ae.aspect=window.innerWidth/window.innerHeight,Ae.updateProjectionMatrix(),_n.setPixelRatio(Math.min(window.devicePixelRatio||1,ml?1.25:1.7)),_n.setSize(window.innerWidth,window.innerHeight))}function S_(){const i=Ke.has("KeyA")||Ke.has("ArrowLeft")||wn.left,t=Ke.has("KeyD")||Ke.has("ArrowRight")||wn.right;Ee.steer=(i?1:0)-(t?1:0),Ee.throttle=Ke.has("KeyW")||Ke.has("ArrowUp")||wn.gas?1:0,Ee.brake=Ke.has("KeyS")||Ke.has("ArrowDown")||wn.brake?1:0,Ee.handbrake=Ke.has("Space")||wn.drift,Ee.nitro=Ke.has("ShiftLeft")||Ke.has("ShiftRight")||wn.nitro;const e=navigator.getGamepads?navigator.getGamepads():[],n=e&&e[0];if(n){const s=n.axes[0]||0;Math.abs(s)>.15&&(Ee.steer=-Math.sign(s)*Math.min(1,Math.abs(s))),n.buttons[7]?.pressed&&(Ee.throttle=1),n.buttons[6]?.pressed&&(Ee.brake=1),n.buttons[5]?.pressed&&(Ee.nitro=!0),n.buttons[0]?.pressed&&(Ee.handbrake=!0)}}function Fu(){I.pos.set(16.5,.1,208.6),I.heading=-2.27,I.speed=0,I.steer=0,I.slip=0,I.drifting=!1,be.group.visible=!0,be.group.position.copy(I.pos),be.group.rotation.y=I.heading,be.update(0,0,0,0,0,!1,!1)}function Ou(i,t=-3.2,e=0){const n=At.sampleAt(i),s=n.point.clone().addScaledVector(n.normal,t).addScaledVector(n.tangent,e),r=At.groundAt(s.x,s.z);I.pos.set(s.x,r.y+.03,s.z),I.heading=Math.atan2(n.tangent.x,n.tangent.z),I.speed=0,I.steer=0,I.slip=0,I.boost=100,I.distance=0,I.topSpeed=0,I.drifting=!1,I.driftScore=0,I.driftTime=0,be.group.position.copy(I.pos),be.group.rotation.y=I.heading,be.update(0,0,0,0,0,!1,!1)}function Bu(){const i=zu();da(i)}function zu(){const i=$e.findIndex(t=>!pe.completed.includes(t.id));return i===-1?$e.length-1:i}function y_(){At&&At.collectibles.forEach((i,t)=>{i.visible=!pe.boards.includes(t)})}function Zs(){j.credits_value&&(j.credits_value.textContent=Math.floor(pe.credits).toLocaleString("en-US"))}function _l(i,t=!0){me.setMuted(i),pe.muted=i,j.sound_btn&&j.sound_btn.classList.toggle("is-muted",i),t&&ha()}function Wo(i){if(!isFinite(i))return"--:--.--";const t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i%1*100);return`${t}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}function E_(i){const t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i%1*100);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(2,"0")}`}function Gu(i){return i===1?"1ST":i===2?"2ND":i===3?"3RD":`${i}TH`}function da(i){me.init(),on=i;const t=$e[i];clearTimeout($s),ta=!1,es=0,document.body.classList.remove("paused","results-open"),j.title_screen.classList.add("is-hidden"),j.results.classList.add("is-hidden"),j.pause.classList.add("is-hidden"),j.event_prompt.classList.add("is-hidden"),j.hud.classList.remove("is-hidden"),j.race_strip.classList.remove("is-hidden"),j.touch_controls.style.display="",document.body.classList.add("playing"),wt={event:t,laps:t.laps,lap:1,nextGate:0,time:0,lapStart:0,bestLap:1/0,lastLap:0,topSpeed:0,place:1,finished:!1,finishTime:0},Lt="countdown",kr=3.05,jr=3,zs=0,gl="countdown",Ou(.978,-3.2),I.distance=-.022*At.trackLength,I.boost=100,I.offroad=!1,At.groundAt(I.pos.x,I.pos.z),b_(),At.showCheckpoints(),At.setCheckpointActive(0),At.eventMarker.visible=!1,j.countdown.classList.remove("is-hidden"),j.countdown_label.textContent="3",j.countdown_label.style.animation="none",j.countdown_label.offsetWidth,j.countdown_label.style.animation="",j.checkpoint_callout.classList.remove("is-hidden"),j.drift_readout.classList.add("is-hidden"),j.announcement.classList.add("is-hidden"),xl(0),Ml(),Js(),Je("EVENT",t.name),me.countdown(3)}function b_(){mi.forEach((i,t)=>{i.distance=-(6.5+t*4.2),i.baseLane=[4.2,-.6,1.8,-4.6,3.4][t],i.lane=i.baseLane,i.speed=0,i.finished=!1,i.finishHold=0,i.target=$e[on].aiBase+t*.9,i.car.group.visible=!0,i.car.group.position.y=.11,Hu(i,0)})}function Hu(i,t){const e=At.trackLength,n=(i.distance/e%1+1)%1,s=At.curve.getPointAt(n),r=At.curve.getTangentAt(n),a=new L(-r.z,0,r.x),o=i.baseLane+Math.sin(i.distance*.013+i.phase)*1.25,l=s.x+a.x*o,c=s.z+a.z*o;i.car.group.position.set(l,.11,c),i.car.group.rotation.y=Math.atan2(r.x,r.z),i.car.update(t,i.speed,Math.sin(i.phase+di*2)*.03,0,0,!1,!1)}function Rs(i){for(const t of mi){if(t.finished){t.finishHold-=i,t.finishHold<=0&&(t.car.group.visible=!1);continue}let e;if(Lt==="countdown")e=0,t.speed=0;else if(Lt==="race"||Lt==="finished"||Lt==="paused")if(Lt==="paused"||Lt==="finished")e=t.speed;else{const n=(t.distance/At.trackLength%1+1)%1,s=At.curve.getTangentAt(n),r=At.curve.getTangentAt((n+.015)%1),a=s.angleTo(r);e=t.target-pl(a*170,0,8),I.distance-t.distance>85?e+=6:t.distance-I.distance>85&&(e-=4)}else e=Lt==="title"?t.cruise*1.25:t.cruise;if(t.speed+=(e-t.speed)*Math.min(1,i*1.55),Lt!=="paused"&&Lt!=="finished"&&Lt!=="countdown"&&(t.distance+=t.speed*i),Lt==="race"&&t.distance>=At.trackLength*wt.laps){t.finished=!0,t.finishHold=.7,t.speed=0;continue}Hu(t,i)}}function xl(i){(At.startGate.userData.lights||[]).forEach((e,n)=>{const s=n<i;e.material.color.setHex(s?16722704:2429454)})}function ku(){(At.startGate.userData.lights||[]).forEach(t=>t.material.color.setHex(5111692))}function fa(i=!1){clearTimeout($s),i&&(me.init(),j.title_screen.classList.add("is-hidden"),document.body.classList.add("playing")),document.body.classList.remove("paused","results-open"),j.hud.classList.remove("is-hidden"),j.results.classList.add("is-hidden"),j.pause.classList.add("is-hidden"),j.race_strip.classList.add("is-hidden"),j.checkpoint_callout.classList.add("is-hidden"),j.drift_readout.classList.add("is-hidden"),j.countdown.classList.add("is-hidden"),j.announcement.classList.add("is-hidden"),j.touch_controls.style.display="",Lt="free",wt=null,on=zu(),At.hideCheckpoints(),At.eventMarker.visible=!0,Ou(.962,-3.2),Ml(),Vu(),i&&(Je("WELCOME TO THE FESTIVAL","Follow the coast to the start gate"),setTimeout(()=>{Lt==="free"&&Je("EVENT AHEAD",$e[on].name)},2600))}function Js(){wt&&(j.lap_value.innerHTML=`${wt.lap}<span>/${wt.laps}</span>`,j.time_value.textContent=E_(wt.time),j.pos_value.innerHTML=`${wt.place}<span>/${mi.length+1}</span>`)}function Vu(){const i=$e[on],t=Math.round(pa()),e=pe.completed.length;j.objective_kicker.textContent=e===$e.length?"FESTIVAL COMPLETE":"NEXT FESTIVAL EVENT",j.objective_title.textContent=i.name,j.objective_meta.textContent=`${t} M TO THE START GATE · ${pe.boards.length}/10 BOARDS`}function pa(){const i=I.pos.x-At.startPoint.x,t=I.pos.z-At.startPoint.z;return Math.hypot(i,t)}function w_(){if(Lt==="free"){if(pa()>32){Je("EVENT GATE","Drive to the Horizon start arch");return}da(on)}}function Cs(i){if(S_(),Lt==="title"){be.update(i,0,0,0,0,!1,!1);return}if(Lt==="countdown"){I.speed=0,be.update(i,0,0,0,0,!1,!1);return}if(Lt==="finished"){I.speed*=1-Math.min(.95,i*2.4);const A=new L(Math.sin(I.heading),0,Math.cos(I.heading));I.pos.addScaledVector(A,I.speed*i),be.update(i,I.speed,0,0,0,!1,!1),be.group.position.copy(I.pos),be.group.rotation.y=I.heading,me.update({speed:I.speed,throttle:0,drifting:0,boosting:!1,offroad:I.offroad,playing:!0});return}const t=I.pos.x,e=I.pos.z,s=At.groundAt(I.pos.x,I.pos.z).dist<=At.roadHalfWidth+1.2;I.offroad=!s,I.steer+=(Ee.steer-I.steer)*Math.min(1,i*7.5);const r=Ee.handbrake,a=Math.abs(I.speed),o=Ee.nitro&&I.boost>1&&Ee.throttle>0&&I.speed>3&&!I.offroad;if(I.boosting=o,o?(I.boost=Math.max(0,I.boost-25*i),I.speed+=30*i):I.boost=Math.min(100,I.boost+(I.drifting?5.2:1.35)*i),Ee.throttle>0&&I.speed>=0){const A=I.offroad?.42:1;I.speed+=19.5*(1-Math.min(I.speed/112,.96))*i*A}if(Ee.brake>0&&(I.speed>.15?I.speed-=(I.offroad?45:34)*i:I.speed=Math.max(-11,I.speed-6.5*i)),Ee.throttle===0&&Ee.brake===0&&(I.speed-=Math.sign(I.speed)*(1+a*.043)*i,Math.abs(I.speed)<.2&&(I.speed=0)),!I.boosting){const A=I.offroad?39:84;I.speed>A&&(I.speed-=(I.offroad?25:8)*i),I.speed>108&&(I.speed=108)}I.offroad&&(I.speed-=Math.sign(I.speed)*Math.min(a*.1,1.6)*i),r&&(I.speed-=Math.sign(I.speed)*9*i),I.speed=pl(I.speed,-11,108);const l=I.offroad?.63:1,c=Math.min(1,a/6),u=I.steer*1.58*(1-Math.min(a/112,.7))*c*l*(r?1.58:1);I.heading+=u*i*(I.speed>=0?1:-1);const d=r&&a>11&&Math.abs(I.steer)>.18,h=d?I.steer*.3:I.steer*.025;I.slip+=(h-I.slip)*Math.min(1,i*(d?7.5:5)),I.drifting=Math.abs(I.slip)>.055&&a>10;const f=new L(Math.sin(I.heading),0,Math.cos(I.heading)),_=new L(Math.cos(I.heading),0,-Math.sin(I.heading));I.pos.addScaledVector(f,I.speed*i),I.pos.addScaledVector(_,I.slip*I.speed*i*.62),I.pos.z>273?(I.pos.z=273,I.speed*=.45,I.waterTimer+=i,I.waterTimer>1.5&&(I.waterTimer=0,qo(!0),Je("SALTWATER","Back to the asphalt"))):I.waterTimer=0,(I.pos.x<-500||I.pos.x>500||I.pos.z<-400)&&qo(!0);const S=At.groundAt(I.pos.x,I.pos.z);I.offroad=S.dist>At.roadHalfWidth+1.2,I.pos.y=S.y+.03;const m=I.pos.x-t,p=I.pos.z-e;Lt==="race"&&wt&&(I.distance+=m*S.tangent.x+p*S.tangent.z,wt.topSpeed=Math.max(wt.topSpeed,Math.abs(I.speed)*3.6)),I.topSpeed=Math.max(I.topSpeed,Math.abs(I.speed)*3.6);const v=Ee.throttle-Ee.brake;if(be.group.position.copy(I.pos),be.group.rotation.y=I.heading+I.slip*.9,be.update(i,I.speed,I.steer,I.slip,v,I.boosting,Ee.brake>0),be.lights?.forEach(A=>{A.intensity=I.offroad?160:220}),I.gear=Math.max(1,Math.min(7,Math.ceil(Math.abs(I.speed)*3.6/43))),me.update({speed:I.speed,throttle:Ee.throttle,drifting:I.drifting?Math.abs(I.slip)*2.4:0,boosting:I.boosting,offroad:I.offroad,playing:!0}),I.drifting&&!I.offroad)I.driftTime+=i,I.driftMultiplier=1+Math.min(4,I.driftTime*.42),I.driftScore+=Math.abs(I.speed)*i*13*I.driftMultiplier,es=0,I.boost=Math.min(100,I.boost+3.2*i);else if(I.driftTime=0,I.driftScore>0&&(es+=i,es>.85)){const A=Math.floor(I.driftScore);A>40&&(pe.credits+=Math.floor(A/18),pe.xp+=Math.floor(A/25),ha(),Zs(),Je("DRIFT BANK",`+${A.toLocaleString("en-US")} PTS · +${Math.floor(A/18)} CR`),me.collect()),I.driftScore=0,I.driftTime=0,I.driftMultiplier=1,es=0}T_(),Lt==="race"&&wt&&A_()}function T_(){At&&At.collectibles.forEach((i,t)=>{if(!i.visible)return;const e=i.position.x-I.pos.x,n=i.position.z-I.pos.z;e*e+n*n<12.5&&(i.visible=!1,pe.boards.includes(t)||pe.boards.push(t),pe.credits+=350,pe.xp+=100,ha(),Zs(),me.collect(),Je("HORIZON BOARD",`${pe.boards.length} / ${At.collectibles.length} FOUND · +350 CR`),pe.boards.length===At.collectibles.length&&setTimeout(()=>Je("COLLECTION COMPLETE","Every Horizon board discovered"),1700))})}function A_(){if(!(!wt||Lt!=="race")){if(wt.nextGate<At.checkpointGates.length){const i=At.checkpointGates[wt.nextGate],t=I.pos.x-i.point.x,e=I.pos.z-i.point.z;Math.hypot(t,e)<14.5&&(wt.nextGate++,me.checkpoint(),wt.nextGate<At.checkpointGates.length?(At.setCheckpointActive(wt.nextGate),Je("CHECKPOINT",`${wt.nextGate} / ${At.checkpointGates.length} · KEEP PUSHING`)):(At.setCheckpointActive(99),Je("FINAL SECTOR","Hit the finish line")))}if(wt.nextGate>=At.checkpointGates.length){const i=pa(),t=At.trackLength*(wt.lap-.22);if(i<15&&I.distance>t){const e=wt.time-wt.lapStart;wt.lastLap=e,wt.bestLap=Math.min(wt.bestLap,e),wt.lap>=wt.laps?R_():(wt.lap++,wt.nextGate=0,wt.lapStart=wt.time,At.setCheckpointActive(0),me.checkpoint(),yl("LAP COMPLETE",`${wt.lap} / ${wt.laps}`),Je("LAP",`${Wo(e)} · FINAL LAP`),Js())}}}}function R_(){if(!wt||wt.finished)return;wt.finished=!0,Lt="finished",wt.time=wt.time,Ai=1+mi.filter(r=>r.finished).length,wt.place=Ai,ku(),At.hideCheckpoints(),j.checkpoint_callout.classList.add("is-hidden"),j.drift_readout.classList.add("is-hidden");const i=$e[on],t=Ai===1?1:Ai<=3?.62:.36,e=Math.round(i.reward*t),n=Math.round(i.xp*t);pe.credits+=e,pe.xp+=n,pe.completed.includes(i.id)||pe.completed.push(i.id);const s=pe.best[i.id];pe.best[i.id]={time:Math.min(s?.time??1/0,wt.time),place:Math.min(s?.place??99,Ai),lap:Math.min(s?.lap??1/0,wt.bestLap)},wt.reward=e,wt.xp=n,ha(),Zs(),Js(),me.finish(),Xu(),yl(`FINISH · ${Gu(Ai)}`,i.name),$s=setTimeout(()=>C_(Ai),1900)}function C_(i){if(ta||Lt==="title")return;ta=!0,Lt="results",document.body.classList.add("results-open"),j.touch_controls.style.display="none";const t=$e[on],e=i===1?3:i<=3?2:1,n=pe.completed.length>=$e.length;j.results_kicker.textContent=n?"FESTIVAL COMPLETE":"EVENT COMPLETE",j.results_position.innerHTML=`${i}<small>${i===1?"ST":i===2?"ND":i===3?"RD":"TH"}</small>`,j.results_title.textContent=n?"COSTA DEL SOL CHAMPION":t.name,j.results_subtitle.textContent=n?"Every festival event conquered · Season 01":`${t.sub} · ${i===1?"FLAWLESS VICTORY":"EVENT FINISHED"}`,j.results_stars.innerHTML=[0,1,2].map(s=>`<span class="star ${s<e?"is-on":""}">★</span>`).join(""),j.result_time.textContent=Wo(wt.time),j.result_lap.textContent=Wo(wt.bestLap),j.result_speed.innerHTML=`${Math.round(wt.topSpeed)}<span> KM/H</span>`,j.result_reward.textContent=`+ ${wt.reward.toLocaleString("en-US")} CR`,j.result_xp.textContent=`+${wt.xp.toLocaleString("en-US")} FESTIVAL XP`,j.continue_btn.querySelector("span").textContent=n?"EXPLORE COSTA DEL SOL":"CONTINUE FESTIVAL",j.results.classList.remove("is-hidden"),Zs()}function Wu(){if(Lt==="results"){if(clearTimeout($s),j.results.classList.add("is-hidden"),document.body.classList.remove("results-open"),fa(!1),pe.completed.length>=$e.length)Je("FESTIVAL COMPLETE","Costa del Sol is yours · Keep exploring");else{const i=$e[on];Je("NEXT EVENT UNLOCKED",i.name)}me.ui()}}function Xo(){if(Lt==="paused"){vl();return}["free","race","countdown","finished"].includes(Lt)&&(gl=Lt,Lt="paused",document.body.classList.add("paused"),j.pause.classList.remove("is-hidden"),Ke.clear(),Uu(),me.ui())}function vl(){Lt==="paused"&&(Lt=gl,document.body.classList.remove("paused"),j.pause.classList.add("is-hidden"),me.ui())}function P_(){document.body.classList.remove("paused","results-open"),j.pause.classList.add("is-hidden"),j.results.classList.add("is-hidden"),fa(!1),Je("FREE ROAM","Costa del Sol is yours to explore")}function L_(){clearTimeout($s),ta=!1,Lt="title",wt=null,document.body.classList.remove("playing","paused","results-open"),j.hud.classList.add("is-hidden"),j.results.classList.add("is-hidden"),j.pause.classList.add("is-hidden"),j.event_prompt.classList.add("is-hidden"),j.countdown.classList.add("is-hidden"),j.announcement.classList.add("is-hidden"),j.title_screen.classList.remove("is-hidden"),At.hideCheckpoints(),At.eventMarker.visible=!0,j.touch_controls.style.display="none",Fu(),Gs=-2.08,di=0,xl(0),me.update({speed:0,throttle:0,drifting:0,boosting:!1,offroad:!1,playing:!1})}function qo(i=!1){if(!At||!["free","race","countdown"].includes(Lt))return;const t=At.nearestTrack(I.pos.x,I.pos.z),e=At.groundAt(t.point.x,t.point.z);I.pos.set(t.point.x,e.y+.03,t.point.z),I.heading=Math.atan2(t.tangent.x,t.tangent.z),I.speed=0,I.steer=0,I.slip=0,be.group.position.copy(I.pos),be.group.rotation.y=I.heading,Ml(),i||Je("RESET","Back on the racing line"),Xu()}function Ml(){if(!Ae)return;const i=new L(Math.sin(I.heading),0,Math.cos(I.heading)),t=dn===2?13:dn===1?.2:8.4,e=dn===2?5.2:dn===1?1.55:3.1;Ae.position.set(I.pos.x-i.x*t,I.pos.y+e,I.pos.z-i.z*t),Ae.lookAt(I.pos.x+i.x*8,I.pos.y+1.2,I.pos.z+i.z*8),Ae.fov=dn===1?67:58,Ae.updateProjectionMatrix()}function Ps(i){if(Lt==="title"){Sl();return}if(Lt==="paused")return;const t=new L(Math.sin(I.heading),0,Math.cos(I.heading)),e=new L(Math.cos(I.heading),0,-Math.sin(I.heading)),n=Math.abs(I.speed),s=Math.min(1,n/86);let r,a;if(dn===1)r=new L(I.pos.x+t.x*.65+e.x*.15,I.pos.y+1.48,I.pos.z+t.z*.65+e.z*.15),a=new L(I.pos.x+t.x*28,I.pos.y+1.35,I.pos.z+t.z*28);else if(dn===2)r=new L(I.pos.x-t.x*(12.5+s*2),I.pos.y+5.2,I.pos.z-t.z*(12.5+s*2)),a=new L(I.pos.x+t.x*5,I.pos.y+1.2,I.pos.z+t.z*5);else{const u=8.2+s*3.2,d=2.9+s*.5;r=new L(I.pos.x-t.x*u-e.x*I.slip*2.2,I.pos.y+d,I.pos.z-t.z*u-e.z*I.slip*2.2),a=new L(I.pos.x+t.x*(7.5+s*6),I.pos.y+1.18,I.pos.z+t.z*(7.5+s*6))}const o=At.groundAt(r.x,r.z).y;r.y=Math.max(r.y,o+1.2);const l=1-Math.exp(-i*(dn===1?14:6.5));if(Ae.position.lerp(r,l),I.offroad&&n>14){const u=Math.min((n-14)/90,1)*.055;Ae.position.x+=(Math.random()-.5)*u,Ae.position.y+=(Math.random()-.5)*u}Ae.lookAt(a);const c=(dn===1?68:dn===2?55:58)+s*10+(I.boosting?3:0);Ae.fov+=(c-Ae.fov)*Math.min(1,i*3.5),Ae.updateProjectionMatrix()}function Sl(i){if(!be)return;Gs=-2.12+Math.sin(di*.075)*.16;const t=9.1+Math.sin(di*.13)*.55;Ae.position.set(15.5+Math.cos(Gs)*t,3.55+Math.sin(di*.23)*.12,209+Math.sin(Gs)*t),Ae.lookAt(9.2,1.22,215.2),Ae.fov=47,Ae.updateProjectionMatrix()}function Je(i,t){j.toast&&(clearTimeout(Uc),j.toast_icon.textContent=i==="EVENT"?"◆":i==="DRIFT BANK"?"⟡":i==="HORIZON BOARD"?"◈":"✦",j.toast_text.textContent=t,j.toast.classList.remove("is-hidden"),j.toast.style.animation="none",j.toast.offsetWidth,j.toast.style.animation="",Uc=setTimeout(()=>j.toast.classList.add("is-hidden"),2900))}function yl(i,t,e=1700){clearTimeout(Fc),j.announcement_kicker.textContent=i,j.announcement_title.textContent=t,j.announcement.classList.remove("is-hidden"),j.announcement.style.animation="none",j.announcement.offsetWidth,j.announcement.style.animation="",Fc=setTimeout(()=>j.announcement.classList.add("is-hidden"),e)}function Xu(){j.transition_flash.classList.remove("flash"),j.transition_flash.offsetWidth,j.transition_flash.classList.add("flash")}function Ir(){if(!At||Lt==="title"||Lt==="loading")return;const i=Math.round(Math.abs(I.speed)*3.6);j.speed_value.textContent=String(i),I.gear=Math.max(1,Math.min(7,Math.ceil(i/43)||1)),j.gear_value.textContent=String(I.gear);const t=310/7,e=pl((i-(I.gear-1)*t)/t*.86+.14,.03,1);j.rpm_path.style.strokeDashoffset=String(100-e*100),j.nitro_fill.style.height=`${I.boost}%`,j.nitro_fill.parentElement.parentElement?.classList.toggle("is-active",I.boosting),j.surface_label.textContent=I.offroad?"OFF-ROAD":"ASPHALT",j.drive_mode.textContent=I.boosting?"NITRO":"AWD",I.driftScore>30&&(I.drifting||es<.85)?(j.drift_readout.classList.remove("is-hidden"),j.drift_value.textContent=Math.floor(I.driftScore).toLocaleString("en-US"),j.drift_multiplier.textContent=`x${I.driftMultiplier.toFixed(1)}`):j.drift_readout.classList.add("is-hidden"),Lt==="race"||Lt==="countdown"||Lt==="finished"?wt&&(wt.place=1+mi.filter(n=>n.distance>I.distance).length,Js(),j.objective_kicker.textContent="EVENT IN PROGRESS",j.objective_title.textContent=wt.event.name,j.objective_meta.textContent=`CHECKPOINT ${Math.min(wt.nextGate+1,4)} / 4 · ${Gu(wt.place)} PLACE`,D_()):Lt==="free"&&Vu(),Lt==="free"&&pa()<32?(j.event_prompt.classList.remove("is-hidden"),j.prompt_kicker.textContent=pe.completed.length>=$e.length?"FESTIVAL EVENT · REPLAY":"FESTIVAL EVENT",j.prompt_title.textContent=$e[on].name,j.prompt_meta.textContent=`${$e[on].laps} ${$e[on].laps===1?"LAP":"LAPS"} · ${mi.length} RIVALS`):j.event_prompt.classList.add("is-hidden"),N_()}function D_(){if(!wt)return;const i=wt.nextGate<At.checkpointGates.length?At.checkpointGates[wt.nextGate].point:At.startPoint,t=i.x-I.pos.x,e=i.z-I.pos.z,n=Math.hypot(t,e),s=new L(Math.sin(I.heading),0,Math.cos(I.heading)),r=new L(-Math.cos(I.heading),0,Math.sin(I.heading)),a=t*r.x+e*r.z,o=t*s.x+e*s.z,l=Math.atan2(a,o);j.checkpoint_arrow.style.transform=`rotate(${l}rad)`,j.checkpoint_distance.innerHTML=`${Math.round(n)}<span> M</span>`,j.checkpoint_callout.querySelector("small").textContent=wt.nextGate>=At.checkpointGates.length?"FINISH LINE":`CHECKPOINT ${wt.nextGate+1} / 4`}function Ri(i,t){return[160+i*.655,164+t*.655]}let Ci=null;function I_(){Ci=new Path2D;for(let i=0;i<At.samples.length;i+=3){const t=At.samples[i],[e,n]=Ri(t.point.x,t.point.z);i===0?Ci.moveTo(e,n):Ci.lineTo(e,n)}Ci.closePath()}function N_(){if(!At||!j.mapCtx)return;Ci||I_();const i=j.mapCtx,t=320,e=320;i.clearRect(0,0,t,e),i.save(),i.beginPath(),i.arc(160,160,158,0,Ti),i.clip(),i.fillStyle="rgba(8, 17, 22, 0.42)",i.fillRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,.035)",i.lineWidth=1;for(let r=30;r<t;r+=48)i.beginPath(),i.moveTo(r,0),i.lineTo(r,e),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(t,r),i.stroke();if(i.lineCap="round",i.lineJoin="round",i.strokeStyle="rgba(255,246,231,.12)",i.lineWidth=11,i.stroke(Ci),i.strokeStyle="rgba(255,102,40,.9)",i.lineWidth=2.3,i.stroke(Ci),At.collectibles.forEach(r=>{if(!r.visible)return;const[a,o]=Ri(r.position.x,r.position.z);i.fillStyle="#ffc36a",i.beginPath(),i.arc(a,o,2.2,0,Ti),i.fill()}),Lt==="race"||Lt==="countdown"||Lt==="finished"){if(At.checkpointGates.forEach((r,a)=>{if(!wt)return;const[o,l]=Ri(r.point.x,r.point.z);i.fillStyle=a===wt.nextGate?"#48f2dc":"rgba(255,255,255,.28)",i.beginPath(),i.arc(o,l,a===wt.nextGate?4:2.2,0,Ti),i.fill()}),wt?.nextGate>=4){const[r,a]=Ri(At.startPoint.x,At.startPoint.z);i.fillStyle="#ff5b22",i.beginPath(),i.arc(r,a,4.5,0,Ti),i.fill()}}else{const[r,a]=Ri(At.startPoint.x,At.startPoint.z),o=5+Math.sin(di*3.5)*2;i.strokeStyle="rgba(255,91,34,.85)",i.lineWidth=2,i.beginPath(),i.arc(r,a,o,0,Ti),i.stroke(),i.fillStyle="#ff7a35",i.beginPath(),i.arc(r,a,3.2,0,Ti),i.fill()}for(const r of mi){if(!r.car.group.visible)continue;const a=(r.distance/At.trackLength%1+1)%1,o=At.curve.getPointAt(a),[l,c]=Ri(o.x,o.z);i.fillStyle="rgba(255,255,255,.7)",i.beginPath(),i.arc(l,c,2.1,0,Ti),i.fill()}const[n,s]=Ri(I.pos.x,I.pos.z);i.save(),i.translate(n,s),i.rotate(Math.PI-I.heading),i.fillStyle="#ff5b22",i.strokeStyle="#fff2e4",i.lineWidth=1.3,i.beginPath(),i.moveTo(0,-8.5),i.lineTo(5.5,6),i.lineTo(0,3.2),i.lineTo(-5.5,6),i.closePath(),i.fill(),i.stroke(),i.restore(),i.fillStyle="rgba(255,255,255,.5)",i.font='700 15px "Barlow Condensed", sans-serif',i.textAlign="center",i.fillText("N",160,26),i.restore()}let Nr=0;function qu(i){Nr||(Nr=i);const t=Math.min((i-Nr)/1e3,.05);if(Nr=i,di+=t,At.update(t,di),Lt==="title")Cs(t),Rs(t),Sl(),me.update({speed:0,throttle:0,drifting:0,boosting:!1,offroad:!1,playing:!1});else if(Lt==="countdown"){Cs(t),Rs(t),Ps(t),kr-=t;const e=Math.ceil(kr);e!==jr&&e>=1&&e<=3&&(jr=e,j.countdown_label.textContent=String(e),j.countdown_label.style.animation="none",j.countdown_label.offsetWidth,j.countdown_label.style.animation="",xl(5-e),me.countdown(e)),kr<=0&&U_(),Ir()}else Lt==="race"?(wt.time+=t,zs>0&&(zs-=t,zs<=0&&j.countdown.classList.add("is-hidden")),Cs(t),Rs(t),Ps(t),Ir()):Lt==="free"||Lt==="finished"?(Cs(t),Rs(t),Ps(t),Ir()):Lt==="results"?Ps(t):Lt==="paused"&&me.update({speed:0,throttle:0,drifting:0,boosting:!1,offroad:!1,playing:!1});be&&At.setSunFor(I.pos),_n.render(Is,Ae),requestAnimationFrame(qu)}function U_(){Lt="race",wt.time=0,wt.lapStart=0,jr=0,zs=.9,j.countdown_label.textContent="GO",j.countdown.classList.remove("is-hidden"),j.countdown_label.style.animation="none",j.countdown_label.offsetWidth,j.countdown_label.style.animation="",ku(),me.countdown(0),yl("LIGHTS OUT","GO GO GO",950),Js()}m_().catch(i=>{console.error(i);const t=gn("loading");t&&(t.querySelector(".loading__text span").textContent="SOMETHING WENT OFF TRACK",t.querySelector(".loading__text small").textContent="REFRESH TO TRY AGAIN")});
