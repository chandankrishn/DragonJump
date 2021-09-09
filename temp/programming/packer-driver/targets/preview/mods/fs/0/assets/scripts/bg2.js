System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, Bg2;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2febdqsW79L/rjUQRaa2tds", "bg2", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Bg2
       * DateTime = Wed Sep 08 2021 17:16:48 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = bg2.ts
       * FileBasenameNoExtension = bg2
       * URL = db://assets/scripts/bg2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Bg2", Bg2 = (_dec = ccclass('Bg2'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bg2, _Component);

        function Bg2() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Bg2.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          tween(this.node).delay(1).to(4, {
            position: new Vec3(-1690, this.node.position.y, 0)
          }).start(); // [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Bg2;
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
//# sourceMappingURL=bg2.js.map