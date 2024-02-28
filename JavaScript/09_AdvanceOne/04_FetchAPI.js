//The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.
//A fetch() promise only rejects when a network error is encountered

//fetch() :- the fetch() will execute before than other program or code, due to fetch() create special queue rather than setTimeout or other. 
// fetch() won't create queue but special queue (named priority queue, micro task queue) created for fetch.  These queue perform action Faster than other queue.


// task queue hold call back (CB) which having lower priority than priority queue, firstly all call back of priority queue will be gone to call stack for execution and after that all call back of task queue will go to call stack for execution.