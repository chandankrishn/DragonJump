System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, SpriteFrame, instantiate, UITransform, Size, tween, Sprite, Vec3, Label, Intersection2D, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, Gameplay2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
      Intersection2D = _cc.Intersection2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc334eh91dHBqZ0iUC8QAtx", "gameplay2", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Gameplay2
       * DateTime = Sun Sep 12 2021 09:46:48 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = gameplay2.ts
       * FileBasenameNoExtension = gameplay2
       * URL = db://assets/scripts/gameplay2.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Gameplay2", Gameplay2 = (_dec = ccclass('Gameplay2'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class Gameplay2 extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "score", 0);

          _initializerDefineProperty(this, "hurdle_pre", _descriptor, this);

          _initializerDefineProperty(this, "load", _descriptor2, this);

          _initializerDefineProperty(this, "over", _descriptor3, this);

          _initializerDefineProperty(this, "Hurdle_images", _descriptor4, this);

          _initializerDefineProperty(this, "start_image", _descriptor5, this);

          _initializerDefineProperty(this, "over_image", _descriptor6, this);

          _defineProperty(this, "butt", null);

          _defineProperty(this, "hurdle", []);

          _defineProperty(this, "Hurdle_indi", null);

          _defineProperty(this, "track", null);

          _defineProperty(this, "hurdle_track", 0);

          _defineProperty(this, "beg", 0);

          _defineProperty(this, "colide1", null);

          _defineProperty(this, "colide2", true);

          _defineProperty(this, "jkl", null);
        }

        random() {
          var hurdle_assign = null;
          var rand = Math.random() * 3;
          rand = Math.floor(rand);
          hurdle_assign = instantiate(this.hurdle_pre);
          this.node.addChild(hurdle_assign);
          hurdle_assign.getComponent(Sprite).spriteFrame = this.Hurdle_images[rand];

          if (rand == 0) {
            hurdle_assign.getComponent(UITransform).setContentSize(new Size(10, 18));
          } else if (rand == 1) {
            hurdle_assign.getComponent(UITransform).setContentSize(new Size(18, 16));
          } else {
            hurdle_assign.getComponent(UITransform).setContentSize(new Size(15, 15));
          }

          hurdle_assign.setPosition(new Vec3(130, -50, 0));
          this.hurdle.push(hurdle_assign);
        }

        check(num) {
          if (this.hurdle[num].position.x < -130) {
            return true;
          }

          return false;
        }

        childcount() {
          var child = this.node.children;

          for (var i = 0; i < child.length; i++) {
            console.log(`count of childs : ${i}`);
          }
        }

        move() {
          this.track++;
          let n = this.hurdle.length;

          for (var i = 0; i < this.hurdle.length; i++) {
            if (this.check(i)) {
              var abc = this.hurdle.shift();
              this.node.removeChild(abc);
              this.hurdle_track = this.hurdle_track + 1;
              this.childcount();
              console.log(this.hurdle[i]);
              --i;
            } else {
              this.hurdle[i].setPosition(this.hurdle[i].position.x - 2, this.hurdle[i].position.y, 1);
            }

            console.log(` colide1: ${this.colide1} : colide2: ${this.colide2}`);
          }
        }

        updateScore() {
          this.score++;
          this.node.getChildByName('score').getComponent(Label).string = `Score : ${this.score}`;
        }

        game_start() {
          this.colide2 = true;
          this.schedule(this.random, 2);
          this.schedule(this.move, 0.001);
        }

        start() {
          this.jkl = this.node.getChildByName('cock').getComponent('Jump');
          console.log(this.jkl);
          this.butt = instantiate(this.load);
          this.butt.getComponent(Sprite).spriteFrame = this.start_image;
          this.node.addChild(this.butt);
          this.butt.getComponent(UITransform).setContentSize(new Size(200, 100));
          this.butt.on(Node.EventType.MOUSE_UP, function (event) {
            tween(this.butt).by(0.2, {
              scale: new Vec3(0.2, 0.2, 1)
            }).to(0.5, {
              scale: new Vec3(0, 0, 1)
            }).start();
            this.game_start();
          }, this);
        }

        emptyarray() {
          for (var i = 0; i < this.hurdle.length; i++) {
            var abc = this.hurdle.shift();
            this.node.removeChild(abc);
            i--;
          }
        }

        gameover() {
          this.jkl.animmation.stop();
          this.emptyarray();
          this.butt.getComponent(Sprite).spriteFrame = this.over_image;
          tween(this.butt).to(0.1, {
            scale: new Vec3(0.02, 0.02, 1)
          }).to(0.1, {
            scale: new Vec3(0, 0, 1)
          }).to(0.2, {
            scale: new Vec3(0.2, 0.2, 1)
          }).start();
          this.unschedule(this.move);
          this.unschedule(this.random);
          this.butt.setPosition(new Vec3(0, 0, 1));
          this.hurdle_track = 0;
          this.butt.on(Node.EventType.MOUSE_UP, function (event) {
            console.log('clicked');
            tween(this.butt).call(() => {
              this.jkl.setpos();
            }).by(0.2, {
              scale: new Vec3(0.2, 0.2, 1)
            }).to(0.5, {
              scale: new Vec3(0, 0, 1)
            }).delay(1).call(() => {
              this.game_start();
            }).start();
          }, this);
        }

        update() {
          this.node.getChildByName('score').getComponent(Label).string = `Score : ${this.hurdle_track}`;

          for (var i = 0; i < this.hurdle.length; i++) {
            this.colide1 = Intersection2D.rectRect(this.node.getChildByName('cock').getChildByName('cock1').getComponent(UITransform).getBoundingBoxToWorld(), this.hurdle[0].getComponent(UITransform).getBoundingBoxToWorld());

            if (this.colide1 && this.colide2) {
              this.colide2 = false;
              this.gameover();
            }
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hurdle_pre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "load", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "over", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Hurdle_images", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "start_image", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "over_image", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=gameplay2.js.map