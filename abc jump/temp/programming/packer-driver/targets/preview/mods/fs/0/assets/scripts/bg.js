System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, tween, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Bg;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13fa5ZvPuBNabAvYVWbCUtT", "bg", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Bg
       * DateTime = Wed Sep 08 2021 16:18:52 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = bg.ts
       * FileBasenameNoExtension = bg
       * URL = db://assets/scripts/bg.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Bg", Bg = (_dec = ccclass('Bg'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bg, _Component);

        function Bg() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "abc", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Bg.prototype;

        _proto.start = function start() {
          tween(this.node).to(2, {
            position: new Vec3(-1690, this.node.position.y, 0)
          }).start();
          tween(this.abc.Node).delay(2).to(2, {
            position: new Vec3(-1690, this.abc.position.y, 0)
          }).start(); // tween(this.node)
          // .repeatForever(
          //     tween() 
          // .to(2,{position: new Vec3(-1695,this.node.position.y,0)})
          // .call( () =>{this.node.setPosition(734,this.node.position.y,0)})
          // ).start();
          // tween(this.abc.node)
          // .repeatForever(   tween() 
          // .delay(1)
          // .to(2,{position: new Vec3(-1695,this.node.position.y,0)})
          // .call( () =>{this.node.setPosition(-733,this.node.position.y,0)})
          // .call( () =>{this.node.setPosition(734,this.node.position.y,0)})
          // ).start();
          // [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Bg;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "abc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=bg.js.map