describe("DistanceCalculator", function() {
    var calc;

 
    describe("when used to find haverine distances:", function(){
         
        //Spec for sum operation
        

        it("should be able to calculate distance when provided legitimate longitudes and latitudes", function() {
            expect(distance(53.339428,-6.257664,53.2451022,-6.238335,'K')).toEqual(10.566427904448188);
        });

        it("should be able to calculate distance when provided illegitimate longitudes and latitudes", function() {
            expect(distance(0,0,0,0,'K')).toBe(0);
        });

        var i;

        it("should be able to calculate distance when provided illegitimate longitudes and latitudes", function() {
            expect(distance(-1,-1,-1,-i,'K')).toBeUndefined();
        });

        it("should be able to calculate distance when provided illegitimate longitudes and latitudes but no distance unit", function() {
            expect(distance(0,0,0,0)).toBe(0);
        });

        it("should be able to calculate distance when provided no input", function() {
            expect(distance()).toBe(0);
        });

        it("should be able to calculate distance in default units when provided illegitimate longitudes and latitudes with unspecified distance unit", function() {
            expect(distance(3.339428,-6.257664,53.2451022,-6.238335,'M')).toBe(10.566427904448188);
        });
 
    
 
    });


    describe("when used to sort objects based on keys:", function(){

        var newObj = { 'name' : 'jack', 'name' : 'igor', 'name' : 'jeff' };
 
        //Spec for multiply operation
        it("should be able to sort array", function() {
                var sorted = sortByKey(newObj, "as");
                expect(sorted).toEqual(['jeff', 'jack', 'igor']);
        });

        it("should be able return null if no array is passed", function() {
                var sorted = sortByKey();
                expect(sorted).toBeNull();
        });


        
    });


        describe("when used to upload json files:", function(){
 
        //Spec for multiply operation
        it("should be able to upload legitimate file", function() {
                var file = readTextFile("data/customers.json", "as");
                expect(file).toBeDefined();
        });

        it("should be able return null if no file is provided", function() {
                var file = readTextFile("", "");
                expect(file).toBeDefined();
        });


        
    });



});