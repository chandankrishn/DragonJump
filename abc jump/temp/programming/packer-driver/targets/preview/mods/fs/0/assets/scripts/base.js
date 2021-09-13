System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, Base;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c9d0JhXH9G/KTvRJInV7sr", "base", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Base
       * DateTime = Wed Sep 08 2021 15:26:41 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = base.ts
       * FileBasenameNoExtension = base
       * URL = db://assets/scripts/base.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Base", Base = (_dec = ccclass('Base'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Base, _Component);

        function Base() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Base.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          // [3]
          tween(this.node).repeatForever(tween().by(0.5, {
            position: new Vec3(0, 100, 0)
          }).by(0.5, {
            position: new Vec3(0, -100, 0)
          })).start();
        };

        _proto.onLoad = function onLoad() {} // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Base;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=base.js.map