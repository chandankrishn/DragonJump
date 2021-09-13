
import { _decorator, Component, Node, Prefab, SpriteFrame, instantiate, UITransform, Size, tween, Vec2, Sprite, Vec3, Scheduler, random, Label, Intersection2D, director, Script } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Gameplay2')
export class Gameplay2 extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    public score:any=0;

    @property(Prefab)
    hurdle_pre=null;
    @property(Prefab)
    load=null;
    @property(Prefab)
    over=null;
    @property(SpriteFrame)
    Hurdle_images=[];
    @property(SpriteFrame)
    start_image=null;
    @property(SpriteFrame)
    over_image=null;
    public butt:any=null;
    public hurdle:any=[];
    public Hurdle_indi=null;
    public track:number=null;
    public hurdle_track:number=0;
    public beg:number=0;
    public colide1:any=null;
    public colide2:boolean=true;
    public jkl:any=null;

    random()
    {
        var hurdle_assign:any=null;
        var rand=Math.random()*3;
        rand=Math.floor(rand);
        hurdle_assign=instantiate(this.hurdle_pre);
        this.node.addChild(hurdle_assign); 
        hurdle_assign.getComponent(Sprite).spriteFrame=this.Hurdle_images[rand];
        if(rand==0)
        {
           hurdle_assign.getComponent(UITransform).setContentSize(new Size(10,18));
        }
        else if(rand ==1)
        {
            hurdle_assign.getComponent(UITransform).setContentSize(new Size(18,16));
        }
        else
        {
           hurdle_assign.getComponent(UITransform).setContentSize(new Size(15,15));
        }
        hurdle_assign.setPosition(new Vec3(130,-50,0));
        this.hurdle.push(hurdle_assign);
    }
    check(num:number)
    {
        if(this.hurdle[num].position.x< -130)
            {
              return true;
            }
            return false;
    }
    childcount()
    {
        var child= this.node.children;
        for(var i=0;i<child.length;i++)
        {
            console.log(`count of childs : ${i}`);
        }
    }
    move()
    {
        this.track++;
        let n=this.hurdle.length;
        for(var i=0;i<this.hurdle.length;i++)
               {
                   if(this.check(i))
                   {

                      var abc = this.hurdle.shift();    
                      this.node.removeChild(abc);              
                       this.hurdle_track=this.hurdle_track+1;
                       this.childcount();
                       console.log(this.hurdle[i]);
                       --i;
                   }
                   else
                   { 
                        this.hurdle[i].setPosition(this.hurdle[i].position.x-2,this.hurdle[i].position.y,1);
                   }
                   console.log(` colide1: ${this.colide1} : colide2: ${this.colide2}`);

                 }

    }
    updateScore()
    {
        this.score++;
        this.node.getChildByName('score').getComponent(Label).string=`Score : ${this.score}`;
    }

    game_start()
    {
        
        this.colide2=true;
            this.schedule(this.random,2);
            this.schedule(this.move,0.001);
          
       
    }
    start() {
        
        this.jkl=this.node.getChildByName('cock').getComponent('Jump');
        console.log(this.jkl);
        this.butt=instantiate(this.load);
        this.butt.getComponent(Sprite).spriteFrame=this.start_image;
        this.node.addChild(this.butt); 
        this.butt.getComponent(UITransform).setContentSize(new Size(200,100));
        this.butt.on(Node.EventType.MOUSE_UP,function(event:any)
        {
            tween(this.butt)
            .by(0.2,{scale : new Vec3(0.2,0.2,1)})
            .to(0.5,{scale : new Vec3(0,0,1)})
            .start();
            this.game_start();
        },this);
    }
    emptyarray()
    {
        for(var i=0;i<this.hurdle.length;i++)
        {
            var abc= this.hurdle.shift();
            this.node.removeChild(abc); 
            i--;

        }
    }
    
    gameover()
    {
        this.jkl.animmation.stop();
        this.emptyarray(); 

        this.butt.getComponent(Sprite).spriteFrame=this.over_image;
        tween(this.butt)
        .to(0.1,{scale : new Vec3(0.02,0.02,1)})
        .to(0.1,{scale : new Vec3(0,0,1)})
        .to(0.2,{scale: new Vec3(0.2,0.2,1)})
        .start();
        this.unschedule(this.move);
        this.unschedule(this.random);
       
        this.butt.setPosition(new Vec3(0,0,1));
        this.hurdle_track=0;

        this.butt.on(Node.EventType.MOUSE_UP,function(event:any)
        {
            console.log('clicked');
            tween(this.butt)
            .call(()=>{ this.jkl.setpos();})
            .by(0.2,{scale : new Vec3(0.2,0.2,1)})
            .to(0.5,{scale : new Vec3(0,0,1)})
            .delay(1)
            .call(()=>{ this.game_start(); })
            .start();
           
        },this);
    }
  
    update()
    {
        this.node.getChildByName('score').getComponent(Label).string=`Score : ${this.hurdle_track}`;
        for(var i=0;i<this.hurdle.length;i++)
        {
        this.colide1=Intersection2D.rectRect(
        this.node.getChildByName('cock').getChildByName('cock1').getComponent(UITransform).getBoundingBoxToWorld(),
        this.hurdle[0].getComponent(UITransform).getBoundingBoxToWorld()
        );
        if(this.colide1 && this.colide2)
        {
            this.colide2=false;
            this.gameover();
            
            
        }
    }

    
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
