
import { _decorator, Component, Node, systemEvent, SystemEvent, tween, Vec3, KeyCode, animation, SpriteFrame, Enum, instantiate, Prefab,Intersection2D, UITransform, Rect, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

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

@ccclass('Jump')
export class Jump extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
 

    start () {
       
        this.animmation=  tween(this.node)
      
        .by(0.8,{position: new Vec3(0,50,1)},{easing: 'fade' })
        .by(0.7,{position: new Vec3(0,-50,1)},{easing: 'fade' });
     
    }




    public animmation:any=null;
    public pos:any=null;
    
    
    dragonJump(event:any)
    {
 
        switch(event.keyCode)
        {

        case KeyCode.SPACE:
            console.log("We are here");
            if(this.node.position.y==this.pos)
            {
           
                this.animmation.start();
            }
               
         
         

        }

    }
    
    onLoad()
    {
        // Intersection2D.rectRect(
        //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld(),
        //     this.node.getComponent(UITransform)?.getBoundingBoxToWorld()!
        //     );


        let abc:any=this.node.getComponent(UITransform).getBoundingBox();

        console.log(abc);
     this.pos=this.node.position.y;

        
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.dragonJump,this);
      

    }


    // update (deltaTime: number) {
    //     // [4]
    // }
}

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
