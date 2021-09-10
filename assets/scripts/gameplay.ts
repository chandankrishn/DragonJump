
import { _decorator, Component, Node, Enum, Prefab, SpriteFrame, instantiate, UITransform, Size, Vec2, Vec3, Sprite, tween, Intersection2D, director, Label, Graphics, Color, UI, Scheduler } from 'cc';
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

@ccclass('Gameplay')
export class Gameplay extends Component {
 
  
    @property(Prefab)
    hurdle_pre=null;

    @property(Prefab)
    load=null;

    @property(Prefab)
    over=null;

    @property(SpriteFrame)
    Hurdle_images=[];
    public hurdle:any=[];
    public butt:any=null;
    public op:any=null;

    setcontentSize(rand:number,num:number)
    {
        if(rand==0)
        {
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(10,18));

        
        }
        else if(rand ==1)
        {

       
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(18,16));
        }
        else
        {
            this.hurdle[num].getComponent(UITransform).setContentSize(new Size(15,15));
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
    public score:any=0;

    // move(num:number)
    // {

    //    let flag=0;
    //    let flag2=0;
    //     this.schedule(()=>{
    //         if(flag===50)
    //         {
    //             flag=0;
    //             this.score++;
    //         }
    //         if(flag2===100)
    //         {
    //             this.assign(1);   

    //         }
    //             
               
    //             flag2++;
    //          flag++;
    //         },

    //           0.01);
        
    // }
    public track1:any=0;
    
    public track2:any=0;

    move()
    {
        this.track++;
        for(let i=0;i<this.hurdle.length;i++)
               {
                     if(this.check(i))
                     {
                       
                         this.hurdle[i].setPosition(new Vec3(this.hurdle[i].position.x-1,this.hurdle[i].position.y,1));
                     }
                 }

    }
 
    public colide1:any=null;
  
onLoad()
{
      this.butt=instantiate(this.load);
        this.node.addChild(this.butt); 
        this.butt.getComponent(UITransform).setContentSize(new Size(200,100));
        this.butt.on(Node.EventType.MOUSE_UP,function(event:any)
        {
            tween(this.butt)
            .by(0.2,{scale : new Vec2(0.2,0.2)})
            .to(0.5,{scale : new Vec2(0,0)})
            .start();
            this.schedule(this.move(),0.01);
           




        },this);
    

}
// restart()
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

    update (deltaTime: number) {
        this.node.getChildByName('score').getComponent(Label).string=`Score : ${this.score}`;
        if(this.track1===50)
        if(this.track2===100)
        {
            this.assign(1);
        }
        
        for(let i=0;i<this.hurdle.length;i++)
        {
        
        this.colide1=Intersection2D.rectRect(
            this.node.getChildByName('cock').getChildByName('cock1').getComponent(UITransform).getBoundingBoxToWorld(),
            this.hurdle[i].getComponent(UITransform).getBoundingBoxToWorld()
            );
            console.log(this.colide1);
            if(this.colide1)
            {
                this.op=instantiate(this.over);
                this.node.addChild(this.op); 
                this.op.getComponent(UITransform).setContentSize(new Size(200,100));
                console.log("okaay restart calling");
                director.pause();
             
            }
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
