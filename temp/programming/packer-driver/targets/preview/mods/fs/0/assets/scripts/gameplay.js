System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Enum, Prefab, SpriteFrame, instantiate, UITransform, Size, Vec3, Sprite, Intersection2D, director, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, HURDLE, Gameplay;

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
      Enum = _cc.Enum;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Intersection2D = _cc.Intersection2D;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c186tVjK9EEYDFYphzr8z/", "gameplay", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Gameplay
       * DateTime = Thu Sep 09 2021 11:19:58 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = gameplay.ts
       * FileBasenameNoExtension = gameplay
       * URL = db://assets/scripts/gameplay.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      (function (HURDLE) {
        HURDLE[HURDLE["SMALL_CACTUS"] = 0] = "SMALL_CACTUS";
        HURDLE[HURDLE["MID_CACTUS"] = 1] = "MID_CACTUS";
        HURDLE[HURDLE["LARGE_CACTUS"] = 2] = "LARGE_CACTUS";
      })(HURDLE || (HURDLE = {}));

      ;

      _export("Gameplay", Gameplay = (_dec = ccclass('Gameplay'), _dec2 = property({
        type: Enum(HURDLE)
      }), _dec3 = property(Prefab), _dec4 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Gameplay, _Component);

        function Gameplay() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "hurdleType", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "hurdle_pre", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Hurdle_images", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "hurdle", []);

          _defineProperty(_assertThisInitialized(_this), "colide1", null);

          _defineProperty(_assertThisInitialized(_this), "colide2", null);

          return _this;
        }

        var _proto = Gameplay.prototype;

        _proto.setcontentSize = function setcontentSize(rand, num) {
          if (rand == 0) {
            this.hurdle[num].setContentSize(new Size(10, 18));
          } else {
            this.hurdle[num].setContentSize(new Size(20, 18));
          }
        };

        _proto.random = function random(num) {
          var rand = Math.random() * 3;
          rand = Math.floor(rand);
          this.hurdle[num].getComponent(Sprite).spriteFrame = this.Hurdle_images[rand];
          this.setcontentSize(rand, num);
        };

        _proto.setposition = function setposition(num) {
          this.hurdle[num].setPosition(new Vec3(130, -50, 0));
          this.random(num);
        };

        _proto.assign = function assign(num) {
          this.hurdle[num] = instantiate(this.hurdle_pre);
          this.node.addChild(this.hurdle[num]);
          this.setposition(num);
        };

        _proto.check = function check(num) {
          if (this.hurdle[num].position.x < -130) {
            this.setposition(num);
            return false;
          }

          return true;
        };

        _proto.move = function move(num) {
          var _this2 = this;

          this.schedule(function () {
            if (_this2.check(num)) {
              _this2.hurdle[num].setPosition(new Vec3(_this2.hurdle[num].position.x - 1, _this2.hurdle[num].position.y, 1));
            }
          }, 0.1);
        };

        _proto.start = function start() {
          this.assign(5);
          this.move(5);
          console.log("cocks points");
          var qwe = this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox();
          console.log(qwe); //[3]
        };

        _proto.update = function update(deltaTime) {
          this.colide1 = Intersection2D.rectRect(this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox(), this.hurdle[0].getComponent(UITransform).getBoundingBox());

          if (this.colide1) {
            director.pause();
            console.log(this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox());
          }
        };

        return Gameplay;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hurdleType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hurdle_pre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Hurdle_images", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
//# sourceMappingURL=gameplay.js.map