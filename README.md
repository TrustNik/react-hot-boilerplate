Run npm install, then npm start, then go to http://localhost:3000/  
Click "Change store" then click "Show current state" to reveal component's state.
See result.  

No setState were called, but because of initing state by reference the counter value of the first Counter has changed.
The second one hasn't change its state because there is no pass by reference.

The point is - you need to be very careful when passing objects as component's initial state and avoid pass by reference.
