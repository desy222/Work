/**Prototype inheritance */
var x  = function(j) {
    this.i = 0;
    this.j = j;


    
};


x.prototype.getJ = function() {
    return this.j;
};

var x1 = new x(1);
///console.log(x1);
console.log(x1.getJ(2));


/**Advanced - subclass using prototype, override methods in prototype, adding prototype to master object*/

/** baseclass*/
var Job = function() {
    this.pays = true;
}

/**Prototype method */

Job.prototype.print = function() {
    console.log(this.pays + 'Please, hire me ', 'no, thank you')
}

/**Create a subclass */

var TechJob = function(title,pays) {
    Job.call(this); /**Inherits the Job function, but doesn't inherit its prototype yet; */



    this.title = title;
    this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype); /**With these two lines we are done with the subclass TechJob */
TechJob.prototype.constructor = TechJob;

/**Create a object from this subclass*/

var softwarePosition = new TechJob('Javascript Programmer ', true ) ;

