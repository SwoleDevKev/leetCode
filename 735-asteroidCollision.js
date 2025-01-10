/*
We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

*/

const asteroidCollision = function(asteroids) {

    const result = []
    for (asteroid of asteroids){

        let collision = false

        while(
         result.length !== 0 && asteroid < 0  && result[result.length-1] > 0
        ){
            const top = result.pop()

            if (Math.abs(top) > Math.abs(asteroid)){
                result.push(top)
                collision = true
                break;
            } 
            if (Math.abs(top) === Math.abs(asteroid)){
                collision = true
                break;
            }
        }
        if (!collision) result.push(asteroid);


    }
    return result
    
};