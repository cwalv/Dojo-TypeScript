/************************************************************************/
/* Define core Dojo features                                            */
/************************************************************************/

/// <reference path="dojo.types.d.ts"/>

// dojo/ready

declare module "dojo/ready"
{
	function ready(priority: number, context: Object, callback: Dojo.SimpleAction): void;
	function ready(context: Object, callback: Dojo.SimpleAction): void;
	function ready(callback: Dojo.SimpleAction): void;

	export = ready;
}

// dojo/domReady

declare module "dojo/domReady"
{
	function domReady(callback: Dojo.SimpleAction): void;

	export = domReady;
}

// dojo/_base/array

declare module "dojo/_base/array"
{
	function indexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;
	function lastIndexOf<T>(array: T[], value: T, fromIndex?: number, findLast?: boolean): number;

	function forEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void , thisObject?: Object): void;
	function forEach<T>(array: T[], callback: string, thisObject?: Object): void;
	function forEach<T>(array: string, callback: (item: string, index: number, array: string) => void , thisObject?: Object): void;
	function forEach<T>(array: string, callback: string, thisObject?: Object): void;

	function filter<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): void;
	function filter<T>(array: T[], callback: string, thisObject?: Object): void;
	function filter(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): void;
	function filter(array: string, callback: string, thisObject?: Object): void;

	function map<T, V>(array: T[], callback: (item: T, index: number, array: T[]) => V, thisObject?: Object): V[];
	function map<T, V>(array: T[], callback: string, thisObject?: Object): V[];
	function map<V>(array: string, callback: (item: string, index: number, array: string) => V, thisObject?: Object): V[];
	function map<V>(array: string, callback: string, thisObject?: Object): V[];

	function some<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): boolean;
	function some<T>(array: T[], callback: string, thisObject?: Object): boolean;
	function some(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): boolean;
	function some(array: string, callback: string, thisObject?: Object): boolean;

	function every<T>(array: T[], callback: (item: T, index: number, array: T[]) => boolean, thisObject?: Object): boolean;
	function every<T>(array: T[], callback: string, thisObject?: Object): boolean;
	function every(array: string, callback: (item: string, index: number, array: string) => boolean, thisObject?: Object): boolean;
	function every(array: string, callback: string, thisObject?: Object): boolean;
}

// dojo/_base/browser

declare module "dojo/_base/browser"
{
}

// dojo/_base/Color

declare module "dojo/_base/Color"
{
	class Color
	{
		constructor();
		constructor(colors: any[]);
		constructor(color: string);
		constructor(color: Object);

		a: number;
		r: number;
		g: number;
		b: number;
	}

	module Color
	{
		var named:
		{
			"aliceblue": number[];
			"antiquewhite": number[];
			"aquamarine": number[];
			"azure": number[];
			"beige": number[];
			"bisque": number[];
			"blanchedalmond": number[];
			"blueviolet": number[];
			"brown": number[];
			"burlywood": number[];
			"cadetblue": number[];
			"chartreuse": number[];
			"chocolate": number[];
			"coral": number[];
			"cornflowerblue": number[];
			"cornsilk": number[];
			"crimson": number[];
			"cyan": number[];
			"darkblue": number[];
			"darkcyan": number[];
			"darkgoldenrod": number[];
			"darkgray": number[];
			"darkgreen": number[];
			"darkgrey": number[];
			"darkkhaki": number[];
			"darkmagenta": number[];
			"darkolivegreen": number[];
			"darkorange": number[];
			"darkorchid": number[];
			"darkred": number[];
			"darksalmon": number[];
			"darkseagreen": number[];
			"darkslateblue": number[];
			"darkslategray": number[];
			"darkslategrey": number[];
			"darkturquoise": number[];
			"darkviolet": number[];
			"deeppink": number[];
			"deepskyblue": number[];
			"dimgray": number[];
			"dimgrey": number[];
			"dodgerblue": number[];
			"firebrick": number[];
			"floralwhite": number[];
			"forestgreen": number[];
			"gainsboro": number[];
			"ghostwhite": number[];
			"gold": number[];
			"goldenrod": number[];
			"greenyellow": number[];
			"grey": number[];
			"honeydew": number[];
			"hotpink": number[];
			"indianred": number[];
			"indigo": number[];
			"ivory": number[];
			"khaki": number[];
			"lavender": number[];
			"lavenderblush": number[];
			"lawngreen": number[];
			"lemonchiffon": number[];
			"lightblue": number[];
			"lightcoral": number[];
			"lightcyan": number[];
			"lightgoldenrodyellow": number[];
			"lightgray": number[];
			"lightgreen": number[];
			"lightgrey": number[];
			"lightpink": number[];
			"lightsalmon": number[];
			"lightseagreen": number[];
			"lightskyblue": number[];
			"lightslategray": number[];
			"lightslategrey": number[];
			"lightsteelblue": number[];
			"lightyellow": number[];
			"limegreen": number[];
			"linen": number[];
			"magenta": number[];
			"mediumaquamarine": number[];
			"mediumblue": number[];
			"mediumorchid": number[];
			"mediumpurple": number[];
			"mediumseagreen": number[];
			"mediumslateblue": number[];
			"mediumspringgreen": number[];
			"mediumturquoise": number[];
			"mediumvioletred": number[];
			"midnightblue": number[];
			"mintcream": number[];
			"mistyrose": number[];
			"moccasin": number[];
			"navajowhite": number[];
			"oldlace": number[];
			"olivedrab": number[];
			"orange": number[];
			"orangered": number[];
			"orchid": number[];
			"palegoldenrod": number[];
			"palegreen": number[];
			"paleturquoise": number[];
			"palevioletred": number[];
			"papayawhip": number[];
			"peachpuff": number[];
			"peru": number[];
			"pink": number[];
			"plum": number[];
			"powderblue": number[];
			"rosybrown": number[];
			"royalblue": number[];
			"saddlebrown": number[];
			"salmon": number[];
			"sandybrown": number[];
			"seagreen": number[];
			"seashell": number[];
			"sienna": number[];
			"skyblue": number[];
			"slateblue": number[];
			"slategray": number[];
			"slategrey": number[];
			"snow": number[];
			"springgreen": number[];
			"steelblue": number[];
			"tan": number[];
			"thistle": number[];
			"tomato": number[];
			"turquoise": number[];
			"violet": number[];
			"wheat": number[];
			"whitesmoke": number[];
			"yellowgreen": number[];
		};
	}

	export = Color;
}

// dojo/_base/config

declare module "dojo/_base/config"
{
	var addOnLoad: Object;	// TODO
	var afterOnLoad: string;
	var baseUrl: string;
	var callback: Function;
	var debugContainerId: string;
	var debugHeight: number;
	var defaultDuration: number;
	var deferredInstrumentation: string;
	var deps: string[];
	var dojoBlankHtmlUrl: string;
	var extraLocale:string[];
	var ioPublish: boolean;
	var isDebug: boolean;
	var locale: string;
	var modulePaths: { [path:string]: string; };
	var parseOnLoad: boolean;
	var require:string[];
	var transparentColor:number[];
	var urchin: string;
	var useCustomLogger: boolean;
	var useDeferredInstrumentation: Object;
}

// dojo/_base/declare

declare module "dojo/_base/declare"
{
	var declare: Dojo.Declare;
	
	export = declare;
}

// dojo/_base/fx

declare module Dojo
{
	module Fx
	{
		interface BaseCreateOptions
		{
			node: any;
			duration?: number;
			easing?: Dojo.Fx.EasingFunction;
		}
		interface CreateOptions extends BaseCreateOptions
		{
			properties: StylesMap;
		}
	}
}

declare module "dojo/_base/fx"
{
	function anim(nodeId: string, properties: Dojo.PropertiesMap, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.SimpleAction, delay?: number): dojo.Animation;
	function anim(node: HTMLElement, properties: Dojo.PropertiesMap, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.SimpleAction, delay?: number): dojo.Animation;

	function animateProperty(args: Dojo.Fx.CreateOptions): dojo.Animation;
	function fadeIn(args: Dojo.Fx.BaseCreateOptions): dojo.Animation;
	function fadeOut(args: Dojo.Fx.BaseCreateOptions): dojo.Animation;
}

// dojo/_base/lang

declare module "dojo/_base/lang"
{
	function clone<T>(obj: T): T;
	function delegate(obj: Object, props: Dojo.PropertiesMap): Object;
	function exists(path: string, root?: Object): boolean;
	function extend<T extends Object>(ctor: T, ...props: Dojo.PropertiesMap[]): T;
	function getObject(path: string, create?: boolean): Object;

	function hitch<F extends Function>(scope: Object, method: F): F;
	function hitch(scope: Object, method: string): Function;

	function mixin<T extends Object>(dest: T, ...sources: Dojo.PropertiesMap[]): T;

	function partial<F extends Function>(method: F, ...v_args: any[]): F;
	function partial(method: string, ...v_args: any[]): Function;

	function replace(tmpl: string, map: Dojo.Dictionary<any>, pattern?: string): string;
	function replace(tmpl: string, map: string[], pattern?: string): string;
	function replace(tmpl: string, map: (matched: string, key: string, offset: number, template: string) => string, pattern?: string): string;

	function setObject(path: string, value: any, thisObject?: Object): Object;
	function trim(str: string): string;

	// NOTE: The following functions are deprecated
	function isString(v: any): boolean;
	function isArray(v: any): boolean;
	function isFunction(v: any): boolean;
	function isArrayLike(v: any): boolean;
	function isObject(v: any): boolean;
}

// dojo/AdapterRegistry

declare module "dojo/AdapterRegistry"
{
	class DojoAdapterRegistry
	{
		constructor(returnWrappers?: boolean);

		pairs: any[];
		returnWrappers: boolean;

		match(...args: Object[]): void;
		register(name: string, check: Dojo.FunctionReturning<boolean>, wrap: Dojo.Action, directReturn?: boolean, override?: boolean): void;
		unregister(name: string): boolean;
	}

	export = DojoAdapterRegistry;
}

// dojo/aspect 

declare module "dojo/aspect"
{
	function after(target: Object, methodName: string, advice: (x: any) => any): Dojo.RemovableHandle;
	function after(target: Object, methodName: string, advice: Function, receiveArguments: boolean): Dojo.RemovableHandle;

	function around(target: Object, methodName: string, advice: (fn: Function) => Function): Dojo.RemovableHandle;
	function before(target: Object, methodName: string, advice: Dojo.FunctionReturning<any[]>): Dojo.RemovableHandle;
}

// dojo/back

declare module "dojo/back"
{
	interface HistoryState
	{
		back?: (direction: string) => void;
		forward?: (direction: string) => void;
		changeUrl?: any;
	}
	
	function init(): void;
	function addToHistory(args: HistoryState): void;
	function getHash(): any;
}

// dojo/cldr/monetary

declare module "dojo/cldr/monetary"
{
	function getData(code: string): string;
}

// dojo/cldr/supplemental

declare module "dojo/cldr/supplemental"
{
	function getFirstDayOfWeek(locale?: string): number;
	function getWeekend(locale?: string): { start: number; end: number; };
}

// dojo/cookie

declare module Dojo
{
	module Cookie
	{
		interface _CookieOptions
		{
			expires?: any;
			path?: string;
			domain?: string;
			secure?: boolean;
		}
	}
}

declare module "dojo/cookie"
{
	function cookie(name: string): string;
	function cookie(name: string, value: string, props?: Dojo.Cookie._CookieOptions): void;

	module cookie
	{
		function isSupported(): boolean;
	}

	export = cookie;
}

// dojo/currency

declare module "dojo/currency"
{
	interface _FormatOptions
	{
		currency?: string;
		fractional?: boolean;
		locale?: string;
		pattern?: string;
		places?: number;
		round?: number;
		symbol?: string;
		type?: string;
		strict?: boolean;
	}
	
	function format(value: number, options?:_FormatOptions): string;
	function parse(expression: string, options?: _FormatOptions): number;
	function regexp(options?: _FormatOptions): RegExp;
}

// dojo/date

declare module "dojo/date"
{
	function add(date: Date, interval: string, amount: number): Date;
	function compare(date1: Date, date2?: Date, portion?: string): number;
	function difference(date1: Date, date2?: Date, interval?: string): number;
	function getDaysInMonth(dateObject: Date): number;
	function getTimezoneName(dateObject: Date): string;
	function isLeapYear(dateObject: Date): boolean;
}

// dojo/date/stamp

declare module "dojo/date/stamp"
{
	function fromISOString(formattedString: string, defaultTime?: number): Date;
	function toISOString(dateObject: Date, options?: { selector?: string; zulu?: boolean; milliseconds?: number; }): string;
}

// dojo/date/locale

declare module "dojo/date/locale"
{
	interface _FormatOptions
	{
		selector?: string;
		formatLength?: string;
		datePattern?: string;
		timePattern?: string;
		am?: string;
		pm?: string;
		locale?: string;
		fullYear?: boolean;
		strict?: boolean;
	}

	function addCustomFormats(packageName: string, bundleName: string): void;
	function format(dateObject: Date, options?: _FormatOptions): string;
	function getNames(item: string, type: string, context?: string, locale?: string): string[];
	function isWeekend(dateObject?: Date, locale?: string): boolean;
	function parse(value: string, options?: _FormatOptions): Date;
	function regexp(options?: _FormatOptions): RegExp;
}

// dojo/Deferred

declare class _DojoDeferred<T>		// TODO: "export =" cannot handle namespaces
{
	constructor(canceler?: (reason: any) => void );

	promise: dojo.Promise<T>;

	cancel(reason: any, strict?: boolean): any;
	isCanceled(): boolean;
	isFulfilled(): boolean;
	isRejected(): boolean;
	isResolved(): boolean;
	progress(update: any, strict?: boolean): dojo.Promise<T>;
	reject(reason: any, strict?: boolean): dojo.Promise<T>;
	resolve(value: T, strict?: boolean): dojo.Promise<T>;
	then<V>(callback?: (value: T) => V, errback?: (error: any) => void , progback?: (progress: any) => void ): dojo.Promise<V>;
}
declare module dojo
{
	class Deferred<T> extends _DojoDeferred<T> {}
}
declare module Dojo
{
	class Deferred<T> extends _DojoDeferred<T> {}
}
declare module "dojo/Deferred"
{
	export = _DojoDeferred;
}

// dojo/dom

declare module "dojo/dom"
{
	function byId(node: HTMLElement): HTMLElement;
	function byId(id: string): HTMLElement;

	function isDescendant(id: string, ancestor: string): boolean;
	function isDescendant(node: HTMLElement, ancestor: string): boolean;
	function isDescendant(id: string, ancestor: HTMLElement): boolean;
	function isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean;

	function setSelectable(id: string, selectable: boolean);
	function setSelectable(node: HTMLElement, selectable: boolean);
}

// dojo/dom-attr

declare module "dojo/dom-attr"
{
	function has(id: string, attr: string): boolean;
	function has(node: HTMLElement, attr: string): boolean;

	function get(id: string, attr: string): string;
	function get(node: HTMLElement, attr: string): string;

	function set(id: string, attr: string, value: string): void;
	function set(node: HTMLElement, attr: string, value: string): void;
	function set(id: string, values: Dojo.AttributesMap): void;
	function set(node: HTMLElement, values: Dojo.AttributesMap): void;

	function remove(id: string, attr: string): string;
	function remove(node: HTMLElement, attr: string): string;

	function getNodeProp(id: string, attr: string): any;
	function getNodeProp(node: HTMLElement, attr: string): any;
}

// dojo/dom-class

declare module "dojo/dom-class"
{
	function contains(node: string, className: string): boolean;
	function contains(node: HTMLElement, className: string): boolean;

	function add(node: string, classNames: string): void;
	function add(node: string, classNames: string[]): void;
	function add(node: HTMLElement, classNames: string): void;
	function add(node: HTMLElement, classNames: string[]): void;

	function remove(node: string): void;
	function remove(node: string, classNames: string): void;
	function remove(node: string, classNames: string[]): void;
	function remove(node: HTMLElement): void;
	function remove(node: HTMLElement, classNames: string): void;
	function remove(node: HTMLElement, classNames: string[]): void;

	function replace(node: string, addClassNames: string, removeClassNames: string): void;
	function replace(node: string, addClassNames: string[], removeClassNames: string): void;
	function replace(node: HTMLElement, addClassNames: string, removeClassNames: string): void;
	function replace(node: HTMLElement, addClassNames: string[], removeClassNames: string): void;
	function replace(node: string, addClassNames: string, removeClassNames: string[]): void;
	function replace(node: string, addClassNames: string[], removeClassNames: string[]): void;
	function replace(node: HTMLElement, addClassNames: string, removeClassNames: string[]): void;
	function replace(node: HTMLElement, addClassNames: string[], removeClassNames: string[]): void;

	function toggle(node: string, className: string, addRemove?: boolean): void;
	function toggle(node: HTMLElement, className: string, addRemove?: boolean): void;
}

// dojo/dom-construct

declare module "dojo/dom-construct"
{
	function toDom(frag: string, doc?: HTMLDocument): HTMLElement;

	function place(id: string, refNodeId: string, pos?: string): HTMLElement;
	function place(node: HTMLElement, refNodeId: string, pos?: string): HTMLElement;
	function place(id: string, refNode: HTMLElement, pos?: string): HTMLElement;
	function place(node: HTMLElement, refNode: HTMLElement, pos?: string): HTMLElement;
	function place(id: string, refNodeId: string, pos?: number): HTMLElement;
	function place(node: HTMLElement, refNodeId: string, pos?: number): HTMLElement;
	function place(id: string, refNode: HTMLElement, pos?: number): HTMLElement;
	function place(node: HTMLElement, refNode: HTMLElement, pos?: number): HTMLElement;

	function create(id: string, attrs?: Dojo.AttributesMap, refNodeId?: string, pos?: string): HTMLElement;
	function create(tag: HTMLElement, attrs?: Dojo.AttributesMap, refNodeId?: string, pos?: string): HTMLElement;
	function create(id: string, attrs?: Dojo.AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement;
	function create(tag: HTMLElement, attrs?: Dojo.AttributesMap, refNode?: HTMLElement, pos?: string): HTMLElement;

	function empty(id: string): void;
	function empty(node: HTMLElement): void;

	function destroy(id: string): void;
	function destroy(node: HTMLElement): void;
}

// dojo/dom-form

declare module "dojo/dom-form"
{
	function fieldToObject(inputNode: HTMLElement): any;
	function fieldToObject(inputNode: string): any;

	function toJson(formNode: HTMLElement, prettyPrint?: boolean): string;
	function toJson(formNode: string, prettyPrint?: boolean): string;

	function toObject(formNode: HTMLElement): Object;
	function toObject(formNode: string): Object;

	function toQuery(formNode: HTMLElement): string;
	function toQuery(formNode: string): string;
}

// dojo/dom-geometry

declare module "dojo/dom-geometry"
{
	var boxModel: string;

	function docScroll(doc?: HTMLDocument): { node: HTMLElement; x: number; y: number; };
	function fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number;
	function getBorderExtents(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Box;
	function getContentBox(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Position;
	function getIeDocumentElementOffset(doc?: HTMLDocument): Dojo.Point;
	function getMarginBox(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Position;
	function getMarginExtents(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Position;
	function getMarginSize(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Size;
	function getPadBorderExtents(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Box;
	function getPadExtents(node: HTMLElement, computedStyle?: Dojo.StylesMap): Dojo.Box;
	function isBodyLtr(doc?: HTMLDocument): boolean;
	function normalizeEvent(event: { pageX?: number; pageY?: number; offsetX?: number; offsetY?: number; layerX?: number; layerY?: number; }): void;

	function position(node: HTMLElement, includeScroll?: boolean): Dojo.Position;
	function position(node: string, includeScroll?: boolean): Dojo.Position;

	function setContentSize(node: HTMLElement, box: Dojo.Size, computedStyle?: Dojo.StylesMap): void;
	function setMarginBox(node: HTMLElement, box: Dojo.Size, computedStyle?: Dojo.StylesMap): void;
}

// dojo/dom-prop

declare module "dojo/dom-prop"
{
	function get(id: string, attr: string): string;
	function get(node: HTMLElement, attr: string): string;

	function set(id: string, attr: string, value: string): void;
	function set(node: HTMLElement, attr: string, value: string): void;
	function set(id: string, values: Dojo.AttributesMap): void;
	function set(node: HTMLElement, values: Dojo.AttributesMap): void;
}

// dojo/dom-style

declare module "dojo/dom-style"
{
	function getComputedStyle(node: HTMLElement): Dojo.StylesMap;

	function get(id: string, style?: string): Dojo.StylesMap;
	function get(node: HTMLElement, style?: string): Dojo.StylesMap;

	function set(id: string, style: string, value: string): void;
	function set(node: HTMLElement, style: string, value: string): void;
	function set(id: string, values: Dojo.StylesMap): void;
	function set(node: HTMLElement, values: Dojo.StylesMap): void;
}

// dojo/Evented

declare module "dojo/Evented"
{
	var Evented: dojo.Evented;
	export = Evented;
}

// dojo/fx

declare module Dojo
{
	module Fx
	{
		interface SlideCreateOptions extends CreateOptions
		{
			top: string;
			left: string;
		}
		interface AutoSlideCreateOptions extends SlideCreateOptions
		{
			auto: any;
		}
	}
}

declare module "dojo/fx" 
{
	function chain(animations: dojo.Animation[]): dojo.Animation;
	function combine(animations: dojo.Animation[]): dojo.Animation;
	function slideTo(args: Dojo.Fx.SlideCreateOptions): dojo.Animation;
	var Toggler: new (args: Dojo.Fx.TogglerCreateOptions) => Dojo.Fx.Toggler;
	function wipeIn(args: Dojo.Fx.CreateOptions): dojo.Animation;
	function wipeOut(args: Dojo.Fx.CreateOptions): dojo.Animation;
}

// dojo/fx/easing

declare module "dojo/fx/easing"
{
	function backIn(n: number): number;
	function backInOut(n: number): number;
	function backOut(n: number): number;
	function bounceIn(n: number): number;
	function bounceInOut(n: number): number;
	function bounceOut(n: number): number;
	function circIn(n: number): number;
	function circInOut(n: number): number;
	function circOut(n: number): number;
	function cubicIn(n: number): number;
	function cubicInOut(n: number): number;
	function cubicOut(n: number): number;
	function elasticIn(n: number): number;
	function elasticInOut(n: number): number;
	function elasticOut(n: number): number;
	function expoIn(n: number): number;
	function expoInOut(n: number): number;
	function expoOut(n: number): number;
	function linearIn(n: number): number;
	function linearInOut(n: number): number;
	function linearOut(n: number): number;
	function quadIn(n: number): number;
	function quadInOut(n: number): number;
	function quadOut(n: number): number;
	function quartIn(n: number): number;
	function quartInOut(n: number): number;
	function quartOut(n: number): number;
	function quintIn(n: number): number;
	function quintInOut(n: number): number;
	function quintOut(n: number): number;
	function sineIn(n: number): number;
	function sineInOut(n: number): number;
	function sineOut(n: number): number;
}

// dojo/fx/Toggler

declare module Dojo
{
	module Fx
	{
		interface TogglerCreateOptions
		{
			node: any;
			showDuration?: number;
			showFunc?: (args: Dojo.Fx.BaseCreateOptions) => Animation;
			hideDuration?: number;
			hideFuc?: (args: Dojo.Fx.BaseCreateOptions) => Animation;
		}
	}
}

declare module "dojo/fx/Toggler"
{
	class Toggler
	{
		constructor(args: Dojo.Fx.TogglerCreateOptions);

		hideDuration: number;
		node: HTMLElement;
		showDuration: number;

		hide(delay?: number): dojo.Animation;
		hideFunc(args?: { node: any; duration?: number; easing: Dojo.Fx.EasingFunction; }): dojo.Animation;
		show(delay?: number): dojo.Animation;
		showFunc(args?: { node: any; duration?: number; easing: Dojo.Fx.EasingFunction; }): dojo.Animation;
	}
	export = Toggler;
}

// dojo/has

declare module Dojo
{
	interface Has
	{
		(feature: string): boolean;
		(feature: number): boolean;

		add(feature: string, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		add(feature: number, test: (global: Object, doc: Document, element: Object) => boolean, now?: boolean, force?: boolean): void;
		clearElement(element: Object): void;
		load<T>(id: string, parentRequire: Function, loaded: (m: T) => void ): void;
		normalize(id: number, toAbsMid: (id: number) => number): void;
	}
}
declare module "dojo/has"
{
	var has: Dojo.Has;
	export = has;
}

// dojo/hash

declare module "dojo/hash"
{
	function hash(hash?: string, replace?: boolean): string;

	export = hash;
}

// dojo/html

declare module "dojo/html"
{
	interface _ContentSetterOptions
	{
		cleanContent?: boolean;
		extractContent?: boolean;
		parseContent?: boolean;
		parserScope?: string;
		startup?: boolean;

		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
	}

	class _ContentSetter
	{
		constructor(params: _ContentSetterOptions, node: string);
		constructor(params: _ContentSetterOptions, node: HTMLElement);

		node: HTMLElement;
		content: any;
		cleanContent: boolean;
		extractContent: boolean;
		parseContent: boolean;
		parserScope: string;
		startup: boolean;

		empty(): void;
		
		"set"(cont: string, params?: Dojo.AttributesMap): void;
		"set"(cont: HTMLElement, params?: Dojo.AttributesMap): void;
		"set"(cont: NodeList, params?: Dojo.AttributesMap): void;
		"set"(cont: dojo.NodeList, params?: Dojo.AttributesMap): void;
		"set"(cont: HTMLElement[], params?: Dojo.AttributesMap): void;

		setContent(): void;
		tearDown(): void;

		// Events
		onBegin(): void;
		onContentError(err: any): string;
		onEnd(): void;
		onExecError(err: any): string;
	}
	
	function set(node: HTMLElement, content: string, params?: _ContentSetterOptions): void;
	function set(node: HTMLElement, content: HTMLElement, params?: _ContentSetterOptions): void;
	function set(node: HTMLElement, content: NodeList, params?: _ContentSetterOptions): void;
	function set(node: HTMLElement, content: dojo.NodeList, params?: _ContentSetterOptions): void;
	function set(node: HTMLElement, content: HTMLElement[], params?: _ContentSetterOptions): void;
}

// dojo/io-query

declare module "dojo/io-query"
{
	function objectToQuery(map: Dojo.Dictionary<any>): string;
	function queryToObject(str: string): Dojo.Dictionary<any>;
}

// dojo/keys

declare module "dojo/keys"
{
	var BACKSPACE: number;
	var TAB: number;
	var CLEAR: number;
	var ENTER: number;
	var SHIFT: number;
	var CTRL: number;
	var ALT: number;
	var META: number;
	var PAUSE: number;
	var CAPS_LOCK: number;
	var ESCAPE: number;
	var SPACE: number;
	var PAGE_UP: number;
	var PAGE_DOWN: number;
	var END: number;
	var HOME: number;
	var LEFT_ARROW: number;
	var UP_ARROW: number;
	var RIGHT_ARROW: number;
	var DOWN_ARROW: number;
	var INSERT: number;
	var DELETE: number;
	var HELP: number;
	var LEFT_WINDOW: number;
	var RIGHT_WINDOW: number;
	var SELECT: number;
	var NUMPAD_0: number;
	var NUMPAD_1: number;
	var NUMPAD_2: number;
	var NUMPAD_3: number;
	var NUMPAD_4: number;
	var NUMPAD_5: number;
	var NUMPAD_6: number;
	var NUMPAD_7: number;
	var NUMPAD_8: number;
	var NUMPAD_9: number;
	var NUMPAD_MULTIPLY: number;
	var NUMPAD_PLUS: number;
	var NUMPAD_ENTER: number;
	var NUMPAD_MINUS: number;
	var NUMPAD_PERIOD: number;
	var NUMPAD_DIVIDE: number;
	var F1: number;
	var F2: number;
	var F3: number;
	var F4: number;
	var F5: number;
	var F6: number;
	var F7: number;
	var F8: number;
	var F9: number;
	var F10: number;
	var F11: number;
	var F12: number;
	var F13: number;
	var F14: number;
	var F15: number;
	var NUM_LOCK: number;
	var SCROLL_LOCK: number;
	var copyKey: number;
}

// dojo/json

declare module "dojo/json"
{
	function parse(str: string, secured?: boolean): any;

	function stringify(obj: any, replacer?: any[], space?: boolean): string;
	function stringify(obj: any, replacer?: (key: string, value: string) => any, space?: boolean): string;
}

// dojo/mouse

declare module "dojo/mouse"
{
	var enter: Dojo.ExtensionEvent;
	var leave: Dojo.ExtensionEvent;

	function isLeft(event: MouseEvent): boolean;
	function isMiddle(event: MouseEvent): boolean;
	function isRight(event: MouseEvent): boolean;
}

// dojo/NodeList

interface HTMLNodeList extends NodeList { }

declare module Dojo
{
	module Fx
	{
		interface AutoCreateOptions extends CreateOptions
		{
			auto: any;
		}
		interface AutoBaseCreateOptions extends BaseCreateOptions
		{
			auto: any;
		}
	}
}
declare module dojo
{
	class NodeList
	{
		constructor(node: HTMLElement);
		constructor(nodes: HTMLElement[]);
		constructor(nodes: HTMLNodeList);
		constructor(nodes: dojo.NodeList);

		addClass(className: string): dojo.NodeList;
		addClass(classNames: string[]): dojo.NodeList;

		addClassFx(className: string, options?: Dojo.Fx.CreateOptions): Animation;
		addClassFx(classNames: string[], options?: Dojo.Fx.CreateOptions): Animation;

		addContent(content: string, position?: string): dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: string): dojo.NodeList;
		addContent(content: HTMLElement, position?: string): dojo.NodeList;
		addContent(content: HTMLElement[], position?: string): dojo.NodeList;
		addContent(content: dojo.NodeList, position?: string): dojo.NodeList;
		addContent(content: HTMLNodeList, position?: string): dojo.NodeList;
		addContent(content: string, position?: number): dojo.NodeList;
		addContent(content: { template: string; parse?: boolean; templateFunc?: (template: string, content: Object) => Object; }, position?: number): dojo.NodeList;
		addContent(content: HTMLElement, position?: number): dojo.NodeList;
		addContent(content: HTMLElement[], position?: number): dojo.NodeList;
		addContent(content: dojo.NodeList, position?: number): dojo.NodeList;
		addContent(content: HTMLNodeList, position?: number): dojo.NodeList;

		adopt(query: string, position?: string): dojo.NodeList;
		adopt(node: HTMLElement, position?: string): dojo.NodeList;
		adopt(list: HTMLElement[], position?: string): dojo.NodeList;
		adopt(list: HTMLNodeList, position?: string): dojo.NodeList;
		adopt(list: dojo.NodeList, position?: string): dojo.NodeList;
		adopt(query: string, position?: number): dojo.NodeList;
		adopt(node: HTMLElement, position?: number): dojo.NodeList;
		adopt(list: HTMLElement[], position?: number): dojo.NodeList;
		adopt(list: HTMLNodeList, position?: number): dojo.NodeList;
		adopt(list: dojo.NodeList, position?: number): dojo.NodeList;

		after(content: string): dojo.NodeList;
		after(content: Object): dojo.NodeList;
		after(content: HTMLElement): dojo.NodeList;
		after(content: HTMLElement[]): dojo.NodeList;
		after(content: dojo.NodeList): dojo.NodeList;
		after(content: HTMLNodeList): dojo.NodeList;

		andSelf(): dojo.NodeList;
		anim(properties: Dojo.PropertiesMap, duration?: number, easing?: Dojo.Fx.EasingFunction, onEnd?: Dojo.SimpleAction, delay?: number): Animation;

		animateProperty(args: Dojo.Fx.CreateOptions): Animation;
		animateProperty(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;

		append(content: string): dojo.NodeList;
		append(content: Object): dojo.NodeList;
		append(content: HTMLElement): dojo.NodeList;
		append(content: HTMLElement[]): dojo.NodeList;
		append(content: dojo.NodeList): dojo.NodeList;
		append(content: HTMLNodeList): dojo.NodeList;

		appendTo(query: string): dojo.NodeList;
		at(...index: number[]): dojo.NodeList;

		attr(property: string): string[];
		attr(property: string, value: string): dojo.NodeList;

		before(content: string): dojo.NodeList;
		before(content: Object): dojo.NodeList;
		before(content: HTMLElement): dojo.NodeList;
		before(content: HTMLElement[]): dojo.NodeList;
		before(content: dojo.NodeList): dojo.NodeList;
		before(content: HTMLNodeList): dojo.NodeList;

		children(query?: string): dojo.NodeList;
		clone(): dojo.NodeList;

		closest(query: string): HTMLElement;
		closest(query: string, rootId: string): HTMLElement;
		closest(query: string, root: Object): HTMLElement;

		concat(...items: HTMLElement[]): dojo.NodeList;

		connect(methodName: string, funcName: string): dojo.NodeList;
		connect(methodName: string, func: Function): dojo.NodeList;
		connect(methodName: string, obj: Object, funcName: string): dojo.NodeList;

		data(key: Dojo.PropertiesMap): dojo.NodeList;
		data(key: string): any;
		data(key: string, value: any): dojo.NodeList;

		delegate(selector: string, eventName: string, listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "abort", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "afterprint", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "beforeprint", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "blur", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "canplay", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "canplaythrough", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "change", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "click", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "contextmenu", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dblclick", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "drag", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragend", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragenter", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragleave", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragover", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "dragstart", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "drop", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "durationchange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "emptied", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "ended", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "focus", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "hashchange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "input", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keydown", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keypress", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "keyup", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "load", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadeddata", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadedmetadata", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "loadstart", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "message", listener: (ev: MessageEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousedown", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousemove", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseout", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseover", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mouseup", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "offline", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "online", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "pause", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "play", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "playing", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "progress", listener: (ev: any) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "ratechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "readystatechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "reset", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "resize", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "scroll", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "seeked", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "seeking", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "select", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "stalled", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "storage", listener: (ev: StorageEvent) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "submit", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "suspend", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "timeupdate", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "unload", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "volumechange", listener: (ev: Event) => boolean): dojo.NodeList;
		delegate(selector: string, eventName: "waiting", listener: (ev: Event) => boolean): dojo.NodeList;

		dtl(template: string, thisObject?: Object): dojo.NodeList;
		empty(): dojo.NodeList;
		end(): dojo.NodeList;
		even(): dojo.NodeList;
		every(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;

		fadeIn(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeIn(args?: Dojo.Fx.BaseCreateOptions): Animation;

		fadeOut(args?: Dojo.Fx.AutoBaseCreateOptions): dojo.NodeList;
		fadeOut(args?: Dojo.Fx.BaseCreateOptions): Animation;

		filter(filter: string): dojo.NodeList;
		filter(filter: (item: HTMLElement, index: number, list: dojo.NodeList) => boolean): dojo.NodeList;

		first(): dojo.NodeList;
		forEach(callback: (item: HTMLElement, index: number, list: dojo.NodeList) => void , thisObject?: Object): dojo.NodeList;

		html(): string;
		html(content: string): dojo.NodeList;
		html(content: HTMLElement): dojo.NodeList;
		html(content: HTMLElement[]): dojo.NodeList;
		html(content: HTMLNodeList): dojo.NodeList;
		html(content: dojo.NodeList): dojo.NodeList;

		indexOf(value: HTMLElement, fromIndex?: number): number;

		innerHTML(): string;
		innerHTML(content: string): dojo.NodeList;
		innerHTML(content: HTMLElement): dojo.NodeList;
		innerHTML(content: HTMLElement[]): dojo.NodeList;
		innerHTML(content: HTMLNodeList): dojo.NodeList;
		innerHTML(content: dojo.NodeList): dojo.NodeList;

		insertAfter(query: string): dojo.NodeList;
		insertBefore(query: string): dojo.NodeList;
		instantiate(declaredClass: string, properties?: Dojo.PropertiesMap): dojo.NodeList;
		last(): dojo.NodeList;
		lastIndexOf(value: HTMLElement, fromIndex?: number): number;
		map(func: (item: HTMLElement, index: number, list: dojo.NodeList) => HTMLElement, thisObject?: Object): dojo.NodeList;
		marginBox(): Position;
		next(query?: string): dojo.NodeList;
		nextAll(query?: string): dojo.NodeList;
		odd(): dojo.NodeList;

		on(name: "abort", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "afterprint", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "beforeprint", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean): dojo.NodeList;
		on(name: "blur", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		on(name: "canplay", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "canplaythrough", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "change", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "click", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "contextmenu", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "dblclick", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "drag", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragend", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragenter", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragleave", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragover", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "dragstart", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "drop", listener: (ev: DragEvent) => boolean): dojo.NodeList;
		on(name: "durationchange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "emptied", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "ended", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "focus", listener: (ev: FocusEvent) => boolean): dojo.NodeList;
		on(name: "hashchange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "input", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "keydown", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "keypress", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "keyup", listener: (ev: KeyboardEvent) => boolean): dojo.NodeList;
		on(name: "load", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadeddata", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadedmetadata", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "loadstart", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "message", listener: (ev: MessageEvent) => boolean): dojo.NodeList;
		on(name: "mousedown", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mousemove", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseout", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseover", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mouseup", listener: (ev: MouseEvent) => boolean): dojo.NodeList;
		on(name: "mousewheel", listener: (ev: MouseWheelEvent) => boolean): dojo.NodeList;
		on(name: "offline", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "online", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "pause", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "play", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "playing", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "progress", listener: (ev: any) => boolean): dojo.NodeList;
		on(name: "ratechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "readystatechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "reset", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "resize", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "scroll", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "seeked", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "seeking", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "select", listener: (ev: UIEvent) => boolean): dojo.NodeList;
		on(name: "stalled", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "storage", listener: (ev: StorageEvent) => boolean): dojo.NodeList;
		on(name: "submit", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "suspend", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "timeupdate", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "unload", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "volumechange", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: "waiting", listener: (ev: Event) => boolean): dojo.NodeList;
		on(name: string, listener: (ev: Event) => boolean): dojo.NodeList;
		on(type: Dojo.ExtensionEvent, listener: EventListener): dojo.NodeList;

		orphan(filter?: string): dojo.NodeList;
		parent(query?: string): dojo.NodeList;
		parents(query?: string): dojo.NodeList;

		place(query: string, position?: string): dojo.NodeList;
		place(node: HTMLElement, position?: string): dojo.NodeList;
		place(query: string, position?: number): dojo.NodeList;
		place(node: HTMLElement, position?: number): dojo.NodeList;

		position(): Dojo.Rectangle;

		prepend(content: string): dojo.NodeList;
		prepend(content: Object): dojo.NodeList;
		prepend(content: HTMLElement): dojo.NodeList;
		prepend(content: HTMLElement[]): dojo.NodeList;
		prepend(content: dojo.NodeList): dojo.NodeList;
		prepend(content: HTMLNodeList): dojo.NodeList;

		prependTo(query: string): dojo.NodeList;
		prev(query?: string): dojo.NodeList;
		prevAll(query?: string): dojo.NodeList;
		query(query: string): dojo.NodeList;
		remove(filter?: string): dojo.NodeList;
		removeAttr(name: string): dojo.NodeList;

		removeClass(className?: string): dojo.NodeList;
		removeClass(classNames?: string[]): dojo.NodeList;

		removeClassFx(className: string, args?: Dojo.Fx.CreateOptions): Animation;
		removeClassFx(classNames: string[], args?: Dojo.Fx.CreateOptions): Animation;

		removeData(key?: string): dojo.NodeList;
		replaceAll(query: string): dojo.NodeList;

		replaceClass(addClass: string, removeClass?: string): dojo.NodeList;
		replaceClass(addClass: string, removeClasses?: string[]): dojo.NodeList;
		replaceClass(addClasses: string[], removeClass?: string): dojo.NodeList;
		replaceClass(addClasses: string[], removeClasses?: string[]): dojo.NodeList;

		replaceWith(content: string): dojo.NodeList;
		replaceWith(content: Object): dojo.NodeList;
		replaceWith(content: HTMLElement): dojo.NodeList;
		replaceWith(content: HTMLElement[]): dojo.NodeList;
		replaceWith(content: dojo.NodeList): dojo.NodeList;
		replaceWith(content: HTMLNodeList): dojo.NodeList;

		siblings(query?: string): dojo.NodeList;
		slice(begin: number, end?: number): dojo.NodeList;

		slideTo(args: Dojo.Fx.SlideCreateOptions): Animation;
		slideTo(args: Dojo.Fx.AutoSlideCreateOptions): dojo.NodeList;

		some(callback: (node: HTMLElement, index: number, list: dojo.NodeList) => boolean, thisObject?: Object): boolean;
		splice(index: number, howmany?: number, ...items: HTMLElement[]): dojo.NodeList;

		style(property: string): string[];
		style(property: string, value: string): dojo.NodeList;

		text(): string;
		text(value: string): dojo.NodeList;

		toggleClass(className: string, condition?: boolean): dojo.NodeList;
		toggleClassFx(className: string, condition?: boolean, options?: Dojo.Fx.CreateOptions): Animation;

		val(): string;
		val(): string[];
		val(value: string): dojo.NodeList;
		val(value: string[]): dojo.NodeList;

		wipeIn(args: Dojo.Fx.CreateOptions): Animation;
		wipeIn(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;
		
		wipeOut(args: Dojo.Fx.CreateOptions): Animation;
		wipeOut(args: Dojo.Fx.AutoCreateOptions): dojo.NodeList;

		wrap(html: string): dojo.NodeList;
		wrap(node: HTMLElement): dojo.NodeList;

		wrapAll(html: string): dojo.NodeList;
		wrapAll(node: HTMLElement): dojo.NodeList;

		wrapInner(html: string): dojo.NodeList;
		wrapInner(node: HTMLElement): dojo.NodeList;
	}
}
declare module "dojo/NodeList"
{
	var NodeList: dojo.NodeList;
	export = NodeList;
}

// dojo/NodeList-???

declare module "dojo/NodeList-data" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-dom" { 
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-fx" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-html" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-manipulate" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}
declare module "dojo/NodeList-traverse" {
	var NodeList: dojo.NodeList;
	export = NodeList;
}

// dojo/number

declare module "dojo/number"
{
	function format(value: string, options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		round?: number;
		fractional?: boolean;
		places?: number;
	}): string;
	function parse(expression: string, options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		strict?: boolean;
		fractional?: boolean;
	}): number;
	function regexp(options?: {
		pattern?: string;
		type?: string;
		locale?: string;
		strict?: boolean;
		places?: number;
	}): RegExp;
	function round(value: number, places?: number, increment?: number): number;
}

// dojo/on

declare module "dojo/on"
{
	function on(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;
	function on(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.RemovableHandle;

	module on
	{
		function emit(target: Object, type: string, event: { bubbles?: boolean; cancelable?: boolean; }): void;
		function emit(target: Object, type: Dojo.ExtensionEvent, event: { bubbles?: boolean; cancelable?: boolean; }): void;

		function selector(cssSelector: string, event: string, children?: boolean): Dojo.ExtensionEvent;
		function selector(cssSelector: string, event: Dojo.ExtensionEvent, children?: boolean): Dojo.ExtensionEvent;

		function pausable(target: HTMLElement, type: "abort", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: HTMLElement, type: string, listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function pausable(target: Object, type: string, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		function pausable(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;
		function pausable(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): Dojo.PausableHandle;

		function once(target: HTMLElement, type: "afterprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "beforeprint", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "beforeunload", listener: (ev: BeforeUnloadEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "blur", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "canplay", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "canplaythrough", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "change", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "click", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "contextmenu", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dblclick", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "drag", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dragend", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dragenter", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dragleave", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dragover", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "dragstart", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "drop", listener: (ev: DragEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "durationchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "emptied", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "ended", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "focus", listener: (ev: FocusEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "hashchange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "input", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "keydown", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "keypress", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "keyup", listener: (ev: KeyboardEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "load", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "loadeddata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "loadedmetadata", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "loadstart", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "message", listener: (ev: MessageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mousedown", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mousemove", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mouseout", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mouseover", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mouseup", listener: (ev: MouseEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "mousewheel", listener: (ev: MouseWheelEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "offline", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "online", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "pause", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "play", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "playing", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "progress", listener: (ev: any) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "ratechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "readystatechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "reset", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "resize", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "scroll", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "seeked", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "seeking", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "select", listener: (ev: UIEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "stalled", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "storage", listener: (ev: StorageEvent) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "submit", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "suspend", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "timeupdate", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "unload", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "volumechange", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: "waiting", listener: (ev: Event) => boolean, dontFix?: boolean): Dojo.RemovableHandle;
		function once(target: HTMLElement, type: string, listener: EventListener, dontFix?: boolean): void;
		function once(target: Object, type: string, listener: EventListener, dontFix?: boolean): void;
		function once(target: HTMLElement, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
		function once(target: Object, type: Dojo.ExtensionEvent, listener: EventListener, dontFix?: boolean): void;
	}

	export = on;
}

// dojo/parser

declare module "dojo/parser" 
{
	interface _ParseOptions
	{
		noStart?: boolean;
		rootNode?: HTMLElement;
		template?: boolean;
		inherited?: Object;
		scope?: string;
		propsThis?: Object;
		contextRequire?: Function;
	}

	function parse(rootNode?: HTMLElement, options?: _ParseOptions): dijit._WidgetBase[];
	function scan(root?: HTMLElement, options?: _ParseOptions): dojo.Promise<HTMLElement[]>;
	function instantiate(nodes: HTMLElement[], mixin?: Dojo.PropertiesMap, options?: _ParseOptions): dijit._WidgetBase[];
	function construct(ctor: { (params?: Dijit.WidgetCreateOptions): dijit._WidgetBase; }, node: HTMLElement, mixin?: Dojo.PropertiesMap, options?: _ParseOptions, scripts?: HTMLElement[], inherited?: Object): dijit._WidgetBase;
}

// dojo/promise/Promise

declare module "dojo/promise/Promise" 
{
	export = _DojoPromise;
}

// dojo/promise/all

declare module "dojo/promise/all" 
{
	function all<T>(promises: dojo.Promise<T>[]): dojo.Promise<T[]>;
	function all<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<Dojo.Dictionary<T>>;
	function all<T>(promises: any): dojo.Promise<T>;

	export = all;
}

// dojo/promise/first

declare module "dojo/promise/first" 
{
	function first<T>(promises: dojo.Promise<T>[]): dojo.Promise<T>;
	function first<T>(promises: Dojo.Dictionary<dojo.Promise<T>>): dojo.Promise<T>;
	function first<T>(promises: any): dojo.Promise<T>;

	export = first;
}

// dojo/query

declare module Dojo
{
	interface QueryEngine
	{
		(selector: string, contextId?: string): dojo.NodeList;
		(selector: string, thisObject?: Object): dojo.NodeList;

		NodeList: dojo.NodeList;
	}
}
declare module "dojo/query"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css2"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!lite"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css2.1"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!css3"
{
	var query: Dojo.QueryEngine;
	export = query;
}
declare module "dojo/query!acme"
{
	var query: Dojo.QueryEngine;
	export = query;
}

// dojo/regexp

declare module "dojo/regexp"
{
	function buildGroupRE(arr: any, re: (item: any) => RegExp, nonCapture?: boolean): RegExp;
	function buildGroupRE(arr: any[], re: (item: any) => RegExp, nonCapture?: boolean): RegExp;

	function escapeString(str: string, except?: string): string;
	function group(expression: string, nonCapture?: boolean): string;
}

// dojo/request

declare module Dojo
{
	module Request
	{
		interface _MethodOptions
		{
			method: string;
		}
		interface _BaseOptions
		{
			handleAs?: string;
			data?: { [param: string]: any; };
			query?: { [param: string]: any; };
			timeout?: number;
			preventCache?: boolean;
		}
		interface _Options extends _BaseOptions, _MethodOptions {}

		interface RequestObject<T, BaseOptions, Options>
		{
			<T>(url: string, options?: Options): dojo.Promise<T>;
			get<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			put<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			post<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
			del<T>(url: string, options?: BaseOptions): dojo.Promise<T>;
		}

		module Xhr
		{
			interface _BaseOptions extends Request._BaseOptions {}
			interface _Options extends _BaseOptions, _MethodOptions {}
		}

		module iFrame
		{
			interface _BaseOptions extends Request._BaseOptions
			{
				form?: HTMLElement;
			}
			interface _Options extends _BaseOptions, _MethodOptions {}
		}

		module Node
		{
			interface _BaseOptions extends Request._BaseOptions
			{
				headers?: { [header: string]: string; };
				user: string;
				password: string;
			}
			interface _Options extends _BaseOptions, _MethodOptions {}
		}

		module Script
		{
			interface _BaseOptions extends Request._BaseOptions
			{
				frameDoc?: HTMLDocument;
				jsonp?: string;
				checkString?: string;
			}
			interface _Options extends _BaseOptions, _MethodOptions {}
		}
	}
}

declare module "dojo/request"
{
	function request<T>(url: string, options?: Dojo.Request._Options): dojo.Promise<T>;

	module request
	{
		function get<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		function put<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		function post<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		function del<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
	}

	export = request;
}
declare module "dojo/request/xhr"
{
	function request<T>(url: string, options?: Dojo.Request.Xhr._Options): dojo.Promise<T>;

	module request
	{
		function get<T>(url: string, options?: Dojo.Request.Xhr._BaseOptions): dojo.Promise<T>;
		function put<T>(url: string, options?: Dojo.Request.Xhr._BaseOptions): dojo.Promise<T>;
		function post<T>(url: string, options?: Dojo.Request.Xhr._BaseOptions): dojo.Promise<T>;
		function del<T>(url: string, options?: Dojo.Request.Xhr._BaseOptions): dojo.Promise<T>;
	}

	export = request;
}
declare module "dojo/request/node"
{
	function request<T>(url: string, options?: Dojo.Request.Node._Options): dojo.Promise<T>;

	module request
	{
		function get<T>(url: string, options?: Dojo.Request.Node._BaseOptions): dojo.Promise<T>;
		function put<T>(url: string, options?: Dojo.Request.Node._BaseOptions): dojo.Promise<T>;
		function post<T>(url: string, options?: Dojo.Request.Node._BaseOptions): dojo.Promise<T>;
		function del<T>(url: string, options?: Dojo.Request.Node._BaseOptions): dojo.Promise<T>;
	}

	export = request;
}
declare module "dojo/request/iframe" 
{
	function request<T>(url: string, options?: Dojo.Request.iFrame._Options): dojo.Promise<T>;

	module request
	{
		function get<T>(url: string, options?: Dojo.Request.iFrame._BaseOptions): dojo.Promise<T>;
		function post<T>(url: string, options?: Dojo.Request.iFrame._BaseOptions): dojo.Promise<T>;
	}

	export = request;
}
declare module "dojo/request/script"
{
	function request<T>(url: string, options?: Dojo.Request.Script._Options): dojo.Promise<T>;

	module request
	{
		function get<T>(url: string, options?: Dojo.Request.Script._BaseOptions): dojo.Promise<T>;
	}

	export = request;
}

declare module "dojo/request/handlers"
{
	function register(name: string, handler: (response: any) => any): void;
}

declare module "dojo/request/notify"
{
	function notify(type?: string, listener?: Dojo.Action): Dojo.RemovableHandle;
	function notify(type?: "start", listener?: Dojo.SimpleAction): Dojo.RemovableHandle;
	function notify(type?: "send", listener?: (response: any, cancel: () => void) => void): Dojo.RemovableHandle;
	function notify(type?: "load", listener?: (response: any) => void): Dojo.RemovableHandle;
	function notify(type?: "error", listener?: (error: any) => void): Dojo.RemovableHandle;
	function notify(type?: "done", listener?: (responseOrError: any) => void): Dojo.RemovableHandle;
	function notify(type?: "stop", listener?: Dojo.SimpleAction): Dojo.RemovableHandle;

	export = notify;
}

declare module "dojo/request/registry"
{
	var registry: {
		<T>(url: string, options?: Dojo.Request._Options): dojo.Promise<T>;

		get<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		put<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		post<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;
		del<T>(url: string, options?: Dojo.Request._BaseOptions): dojo.Promise<T>;

		register<T>(url: string, provider: Dojo.Request.RequestObject<T, Dojo.Request._BaseOptions, Dojo.Request._Options>, first?: boolean): Dojo.RemovableHandle;
		register<T>(url: RegExp, provider: Dojo.Request.RequestObject<T, Dojo.Request._BaseOptions, Dojo.Request._Options>, first?: boolean): Dojo.RemovableHandle;
		register<T>(url: (url: string, options: Dojo.Request._Options) => boolean, provider: Dojo.Request.RequestObject<T, Dojo.Request._BaseOptions, Dojo.Request._Options>, first?: boolean): Dojo.RemovableHandle;
	};
	export = registry;
}

// dojo/router

declare module Dojo
{
	interface RouterEvent
	{
		params: Dojo.Dictionary<string>;
		oldPath: string;
		newPath: string;
		preventDefault: Dojo.SimpleAction;
		stopImmediatePropagation: Dojo.SimpleAction;
	}
}
declare module "dojo/router"
{
	function register(route: string, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;
	function register(route: RegExp, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;

	function registerBefore(route: string, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;
	function registerBefore(route: RegExp, callback: (ev: Dojo.RouterEvent) => void ): Dojo.RemovableHandle;

	function startup(defaultPath?: string): void;
	function destroy(): void;
	function go(path: string, replace?: boolean): boolean;
}

// dojo/sniff

declare module "dojo/sniff"
{
	var sniff: Dojo.Has;
	export = sniff;
}

// dojo/topic

declare module "dojo/topic" 
{
	function subscribe(topic: string, listener: Dojo.Action): Dojo.RemovableHandle;
	function publish(topic: string, ...v_args: any[]): void;
}

// dojo/Stateful

declare module "dojo/Stateful"
{
	var Stateful: dojo.Stateful;
	export = Stateful;
}

// dojo/string

declare module "dojo/string"
{
	function pad(text: string, size: number, ch?: string, end?: boolean): string;
	function rep(str: string, num: number): string;

	function substitute(template: string, map: { [text: string]: string; }, transform?: (value: any, key: string) => string, thisObject?: Object): string;
	function substitute(template: string, map: string[], transform?: (value: any, key: string) => string, thisObject?: Object): string;

	function trim(str: string): string;
}

// dojo/touch

declare module "dojo/touch"
{
	function cancel(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function enter(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function leave(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function move(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function out(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function over(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function press(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
	function release(node: HTMLElement, listener: (ev: MouseEvent) => boolean): Dojo.RemovableHandle;
}

// dojo/uacss

declare module "dojo/uacss"
{
	var uacss: Dojo.Has;
	export = uacss;
}

// dojo/when

declare module "dojo/when"
{
	function when<T>(value: T): dojo.Promise<T>;
	function when<T, V>(value: T, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): V;
	function when<T>(promise: dojo.Promise<T>): dojo.Promise<T>;
	function when<T, V>(promise: dojo.Promise<T>, callback: (value: T) => V, errback?: (error: any) => void , progback?: (update: any) => void ): dojo.Promise<V>;

	export = when;
}

// dojo/window

declare module "dojo/window"
{
	function get(doc: HTMLDocument): Window;
	function getBox(doc: HTMLDocument): Dojo.Position;
	function scrollIntoView(node: HTMLElement, pos?:Object): void;
}
