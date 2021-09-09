
import { _decorator, Component, Node, Enum, Prefab, SpriteFrame, instantiate, UITransform, Size, Vec2, Vec3, Sprite, tween, Intersection2D, director } from 'cc';
const { ccclass, property } = _decorator;

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
 enum HURDLE
 {
     SMALL_CACTUS=0,
     MID_CACTUS=1,
     LARGE_CACTUS=2
 };
@ccclass('Gameplay')
export class Gameplay extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property({type:Enum (HURDLE)})
    hurdleType=[];

    @property(Prefab)
    hurdle_pre=null;

    @property(SpriteFrame)
    Hurdle_images=[];
    public hurdle:any=[];

    setcontentSize(rand:number,num:number)
    {
        if(rand==0)
        {
            this.hurdle[num].setContentSize(new Size(10,18));

        }
        else{
            this.hurdle[num].setContentSize(new Size(20,18));

        }
        
        
    }
    random(num:number)
    {
        var rand=Math.random()*3;
        rand=Math.floor(rand);
        this.hurdle[num].getComponent(Sprite).spriteFrame=this.Hurdle_images[rand];
        this.setcontentSize(rand,num);

    }
    
    setposition(num:number)
    {
        this.hurdle[num].setPosition(new Vec3(130,-50,0));
        this.random(num);
    }


    
    assign(num:number)
    {
        this.hurdle[num]=instantiate(this.hurdle_pre);
        this.node.addChild(this.hurdle[num]); 
        this.setposition(num);
    }
    check(num:number)
    {
        if(this.hurdle[num].position.x< -130)
            {
            
                this.setposition(num);
                return false;
            }
            return true;

        

    }
    move(num:number)
    {


        this.schedule(()=>{
            
            if(this.check(num))
            {
                

                        this.hurdle[num].setPosition(new Vec3(this.hurdle[num].position.x-1,this.hurdle[num].position.y,1));
                     



            }
             },
              0.1);
        
    }
    public colide1:any=null;
    public colide2:any=null;



    start () {


       
      this.assign(5);
      this.move(5);
      

        console.log("cocks points");

var qwe:any=this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox();
console.log(qwe);
 

      
     
     



        

        //[3]
    
    
}

    update (deltaTime: number) {
        this.colide1=Intersection2D.rectRect(
            this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox(),
            this.hurdle[0].getComponent(UITransform).getBoundingBox()
            );
           
            if(this.colide1)
            {
                director.pause();
             console.log(this.node.getChildByName('cock').getComponent(UITransform).getBoundingBox());
           
             

            }
            
   
    }
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
