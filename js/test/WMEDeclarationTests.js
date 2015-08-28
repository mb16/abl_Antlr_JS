var ABLModule = require('../ABLModule');

exports.wmeDeclarationTests = {

    //Simple Smoke test:
    simpleWmeDeclaration : function(test){
        var parseString = "wme Test {};";
        var startRule = "WMEDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extend === null);
        test.ok(result[0].variables.length === 0);
        test.done();
    },

    //declaration with extension
    extensionTest: function(test){
        var parseString = "wme Test extends Blah {};";
        var startRule = "WMEDeclaration";
        var result = ABLModule.parse(parseString,startRule);
        
        test.ok(result.length === 1);
        test.ok(result[0].type === "WMEDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extend === "Blah");
        test.ok(result[0].variables.length === 0);
        
        test.done();
    },

    //Test with variables
    variablesTest: function(test){
        var parseString = "wme Test { String TestVar; };";
        var startRule = "WMEDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "WMEDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extend === null);
        test.ok(result[0].variables.length === 1);
        test.ok(result[0].variables[0].name === "TestVar");
        test.ok(result[0].variables[0].type === "AblVariableDeclaration");
        test.ok(restul[0].variables[0].varType === "String");
        
        test.done();
    },

    //Test multiple declarations
    
    //Test Extension with variables


    //Test mispellings

    //Test incorrect multiple extension
    
};
