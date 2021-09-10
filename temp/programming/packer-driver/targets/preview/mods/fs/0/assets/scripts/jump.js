System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, tween, Vec3, KeyCode, UITransform, _dec, _class, _temp, _crd, ccclass, property, Jump;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      KeyCode = _cc.KeyCode;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0c16bHGfNOVJJzn+EHkFSa", "jump", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Jump
       * DateTime = Thu Sep 09 2021 10:34:55 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = jump.ts
       * FileBasenameNoExtension = jump
       * URL = db://assets/scripts/jump.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Jump", Jump = (_dec = ccclass('Jump'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Jump, _Component);

        function Jump() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "animmation", null);

          _defineProperty(_assertThisInitialized(_this), "pos", null);

          return _this;
        }

        var _proto = Jump.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          this.animmation = tween(this.node).by(0.8, {
            position: new Vec3(0, 50, 1)
          }, {
            easing: 'fade'
          }).by(0.7, {
            position: new Vec3(0, -50, 1)
          }, {
            easing: 'fade'
          });
        };

        _proto.dragonJump = function dragonJump(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              console.log("We are here");

              if (this.node.position.y == this.pos) {
                this.animmation.start();
              }

          }
        };

        _proto.onLoad = function onLoad() {
          // Intersection2D.rectRect(
          //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld(),
          //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld()!
          //     );
          var abc = this.node.getComponent(UITransform).getBoundingBox();
          console.log(abc);
          this.pos = this.node.position.y;
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.dragonJump, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Jump;
      }(Component), _temp)) || _class));
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
//# sourceMappingURL=jump.js.map