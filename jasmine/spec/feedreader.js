/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it("urls are not empty", function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
                expect(feed.url).not.toBe(null);
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("names are not empty", function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
                expect(feed.name).not.toBe(null);
            }
         });
     }); //close RS feeds suite


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it("is hidden by default", function(){
            expect($('body.menu-hidden').length).toBe(1); //=1 implies class exist. =0 implies selector with class doesnt exist      
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it("is shown when clicked", function(){
           $('.icon-list').trigger('click');
           expect($('body.menu-hidden').length).toBe(0); //=1 implies class exist. =0 implies selector with class doesnt exist      
           $('.icon-list').trigger('click');
         });

    }); //close The menu suite    

    

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries",function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            
            // async functions are those that donot wait till completion and next line is executed. If we need to wait for completion
            // specify callback function such as done() so that once done() is executed we know that async fn got completed.

            // checks if callback method which is here done() is called. 
                loadFeed(0, done);
            // loadFeed calls done() once completed. when done() is returned, start executing the fnc in 'it' test.
        });

         it("atleast one is present", function(){
           expect($('.feed').length > 0).toBe(true);
           // done() not needed since no async function is called to wait till completion
         });

    }); //close Initial Entries suite  

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

}());  //close $ function and call it
