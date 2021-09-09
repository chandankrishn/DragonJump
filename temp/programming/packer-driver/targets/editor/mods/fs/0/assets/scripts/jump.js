System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, tween, Vec3, KeyCode, UITransform, _dec, _class, _temp, _crd, ccclass, property, Jump;

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

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("Jump", Jump = (_dec = ccclass('Jump'), _dec(_class = (_temp = class Jump extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "animmation", null);

          _defineProperty(this, "pos", null);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.animmation = tween(this.node).by(1, {
            position: new Vec3(10, 50, 1)
          }, {
            easing: 'fade'
          }).by(0.5, {
            position: new Vec3(0, -50, 1)
          }, {
            easing: 'fade'
          });
        }

        dragonJump(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              console.log("We are here");

              if (this.node.position.y == this.pos) {
                this.animmation.start();
              }

          }
        }

        onLoad() {
          // Intersection2D.rectRect(
          //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld(),
          //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld()!
          //     );
          let abc = this.node.getComponent(UITransform).getBoundingBox();
          console.log(abc);
          this.pos = this.node.position.y;
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.dragonJump, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
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