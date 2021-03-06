/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

var startRule = "g_import";
/**
   Checks that import statements work
   @class UnitTests.importDeclarationTests 
 */
exports.importDeclarationTests = {

    /**
       Initial Smoke Test
       @method simpleImport
     */
    simpleImport : function(test){
        var parseString = "import blah;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "blah");                
        
        test.done();
    },

    /**
       Check that imports can be subpackages
       @method simpleDotImport
     */
    simpleDotImport : function(test){
        var parseString = "import blah.something;";

        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "blah.something");

        test.done();
    },

    /**
       check that imports can be arbitrary length subpackages
       @method repeatedDotImport 
     */
    repeatedDotImport : function(test){
        var parseString = "import blah.something.else.wooo;";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "blah.something.else.wooo");

        test.done();
    },

    /**
       Check that imports can cover everything in a package
       using *
       @method starredImport
     */
    starredImport : function(test){
        var parseString = "import blah.*;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "blah",result[0].name);
        test.ok(result[0].starred === true);
        test.done();
    },

    /**
       Check that if no value is specified to import,
       nothing is imported
       @method failOnNoImport
     */
    // failOnNoImport : function(test){
    //     var parseString = "import;";
    //     var result = ABLModule.parse(parseString,startRule);

    //     test.ok(result.length === 0);
        
    //     test.done();
    // },

    /**
       Verify what happens when a keyword is misspelled
       @method failOnMispelling
     */
    // failOnMispelling : function(test){
    //     var parseString = "impart blah;";

    //     var result = ABLModule.parse(parseString,startRule);

    //     test.ok(result.length === 0,result.length);
        
    //     test.done();
    // },

    
};
