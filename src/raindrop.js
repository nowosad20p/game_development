import { checkMoveDown, getMoveDownValue } from './utils'
import * as constant from './constant'
import { Instance } from 'cooljs'

export const raindropPainter = (instance, engine) => {
    const { ctx } = engine
    const raindrop = engine.getImg(instance.imgName)
    ctx.drawImage(raindrop, instance.x, instance.y, instance.width, instance.height)
  }
export const raindropAction = (instance, engine) => {
   if (!instance.ready) {
       instance.ready = true
       instance.imgName="raindrop"
       instance.width = engine.getVariable(constant.raindropSize)
       instance.height = engine.getVariable(constant.raindropSize)
    
     
       instance.x = engine.utils.random(0, engine.width - instance.width);

       instance.originX = instance.x;
      
       instance.y = engine.utils.random(-engine.height,-10);
   
     }
    
     instance.y += engine.getVariable(constant.raindropSpeed);
    
     if (checkMoveDown(engine)) {
       instance.y += getMoveDownValue(engine) * 1.2
     }
     if (instance.y >= engine.height) {
        instance.y = engine.utils.random(-engine.height*2,-10);

       instance.x = engine.utils.random(0, engine.width - instance.width);
       if(instance.cloud.count>4){
       
        engine.removeInstance(instance.name)
       }
     }
}