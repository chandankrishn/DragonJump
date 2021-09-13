System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, SpriteFrame, instantiate, UITransform, Size, Vec2, Vec3, Sprite, tween, Intersection2D, director, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Gameplay;

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
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Intersection2D = _cc.Intersection2D;
      director = _cc.director;
      Label = _cc.Label;
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

      _export("Gameplay", Gameplay = (_dec = ccclass('Gameplay'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Gameplay, _Component);

        function Gameplay() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "hurdle_pre", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "load", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "over", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "Hurdle_images", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "hurdle", []);

          _defineProperty(_assertThisInitialized(_this), "butt", null);

          _defineProperty(_assertThisInitialized(_this), "op", null);

          _defineProperty(_assertThisInitialized(_this), "score", 0);

          _defineProperty(_assertThisInitialized(_this), "track1", 0);

          _defineProperty(_assertThisInitialized(_this), "track2", 0);

          _defineProperty(_assertThisInitialized(_this), "colide1", null);

          return _this;
        }

        var _proto = Gameplay.prototype;

        _proto.setcontentSize = function setcontentSize(rand, num) {
          if (rand == 0) {
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(10, 18));
          } else if (rand == 1) {
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(18, 16));
          } else {
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(15, 15));
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

        _proto.move = function move() {
          this.track++;

          for (var i = 0; i < this.hurdle.length; i++) {
            if (this.check(i)) {
              this.hurdle[i].setPosition(new Vec3(this.hurdle[i].position.x - 1, this.hurdle[i].position.y, 1));
            }
          }
        };

        _proto.onLoad = function onLoad() {
          this.butt = instantiate(this.load);
          this.node.addChild(this.butt);
          this.butt.getComponent(UITransform).setContentSize(new Size(200, 100));
          this.butt.on(Node.EventType.MOUSE_UP, function (event) {
            tween(this.butt).by(0.2, {
              scale: new Vec2(0.2, 0.2)
            }).to(0.5, {
              scale: new Vec2(0, 0)
            }).start();
            this.schedule(this.move(), 0.01);
          }, this);
        } // restart()
        // {
        //     for(var i=0;i<this.hurdle.length;i++)
        //     {
        //         this.setposition(i);
        //     }
        //     this.op.on(Node.EventType.MOUSE_UP,function(event:any)
        //         {
        //             tween(this.op)
        //             .by(0.2,{scale : new Vec2(0.2,0.2)})
        //             .to(0.5,{scale : new Vec2(0,0)})
        //             .start();
        //             this.assign(0);
        //             this.move(0);
        //         },this);
        // }
        ;

        _proto.update = function update(deltaTime) {
          this.node.getChildByName('score').getComponent(Label).string = "Score : " + this.score;
          if (this.track1 === 50) if (this.track2 === 100) {
            this.assign(1);
          }

          for (var i = 0; i < this.hurdle.length; i++) {
            this.colide1 = Intersection2D.rectRect(this.node.getChildByName('cock').getChildByName('cock1').getComponent(UITransform).getBoundingBoxToWorld(), this.hurdle[i].getComponent(UITransform).getBoundingBoxToWorld());
            console.log(this.colide1);

            if (this.colide1) {
              this.op = instantiate(this.over);
              this.node.addChild(this.op);
              this.op.getComponent(UITransform).setContentSize(new Size(200, 100));
              console.log("okaay restart calling");
              director.pause();
            }
          }
        };

        return Gameplay;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hurdle_pre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "over", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Hurdle_images", [_dec5], {
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